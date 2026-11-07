/**
 * REFLECTHUB - STUDENT DIGITAL WELLNESS RESOURCE HUB
 * Main JavaScript Controller
 * Plain Vanilla JS, Zero External Dependencies, Accessible & Fast
 */

(function () {
  'use strict';

  // -------------------------------------------------------------------------
  // 1. Theme Management (Light / Dark Mode with Persistence)
  // -------------------------------------------------------------------------
  const THEME_STORAGE_KEY = 'reflecthub_theme';

  function initTheme() {
    const savedTheme = localStorage.getItem(THEME_STORAGE_KEY);
    const systemPrefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initialTheme = savedTheme || (systemPrefersDark ? 'dark' : 'light');

    applyTheme(initialTheme);

    // Bind theme toggle buttons
    const toggleBtns = document.querySelectorAll('.theme-toggle-btn');
    toggleBtns.forEach((btn) => {
      btn.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        applyTheme(newTheme);
        localStorage.setItem(THEME_STORAGE_KEY, newTheme);
      });
    });

    // Listen to OS theme changes if user has no manual override
    if (window.matchMedia) {
      window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
        if (!localStorage.getItem(THEME_STORAGE_KEY)) {
          applyTheme(e.matches ? 'dark' : 'light');
        }
      });
    }
  }

  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    const isDark = theme === 'dark';

    const toggleBtns = document.querySelectorAll('.theme-toggle-btn');
    toggleBtns.forEach((btn) => {
      btn.setAttribute('aria-pressed', isDark ? 'true' : 'false');
      btn.innerHTML = isDark
        ? '<span aria-hidden="true">☀️</span> <span>Light Mode</span>'
        : '<span aria-hidden="true">🌙</span> <span>Dark Mode</span>';
      btn.setAttribute('aria-label', isDark ? 'Switch to light theme' : 'Switch to dark theme');
    });
  }

  // -------------------------------------------------------------------------
  // 2. Mobile Navigation Toggle
  // -------------------------------------------------------------------------
  function initMobileNav() {
    const navToggle = document.querySelector('.mobile-nav-toggle');
    const siteNav = document.querySelector('.site-nav');

    if (!navToggle || !siteNav) return;

    navToggle.addEventListener('click', () => {
      const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';
      navToggle.setAttribute('aria-expanded', !isExpanded);
      siteNav.classList.toggle('is-open', !isExpanded);
    });

    // Close mobile nav on escape
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && siteNav.classList.contains('is-open')) {
        navToggle.setAttribute('aria-expanded', 'false');
        siteNav.classList.remove('is-open');
        navToggle.focus();
      }
    });

    // Close when clicking outside
    document.addEventListener('click', (e) => {
      if (
        siteNav.classList.contains('is-open') &&
        !siteNav.contains(e.target) &&
        !navToggle.contains(e.target)
      ) {
        navToggle.setAttribute('aria-expanded', 'false');
        siteNav.classList.remove('is-open');
      }
    });
  }

  // -------------------------------------------------------------------------
  // 3. Shared Tool Data Loader
  // -------------------------------------------------------------------------
  let cachedTools = null;

  async function loadToolsData() {
    if (cachedTools) return cachedTools;

    // Determine correct path whether in root or /guides/ subdirectory
    const isInSubdir = window.location.pathname.includes('/guides/');
    const dataPath = isInSubdir ? '../data/tools.json' : 'data/tools.json';

    try {
      const response = await fetch(dataPath);
      if (!response.ok) {
        throw new Error(`HTTP error ${response.status}`);
      }
      cachedTools = await response.json();
      return cachedTools;
    } catch (err) {
      console.error('Failed to load tool dataset:', err);
      return null;
    }
  }

  // Helper for badges
  function getCostBadgeHTML(cost) {
    const normalized = (cost || '').toLowerCase();
    if (normalized === 'free') {
      return '<span class="badge badge-free">Free</span>';
    } else if (normalized === 'freemium') {
      return '<span class="badge badge-freemium">Freemium</span>';
    } else {
      return '<span class="badge badge-paid">Paid</span>';
    }
  }

  function getOsBadgeHTML(isOpenSource) {
    if (isOpenSource) {
      return '<span class="badge badge-os">Open Source</span>';
    }
    return '<span class="badge badge-platform">Proprietary</span>';
  }

  // -------------------------------------------------------------------------
  // 4. Compare Tools Matrix Controller
  // -------------------------------------------------------------------------
  function initComparePage() {
    const tableBody = document.getElementById('tools-table-body');
    const mobileCardsContainer = document.getElementById('tools-mobile-cards');
    const platformFilter = document.getElementById('filter-platform');
    const costFilter = document.getElementById('filter-cost');
    const openSourceFilter = document.getElementById('filter-opensource');
    const searchInput = document.getElementById('filter-search');
    const countDisplay = document.getElementById('filter-count');
    const resetBtn = document.getElementById('btn-reset-filters');

    if (!tableBody && !mobileCardsContainer) return;

    let sortColumn = 'name';
    let sortDirection = 'asc'; // 'asc' or 'desc'

    loadToolsData().then((tools) => {
      if (!tools || tools.length === 0) {
        const errorMsg =
          '<p class="callout callout-warn">Unable to load tool data. If viewing locally via file:// protocol, please view via a local server (e.g., Python http.server or VS Code Live Server) or on GitHub Pages.</p>';
        if (tableBody) tableBody.innerHTML = `<tr><td colspan="10">${errorMsg}</td></tr>`;
        if (mobileCardsContainer) mobileCardsContainer.innerHTML = errorMsg;
        return;
      }

      function filterAndRender() {
        const platformVal = platformFilter ? platformFilter.value : 'all';
        const costVal = costFilter ? costFilter.value : 'all';
        const osVal = openSourceFilter ? openSourceFilter.value : 'all';
        const searchVal = searchInput ? searchInput.value.toLowerCase().trim() : '';

        const filtered = tools.filter((tool) => {
          // Platform check
          if (platformVal !== 'all') {
            const matchesPlatform = tool.platforms.some((p) =>
              p.toLowerCase().includes(platformVal.toLowerCase())
            );
            if (!matchesPlatform) return false;
          }

          // Cost check
          if (costVal !== 'all') {
            if (tool.cost.toLowerCase() !== costVal.toLowerCase()) return false;
          }

          // Open source check
          if (osVal !== 'all') {
            if (osVal === 'true' && !tool.open_source) return false;
            if (osVal === 'false' && tool.open_source) return false;
          }

          // Search check
          if (searchVal) {
            const haystack = [
              tool.name,
              tool.purpose,
              tool.paywalled_features,
              tool.main_limitation,
              tool.best_for,
              tool.category,
            ]
              .join(' ')
              .toLowerCase();
            if (!haystack.includes(searchVal)) return false;
          }

          return true;
        });

        // Sorting
        filtered.sort((a, b) => {
          let valA = a[sortColumn];
          let valB = b[sortColumn];

          if (Array.isArray(valA)) valA = valA.join(', ');
          if (Array.isArray(valB)) valB = valB.join(', ');

          if (typeof valA === 'boolean') {
            valA = valA ? 1 : 0;
            valB = valB ? 1 : 0;
          } else {
            valA = (valA || '').toString().toLowerCase();
            valB = (valB || '').toString().toLowerCase();
          }

          if (valA < valB) return sortDirection === 'asc' ? -1 : 1;
          if (valA > valB) return sortDirection === 'asc' ? 1 : -1;
          return 0;
        });

        // Update count
        if (countDisplay) {
          countDisplay.textContent = `Showing ${filtered.length} of ${tools.length} verified digital wellness tools`;
        }

        renderDesktopTable(filtered);
        renderMobileCards(filtered);
      }

      function renderDesktopTable(list) {
        if (!tableBody) return;

        if (list.length === 0) {
          tableBody.innerHTML = `<tr><td colspan="10" style="text-align: center; padding: 2rem;">No digital wellness tools match your filter criteria. Try clearing search or adjusting filters.</td></tr>`;
          return;
        }

        tableBody.innerHTML = list
          .map(
            (tool) => `
          <tr>
            <th scope="row">
              <div style="font-weight: 700; color: var(--text-primary); margin-bottom: 0.25rem;">${tool.name}</div>
              <div style="font-size: 0.8rem; color: var(--text-tertiary);">${tool.category}</div>
            </th>
            <td>${tool.purpose}</td>
            <td>
              <div style="display: flex; flex-wrap: wrap; gap: 0.3rem;">
                ${tool.platforms.map((p) => `<span class="badge badge-platform">${p}</span>`).join('')}
              </div>
            </td>
            <td>
              <div>${getCostBadgeHTML(tool.cost)}</div>
              <div style="font-size: 0.825rem; margin-top: 0.35rem; color: var(--text-secondary);">
                <strong>Paywall details:</strong> ${tool.paywalled_features}
              </div>
            </td>
            <td>${getOsBadgeHTML(tool.open_source)}</td>
            <td style="font-size: 0.85rem;">${tool.data_permissions}</td>
            <td style="font-size: 0.85rem;">${tool.accessibility_notes}</td>
            <td style="font-size: 0.85rem; color: #b91c1c;">
              <strong>Honest Limitation:</strong> ${tool.main_limitation}
            </td>
            <td style="white-space: nowrap;">
              <a href="${tool.official_source}" target="_blank" rel="noopener noreferrer" style="font-size: 0.875rem;">
                Official Website <span class="sr-only">(opens in new window)</span>
              </a>
            </td>
            <td style="font-size: 0.825rem; color: var(--text-tertiary); white-space: nowrap;">
              ${tool.date_checked}
            </td>
          </tr>
        `
          )
          .join('');
      }

      function renderMobileCards(list) {
        if (!mobileCardsContainer) return;

        if (list.length === 0) {
          mobileCardsContainer.innerHTML = `<div class="card"><p>No tools match your current filter settings.</p></div>`;
          return;
        }

        mobileCardsContainer.innerHTML = list
          .map(
            (tool) => `
          <article class="tool-mobile-card" aria-labelledby="card-title-${tool.id}">
            <div class="card-header">
              <div>
                <h3 id="card-title-${tool.id}" class="card-title" style="font-size: 1.15rem;">${tool.name}</h3>
                <span style="font-size: 0.825rem; color: var(--text-tertiary);">${tool.category}</span>
              </div>
              <div>${getCostBadgeHTML(tool.cost)}</div>
            </div>

            <p style="font-size: 0.95rem; margin-bottom: 1rem;">${tool.purpose}</p>

            <div class="tool-detail-row">
              <span class="tool-detail-label">Platforms Supported</span>
              <div>${tool.platforms.map((p) => `<span class="badge badge-platform">${p}</span> `).join('')}</div>
            </div>

            <div class="tool-detail-row">
              <span class="tool-detail-label">Cost & What Is Paywalled</span>
              <p style="font-size: 0.875rem; margin: 0;">${tool.paywalled_features}</p>
            </div>

            <div class="tool-detail-row">
              <span class="tool-detail-label">Software License</span>
              <div>${getOsBadgeHTML(tool.open_source)}</div>
            </div>

            <div class="tool-detail-row">
              <span class="tool-detail-label">Permissions & Privacy</span>
              <p style="font-size: 0.875rem; margin: 0;">${tool.data_permissions}</p>
            </div>

            <div class="tool-detail-row">
              <span class="tool-detail-label">Accessibility Notes</span>
              <p style="font-size: 0.875rem; margin: 0;">${tool.accessibility_notes}</p>
            </div>

            <div class="tool-detail-row" style="background-color: var(--freemium-bg); border: 1px solid var(--freemium-border); padding: 0.75rem; border-radius: var(--r-sm);">
              <span class="tool-detail-label" style="color: var(--freemium-text);">Honest Limitation</span>
              <p style="font-size: 0.875rem; margin: 0; color: var(--text-primary);">${tool.main_limitation}</p>
            </div>

            <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 1.25rem; padding-top: 0.75rem; border-top: 1px solid var(--border-weak); font-size: 0.85rem;">
              <a href="${tool.official_source}" target="_blank" rel="noopener noreferrer">
                Official Source <span class="sr-only">(opens in new window)</span>
              </a>
              <span style="color: var(--text-tertiary);">Verified: ${tool.date_checked}</span>
            </div>
          </article>
        `
          )
          .join('');
      }

      // Filter event listeners
      if (platformFilter) platformFilter.addEventListener('change', filterAndRender);
      if (costFilter) costFilter.addEventListener('change', filterAndRender);
      if (openSourceFilter) openSourceFilter.addEventListener('change', filterAndRender);
      if (searchInput) {
        searchInput.addEventListener('input', () => {
          filterAndRender();
        });
      }

      if (resetBtn) {
        resetBtn.addEventListener('click', () => {
          if (platformFilter) platformFilter.value = 'all';
          if (costFilter) costFilter.value = 'all';
          if (openSourceFilter) openSourceFilter.value = 'all';
          if (searchInput) searchInput.value = '';
          filterAndRender();
        });
      }

      // Sort handlers
      const sortButtons = document.querySelectorAll('.sort-btn');
      sortButtons.forEach((btn) => {
        btn.addEventListener('click', () => {
          const column = btn.getAttribute('data-sort');
          if (sortColumn === column) {
            sortDirection = sortDirection === 'asc' ? 'desc' : 'asc';
          } else {
            sortColumn = column;
            sortDirection = 'asc';
          }

          // Update aria-sort
          document.querySelectorAll('.compare-table th').forEach((th) => {
            th.removeAttribute('aria-sort');
          });
          const parentTh = btn.closest('th');
          if (parentTh) {
            parentTh.setAttribute('aria-sort', sortDirection === 'asc' ? 'ascending' : 'descending');
          }

          filterAndRender();
        });
      });

      // Initial render
      filterAndRender();
    });
  }

  // -------------------------------------------------------------------------
  // 5. Find My Tool Quiz Controller
  // -------------------------------------------------------------------------
  function initQuizPage() {
    const quizForm = document.getElementById('quiz-form');
    const resultsContainer = document.getElementById('quiz-results');
    const recommendationsList = document.getElementById('recommendations-list');
    const resetQuizBtn = document.getElementById('btn-reset-quiz');

    if (!quizForm || !resultsContainer) return;

    const progressFill = document.getElementById('quiz-progress-fill');
    const progressText = document.getElementById('quiz-progress-text');

    function updateQuizProgress() {
      const questions = ['q_device', 'q_distraction', 'q_strictness', 'q_budget', 'q_privacy'];
      let answered = 0;
      questions.forEach((q) => {
        if (quizForm.querySelector(`input[name="${q}"]:checked`)) {
          answered++;
        }
      });
      const pct = Math.round((answered / questions.length) * 100);
      if (progressFill) progressFill.style.width = `${pct}%`;
      if (progressText) {
        progressText.innerHTML = answered === questions.length
          ? `<strong>All 5 answered (100%)</strong> &bull; Ready to submit!`
          : `${answered} of 5 answered (${pct}%)`;
      }
    }

    // Radio change handlers for visual selection state & progress
    const allRadioInputs = quizForm.querySelectorAll('input[type="radio"]');
    allRadioInputs.forEach((radio) => {
      radio.addEventListener('change', () => {
        // Clear is-selected from all options in this group
        const groupRadios = quizForm.querySelectorAll(`input[name="${radio.name}"]`);
        groupRadios.forEach((r) => {
          const parentLabel = r.closest('.quiz-option-label');
          if (parentLabel) parentLabel.classList.remove('is-selected');
        });

        // Add is-selected to current
        const currentLabel = radio.closest('.quiz-option-label');
        if (currentLabel) currentLabel.classList.add('is-selected');

        updateQuizProgress();
      });
    });

    loadToolsData().then((tools) => {
      if (!tools) {
        resultsContainer.innerHTML = '<p class="callout callout-warn">Unable to load recommendation data.</p>';
        return;
      }

      quizForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // Collect answers
        const formData = new FormData(quizForm);
        const device = formData.get('q_device');
        const distraction = formData.get('q_distraction');
        const strictness = formData.get('q_strictness');
        const budget = formData.get('q_budget');
        const privacy = formData.get('q_privacy');

        if (!device || !distraction || !strictness || !budget || !privacy) {
          alert('Please answer all 5 questions to receive your tailored recommendations.');
          return;
        }

        // Scoring algorithm
        const scoredTools = tools.map((tool) => {

          let score = 0;
          const reasons = [];

          const tags = tool.quiz_tags || {
            devices: ['both'],
            distractions: ['procrastination'],
            strictness: ['gentle'],
            budget: ['freemium-ok'],
            privacy: ['standard'],
          };

          // Device compatibility
          if (tags.devices.includes(device) || tags.devices.includes('both')) {
            score += 3;
            reasons.push(`Directly supports your ${device.toUpperCase()} study setup`);
          } else {
            score -= 10; // Incompatible platform
          }

          // Distraction category match
          if (tags.distractions.includes(distraction)) {
            score += 4;
            if (distraction === 'social-media') {
              reasons.push('Specialized at curbing social media feeds & shorts algorithms');
            } else if (distraction === 'bedtime') {
              reasons.push('Engineered for night routines and reducing pre-sleep screen stimulation');
            } else if (distraction === 'multitasking') {
              reasons.push('Targets multi-window desktop and tab-hopping habits');
            } else {
              reasons.push('Built to interrupt procrastination reflexes');
            }
          }

          // Strictness match
          if (tags.strictness.includes(strictness)) {
            score += 3;
            if (strictness === 'gentle') reasons.push('Offers calm, non-punitive nudges');
            if (strictness === 'moderate') reasons.push('Provides structured timer schedules');
            if (strictness === 'strict') reasons.push('Delivers rock-solid, uncheatable blocking');
          }

          // Budget constraints
          if (budget === 'free-only') {
            if (tool.cost.toLowerCase() === 'free') {
              score += 3;
              reasons.push('100% free with zero paywalled features');
            } else {
              score -= 2;
            }
          } else {
            score += 2;
          }

          // Privacy preference
          if (privacy === 'strict') {
            if (tags.privacy.includes('strict') || tool.open_source) {
              score += 3;
              reasons.push('Zero cloud telemetry and privacy-respecting local storage');
            } else {
              score -= 1;
            }
          }

          return {
            tool,
            score,
            reasons,
          };
        });

        // Filter valid candidates and sort descending by score
        scoredTools.sort((a, b) => b.score - a.score);
        const topPicks = scoredTools.slice(0, 3).filter((item) => item.score > 2);

        renderQuizResults(topPicks);
      });

      function renderQuizResults(picks) {
        if (!recommendationsList) return;

        if (picks.length === 0) {
          recommendationsList.innerHTML = `
            <div class="card">
              <p>No tools directly matched that specific combination. We recommend reviewing our full <a href="compare.html">comparison table</a> to see all options.</p>
            </div>
          `;
        } else {
          recommendationsList.innerHTML = picks
            .map(({ tool, reasons }, index) => {
              const guideLink = getGuideLinkForTool(tool.id);

              return `
              <article class="recommendation-card" aria-labelledby="rec-title-${tool.id}">
                <div class="rec-card-header">
                  <div>
                    <span class="rec-rank-pill">Top Match #${index + 1}</span>
                    <h3 id="rec-title-${tool.id}" style="margin: 0.5rem 0 0.5rem 0; font-size: 1.35rem;">
                      ${tool.name}
                    </h3>
                    <div style="display: flex; flex-wrap: wrap; gap: 0.4rem; margin-bottom: 0.5rem;">
                      ${getCostBadgeHTML(tool.cost)}
                      ${getOsBadgeHTML(tool.open_source)}
                      ${tool.platforms.map((p) => `<span class="badge badge-platform">${p}</span>`).join('')}
                    </div>
                  </div>
                  <div style="font-size: 0.85rem; color: var(--text-tertiary);">
                    Verified: ${tool.date_checked}
                  </div>
                </div>

                <div class="rec-card-body">
                  <p style="margin-bottom: 0.75rem; font-size: 1rem;">${tool.purpose}</p>

                  <div class="match-reason">
                    <strong>Why this fits your answers:</strong>
                    <ul>
                      ${reasons.map((r) => `<li>${r}</li>`).join('')}
                    </ul>
                  </div>

                  <div class="verdict-grid">
                    <div class="verdict-col verdict-best">
                      <strong>✓ Best For:</strong>
                      <p>${tool.best_for}</p>
                    </div>
                    <div class="verdict-col verdict-warn">
                      <strong>⚠ Honest Limitation:</strong>
                      <p>${tool.main_limitation}</p>
                    </div>
                  </div>

                  <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 1.25rem; padding-top: 1rem; border-top: 1px solid var(--border-weak); flex-wrap: wrap; gap: 0.75rem;">
                    <div class="btn-group">
                      ${
                        guideLink
                          ? `<a href="${guideLink}" class="btn btn-primary btn-sm">Read Student Setup Guide</a>`
                          : ''
                      }
                      <a href="${tool.official_source}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary btn-sm">
                        Visit Official Website <span class="sr-only">(opens in new window)</span>
                      </a>
                    </div>
                    <span style="font-size: 0.85rem; color: var(--text-tertiary);">
                      Paywalls: <em>${tool.paywalled_features}</em>
                    </span>
                  </div>
                </div>
              </article>
            `;
            })
            .join('');
        }

        // Show results and shift focus for accessibility
        quizForm.style.display = 'none';
        resultsContainer.style.display = 'block';
        resultsContainer.scrollIntoView({ behavior: 'smooth' });
        const focusTarget = document.getElementById('results-heading');
        if (focusTarget) {
          focusTarget.focus();
        }
      }

      function getGuideLinkForTool(toolId) {
        if (toolId === 'leechblock-ng' || toolId === 'windows-focus-sessions') {
          return 'guides/guide-1.html';
        }
        if (toolId === 'android-digital-wellbeing') {
          return 'guides/guide-2.html';
        }
        if (toolId === 'ublock-origin') {
          return 'guides/guide-3.html';
        }
        return null;
      }

      if (resetQuizBtn) {
        resetQuizBtn.addEventListener('click', () => {
          quizForm.reset();
          quizForm.querySelectorAll('.quiz-option-label').forEach((lbl) => lbl.classList.remove('is-selected'));
          updateQuizProgress();
          resultsContainer.style.display = 'none';
          quizForm.style.display = 'block';
          quizForm.scrollIntoView({ behavior: 'smooth' });
          const firstInput = quizForm.querySelector('input');
          if (firstInput) firstInput.focus();
        });
      }
    });
  }

  // -------------------------------------------------------------------------
  // 6. Global Initialization
  // -------------------------------------------------------------------------
  document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    initMobileNav();
    initComparePage();
    initQuizPage();
  });
})();
