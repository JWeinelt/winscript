const STORAGE_KEY = "winscript.lang";
const DEFAULT_LANG = "en";
const AVAILABLE_LANGUAGES = ["en", "de", "de-formal"]


const TRANSLATIONS = {
  de: {
    program: {
      title: "WinScript"
    },

    ui: {
      language: "Sprache",
      uncheckAll: "Nichts auswählen",
      import: "Import",
      export: "Export",
      apply: "Anwenden",
      download: "Herunterladen",
      run: "Ausführen",
      copyToClipboard: "In die Zwischenablage kopieren",
      copy: "Kopieren",
      addApp: "Anwendungen hinzufügen",
      browseApps: "Anwendungen durchsuchen",
      runScript: "Skript ausführen",
      downloadScript: "Skript herunterladen",
      searchApp: "Nach App suchen",
      enterPackageId: "Paket-ID eingeben",
      manualPackagesAdded: "Manuelle Pakete hinzugefügt:",
      updateAvailable: "Update verfügbar",
      update: "Aktualisieren",
      later: "Später",
      goToGithub: "Zu GitHub gehen",
      open: "Öffnen",
      on: "Ein",
      off: "Aus"
    },

    navigation: {
      presets: "Voreinstellungen",
      packageManager: "Paketmanager",
      drivers: "Treiber",
      browsers: "Browser",
      compression: "Komprimieren",
      utilities: "Hilfsprogramme",
      proTools: "Professionelle Programme",
      microsoftTools: "Von Microsoft",
      multimedia: "Multimedia",
      communication: "Kommunikation",
      imaging: "Bildbearbeitung",
      documents: "Dokumente",
      security: "Sicherheit",
      forDevelopers: "Für Entwickler",
      shortcuts: "Abkürzungen",
      windowsSettings: "Windowseinstellungen",
      tools: "Werkzeuge",
      debloat: "Debloat",
      privacy: "Privatsphäre",
      telemetry: "Telemetrie",
      gaming: "Gaming",
      performance: "Leistungsoptimierung",
      miscellaneous: "Weiteres",
      cleanup: "Aufräumen",
      repair: "Reparieren",
      windowsApps: "Windows-Apps",
      windowsFeatures: "Windows-Features",
      windowsAI: "Windows-KI"
    },

    presets: {
      basic: "Basiseinstellung",
      strict: "Strikte Einstellung",
      extreme: "Extreme Einstellung",
      recommendedDescription: "Gute Balance zwischen Datenschutz, Leistung und Funktionalität (empfohlen)",
      strictDescription: "Starker Fokus auf Datenschutz und Leistung, deaktiviert nicht-essentielle Funktionen.",
      extremeDescription: "Nicht empfohlen. Nur nutzen, wenn du weißt, was du tust.",
      overrideWarning: "Die Auswahl einer Voreinstellung überschreibt alle aktuellen Einstellungen.",
      compareInfo: "Du kannst eine Tabelle, die die Voreinstellungen vergleicht, hier finden."
    },

    powerPlan: {
      balanced: "Ausgeglichen",
      highPerformance: "Hohe Leistung",
      ultimatePerformance: "Beste Leistung"
    },

    dns: {
      google: "Google DNS",
      cloudflare: "Cloudflare DNS",
      quad9: "Quad9",
      openDns: "OpenDNS",
      adGuard: "AdGuard"
    },

    dialogs: {
      updateQuestion: "Ein Update ist verfügbar. Möchtest du jetzt aktualisieren?",
      restorePointTitle: "Wiederherstellungspunkt",
      restorePointQuestion: "Möchtest du einen Wiederherstellungspunkt erstellen?"
    }
  },

  en: {
    program: {
      title: "WinScript"
    },

    ui: {
      language: "Language",
      uncheckAll: "Uncheck All",
      import: "Import",
      export: "Export",
      apply: "Apply",
      download: "Download",
      run: "Run",
      copyToClipboard: "Copy to Clipboard",
      copy: "Copy",
      addApp: "Add App",
      browseApps: "Browse Apps",
      runScript: "Run Script",
      downloadScript: "Download Script",
      searchApp: "Search an app",
      enterPackageId: "Enter package id",
      manualPackagesAdded: "Manual packages added:",
      updateAvailable: "Update Available",
      update: "Update",
      later: "Later",
      goToGithub: "Go to GitHub",
      open: "Open",
      on: "On",
      off: "Off"
    },

    navigation: {
      presets: "Presets",
      packageManager: "Package Manager",
      drivers: "Drivers",
      browsers: "Browsers",
      compression: "Compression",
      utilities: "Utilities",
      proTools: "Pro Tools",
      microsoftTools: "Microsoft Tools",
      multimedia: "Multimedia",
      communication: "Communication",
      imaging: "Imaging",
      documents: "Documents",
      security: "Security",
      forDevelopers: "For Developers",
      shortcuts: "Shortcuts",
      windowsSettings: "Windows Settings",
      tools: "Tools",
      debloat: "Debloat",
      privacy: "Privacy",
      telemetry: "Telemetry",
      gaming: "Gaming",
      performance: "Performance",
      miscellaneous: "Miscellaneous",
      cleanup: "Clean-up",
      repair: "Repair",
      windowsApps: "Windows Apps",
      windowsFeatures: "Windows Features",
      windowsAI: "Windows AI"
    },

    presets: {
      basic: "Basic Preset",
      strict: "Strict Preset",
      extreme: "Extreme Preset",
      recommendedDescription: "Recommended, good balance between privacy, performance and functionality.",
      strictDescription: "Heavy focus on privacy and performance, disables some non-essential features.",
      extremeDescription: "Not recommended, use only if you know what you're doing.",
      overrideWarning: "Selecting a preset will override your current settings.",
      compareInfo: "You can find a table comparing the presets here."
    },

    powerPlan: {
      balanced: "Balanced",
      highPerformance: "High Performance",
      ultimatePerformance: "Ultimate Performance"
    },

    dns: {
      google: "Google DNS",
      cloudflare: "Cloudflare DNS",
      quad9: "Quad9",
      openDns: "OpenDNS",
      adGuard: "AdGuard"
    },

    dialogs: {
      updateQuestion: "An update is available. Do you want to update?",
      restorePointTitle: "Restore Point",
      restorePointQuestion: "Do you want to create a restore point?"
    }
  }
}

//TODO: Move to upper key variable
const ACTION_TRANSLATIONS = {
  Install: "Installieren",
  Disable: "Deaktivieren",
  Remove: "Entfernen",
  Run: "Ausführen",
  Set: "Setzen",
  Enable: "Aktivieren",
  Move: "Verschieben",
  Limit: "Limitieren",
  Manage: "Verwalten",
  Choose: "Auswählen",
  Extend: "Erweitern",
  Block: "Blockieren",
};

const FRAGMENT_TRANSLATIONS = {
  "App Access to": "App-Zugriff auf",
  "your Contacts": "Deine Kontakte",
  "your Call History": "Deine Anrufhistorie",
  "your Messages": "Deine Nachrichten",
  Location: "Standort",
  Camera: "Kamera",
  Microphone: "Mikrofon",
  "File System": "Dateisystem",
  "Account Information": "Kontoinformation",
  Notifications: "Benachrichtigung",
  Email: "E-Mail",
  Tasks: "Aufgaben",
  "Diagnostic Data": "Diagnosedaten",
  "Voice Activation": "Sprachaktivierung",
  Phone: "Telefon",
  "Trusted Devices": "Vertrauenswürdige Geräte",
  Calendar: "Kalender",
  "Motion Data": "Bewegungsdaten",
  Radios: "Radios",
  Recordings: "Aufnahmen",
  "Screenshot Borders": "Screenshot-Ränder",
  "AI Generation": "KI-Generierung",
  "Windows Telemetry": "Windows-Telemetrie",
  "Windows Update Telemetry": "Telemetrie für Windows-Updates",
  "Windows Search Telemetry": "Telemetrie für die Windows-Suche",
  "Office Telemetry": "Telemetrie für Office",
  "Nvidia Telemetry": "Telemetrie für Nvidia",
  "VS Code Telemetry": "Telemetrie für VS Code",
  "Powershell Telemetry": "Telemetrie für PowerShell",
  "Media Player": "Medienplayer",
  Recall: "Recall",
  Copilot: "Copilot",
};

function normalize(text) {
  return text.replace(/\s+/g, " ").trim();
}

function getTranslation(lang, key) {
  const keys = key.split(".");
  let current = TRANSLATIONS[lang];

  for (const part of keys) {
    if (!current) return null;
    current = current[part];
  }

  return typeof current === "string" ? current : null;
}

function applyKeyTranslations(lang) {
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    const translated = getTranslation(lang, key);

    if (translated) {
      element.textContent = translated;
    }
  });
}

function translateValue(text, lang) {
  if (lang === DEFAULT_LANG) {
    return text;
  }

  const normalized = normalize(text);

  const direct = TRANSLATIONS[lang]?.flat?.[normalized];
  if (direct) {
    return direct;
  }

  return normalized;
}

function updateHeaderFromActiveTab() {
  const header = document.getElementById("content-header");
  const activeTab = document.querySelector(".sidebar-entry.active h1");

  if (header && activeTab?.textContent?.trim()) {
    header.textContent = activeTab.textContent.trim();
  }
}

function setLanguage(lang) {
  const safeLang = lang === "ru" ? "ru" : "en";
  setStoredLanguage(safeLang);

  document.documentElement.setAttribute("lang", safeLang);

  const selector = document.getElementById("languageSelect");
  if (selector) {
    selector.value = safeLang;
  }

  applyTranslations(safeLang);
  updateHeaderFromActiveTab();

  window.dispatchEvent(new CustomEvent("winscript:languagechange", { detail: { lang: safeLang } }));
}

function getLanguage() {
  return getStoredLanguage();
}

function t(key) {
  return translateValue(key, getLanguage());
}

function initLanguageSelector() {
  const selector = document.getElementById("languageSelect");
  if (!selector) {
    return;
  }

  selector.value = getLanguage();
  selector.addEventListener("change", (event) => {
    setLanguage(event.target.value);
  });
}

window.i18n = {
  t,
  getLanguage,
  setLanguage,
  applyTranslations: () => applyTranslations(getLanguage()),
};

document.addEventListener("DOMContentLoaded", () => {
  initLanguageSelector();
  setLanguage(getLanguage());
});
