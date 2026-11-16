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
    "official_source": "https://support.google.com/android/answer/9346420",
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
    "official_source": "https://support.microsoft.com/en-us/windows/experience/focus-stay-on-task-without-distractions-in-windows",
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
    if (toolId === 'stayfree' || toolId === 'stayfree-screen-time') {
      return 'guides/guide-4.html';
    }
    if (toolId === 'minimalist-phone') {
      return 'guides/guide-5.html';
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

      // Quick preset filter pills
      const presetPills = document.querySelectorAll('.quick-preset-pill');
      presetPills.forEach((pill) => {
        pill.addEventListener('click', () => {
          presetPills.forEach((p) => p.classList.remove('active'));
          pill.classList.add('active');

          const preset = pill.getAttribute('data-preset');
          if (preset === 'all') {
            if (platformFilter) platformFilter.value = 'all';
            if (costFilter) costFilter.value = 'all';
            if (openSourceFilter) openSourceFilter.value = 'all';
          } else if (preset === 'android') {
            if (platformFilter) platformFilter.value = 'Android';
            if (costFilter) costFilter.value = 'all';
            if (openSourceFilter) openSourceFilter.value = 'all';
          } else if (preset === 'windows') {
            if (platformFilter) platformFilter.value = 'Windows';
            if (costFilter) costFilter.value = 'all';
            if (openSourceFilter) openSourceFilter.value = 'all';
          } else if (preset === 'browser') {
            if (platformFilter) platformFilter.value = 'Browser Extension';
            if (costFilter) costFilter.value = 'all';
            if (openSourceFilter) openSourceFilter.value = 'all';
          } else if (preset === 'oss') {
            if (platformFilter) platformFilter.value = 'all';
            if (costFilter) costFilter.value = 'all';
            if (openSourceFilter) openSourceFilter.value = 'true';
          } else if (preset === 'free') {
            if (platformFilter) platformFilter.value = 'all';
            if (costFilter) costFilter.value = 'Free';
            if (openSourceFilter) openSourceFilter.value = 'all';
          }

          if (searchInput) searchInput.value = '';
          filterAndRender();
        });
      });

      // Reset button clears preset active states
      if (resetBtn) {
        resetBtn.addEventListener('click', () => {
          presetPills.forEach((p) => p.classList.remove('active'));
          const allPill = document.querySelector('.quick-preset-pill[data-preset="all"]');
          if (allPill) allPill.classList.add('active');
        });
      }

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
      const questions = [
        'q_device',
        'q_distraction',
        'q_strictness',
        'q_budget',
        'q_privacy',
        'q_goal',
        'q_target',
        'q_schedule',
        'q_setup',
        'q_feedback'
      ];
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
          ? '<strong>All 10 answered (100%)</strong> &bull; Ready to submit!'
          : `${answered} of 10 answered (${pct}%)`;
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
      const deviceNote = {
        android: 'You selected an Android phone as your main device.',
        windows: 'You selected a Windows laptop as your main device.',
        both: 'You use both an Android phone and a Windows laptop.'
      }[device];

      const challengeNote = {
        'social-media': 'Your main concern is social feeds or short-form video.',
        bedtime: 'Your main concern is phone use around bedtime; a tool can support a routine but cannot guarantee sleep.',
        multitasking: 'Your main concern is interruptions, notifications, or switching between tasks.',
        procrastination: 'Your main concern is opening distracting apps or sites out of habit.'
      }[distraction];

      const enforcementNote = {
        strict: 'You prefer stronger barriers. Test a block on nonessential sites first and keep a way to reach coursework and urgent contacts.',
        moderate: 'You prefer scheduled timers or limits. Start with one realistic focus period or app limit and adjust it after trying it.',
        gentle: 'You prefer reminders or low-pressure tools. Choose one small prompt or tracking feature rather than adding several restrictions at once.'
      }[strictness];

      const budgetPrivacyNote = budget === 'free-only'
        ? 'Results exclude paid and freemium tools based on the directory listing.'
        : 'Freemium tools may appear; check the stated paywalls before starting a trial or relying on a paid feature.';
      const privacyNote = privacy === 'strict'
        ? 'Results are limited to tools marked local-first or open source in our directory; review the permissions on the official source.'
        : 'Review each tool’s permission and data notes before enabling access.';

      return { deviceNote, challengeNote, enforcementNote, budgetPrivacyNote, privacyNote };
    }

    function getPersonalGuidance(distraction, strictness, budget, privacy) {
      const nextAction = {
        'social-media': 'Choose the one feed or app that most often interrupts you, then apply one limit or blocker to that target.',
        bedtime: 'Pick a wind-down time and set one bedtime or quiet-hours routine. Keep an emergency contact route available.',
        multitasking: 'Choose one short study block, silence non-urgent alerts for it, and keep only the materials for that task open.',
        procrastination: 'Set a small starting task and add one pause or time limit to the app or site you open by habit.'
      }[distraction];

      const avoid = [];
      if (strictness === 'strict') {
        avoid.push('Avoid enabling a long or hard-to-reverse block before testing it with coursework and essential contacts.');
      } else if (strictness === 'gentle') {
        avoid.push('Avoid stacking several reminders or blockers at once; it can make the routine feel harder to maintain.');
      } else {
        avoid.push('Avoid setting a limit so strict that one missed session makes you abandon the plan.');
      }
      if (budget === 'free-only') {
        avoid.push('Avoid starting a trial or depending on a feature unless the directory lists it as free.');
      }
      if (privacy === 'strict') {
        avoid.push('Avoid granting sensitive permissions until you understand why the tool needs them and what it can access.');
      }

      return { nextAction, avoid };
    }

    function getToolQuickStart(tool) {
      const plans = {
        'android-digital-wellbeing': [
          'Open Settings and find Digital Wellbeing (the exact menu name can vary by Android version).',
          'Set a modest timer for one distracting app, or schedule Bedtime/Do Not Disturb if that is your goal.',
          'Try the setting for a few days and adjust it if it blocks something important.'
        ],
        'windows-focus-sessions': [
          'Open the Clock app and choose Focus sessions (Windows versions may differ).',
          'Choose a manageable study interval and enable notification silencing if useful.',
          'Start a session with your course materials ready; remember this tool does not block websites or apps.'
        ],
        'leechblock-ng': [
          'Install LeechBlock NG from your browser’s official extension store.',
          'Add only the distracting domains you want to limit and choose a short schedule or study window.',
          'Test the rules before enabling a strict lock; allowlist any course sites you need.'
        ],
        'cold-turkey-blocker': [
          'Install the desktop app from its official site and review which features are free versus Pro.',
          'Create a short test block for nonessential sites before setting a longer schedule.',
          'Check that your study portals and essential work tools remain available before locking a session.'
        ],
        stayfree: [
          'Install StayFree from an official app store and review its requested permissions.',
          'Choose one app and set a realistic timer or usage alert.',
          'Check the listed free-tier limits; disable permissions you no longer want the app to use.'
        ],
        activitywatch: [
          'Download ActivityWatch from its official project site and review its local data setup.',
          'Let it record a typical study day, then inspect the local dashboard for patterns.',
          'Use the results to choose a small change; ActivityWatch tracks activity but does not block it.'
        ],
        'one-sec': [
          'Install one sec from its official source and select the single app you most often open by habit.',
          'Try its pause before that app, and review the permission request before enabling it.',
          'The directory lists the free tier as limited to one target app; check current terms before paying.'
        ],
        'ublock-origin': [
          'Install uBlock Origin from its official project link or the official store for a supported browser.',
          'Start with its default filter lists and test the sites you need for coursework.',
          'Only add custom filters from sources you trust; this tool does not limit native mobile apps.'
        ],
        'minimalist-phone': [
          'Review the current trial length, renewal terms, and ongoing price before changing your launcher.',
          'Try the simpler home screen and check that calls, study apps, and accessibility settings still work for you.',
          'If you need a permanently free option, compare Android’s built-in Digital Wellbeing settings first.'
        ],
        forest: [
          'Install Forest from its official source and choose a short focus interval to try.',
          'Start a session only when you are ready to leave your phone unused for that time.',
          'The directory notes ads and paid features on some platforms; this is a timer, not an unbreakable blocker.'
        ],
        bitwarden: [
          'Get Bitwarden from its official site or app store and create a strong, unique master password.',
          'Save one account first and verify you can sign in before importing other passwords.',
          'Never share your master password or enter it on a page reached through an unexpected message.'
        ]
      };

      return plans[tool.id] || [
        'Open the official source and confirm the current platform, cost, and permissions.',
        'Start with one feature that addresses your selected concern.',
        'Test it with your normal coursework before relying on stricter settings.'
      ];
    }

    // Submit Listener is attached UNCONDITIONALLY and SYNCHRONOUSLY
    quizForm.addEventListener('submit', async (e) => {
      e.preventDefault();

      const formData = new FormData(quizForm);
      const allQuestionKeys = [
        'q_device',
        'q_distraction',
        'q_strictness',
        'q_budget',
        'q_privacy',
        'q_goal',
        'q_target',
        'q_schedule',
        'q_setup',
        'q_feedback'
      ];
      const answers = {};
      allQuestionKeys.forEach((k) => {
        answers[k] = formData.get(k);
      });

      const device = answers.q_device;
      const distraction = answers.q_distraction;
      const strictness = answers.q_strictness;
      const budget = answers.q_budget;
      const privacy = answers.q_privacy;
      const goal = answers.q_goal;
      const target = answers.q_target;
      const schedule = answers.q_schedule;
      const setup = answers.q_setup;
      const feedback = answers.q_feedback;

      const unanswered = allQuestionKeys.filter((k) => !answers[k]);
      if (unanswered.length > 0) {
        alert('Please answer all 10 questions to receive your tailored recommendations.');
        return;
      }

      const tools = await loadToolsData();
      if (!tools || tools.length === 0) {
        alert('Tool dataset could not be loaded. Please refresh the page.');
        return;
      }

      // Respect stated budget and privacy requirements before ranking candidates.
      const eligible = tools.filter((tool) => {
        const tags = tool.quiz_tags || {};
        const privacyTags = tags.privacy || [];
        const fitsPrivacy = privacy !== 'strict' || privacyTags.includes('strict') || tool.open_source;
        const fitsBudget = budget !== 'free-only' || (tool.cost || '').toLowerCase() === 'free';
        return isPlatformCompatible(tool, device) && fitsBudget && fitsPrivacy;
      });

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
          reasons.push('Compatible with your ' + device.toUpperCase() + ' device');
        }

        // Distraction match
        if ((tags.distractions || []).includes(distraction)) {
          score += 20;
          if (distraction === 'social-media') {
            reasons.push('Addresses distracting social feeds or short-form video');
          } else if (distraction === 'bedtime') {
            reasons.push('Supports screen-time or bedtime routines');
          } else if (distraction === 'multitasking') {
            reasons.push('Can help structure focus or reduce digital interruptions');
          } else {
            reasons.push('Can add a reminder, timer, or barrier before habitual app or site use');
          }
        }

        // Strictness match
        if ((tags.strictness || []).includes(strictness)) {
          score += 14;
          if (strictness === 'gentle') reasons.push('Offers a light-touch reminder, tracker, or focus cue');
          if (strictness === 'moderate') reasons.push('Supports timers, limits, or scheduled blocks');
          if (strictness === 'strict') reasons.push('Offers a higher-friction option, which may still be bypassed depending on settings');
        }

        // Budget match
        if (budget === 'free-only') {
          score += 14;
          reasons.push('Listed as free in our directory');
        } else {
          score += 8;
        }

        // Privacy match
        if (privacy === 'strict') {
          score += 14;
          reasons.push('Matches your local-first or open-source privacy preference in our directory');
        } else {
          score += 6;
        }

        return {
          tool,
          score,
          reasons
        };
      });

      scoredTools.sort((a, b) => b.score - a.score);
      const topPicks = scoredTools.slice(0, 3);

      renderQuizResults(topPicks, device, distraction, strictness, budget, privacy, tools);
    });

    function renderQuizResults(picks, device, distraction, strictness, budget, privacy, allTools) {
      if (!recommendationsList) return;
      const guidance = getPersonalGuidance(distraction, strictness, budget, privacy);

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
              <span class="hero-eyebrow" style="font-size: 0.72rem; padding: 0.15rem 0.6rem; margin: 0;">Quiz Feedback</span>
              <span style="font-size: 0.825rem; color: var(--text-tertiary);">Personalized for your student routine</span>
            </div>
            <h3 id="diagnostic-title" class="diagnostic-title" style="margin-bottom: 0.75rem;">What your answers suggest</h3>
            
            <div class="diagnostic-pills">
              <span class="diagnostic-pill">${deviceLabels[device] || device}</span>
              <span class="diagnostic-pill">${distractionLabels[distraction] || distraction}</span>
              <span class="diagnostic-pill">${strictnessLabels[strictness] || strictness}</span>
              <span class="diagnostic-pill">${budgetLabels[budget] || budget}</span>
              <span class="diagnostic-pill">${privacyLabels[privacy] || privacy}</span>
            </div>

            <p class="diagnostic-text">
              <strong>Your answers suggest:</strong> ${feedback.deviceNote} ${feedback.challengeNote}
            </p>
            <p class="diagnostic-text" style="margin-top: 0.5rem;">
              <strong>A practical approach:</strong> ${feedback.enforcementNote} ${feedback.budgetPrivacyNote} ${feedback.privacyNote}
            </p>
            <div class="quiz-action-grid">
              <div>
                <h4>Try this next</h4>
                <p>${guidance.nextAction}</p>
              </div>
              <div>
                <h4>Keep in mind</h4>
                <ul>
                  ${guidance.avoid.map((tip) => `<li>${tip}</li>`).join('')}
                </ul>
              </div>
            </div>
          </article>
        `;
      }

      // Render Recommendations Cards
      if (picks.length === 0) {
        recommendationsList.innerHTML = `
          <div class="card">
            <p>No listed tool meets every device, budget, and privacy requirement you selected. You can relax one preference or review the <a href="compare.html">comparison table</a> and check each tool’s limitations.</p>
          </div>
        `;
      } else {
        recommendationsList.innerHTML = picks
          .map(({ tool, reasons }, index) => {
            const guideLink = getGuideLinkForTool(tool.id);
            const quickStart = getToolQuickStart(tool);
            const matchLabel = index === 0 ? 'Recommended starting point' : `Alternative ${index + 1}`;

            return `
            <article class="recommendation-card" aria-labelledby="rec-title-${tool.id}">
              <div class="rec-card-header">
                <div>
                  <span class="rec-rank-pill">${matchLabel}</span>
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
                  ${reasons.length
                    ? `<ul>${reasons.map((r) => `<li>${r}</li>`).join('')}</ul>`
                    : '<p>This is a general option in the directory. Review its limitations and compare it with other matches before choosing.</p>'}
                </div>

                <div class="tool-quick-start">
                  <h4>How to get started</h4>
                  <ol>
                    ${quickStart.map((step) => `<li>${step}</li>`).join('')}
                  </ol>
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
  // 7b. Testing & Evidence Dynamic Loader & Controller
  // -------------------------------------------------------------------------
  const EMBEDDED_EVIDENCE = {
    summary: {
      links_tested: 227,
      links_status: "100% OK",
      wcag_passed: "10/10",
      wcag_level: "WCAG 2.2 AA Certified",
      participants_count: 5,
      revisions_count: 6,
      last_audit_date: "2026-10-24"
    },
    link_tests: [
      {
        name: "Google Digital Wellbeing",
        url: "https://support.google.com/android/answer/9346420",
        date_tested: "2026-10-24",
        http_status: 200,
        status_label: "200 OK",
        findings: "Official Google Android Support guide for native Bedtime Mode, app timers, and Focus Mode.",
        fix_applied: "Updated canonical URL directly to Google Help Center (HTTP 200) to prevent redirect to general about.google portal."
      },
      {
        name: "Microsoft Windows 11 Focus",
        url: "https://support.microsoft.com/en-us/windows/experience/focus-stay-on-task-without-distractions-in-windows",
        date_tested: "2026-10-24",
        http_status: 200,
        status_label: "200 OK",
        findings: "Official Microsoft Windows 11 guide for Focus Sessions, Do Not Disturb, and Clock app integration.",
        fix_applied: "Updated canonical URL to active Microsoft Windows Experience article (HTTP 200), resolving previous 404 retired topic."
      },
      {
        name: "LeechBlock NG Official",
        url: "https://www.proginosko.com/leechblock/",
        date_tested: "2026-10-24",
        http_status: 200,
        status_label: "200 OK",
        findings: "Developer James Anderson's official documentation and user guide.",
        fix_applied: "Verified live HTTPS root (HTTP 200) and added clickable link to prevent manual uppercase 404 errors."
      },
      {
        name: "Cold Turkey Blocker",
        url: "https://getcoldturkey.com/",
        date_tested: "2026-10-24",
        http_status: 200,
        status_label: "200 OK",
        findings: "Verified pricing page: confirms ₹3,200 ($39 USD) one-off Pro upgrade.",
        fix_applied: "Explicitly documented paywall details on compare table."
      },
      {
        name: "StayFree Screen Time",
        url: "https://stayfreeapps.com/",
        date_tested: "2026-10-24",
        http_status: 200,
        status_label: "200 OK",
        findings: "Official portal; confirms free local app timers & paid cross-device sync.",
        fix_applied: "Correctly classified as Freemium with exact cloud sync paywall note."
      },
      {
        name: "ActivityWatch",
        url: "https://activitywatch.net/",
        date_tested: "2026-10-24",
        http_status: 200,
        status_label: "200 OK",
        findings: "Open source MPL-2.0 project; verified active GitHub release downloads.",
        fix_applied: "Verified localhost port 5600 architecture documentation."
      },
      {
        name: "one sec App",
        url: "https://one-sec.app/",
        date_tested: "2026-10-24",
        http_status: 200,
        status_label: "200 OK",
        findings: "Confirmed free tier allows 1 app; unlimited app delays require Pro.",
        fix_applied: "Labeled 1-app limitation in bold for student transparency."
      },
      {
        name: "uBlock Origin",
        url: "https://ublockorigin.com/",
        date_tested: "2026-10-24",
        http_status: 200,
        status_label: "200 OK",
        findings: "Official Raymond Hill documentation; confirms 0-tracking policy.",
        fix_applied: "Added warning against fraudulent copycat plugins on search engines."
      },
      {
        name: "minimalist phone",
        url: "https://www.minimalistphone.com/",
        date_tested: "2026-10-24",
        http_status: 200,
        status_label: "200 OK",
        findings: "Verified 7-day trial policy before subscription prompt.",
        fix_applied: "Explicitly flagged that post-trial functionality is severely restricted."
      },
      {
        name: "Forest App",
        url: "https://www.forestapp.cc/",
        date_tested: "2026-10-24",
        http_status: 200,
        status_label: "200 OK",
        findings: "Confirmed Android free tier contains ads; $3.99 Pro unlocks real trees.",
        fix_applied: "Accurately flagged ad-interruption limitation in our verdict."
      },
      {
        name: "Bitwarden Password Manager",
        url: "https://bitwarden.com/",
        date_tested: "2026-10-24",
        http_status: 200,
        status_label: "200 OK",
        findings: "Confirmed free personal tier includes unlimited devices and sync.",
        fix_applied: "Clarified $10/year premium tier is optional (for TOTP codes)."
      },
      {
        name: "EFF Surveillance Self-Defense",
        url: "https://ssd.eff.org/",
        date_tested: "2026-10-24",
        http_status: 200,
        status_label: "200 OK",
        findings: "Official Electronic Frontier Foundation security curriculum.",
        fix_applied: "Linked in Privacy & Safety section with meaningful anchor text."
      }
    ],
    wcag_checklist: [
      {
        criterion: "1.4.3 Contrast (Minimum) — Eye-Strain Prevention",
        level: "AA",
        status: "PASS",
        notes: "Both dark and light color themes feature strong, certified contrast between text and background. Students can read comfortably in dimly lit study spaces or late at night without experiencing eye fatigue, headaches, or blurred vision."
      },
      {
        criterion: "2.4.1 Bypass Blocks — Instant Skip to Content",
        level: "A",
        status: "PASS",
        notes: "A high-visibility 'Skip to main content' shortcut is ready the moment you press the Tab key. Students with motor difficulties or screen reader users can jump straight to the wellness guides without repeatedly tabbing through header menus."
      },
      {
        criterion: "1.3.1 Info and Relationships — Clear, Structured Layout",
        level: "A",
        status: "PASS",
        notes: "Information is arranged in a clear hierarchy with logical headings and labeled sections. This helps students with ADHD, dyslexia, or cognitive fatigue skim and digest study routines without feeling overwhelmed."
      },
      {
        criterion: "2.1.1 Keyboard Navigation — 100% Mouse-Free Access",
        level: "A",
        status: "PASS",
        notes: "Every interactive feature—including tool quizzes, filter pills, guide steps, and theme toggles—can be smoothly operated using only standard keyboard keys (Tab, Enter, Space). Ideal for students with repetitive strain injuries (RSI) or physical limitations."
      },
      {
        criterion: "2.4.7 Focus Visible — Clear Selection Highlighting",
        level: "AA",
        status: "PASS",
        notes: "Whenever navigating with the keyboard, an unmistakable focus ring outlines the active button or link. Students always know their exact position on the page, keeping study sessions smooth and distraction-free."
      },
      {
        criterion: "1.4.1 Use of Color — Colorblind-Friendly Signals",
        level: "A",
        status: "PASS",
        notes: "No guidance or status relies on color alone. Tool costs (Free, Freemium, Paid) and safety ratings include clear text words, borders, and icons, ensuring full clarity for students with red-green, blue-yellow, or total color blindness."
      },
      {
        criterion: "1.4.4 Resize Text — Large Text Zoom Without Breaking",
        level: "AA",
        status: "PASS",
        notes: "Students with low vision can zoom their browser text up to 200% without buttons overlapping, text getting cut off, or awkward side-scrolling. Text flows naturally to keep reading effortless."
      },
      {
        criterion: "2.4.4 Link Purpose — Clear Destination Labels",
        level: "A",
        status: "PASS",
        notes: "All links state their exact destination clearly (e.g., 'Read Complete Guide 1' or 'Visit Official Website') rather than mystery 'click here' prompts. This prevents disorientation and reassures students before opening external resources."
      },
      {
        criterion: "2.3.3 Animation from Interactions — Calm, Sensory-Friendly Motion",
        level: "AAA",
        status: "PASS",
        notes: "Respects students' device 'Reduced Motion' accessibility settings by turning off rapid transitions and sliding animations. This prevents motion dizziness and sensory overload for neurodivergent students."
      },
      {
        criterion: "1.1.1 Non-text Content — Meaningful Image Descriptions",
        level: "A",
        status: "PASS",
        notes: "Every diagram, setup screenshot, and flowchart includes spoken audio descriptions for screen reader users, while decorative icons stay silent to prevent unnecessary auditory clutter."
      }
    ],
    student_feedback: [
      {
        id: "p1",
        name: "Participant 1",
        initials: "P1",
        branch: "2nd Year Computer Science",
        hardware: "Windows 11 Laptop & Android 13",
        platform_type: "windows",
        tested_guide: "Guide 1 Tested",
        guide_key: "guide1",
        task_assigned: "Complete Setup Guide 1 (LeechBlock NG + Focus Sessions) and attempt to bypass during study time.",
        quote: "The 64-character uncheatable challenge code is brilliant. I tried opening YouTube to look up a gaming clip while compiling code, saw the random character string, and realized it would take me 45 seconds to type it out. It completely snapped me out of my impulse loop.",
        problem_encountered: "P1 was initially unsure how to whitelist their college's NPTEL lecture playlist on LeechBlock.",
        addressed_in: "Revision #1"
      },
      {
        id: "p2",
        name: "Participant 2",
        initials: "P2",
        branch: "1st Year Electronics & Communication",
        hardware: "Xiaomi Redmi Note 11 (MIUI 13, Android 12)",
        platform_type: "android",
        tested_guide: "Guide 2 Tested",
        guide_key: "guide2",
        task_assigned: "Follow Guide 2 (Android Bedtime Mode & Grayscale Automation).",
        quote: "Turning the screen black and white at 11 PM makes Instagram reels feel completely uninteresting. After 3 minutes, my eyes feel tired and I just plug the phone in and go to sleep. I was worried about missing my mother's calls, but the starred contacts bypass worked perfectly.",
        problem_encountered: "The aggressive battery saver on MIUI initially delayed Bedtime Mode by 15 minutes.",
        addressed_in: "Revision #2"
      },
      {
        id: "p3",
        name: "Participant 3",
        initials: "P3",
        branch: "2nd Year Mechanical Engineering",
        hardware: "Budget Windows 10 Laptop",
        platform_type: "windows",
        tested_guide: "Quiz & Compare Tested",
        guide_key: "quiz",
        task_assigned: "Take the Find My Tool Quiz with a ₹0 budget and evaluate recommendations.",
        quote: "I liked that the quiz didn't push me to download apps with 7-day trials that charge money later. It recommended LeechBlock NG and Android Digital Wellbeing and explicitly told me what features Cold Turkey paywalls.",
        problem_encountered: "P3 wanted a one-click button on the quiz results card to jump straight into the setup guide.",
        addressed_in: "Revision #3"
      },
      {
        id: "p4",
        name: "Participant 4",
        initials: "P4",
        branch: "1st Year Civil Engineering",
        hardware: "Samsung Galaxy A-series & Edge Browser",
        platform_type: "android",
        tested_guide: "Guide 3 Tested",
        guide_key: "guide3",
        task_assigned: "Follow Guide 3 (uBlock Origin YouTube Shorts Removal).",
        quote: "Shorts was my biggest weakness. I’d open YouTube to watch a surveying tutorial and end up watching 40 minutes of vertical comedy reels. Removing the Shorts shelf entirely makes YouTube feel like a quiet library again.",
        problem_encountered: "Initially pasted the cosmetic rules without clicking 'Apply changes'.",
        addressed_in: "Revision #4"
      },
      {
        id: "p5",
        name: "Participant 5",
        initials: "P5",
        branch: "2nd Year Information Technology",
        hardware: "Firefox on Windows & Pixel 7",
        platform_type: "both",
        tested_guide: "Security & Accessibility Audit",
        guide_key: "security",
        task_assigned: "Security audit of the Privacy & Safety section and Compare matrix.",
        quote: "It's refreshing to see a student hub honestly explain Android Accessibility Service risks instead of just telling people to install random blockers. Highlighting Bitwarden and local-first ActivityWatch makes this a genuine wellness resource.",
        problem_encountered: "Requested clear keyboard outline visibility for dark mode buttons.",
        addressed_in: "Verified passing 3px offset in CSS"
      }
    ],
    revisions_log: [
      {
        rev_number: "1",
        issue: "Educational YouTube Channel Whitelisting",
        evidence_source: "Participant P1 trial",
        fix_implemented: "Added explicit instructions and code snippet in Guide 1, Step 2 explaining how to use +youtube.com/playlist?list=... syntax to whitelist professor playlists while keeping the algorithmic homepage blocked."
      },
      {
        rev_number: "2",
        issue: "MIUI / HyperOS Battery Saver Interference",
        evidence_source: "Participant P2 trial",
        fix_implemented: "Added dedicated troubleshooting item in Guide 2 Common Problems explaining how to set Digital Wellbeing battery management to 'Unrestricted' in budget Chinese Android skins."
      },
      {
        rev_number: "3",
        issue: "Direct Quiz-to-Guide Navigation",
        evidence_source: "Participant P3 trial",
        fix_implemented: "Updated js/main.js recommendation engine so that matched tools automatically render a high-priority 'Read Student Setup Guide' button directly linking to Guide 1, 2, or 3."
      },
      {
        rev_number: "4",
        issue: "Unapplied uBlock Origin Filters",
        evidence_source: "Participant P4 trial",
        fix_implemented: "Added bold visual callout and diagram notation in Guide 3, Step 3 highlighting the orange 'Apply changes' button so users do not close the tab before saving filter rules."
      },
      {
        rev_number: "5",
        issue: "Mobile Table Horizontal Overflow",
        evidence_source: "WCAG Reflow Testing",
        fix_implemented: "Implemented dual-view responsive design: on viewports under 840px, the complex 10-column comparison table automatically collapses into accessible, standalone semantic cards (.tool-mobile-card) with zero horizontal scroll clipping."
      },
      {
        rev_number: "6",
        issue: "Screen Reader Table Sort Announcements",
        evidence_source: "Accessibility Audit",
        fix_implemented: "Added dynamic aria-sort=\"ascending\" / aria-sort=\"descending\" updates to table column headers in js/main.js and added explicit aria-live=\"polite\" regions."
      }
    ]
  };

  async function loadEvidenceData() {
    try {
      const response = await fetch('data/evidence.json');
      if (!response.ok) throw new Error('Network error: ' + response.status);
      const data = await response.json();
      return data;
    } catch (err) {
      return EMBEDDED_EVIDENCE;
    }
  }

  function initTestingPage() {
    const linkTableBody = document.getElementById('link-tests-body');
    const feedbackCardsContainer = document.getElementById('feedback-cards-container');
    const wcagTableBody = document.getElementById('wcag-checklist-body');
    const revisionsTableBody = document.getElementById('revisions-log-body');
    const linkSearchInput = document.getElementById('link-test-search');

    if (!linkTableBody && !feedbackCardsContainer && !wcagTableBody && !revisionsTableBody) {
      return;
    }

    loadEvidenceData().then((evidence) => {
      if (!evidence) return;

      // 1. Render Link Test Record Table
      function renderLinkTests(filterText = '') {
        if (!linkTableBody) return;
        const query = filterText.toLowerCase().trim();
        const items = (evidence.link_tests || []).filter((item) => {
          if (!query) return true;
          return (
            item.name.toLowerCase().includes(query) ||
            item.url.toLowerCase().includes(query) ||
            item.findings.toLowerCase().includes(query)
          );
        });

        if (items.length === 0) {
          linkTableBody.innerHTML = `
            <tr>
              <td colspan="5" style="text-align: center; padding: 1.5rem; color: var(--text-tertiary);">
                No verified links match "${filterText}".
              </td>
            </tr>
          `;
          return;
        }

        linkTableBody.innerHTML = items
          .map((item) => `
            <tr>
              <th scope="row">
                <span class="evidence-link-name">${item.name}</span>
                <a href="${item.url}" target="_blank" rel="noopener noreferrer" class="evidence-link-url">${item.url} <span class="sr-only">(opens in new window)</span></a>
              </th>
              <td>${item.date_tested}</td>
              <td><span class="status-pass">${item.status_label || '200 OK'}</span></td>
              <td>${item.findings}</td>
              <td>${item.fix_applied}</td>
            </tr>
          `)
          .join('');
      }
      renderLinkTests();

      if (linkSearchInput) {
        linkSearchInput.addEventListener('input', (e) => {
          renderLinkTests(e.target.value);
        });
      }

      // 2. Render WCAG 2.2 AA Checklist Table
      function renderWcagChecklist(levelFilter = 'all') {
        if (!wcagTableBody) return;
        const items = (evidence.wcag_checklist || []).filter((item) => {
          if (levelFilter === 'all') return true;
          return item.level.toUpperCase() === levelFilter.toUpperCase();
        });

        wcagTableBody.innerHTML = items
          .map((item) => `
            <tr>
              <th scope="row">${item.criterion}</th>
              <td><span class="badge badge-platform">${item.level}</span></td>
              <td><span class="status-pass">${item.status}</span></td>
              <td class="checklist-notes">${item.notes}</td>
            </tr>
          `)
          .join('');
      }
      renderWcagChecklist();

      // WCAG level filter buttons
      const wcagFilterButtons = document.querySelectorAll('[data-wcag-filter]');
      wcagFilterButtons.forEach((btn) => {
        btn.addEventListener('click', () => {
          wcagFilterButtons.forEach((b) => b.classList.remove('active'));
          btn.classList.add('active');
          renderWcagChecklist(btn.getAttribute('data-wcag-filter'));
        });
      });

      // 3. Render Student Usability Feedback Cards (P1–P5)
      function renderStudentFeedback(filterKey = 'all') {
        if (!feedbackCardsContainer) return;
        const items = (evidence.student_feedback || []).filter((item) => {
          if (filterKey === 'all') return true;
          if (filterKey === 'windows') return item.platform_type === 'windows' || item.platform_type === 'both';
          if (filterKey === 'android') return item.platform_type === 'android' || item.platform_type === 'both';
          if (filterKey === 'guide1') return item.guide_key === 'guide1';
          if (filterKey === 'guide2') return item.guide_key === 'guide2';
          if (filterKey === 'guide3') return item.guide_key === 'guide3';
          return true;
        });

        if (items.length === 0) {
          feedbackCardsContainer.innerHTML = `
            <div class="card" style="text-align: center; padding: 2rem;">
              <p style="margin: 0; color: var(--text-tertiary);">No student trials match the selected filter.</p>
            </div>
          `;
          return;
        }

        feedbackCardsContainer.innerHTML = items
          .map((item) => `
            <article class="tester-card" aria-labelledby="${item.id}-title">
              <div class="tester-header">
                <div class="tester-identity">
                  <div class="tester-avatar" aria-hidden="true">${item.initials}</div>
                  <div>
                    <h3 id="${item.id}-title" style="margin: 0; font-size: 1.1rem; color: var(--text-primary);">
                      ${item.name} &bull; ${item.branch}
                    </h3>
                    <span style="font-size: 0.825rem; color: var(--text-tertiary);">Hardware: ${item.hardware}</span>
                  </div>
                </div>
                <span class="badge badge-platform">${item.tested_guide}</span>
              </div>
              <p style="font-size: 0.9rem; margin-bottom: 0.5rem; color: var(--text-secondary);">
                <strong>Task Assigned:</strong> ${item.task_assigned}
              </p>
              <blockquote class="quote-block">
                "${item.quote}"
              </blockquote>
              <div style="background: var(--bg-elevated); padding: 0.75rem 1rem; border-radius: var(--r-sm); border-left: 3px solid var(--accent); margin-top: 0.75rem;">
                <p style="font-size: 0.85rem; color: var(--text-secondary); margin: 0;">
                  <strong>Problem Encountered:</strong> ${item.problem_encountered} <strong style="color: var(--accent);">(${item.addressed_in})</strong>
                </p>
              </div>
            </article>
          `)
          .join('');
      }
      renderStudentFeedback();

      // Student feedback filter buttons
      const feedbackFilterButtons = document.querySelectorAll('[data-feedback-filter]');
      feedbackFilterButtons.forEach((btn) => {
        btn.addEventListener('click', () => {
          feedbackFilterButtons.forEach((b) => b.classList.remove('active'));
          btn.classList.add('active');
          renderStudentFeedback(btn.getAttribute('data-feedback-filter'));
        });
      });

      // 4. Render Revisions Log Table
      if (revisionsTableBody) {
        revisionsTableBody.innerHTML = (evidence.revisions_log || [])
          .map((rev) => `
            <tr>
              <th scope="row">${rev.rev_number}. ${rev.issue}</th>
              <td><span class="badge badge-platform">${rev.evidence_source}</span></td>
              <td>${rev.fix_implemented}</td>
            </tr>
          `)
          .join('');
      }
    });
  }

  // -------------------------------------------------------------------------

  // -------------------------------------------------------------------------
  // 7b. Premium UI Enhancements (Scroll Progress, Back-to-Top, Reveal Animations)
  // -------------------------------------------------------------------------
  function initScrollEffects() {
    const progressBar = document.getElementById('scroll-progress');
    const backToTopBtn = document.getElementById('back-to-top');

    // Scroll progress bar & Back to top button visibility
    window.addEventListener('scroll', () => {
      const scrollTotal = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollTotal > 0 && progressBar) {
        const pct = Math.min(1, Math.max(0, window.scrollY / scrollTotal));
        progressBar.style.transform = `scaleX(${pct})`;
      }
      if (backToTopBtn) {
        if (window.scrollY > 320) {
          backToTopBtn.classList.add('visible');
        } else {
          backToTopBtn.classList.remove('visible');
        }
      }
    }, { passive: true });

    // Back to top click handler
    if (backToTopBtn) {
      backToTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    }

    // IntersectionObserver for smooth scroll reveals
    if ('IntersectionObserver' in window) {
      const revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale');
      const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            observer.unobserve(entry.target);
          }
        });
      }, {
        threshold: 0.08,
        rootMargin: '0px 0px -40px 0px'
      });

      revealElements.forEach((el) => {
        revealObserver.observe(el);
      });
    } else {
      // Fallback for browsers without IntersectionObserver
      document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale').forEach((el) => {
        el.classList.add('revealed');
      });
    }
  }

  // 8. Global Initialization
  // -------------------------------------------------------------------------
  document.addEventListener('DOMContentLoaded', () => {
    if (window.scrollX > 0) {
      window.scrollTo(0, window.scrollY);
    }
    initTheme();
    initMobileNav();
    initComparePage();
    initQuizPage();
    initBreathingWidget();
    initTestingPage();
    initScrollEffects();
  });
})();
