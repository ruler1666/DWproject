/**
 * REFLECTHUB - STUDENT DIGITAL WELLNESS RESOURCE HUB
 * Main JavaScript Controller
 * Plain Vanilla JS, Zero External Dependencies, Accessible & Fast
 */

(function () {
  'use strict';

  // -------------------------------------------------------------------------
  // 1. Embedded Verified Tools Dataset (Offline & file:// Fallback)
  // -------------------------------------------------------------------------
  const EMBEDDED_TOOLS = [
  {
    "id": "android-digital-wellbeing",
    "name": "Android Digital Wellbeing & Bedtime Mode",
    "purpose": "Operating system level screen time tracking, daily app timers, focus mode, and grayscale bedtime routine automation.",
    "category": "Screen Time & Bedtime Routines",
    "platforms": [
      "Android"
    ],
    "cost": "Free",
    "paywalled_features": "None (built into Android OS)",
    "open_source": false,
    "data_permissions": "Built-in OS service; accesses app usage statistics and notification management locally.",
    "accessibility_notes": "Fully supports Android TalkBack screen reader, dynamic system font scaling, and high-contrast color modes.",
    "main_limitation": "App timers can easily be paused or deleted in 2 taps when self-discipline falters; no password protection against your future self.",
    "best_for": "Students wanting a zero-cost, battery-friendly starting point for setting daily Instagram/YouTube limits and dimming blue light before sleep.",
    "not_for": "Students needing ironclad, unbreakable blocking during crunch exam revision sessions.",
    "official_source": "https://wellbeing.google/",
    "date_checked": "2026-10-24",
    "quiz_tags": {
      "devices": [
        "android",
        "both"
      ],
      "distractions": [
        "social-media",
        "bedtime",
        "procrastination"
      ],
      "strictness": [
        "gentle",
        "moderate"
      ],
      "budget": [
        "free-only",
        "freemium-ok"
      ],
      "privacy": [
        "strict",
        "standard"
      ]
    }
  },
  {
    "id": "windows-focus-sessions",
    "name": "Windows 11 Focus Sessions & Do Not Disturb",
    "purpose": "Native Pomodoro-style study timer integrated into the Windows Clock app with automatic notification silencing and Spotify study playlist support.",
    "category": "Focus & Session Timers",
    "platforms": [
      "Windows"
    ],
    "cost": "Free",
    "paywalled_features": "None (built into Windows 11 / Windows 10 Focus Assist)",
    "open_source": false,
    "data_permissions": "Built-in Windows component; optional read/write permissions if connected to Microsoft To-Do or Spotify.",
    "accessibility_notes": "Certified Windows Narrator compatible; supports full Windows high-contrast themes and keyboard shortcuts (Win + N).",
    "main_limitation": "Does not block distracting websites or desktop gaming apps—it only silences notifications and ticks a clock.",
    "best_for": "Students working on programming assignments or lab write-ups on laptops who get derailed by Discord/WhatsApp notification badges.",
    "not_for": "Students who compulsively open browser tabs or launch Steam when left to their own devices.",
    "official_source": "https://support.microsoft.com/en-us/windows/how-to-use-focus-in-windows-11-cbcc9bb0-d796-412f-b40c-1bb39aa0375e",
    "date_checked": "2026-10-24",
    "quiz_tags": {
      "devices": [
        "windows",
        "both"
      ],
      "distractions": [
        "multitasking",
        "procrastination"
      ],
      "strictness": [
        "gentle"
      ],
      "budget": [
        "free-only",
        "freemium-ok"
      ],
      "privacy": [
        "strict",
        "standard"
      ]
    }
  },
  {
    "id": "leechblock-ng",
    "name": "LeechBlock NG",
    "purpose": "Highly customizable, lightweight browser extension designed to block time-wasting sites with time limits, schedules, and strict lockdown modes.",
    "category": "Distraction & Web Blockers",
    "platforms": [
      "Browser Extension (Firefox, Chrome, Edge)"
    ],
    "cost": "Free",
    "paywalled_features": "None (100% free community project)",
    "open_source": true,
    "data_permissions": "Requires browser extension permissions: 'tabs', 'storage', and 'access to web traffic' solely to redirect blocked URLs locally.",
    "accessibility_notes": "Clean plain HTML options page with clear form labels; works reliably with NVDA, JAWS, and keyboard tab navigation.",
    "main_limitation": "Only restricts desktop web browser tabs; does not restrict native desktop software (e.g., Discord desktop or Steam) or mobile apps.",
    "best_for": "Undergraduates studying on laptops who want strict, scheduled locks on YouTube, Reddit, and Twitter with zero subscription fees.",
    "not_for": "Users looking for an automated mobile app blocker or those who struggle with technical options screens.",
    "official_source": "https://www.proginosko.com/leechblock/",
    "date_checked": "2026-10-24",
    "quiz_tags": {
      "devices": [
        "windows",
        "both"
      ],
      "distractions": [
        "social-media",
        "procrastination"
      ],
      "strictness": [
        "moderate",
        "strict"
      ],
      "budget": [
        "free-only",
        "freemium-ok"
      ],
      "privacy": [
        "strict",
        "standard"
      ]
    }
  },
  {
    "id": "cold-turkey-blocker",
    "name": "Cold Turkey Blocker",
    "purpose": "Heavy-duty desktop distraction blocker that locks down websites, games, and applications with unbreakable timers and random-text passwords.",
    "category": "Distraction & Web Blockers",
    "platforms": [
      "Windows",
      "macOS"
    ],
    "cost": "Freemium",
    "paywalled_features": "Free version allows unlimited website blocking and basic timers. Pro version ($39 / approx ₹3,200 one-off) paywalls application blocking (.exe blocking), scheduled recurring blocks, user-switch blocking, and Pomodoro breaks.",
    "open_source": false,
    "data_permissions": "Installs a local system service and lightweight browser helper. Operates strictly offline without personal data telemetry.",
    "accessibility_notes": "Desktop client supports standard Windows high contrast; keyboard navigation works well across main input dialogs.",
    "main_limitation": "The strict locked mode cannot be terminated even by ending processes in Windows Task Manager or rebooting—if you lock an essential study portal by mistake, you must wait out the timer.",
    "best_for": "Students preparing for competitive exams or semester finals who need an uncheatable barrier against desktop gaming and binge-watching.",
    "not_for": "Budget-constrained students who need native .exe application blocking for free, or those who panic when locked out of desktop settings.",
    "official_source": "https://getcoldturkey.com/",
    "date_checked": "2026-10-24",
    "quiz_tags": {
      "devices": [
        "windows",
        "both"
      ],
      "distractions": [
        "multitasking",
        "procrastination",
        "social-media"
      ],
      "strictness": [
        "strict"
      ],
      "budget": [
        "freemium-ok"
      ],
      "privacy": [
        "strict",
        "standard"
      ]
    }
  },
  {
    "id": "stayfree",
    "name": "StayFree - Screen Time & Limit",
    "purpose": "Comprehensive cross-platform app usage tracker and website blocker with usage alert thresholds and pin-protected focus modes.",
    "category": "Screen Time & App Blocking",
    "platforms": [
      "Android",
      "Windows",
      "Browser Extension"
    ],
    "cost": "Freemium",
    "paywalled_features": "Free tier gives full Android app timers, website tracking, and local reports. Premium subscription (approx ₹149/mo or ₹799/yr) paywalls cross-device cloud sync, CSV historical exports, and sub-category analytics.",
    "open_source": false,
    "data_permissions": "Requires Android 'Usage Access' and 'Accessibility Service' to read active app package names and enforce overlay blocks.",
    "accessibility_notes": "Well-labeled buttons and distinct visual progress meters; accessible via TalkBack and phone font-scaling.",
    "main_limitation": "Requires Android Accessibility Service permission which can occasionally consume extra battery on budget Android chipsets (e.g. MediaTek Helio/Snapdragon 6-series).",
    "best_for": "Students wanting unified screen time tracking across an Android handset and a Windows laptop without paying upfront.",
    "not_for": "Strict privacy purists who do not want an app having Android accessibility service privileges.",
    "official_source": "https://stayfreeapps.com/",
    "date_checked": "2026-10-24",
    "quiz_tags": {
      "devices": [
        "android",
        "windows",
        "both"
      ],
      "distractions": [
        "social-media",
        "procrastination"
      ],
      "strictness": [
        "moderate"
      ],
      "budget": [
        "free-only",
        "freemium-ok"
      ],
      "privacy": [
        "standard"
      ]
    }
  },
  {
    "id": "activitywatch",
    "name": "ActivityWatch",
    "purpose": "Automated, private, open-source personal time tracking system that records active applications, window titles, and web browsing locally on your computer.",
    "category": "Screen Time & Self-Auditing",
    "platforms": [
      "Windows",
      "Android",
      "macOS",
      "Linux"
    ],
    "cost": "Free",
    "paywalled_features": "None (100% free and open-source under MPL-2.0)",
    "open_source": true,
    "data_permissions": "All recorded activity stays on localhost. No cloud accounts, zero third-party telemetry, zero external tracking servers.",
    "accessibility_notes": "Local web dashboard rendered in clean semantic HTML; supports keyboard navigation and browser zoom up to 200%.",
    "main_limitation": "Passive measurement only—it records where your time went but does not actively block or close any apps or tabs.",
    "best_for": "Tech-savvy students who want accurate, honest data on how many hours they spent coding vs. watching YouTube without sacrificing data privacy.",
    "not_for": "Users seeking an active intervention tool to forcibly kick them off addictive platforms.",
    "official_source": "https://activitywatch.net/",
    "date_checked": "2026-10-24",
    "quiz_tags": {
      "devices": [
        "windows",
        "android",
        "both"
      ],
      "distractions": [
        "multitasking",
        "procrastination"
      ],
      "strictness": [
        "gentle"
      ],
      "budget": [
        "free-only",
        "freemium-ok"
      ],
      "privacy": [
        "strict"
      ]
    }
  },
  {
    "id": "one-sec",
    "name": "one sec",
    "purpose": "Psychology-backed friction app that forces you to take a deep breath before opening habitual social media apps, breaking compulsive dopamine loops.",
    "category": "Mindfulness & Habit Breaking",
    "platforms": [
      "Android",
      "Browser Extension"
    ],
    "cost": "Freemium",
    "paywalled_features": "Free version allows configuring 1 target app with the breathing delay. Pro subscription ($2.99/mo or $19.99/yr) paywalls multiple apps, custom reflection exercises, and scheduled morning delay routines.",
    "open_source": false,
    "data_permissions": "Requires Android Accessibility Service to intercept app launches. Processing is handled locally on the device.",
    "accessibility_notes": "Provides haptic vibration cues alongside visual animations for the breathing cycle; highly legible high-contrast UI.",
    "main_limitation": "Free tier is restricted to just one single app (e.g., only Instagram or only YouTube).",
    "best_for": "Students who don't want a punitive blocker, but need a 5-second pause to prevent mindlessly opening Instagram between study sessions.",
    "not_for": "Students who want to block 5+ apps simultaneously without purchasing an annual subscription.",
    "official_source": "https://one-sec.app/",
    "date_checked": "2026-10-24",
    "quiz_tags": {
      "devices": [
        "android",
        "both"
      ],
      "distractions": [
        "social-media",
        "procrastination"
      ],
      "strictness": [
        "gentle"
      ],
      "budget": [
        "freemium-ok"
      ],
      "privacy": [
        "strict",
        "standard"
      ]
    }
  },
  {
    "id": "ublock-origin",
    "name": "uBlock Origin",
    "purpose": "High-efficiency open-source content blocker that eliminates video ads, sponsored distraction feeds, algorithmic recommendations, and web trackers.",
    "category": "Distraction & Ad Removal",
    "platforms": [
      "Browser Extension (Firefox, Chrome, Edge)"
    ],
    "cost": "Free",
    "paywalled_features": "None (100% free non-profit project; does not accept donations)",
    "open_source": true,
    "data_permissions": "Requires browser extension permissions to intercept web requests. Operates entirely locally with zero telemetry.",
    "accessibility_notes": "High-contrast dashboard; full keyboard navigation support across logger and custom filter rules.",
    "main_limitation": "Requires basic familiarity with custom cosmetic filters (CSS selector filters) if you want to surgically hide YouTube Shorts or infinite comment feeds.",
    "best_for": "Students who lose hours to YouTube recommendations, clickbait thumbnails, and intrusive web page banners while researching coursework.",
    "not_for": "Users looking for an automated mobile app blocker outside of browser sessions.",
    "official_source": "https://ublockorigin.com/",
    "date_checked": "2026-10-24",
    "quiz_tags": {
      "devices": [
        "windows",
        "android",
        "both"
      ],
      "distractions": [
        "social-media",
        "multitasking"
      ],
      "strictness": [
        "gentle",
        "moderate"
      ],
      "budget": [
        "free-only",
        "freemium-ok"
      ],
      "privacy": [
        "strict"
      ]
    }
  },
  {
    "id": "minimalist-phone",
    "name": "minimalist phone: focus launcher",
    "purpose": "A streamlined, monochrome Android home screen launcher replacing colorful app icons with a plain text list, app hide options, and block reminders.",
    "category": "Screen Time & App Blocking",
    "platforms": [
      "Android"
    ],
    "cost": "Freemium",
    "paywalled_features": "Offers a 7-day free trial. After trial, essential features (in-app blocking, notification filters, customized fonts) require paywalled subscription (approx ₹240/month or ₹1,650 lifetime purchase). Free mode after trial is severely restricted.",
    "open_source": false,
    "data_permissions": "Requires Default Home Launcher permission and Notification Listener permission. Runs on-device without cloud syncing.",
    "accessibility_notes": "High contrast monochrome typography; adjustable text sizing; clean layout that aids students with attention/sensory overload.",
    "main_limitation": "The paid subscription is required to keep active app blocking and custom renaming after the 7-day trial ends.",
    "best_for": "Students with high visual distractibility who find themselves mesmerized by colorful notification badges and home screen widgets.",
    "not_for": "Students on a zero-budget who need permanently free long-term app locking (use Android Digital Wellbeing instead).",
    "official_source": "https://www.minimalistphone.com/",
    "date_checked": "2026-10-24",
    "quiz_tags": {
      "devices": [
        "android"
      ],
      "distractions": [
        "social-media",
        "bedtime",
        "procrastination"
      ],
      "strictness": [
        "moderate"
      ],
      "budget": [
        "freemium-ok"
      ],
      "privacy": [
        "standard"
      ]
    }
  },
  {
    "id": "forest",
    "name": "Forest: Focus for Work",
    "purpose": "Gamified Pomodoro focus timer where staying off your phone grows virtual trees that form a personal forest, with optional real-world tree planting.",
    "category": "Focus & Session Timers",
    "platforms": [
      "Android",
      "Browser Extension",
      "iOS"
    ],
    "cost": "Freemium",
    "paywalled_features": "Free version on Android is ad-supported and includes single-timer tree planting. Paid Pro upgrade ($3.99 / approx ₹340 one-time) paywalls planting real trees via Trees for the Future, custom app whitelist, cloud syncing, and collaborative study rooms.",
    "open_source": false,
    "data_permissions": "Requires Android 'Usage Access' permission to detect when you exit the app and kill your virtual tree.",
    "accessibility_notes": "Audio chime feedback upon timer completion; visual tree growth stages; supports basic screen readers though some custom graphic badges lack labels.",
    "main_limitation": "The Android free version displays interstitial ads after timer completion, which can ironically distract students right when their study session ends.",
    "best_for": "Students who respond well to visual gamification, positive reinforcement, and study streaks rather than harsh blockades.",
    "not_for": "Students triggered by video ads on free versions or students who need unbreakable application locks.",
    "official_source": "https://www.forestapp.cc/",
    "date_checked": "2026-10-24",
    "quiz_tags": {
      "devices": [
        "android",
        "windows",
        "both"
      ],
      "distractions": [
        "procrastination",
        "social-media"
      ],
      "strictness": [
        "gentle",
        "moderate"
      ],
      "budget": [
        "freemium-ok"
      ],
      "privacy": [
        "standard"
      ]
    }
  },
  {
    "id": "bitwarden",
    "name": "Bitwarden Password Manager",
    "purpose": "Open-source, end-to-end encrypted password manager that secures accounts, prevents credential reuse, and protects against phishing traps.",
    "category": "Privacy & Digital Safety",
    "platforms": [
      "Android",
      "Windows",
      "Browser Extension"
    ],
    "cost": "Freemium",
    "paywalled_features": "Free tier includes unlimited passwords, unlimited devices, and cross-platform sync. Premium tier ($10/year / approx ₹850/yr) paywalls integrated TOTP authenticator codes and 1GB encrypted file attachments.",
    "open_source": true,
    "data_permissions": "Zero-knowledge end-to-end encryption (AES-256 and PBKDF2/Argon2). Bitwarden servers cannot decrypt or read your vault contents.",
    "accessibility_notes": "Strict adherence to WCAG accessibility standards; certified keyboard navigation and full screen reader compatibility across mobile and desktop apps.",
    "main_limitation": "Requires initial manual effort to import passwords and configure browser auto-fill autofill settings.",
    "best_for": "Every student who reuses the same simple password across university portals, Gmail, and social accounts.",
    "not_for": "Students looking exclusively for screen timers (this is an essential digital safety baseline tool).",
    "official_source": "https://bitwarden.com/",
    "date_checked": "2026-10-24",
    "quiz_tags": {
      "devices": [
        "android",
        "windows",
        "both"
      ],
      "distractions": [
        "multitasking"
      ],
      "strictness": [
        "gentle"
      ],
      "budget": [
        "free-only",
        "freemium-ok"
      ],
      "privacy": [
        "strict"
      ]
    }
  }
];

  // -------------------------------------------------------------------------
  // 2. Theme Management (Light / Dark Mode with Persistence)
  // -------------------------------------------------------------------------
  const THEME_STORAGE_KEY = 'reflecthub_theme';

  function initTheme() {
    const savedTheme = localStorage.getItem(THEME_STORAGE_KEY);
    const systemPrefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initialTheme = savedTheme || (systemPrefersDark ? 'dark' : 'light');

    applyTheme(initialTheme);

    const toggleBtns = document.querySelectorAll('.theme-toggle-btn');
    toggleBtns.forEach((btn) => {
      btn.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        applyTheme(newTheme);
        localStorage.setItem(THEME_STORAGE_KEY, newTheme);
      });
    });

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
  // 3. Mobile Navigation Toggle
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

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && siteNav.classList.contains('is-open')) {
        navToggle.setAttribute('aria-expanded', 'false');
        siteNav.classList.remove('is-open');
        navToggle.focus();
      }
    });

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
  // 4. Shared Tool Data Loader (Dynamic Fetch with Embedded Fallback)
  // -------------------------------------------------------------------------
  let cachedTools = null;

  async function loadToolsData() {
    if (cachedTools) return cachedTools;

    const isInSubdir = window.location.pathname.includes('/guides/');
    const dataPath = isInSubdir ? '../data/tools.json' : 'data/tools.json';

    try {
      const response = await fetch(dataPath);
      if (response && response.ok) {
        cachedTools = await response.json();
        return cachedTools;
      }
    } catch (err) {
      // Graceful fallback for file:// protocol or offline testing
      console.warn('Network fetch for tools.json unavailable (e.g. running via file://). Using embedded verified dataset.');
    }

    cachedTools = EMBEDDED_TOOLS;
    return cachedTools;
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

  // -------------------------------------------------------------------------
  // 5. Compare Tools Matrix Controller
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
    let sortDirection = 'asc';

    loadToolsData().then((tools) => {
      if (!tools || tools.length === 0) {
        const errorMsg = '<p class="callout callout-warn">Unable to load tool data.</p>';
        if (tableBody) tableBody.innerHTML = '<tr><td colspan="10">' + errorMsg + '</td></tr>';
        if (mobileCardsContainer) mobileCardsContainer.innerHTML = errorMsg;
        return;
      }

      function filterAndRender() {
        const platformVal = platformFilter ? platformFilter.value : 'all';
        const costVal = costFilter ? costFilter.value : 'all';
        const osVal = openSourceFilter ? openSourceFilter.value : 'all';
        const searchVal = searchInput ? searchInput.value.toLowerCase().trim() : '';

        const filtered = tools.filter((tool) => {
          if (platformVal !== 'all') {
            const matchesPlatform = tool.platforms.some((p) =>
              p.toLowerCase().includes(platformVal.toLowerCase())
            );
            if (!matchesPlatform) return false;
          }

          if (costVal !== 'all') {
            if (tool.cost.toLowerCase() !== costVal.toLowerCase()) return false;
          }

          if (osVal !== 'all') {
            if (osVal === 'true' && !tool.open_source) return false;
            if (osVal === 'false' && tool.open_source) return false;
          }

          if (searchVal) {
            const haystack = [
              tool.name,
              tool.purpose,
              tool.paywalled_features,
              tool.main_limitation,
              tool.best_for,
              tool.category,
              (tool.platforms || []).join(' ')
            ].join(' ').toLowerCase();
            if (!haystack.includes(searchVal)) return false;
          }

          return true;
        });

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

        if (countDisplay) {
          countDisplay.textContent = 'Showing ' + filtered.length + ' of ' + tools.length + ' verified digital wellness tools';
        }

        renderDesktopTable(filtered);
        renderMobileCards(filtered);
      }

      function renderDesktopTable(list) {
        if (!tableBody) return;

        if (list.length === 0) {
          tableBody.innerHTML = '<tr><td colspan="10" style="text-align: center; padding: 2rem;">No digital wellness tools match your filter criteria. Try clearing search or adjusting filters.</td></tr>';
          return;
        }

        tableBody.innerHTML = list.map((tool) => `
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
        `).join('');
      }

      function renderMobileCards(list) {
        if (!mobileCardsContainer) return;

        if (list.length === 0) {
          mobileCardsContainer.innerHTML = '<div class="card"><p>No tools match your current filter settings.</p></div>';
          return;
        }

        mobileCardsContainer.innerHTML = list.map((tool) => `
          <article class="tool-mobile-card" aria-labelledby="card-title-${tool.id}">
            <div class="card-header">
              <div>
                <h3 id="card-title-${tool.id}" class="card-title" style="font-size: 1.15rem; margin: 0 0 0.2rem 0;">${tool.name}</h3>
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
              <span class="tool-detail-label">Cost &amp; What Is Paywalled</span>
              <p style="font-size: 0.875rem; margin: 0;">${tool.paywalled_features}</p>
            </div>

            <div class="tool-detail-row">
              <span class="tool-detail-label">Software License</span>
              <div>${getOsBadgeHTML(tool.open_source)}</div>
            </div>

            <div class="tool-detail-row">
              <span class="tool-detail-label">Permissions &amp; Privacy</span>
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
        `).join('');
      }

      if (platformFilter) platformFilter.addEventListener('change', filterAndRender);
      if (costFilter) costFilter.addEventListener('change', filterAndRender);
      if (openSourceFilter) openSourceFilter.addEventListener('change', filterAndRender);
      if (searchInput) searchInput.addEventListener('input', filterAndRender);

      if (resetBtn) {
        resetBtn.addEventListener('click', () => {
          if (platformFilter) platformFilter.value = 'all';
          if (costFilter) costFilter.value = 'all';
          if (openSourceFilter) openSourceFilter.value = 'all';
          if (searchInput) searchInput.value = '';
          filterAndRender();
        });
      }

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

      filterAndRender();
    });
  }

  // -------------------------------------------------------------------------
  // 6. Find My Tool Quiz Controller & Recommendation Engine
  // -------------------------------------------------------------------------
  function initQuizPage() {
    const quizForm = document.getElementById('quiz-form');
    const resultsContainer = document.getElementById('quiz-results');
    const recommendationsList = document.getElementById('recommendations-list');
    const feedbackBox = document.getElementById('quiz-diagnostic-feedback');
    const resetQuizBtn = document.getElementById('btn-reset-quiz');
    const progressFill = document.getElementById('quiz-progress-fill');
    const progressText = document.getElementById('quiz-progress-text');
    const searchInput = document.getElementById('quiz-tool-search');
    const searchResults = document.getElementById('quiz-search-results');
    const quickTagsContainer = document.getElementById('quiz-quick-tags');

    if (!quizForm || !resultsContainer) return;

    function updateQuizProgress() {
      const questions = ['q_device', 'q_distraction', 'q_strictness', 'q_budget', 'q_privacy'];
      let answered = 0;
      questions.forEach((q) => {
        if (quizForm.querySelector('input[name="' + q + '"]:checked')) {
          answered++;
        }
      });
      const pct = Math.round((answered / questions.length) * 100);
      if (progressFill) progressFill.style.width = pct + '%';
      if (progressText) {
        progressText.innerHTML = answered === questions.length
          ? '<strong>All 5 answered (100%)</strong> &bull; Ready to submit!'
          : answered + ' of 5 answered (' + pct + '%)';
      }
    }

    const allRadioInputs = quizForm.querySelectorAll('input[type="radio"]');
    allRadioInputs.forEach((radio) => {
      radio.addEventListener('change', () => {
        const groupRadios = quizForm.querySelectorAll('input[name="' + radio.name + '"]');
        groupRadios.forEach((r) => {
          const parentLabel = r.closest('.quiz-option-label');
          if (parentLabel) parentLabel.classList.remove('is-selected');
        });

        const currentLabel = radio.closest('.quiz-option-label');
        if (currentLabel) currentLabel.classList.add('is-selected');

        updateQuizProgress();
      });
    });

    // Helper: Strict hardware compatibility check
    function isPlatformCompatible(tool, device) {
      if (device === 'both') return true;
      const p = (tool.platforms || []).join(' ').toLowerCase();
      if (device === 'android') {
        return p.includes('android');
      }
      if (device === 'windows') {
        return p.includes('windows') || p.includes('browser') || p.includes('extension');
      }
      return true;
    }

    // Helper: Generate honest diagnostic feedback paragraph
    function generateDiagnosticFeedback(device, distraction, strictness, budget, privacy) {
      let deviceNote = '';
      if (device === 'both') {
        deviceNote = 'Studying with both a Windows laptop and an Android smartphone creates cross-device friction loops: when code compiles or a lecture pauses on PC, you reflexively reach for your phone.';
      } else if (device === 'android') {
        deviceNote = 'Your smartphone is designed for continuous engagement, with vertical swipes and push notifications constantly breaking your train of thought.';
      } else {
        deviceNote = 'Your primary challenge happens right in your desktop web browser: multi-tab hopping, video recommendations, and distracting sites during study sprints.';
      }

      let challengeNote = '';
      if (distraction === 'social-media') {
        challengeNote = 'Algorithmic feeds (Shorts and Reels) are engineered to defeat conscious willpower. Relying on self-control is unreliable; you need surgical feed removal or friction barriers.';
      } else if (distraction === 'bedtime') {
        challengeNote = 'Late-night blue-light screen exposure suppresses melatonin and delays deep sleep before 8:00 AM lectures. Automating an 11:00 PM black-and-white mode physically drains the appeal of late scrolling.';
      } else if (distraction === 'multitasking') {
        challengeNote = 'Continuous tab-hopping fragments working memory. Structured 45-minute focus intervals paired with system-level notification silencing will protect your deep work.';
      } else {
        challengeNote = 'Impulsive app opens occur as an automatic reflex. Introducing intentional pause friction gives your rational brain 5 seconds to redirect attention.';
      }

      let enforcementNote = '';
      if (strictness === 'strict') {
        enforcementNote = 'Because you know you can easily dismiss soft reminders, we have prioritized tools with strict, uncheatable locks (such as LeechBlock\'s 64-character challenge lock).';
      } else if (strictness === 'moderate') {
        enforcementNote = 'You respond well to structured timetables and daily app allowances that automatically enforce healthy boundaries.';
      } else {
        enforcementNote = 'You prefer gentle, non-punitive mindfulness pauses that encourage self-awareness without rigid lockouts.';
      }

      let budgetPrivacyNote = '';
      if (budget === 'free-only' && privacy === 'strict') {
        budgetPrivacyNote = 'Your profile strictly requires ₹0 lifetime cost and zero third-party cloud telemetry, so open-source and native OS utilities are front and center.';
      } else if (budget === 'free-only') {
        budgetPrivacyNote = 'Every recommended tool is 100% free with zero essential features locked behind sudden subscription prompts.';
      } else {
        budgetPrivacyNote = 'We have highlighted tools with strong free tiers, noting any optional paid tiers with full pricing transparency.';
      }

      return {
        deviceNote,
        challengeNote,
        enforcementNote,
        budgetPrivacyNote
      };
    }

    // Submit Listener is attached UNCONDITIONALLY and SYNCHRONOUSLY
    quizForm.addEventListener('submit', async (e) => {
      e.preventDefault();

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

      const tools = await loadToolsData();
      if (!tools || tools.length === 0) {
        alert('Tool dataset could not be loaded. Please refresh the page.');
        return;
      }

      // 1. Filter by hardware compatibility first
      const eligible = tools.filter((tool) => isPlatformCompatible(tool, device));

      // 2. Score candidates
      const scoredTools = eligible.map((tool) => {
        let score = 50;
        const reasons = [];
        const tags = tool.quiz_tags || {};
        const devList = tags.devices || ['both'];

        // Device score
        if (device === 'both') {
          if (devList.includes('both')) {
            score += 15;
            reasons.push('Designed for multi-device cross-platform student routines');
          } else {
            score += 10;
          }
        } else if (devList.includes(device)) {
          score += 18;
          reasons.push('Directly optimized for your ' + device.toUpperCase() + ' hardware setup');
        }

        // Distraction match
        if ((tags.distractions || []).includes(distraction)) {
          score += 20;
          if (distraction === 'social-media') {
            reasons.push('Specialized at eliminating algorithmic feeds, YouTube Shorts & reels');
          } else if (distraction === 'bedtime') {
            reasons.push('Engineered for night routines and eliminating blue-light dopamine stimulation');
          } else if (distraction === 'multitasking') {
            reasons.push('Protects deep work sprints against desktop multi-window distraction');
          } else {
            reasons.push('Built to interrupt procrastination reflexes before they take hold');
          }
        }

        // Strictness match
        if ((tags.strictness || []).includes(strictness)) {
          score += 14;
          if (strictness === 'gentle') reasons.push('Offers non-punitive, calm mindfulness cues');
          if (strictness === 'moderate') reasons.push('Provides automated daily timers & scheduled allowances');
          if (strictness === 'strict') reasons.push('Provides high-friction, uncheatable access locks');
        }

        // Budget match
        if (budget === 'free-only') {
          if ((tool.cost || '').toLowerCase() === 'free') {
            score += 14;
            reasons.push('100% Free forever with zero paywalled features or upsells');
          } else {
            score -= 15;
          }
        } else {
          score += 8;
        }

        // Privacy match
        if (privacy === 'strict') {
          if ((tags.privacy || []).includes('strict') || tool.open_source) {
            score += 14;
            reasons.push('Strict privacy: 100% local processing with zero cloud tracking');
          } else {
            score -= 10;
          }
        } else {
          score += 6;
        }

        const pct = Math.min(98, Math.max(68, Math.round(score)));
        return {
          tool,
          score,
          pct,
          reasons
        };
      });

      scoredTools.sort((a, b) => b.score - a.score);
      const topPicks = scoredTools.slice(0, 3);

      renderQuizResults(topPicks, device, distraction, strictness, budget, privacy, tools);
    });

    function renderQuizResults(picks, device, distraction, strictness, budget, privacy, allTools) {
      if (!recommendationsList) return;

      // Render Diagnostic Feedback Header
      if (feedbackBox) {
        const feedback = generateDiagnosticFeedback(device, distraction, strictness, budget, privacy);
        
        const deviceLabels = {
          'android': '📱 Android Smartphone',
          'windows': '💻 Windows Laptop',
          'both': '📱💻 Android + Windows'
        };
        const distractionLabels = {
          'social-media': '🎬 Social Media & Shorts',
          'bedtime': '🌙 Late-Night Bedtime Screen Use',
          'multitasking': '🗂️ Multitasking & Tab-Hopping',
          'procrastination': '⏳ Impulsive App Opening'
        };
        const strictnessLabels = {
          'gentle': '🌿 Gentle Nudges',
          'moderate': '⏱️ Scheduled Quotas',
          'strict': '🔒 Strict Lockdown'
        };
        const budgetLabels = {
          'free-only': '💰 100% Free Only',
          'freemium-ok': '💳 Freemium OK'
        };
        const privacyLabels = {
          'strict': '🛡️ Strict Local-First',
          'standard': '🤝 Standard Permissions'
        };

        feedbackBox.innerHTML = `
          <article class="diagnostic-card" aria-labelledby="diagnostic-title">
            <div class="diagnostic-header">
              <span class="hero-eyebrow" style="font-size: 0.72rem; padding: 0.15rem 0.6rem; margin: 0;">Diagnostic Feedback</span>
              <span style="font-size: 0.825rem; color: var(--text-tertiary);">Personalized for your student routine</span>
            </div>
            <h3 id="diagnostic-title" class="diagnostic-title" style="margin-bottom: 0.75rem;">Your Digital Wellness Assessment</h3>
            
            <div class="diagnostic-pills">
              <span class="diagnostic-pill">${deviceLabels[device] || device}</span>
              <span class="diagnostic-pill">${distractionLabels[distraction] || distraction}</span>
              <span class="diagnostic-pill">${strictnessLabels[strictness] || strictness}</span>
              <span class="diagnostic-pill">${budgetLabels[budget] || budget}</span>
              <span class="diagnostic-pill">${privacyLabels[privacy] || privacy}</span>
            </div>

            <p class="diagnostic-text">
              <strong>The Student Reality:</strong> ${feedback.deviceNote} ${feedback.challengeNote}
            </p>
            <p class="diagnostic-text" style="margin-top: 0.5rem;">
              <strong>Our Strategy for You:</strong> ${feedback.enforcementNote} ${feedback.budgetPrivacyNote}
            </p>
          </article>
        `;
      }

      // Render Recommendations Cards
      if (picks.length === 0) {
        recommendationsList.innerHTML = `
          <div class="card">
            <p>No tools directly matched that specific combination. Please inspect our full <a href="compare.html">comparison table</a> to see all options.</p>
          </div>
        `;
      } else {
        recommendationsList.innerHTML = picks
          .map(({ tool, reasons, pct }, index) => {
            const guideLink = getGuideLinkForTool(tool.id);

            return `
            <article class="recommendation-card" aria-labelledby="rec-title-${tool.id}">
              <div class="rec-card-header">
                <div>
                  <span class="rec-rank-pill">Top Match #${index + 1} &bull; ${pct}% Compatibility</span>
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
                  <strong>Why this fits your assessment:</strong>
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
                        ? `<a href="${guideLink}" class="btn btn-primary btn-sm">Read Student Setup Guide &rarr;</a>`
                        : ''
                    }
                    <a href="${tool.official_source}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary btn-sm">
                      Visit Official Website <span class="sr-only">(opens in new window)</span> &nearr;
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

      // Initialize Live Quick Search Box
      if (searchInput && searchResults && allTools) {
        function filterQuickTools(query) {
          const q = (query || '').toLowerCase().trim();
          if (!q) {
            searchResults.style.display = 'none';
            searchResults.innerHTML = '';
            return;
          }

          const matches = allTools.filter((t) => {
            const haystack = [
              t.name,
              t.purpose,
              t.category,
              (t.platforms || []).join(' '),
              t.cost,
              t.paywalled_features,
              t.best_for
            ].join(' ').toLowerCase();
            return haystack.includes(q);
          });

          searchResults.style.display = 'block';

          if (matches.length === 0) {
            searchResults.innerHTML = '<p style="padding: 1rem; color: var(--text-tertiary); font-size: 0.9rem;">No verified tools match "' + query + '". Try terms like YouTube, Bedtime, Timer, or Open Source.</p>';
            return;
          }

          searchResults.innerHTML = `
            <div style="margin-top: 1rem; display: flex; flex-direction: column; gap: 0.75rem;">
              <span style="font-size: 0.8rem; font-weight: 700; color: var(--text-tertiary); text-transform: uppercase;">
                Found ${matches.length} matching tool${matches.length > 1 ? 's' : ''}:
              </span>
              ${matches.map((t) => {
                const gLink = getGuideLinkForTool(t.id);
                return `
                <div style="padding: 0.875rem 1rem; background: var(--bg-elevated); border: 1px solid var(--border-weak); border-radius: var(--r-sm); display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 0.75rem;">
                  <div>
                    <div style="display: flex; align-items: center; gap: 0.5rem; flex-wrap: wrap;">
                      <strong style="color: var(--text-primary); font-size: 0.95rem;">${t.name}</strong>
                      ${getCostBadgeHTML(t.cost)}
                      ${getOsBadgeHTML(t.open_source)}
                    </div>
                    <p style="font-size: 0.85rem; color: var(--text-secondary); margin: 0.25rem 0 0 0;">${t.purpose}</p>
                  </div>
                  <div class="btn-group">
                    ${gLink ? `<a href="${gLink}" class="btn btn-primary btn-sm" style="font-size: 0.8rem; padding: 0.35rem 0.75rem;">Setup Guide</a>` : ''}
                    <a href="${t.official_source}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary btn-sm" style="font-size: 0.8rem; padding: 0.35rem 0.75rem;">Official Site &nearr;</a>
                  </div>
                </div>
              `;
              }).join('')}
            </div>
          `;
        }

        searchInput.value = '';
        searchResults.style.display = 'none';
        searchInput.oninput = () => filterQuickTools(searchInput.value);

        if (quickTagsContainer) {
          const tagButtons = quickTagsContainer.querySelectorAll('.quiz-filter-pill');
          tagButtons.forEach((btn) => {
            btn.onclick = () => {
              const query = btn.getAttribute('data-query');
              searchInput.value = query;
              filterQuickTools(query);
            };
          });
        }
      }

      // Show results smoothly and shift focus
      quizForm.style.display = 'none';
      resultsContainer.style.display = 'block';
      resultsContainer.scrollIntoView({ behavior: 'smooth' });
      const focusTarget = document.getElementById('results-heading');
      if (focusTarget) {
        focusTarget.focus();
      }
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
  }

  // -------------------------------------------------------------------------
  // 7. 60-Second Breathing Pause Widget Controller
  // -------------------------------------------------------------------------
  function initBreathingWidget() {
    const INHALE_TIME = 4;
    const HOLD_TIME = 4;
    const EXHALE_TIME = 6;
    const TOTAL_CYCLE = INHALE_TIME + HOLD_TIME + EXHALE_TIME;
    const TOTAL_DURATION = 60;

    const startBtn = document.getElementById('breathing-start-btn');
    const stopBtn = document.getElementById('breathing-stop-btn');
    const phaseEl = document.getElementById('breathing-phase');
    const subtextEl = document.getElementById('breathing-subtext');
    const circleWrap = document.querySelector('.breathing-circle-wrap');

    if (!startBtn || !stopBtn || !phaseEl) return;

    let timerId = null;
    let elapsedSeconds = 0;

    function stop() {
      if (timerId) clearInterval(timerId);
      timerId = null;
      elapsedSeconds = 0;
      startBtn.disabled = false;
      stopBtn.disabled = true;
      if (circleWrap) circleWrap.className = 'breathing-circle-wrap';
      phaseEl.textContent = 'Paused';
      if (subtextEl) subtextEl.textContent = 'Click Start to begin a 60-second cycle';
      startBtn.focus();
    }

    function tick() {
      elapsedSeconds++;
      if (elapsedSeconds >= TOTAL_DURATION) {
        stop();
        phaseEl.textContent = 'Complete';
        if (subtextEl) subtextEl.textContent = '60 seconds completed. Focus reset!';
        return;
      }

      const cycleSec = elapsedSeconds % TOTAL_CYCLE;
      let phaseName = '';
      let countdown = 0;

      if (cycleSec < INHALE_TIME) {
        phaseName = 'Inhale';
        countdown = INHALE_TIME - cycleSec;
        if (circleWrap) circleWrap.className = 'breathing-circle-wrap is-inhale';
      } else if (cycleSec < INHALE_TIME + HOLD_TIME) {
        phaseName = 'Hold';
        countdown = (INHALE_TIME + HOLD_TIME) - cycleSec;
        if (circleWrap) circleWrap.className = 'breathing-circle-wrap is-hold';
      } else {
        phaseName = 'Exhale';
        countdown = TOTAL_CYCLE - cycleSec;
        if (circleWrap) circleWrap.className = 'breathing-circle-wrap is-exhale';
      }

      const remainingTotal = TOTAL_DURATION - elapsedSeconds;
      phaseEl.textContent = phaseName + '... ' + countdown;
      if (subtextEl) subtextEl.textContent = remainingTotal + 's remaining in reset';
    }

    startBtn.addEventListener('click', () => {
      if (timerId) clearInterval(timerId);
      elapsedSeconds = 0;
      startBtn.disabled = true;
      stopBtn.disabled = false;
      phaseEl.textContent = 'Inhale... ' + INHALE_TIME;
      if (subtextEl) subtextEl.textContent = TOTAL_DURATION + 's remaining in reset';
      if (circleWrap) circleWrap.className = 'breathing-circle-wrap is-inhale';
      timerId = setInterval(tick, 1000);
      stopBtn.focus();
    });

    stopBtn.addEventListener('click', stop);
  }

  // -------------------------------------------------------------------------
  // 8. Global Initialization
  // -------------------------------------------------------------------------
  document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    initMobileNav();
    initComparePage();
    initQuizPage();
    initBreathingWidget();
  });
})();
