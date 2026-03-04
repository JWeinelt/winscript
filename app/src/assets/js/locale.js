const STORAGE_KEY = "winscript.lang";
const DEFAULT_LANG = "en";

//TODO: Use keys for easier translation
const TRANSLATIONS = {
  de: {
    WinScript: "WinScript",
    Language: "Sprache",
    "Uncheck All": "Nichts auswählen",
    Import: "Import",
    Export: "Export",
    Presets: "Voreinstellungen",
    "Basic Preset": "Basiseinstellung",
    "Strict Preset": "Strikte Einstellung",
    "Extreme Preset": "Extreme Einstellung",
    Apply: "Anwenden",
    Download: "Herunterladen",
    Run: "Ausführen",
    "Copy to Clipboard": "In die Zwischenablage kopieren",
    Copy: "Kopieren",
    "Add App": "Anwendungen hinzufügen",
    "Package Manager": "Paketmanager",
    Drivers: "Treiber",
    Browsers: "Browser",
    Compression: "Komprimieren",
    Utilities: "Hilfsprogramme",
    "Pro Tools": "Professionelle Programme",
    "Microsoft Tools": "Von Microsoft",
    Multimedia: "Multimedia",
    Communication: "Kommunikation",
    Imaging: "Bildbearbeitung",
    Documents: "Dokumente",
    Security: "Sicherheit",
    "For Developers": "Für Entwickler",
    Shortcuts: "Abkürzungen",
    "Windows Settings": "Windowseinstellungen",
    "Device Manager": "Gerätemanager",
    "Control Panel": "Systemeinstellungen",
    "Virtual Memory": "Virtueller Arbeitsspeicher",
    "Visual Effects": "Visuelle Effekte",
    MSConfig: "MSConfig",
    Tools: "Werkzeuge",
    Debloat: "Debloat",
    Privacy: "Privatsphäre",
    Telemetry: "Telemetrie",
    Gaming: "Gaming",
    Performance: "Leistungsoptimierung",
    Miscellanous: "Weiteres",
    "Browse Apps": "Anwendungen durchsuchen",
    "Run Script": "Skript ausführen",
    "Download Script": "Skript herunterladen",
    "Clean-up": "Aufräumen",
    Repair: "Reparieren",
    "Windows Apps": "Windows-Apps",
    "Windows Features": "Windows-Features",
    "Windows AI": "Windows-KI",
    "Disable App Access": "Anwendungszugriff deaktivieren",
    "Disable 3rd-Party Telemetry": "Telemetrie von Drittanbieter-Apps deaktivieren",
    "Manage Windows Update": "Windows-Updates verwalten",
    "Set as DNS": "Als DNS setzen",
    "Choose Power Plan": "Energieplan wählen",
    "Set Services to Manual": "Dienste auf manuell setzen",
    "Default Settings": "Standardeinstellungen",
    "Security Updates": "Sicherheitsupdates",
    "Disable Updates": "Updates deaktivieren",
    Balanced: "Ausgeglichen",
    "High Performance": "Hohe Leistung",
    "Ultimate Performance": "Beste Leistung",
    "Google DNS": "Google DNS",
    "Cloudflare DNS": "Cloudflare DNS",
    Quad9: "Quad9",
    OpenDNS: "OpenDNS",
    AdGuard: "AdGuard",
    "Search an app": "Nach App suchen",
    "Enter package id": "Paket-ID eingeben",
    "Manual packages added:": "Manuelle Pakete hinzugefügt:",
    "Shortcuts to various system settings and tools.":
      "Kurzbefehle zu verschiedenen Systemeinstellungen und -Werkzeugen.",
    "Free up disk space by cleaning up temporary files.":
      "Speicherplatz durch das Entfernen von temporären Dateien freigeben.",
    "Verify system files integrity and fix corrupt files.":
      "Systemdateien auf Beschädigungen überprüfen und reparieren.",
    "Creates a restore point before applying the scripts.":
      "Erstellt einen Wiederherstellungspunkt, bevor die Skripte angewendet werden.",
    "Clears Chrome, Edge, Brave and Firefox history.":
      "Löscht den Brwoserverlauf von Chrome, Edge, Brave und Firefox.",
    "Resets network IP address and cache.": "Setzt die Netzwerk-IP-Adresse und den -Cache zurück.",
    "Runs Microsoft Activation Scripts.": "Führt Aktivierungsskripte von Microsoft aus.",
    "Uninstall pre-installed apps.": "Vorinstallierte Apps entfernen.",
    "Disable pre-installed features.": "Vorinstallierte Features deaktivieren.",
    "Disable Windows AI features.": "Windows-KI-Features deaktivieren.",
    "You will not be able to uninstall apps from the Microsoft Store.":
      "Es können keine Apps vom Microsoft Store deinstalliert werden.",
    "Disables automatic updates for Microsoft Store apps.":
      "Automatische Updates von Apps aus dem Microsoft Store deaktivieren.",
    "Be sure to backup your files before removing it.":
      "Mache unbedingt ein Backup deiner Dateien, bevor sie entfernt werden.",
    "Disables telemetry and annoyances in Edge.": "Deaktiviert Telemetrie und Unterbrechungen in Edge.",
    "Uninstalls the Edge Chromium browser.": "Deinstalliert den Edge-Chromium-Browser.",
    "Removes the Web Experience package.": "Entfernt das Weberfahrungs-Paket.",
    "Disables taskbar widgets such as Task View, Weather etc.":
      "Deaktiviert Taskleistenwidgets wie die aktive Ansicht, das Wetter und weitere",
    "Limit app access to data, files and system.":
      "Limitiert den Zugang zu Daten und das System für Apps.",
    "Extends Windows Update pause limit to 20 years.":
      "Setzt das Limit für die Pause von Windows-Updates auf 20 Jahre.",
    "Disables sync of settings across Windows devices.":
      "Deaktiviert die Synchronisierung von Einstellungen zwischen Windows-Geräten.",
    "Delets recent clipboard, searches and run history.": //TODO: Use keys to make typos independant from translations
      "Löscht die Zwischenablage, letzte Suchen und die Ausführungshistorie.",
    "Disables the notifications center in the taskbar.":
      "Deaktiviert das Infocenter in der Taskleiste.",
    "Stops automatic map downloads in background.":
      "Stoppt den automatischen Download von Maps im Hintergrund.",
    "Removes the default0 user created at the OOBE stage.":
      "Entfernt den Benutzer default0 im OOBE-Stage.",
    "Choose what data is sent to Microsoft.": "Wähle aus, welche Daten an Microsoft gesendet werden dürfen.",
    "Choose what data is sent to 3rd-party software.":
      "Wähle aus, welche Daten an Drittanbieter-Apps gesendet werden dürfen.",
    "Starts services only when they are needed.": "Startet Dienste nur dann, wenn sie benötigt werden.",
    "May improve performance at the cost of aesthetics.":
      "Verbessert die Leistung auf Kosten des Aussehens und der Erfahrung.",
    "Disables Hardware-Accelerated GPU Scheduling.":
      "Deaktiviert Hardware-Beschleunigung mit der GPU.",
    "Disables the 400ms menu show and hover delay.":
      "Deaktiviert die Verzögerung von 400ms bei Menüs.",
    "Limits Defender maximum CPU usage at 25%.":
      "Limitiert die maximale CPU-Nutzung von Microsoft Defender auf 25%.",
    "May improve performance at the cost of security.":
      "Verbessert die Leistung auf Kosten der Sicherheit.",
    "Improves performance at the cost of app startup time.":
      "Verbessert die Leistung auf Kosten der Anwendungsstartzeit",
    "Automatically deletes temporary files.": "Entfernt automatisch temporäre Dateien.",
    "Drive indexing will stop working.": "Festplattenindizierung wird nicht mehr funtkionieren.",
    "Not recommended on laptops.": "Nicht empfohlen für Laptops.",
    "Review [ALL] the scripts one by one before executing it.":
      "Alle Skripte überprüfen, bevor sie ausgeführt werden.",
    "You can find a table comparing the presets here.":
      "Du kannst eine Tabelle, die die Voreinstellungen vergleicht, hier finden.",
    "Selecting a preset will override your current settings.":
      "Die Auswahl einer Voreinstellung überschreibt alle aktuellen Einstellungen.",
    "Reccomended, good balance beetween privacy/performance and functionality.":
      "Gute Balance zwischen Datenschutz, Leistungsoptimierung und Funktionsweise (empfohlen)",
    "Heavy focus on privacy and performance, it disables some non-essential features.":
      "Starker Fokus auf Datenschutz und Leistungsoptimierung, deaktiviert nicht-essentielle Funktionen.",
    "Not reccomended, use only if you know what you're doing.":
      "Nicht empfohlen. Nutze dies nur, wenn du weißt, was du tust!",
    On: "Ein",
    Off: "Aus",
    Open: "Öffnen",
    "Update Available": "Update verfügbar",
    Update: "Aktualisieren",
    Later: "Später",
    "Go to GitHub": "Zu GitHub gehen",
    "An update is available. Do you want to update?": "Ein Update ist verfügbar. Möchtest du jetzt aktualisieren?",
    "Restore Point": "Wiederherstellungspunkt laden",
    "Do you want to create a restore point?": "Möchtest du einen Wiederherstellungspunkt erstellen?",
  },
};

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

function translateFragment(fragment) {
  let result = fragment;

  Object.keys(FRAGMENT_TRANSLATIONS)
    .sort((first, second) => second.length - first.length)
    .forEach((key) => {
      result = result.replaceAll(key, FRAGMENT_TRANSLATIONS[key]);
    });

  return result;
}

function getStoredLanguage() {
  try {
    const value = localStorage.getItem(STORAGE_KEY);
    return value === "de" || value === "en" ? value : DEFAULT_LANG; // TODO: Use list of language for easier translation in future
  } catch {
    return DEFAULT_LANG;
  }
}

function setStoredLanguage(lang) {
  try {
    localStorage.setItem(STORAGE_KEY, lang);
  } catch {
    return;
  }
}

function translateValue(text, lang) {
  const normalizedText = text.replace(/\s+/g, " ").trim();

  if (lang === "en") {
    return normalizedText;
  }

  const direct = TRANSLATIONS[lang]?.[normalizedText];
  if (direct) {
    return direct;
  }

  const actionMatch = normalizedText.match(
    /^(Install|Disable|Remove|Run|Set|Enable|Move|Limit|Manage|Choose|Extend|Block)\s+(.+)$/,
  );

  if (actionMatch) {
    const [, action, rest] = actionMatch;
    const translatedAction = ACTION_TRANSLATIONS[action];
    return `${translatedAction} ${translateFragment(rest)}`;
  }

  if (normalizedText.startsWith("Disables ")) {
    return `Отключает ${translateFragment(normalizedText.slice(9))}`;
  }

  if (normalizedText.startsWith("Uninstalls ")) {
    return `Удаляет ${translateFragment(normalizedText.slice(11))}`;
  }

  if (normalizedText.startsWith("Removes ")) {
    return `Удаляет ${translateFragment(normalizedText.slice(8))}`;
  }

  if (normalizedText.startsWith("Creates ")) {
    return `Создает ${translateFragment(normalizedText.slice(8))}`;
  }

  return translateFragment(normalizedText);
}

function applyTextNodeTranslation(node, lang) {
  if (!node || !node.nodeValue || !node.nodeValue.trim()) {
    return;
  }

  const parent = node.parentElement;
  if (!parent) {
    return;
  }

  if (parent.closest("pre, code, script, style, textarea, [data-no-i18n], #languageSelect")) {
    return;
  }

  if (typeof node.__winscriptOriginal !== "string") {
    node.__winscriptOriginal = node.nodeValue;
  }

  const original = node.__winscriptOriginal;
  const trimmed = original.replace(/\s+/g, " ").trim();
  const translated = translateValue(trimmed, lang);

  if (trimmed === translated) {
    node.nodeValue = original;
    return;
  }

  const leading = original.match(/^\s*/)?.[0] ?? "";
  const trailing = original.match(/\s*$/)?.[0] ?? "";
  node.nodeValue = `${leading}${translated}${trailing}`;
}

function applyAttributeTranslation(selector, attrName, dataKey, lang) {
  document.querySelectorAll(selector).forEach((element) => {
    if (!(element instanceof HTMLElement)) {
      return;
    }

    if (!element.dataset[dataKey]) {
      element.dataset[dataKey] = element.getAttribute(attrName) || "";
    }

    const original = element.dataset[dataKey] || "";
    if (!original) {
      return;
    }

    const translated = translateValue(original, lang);
    element.setAttribute(attrName, translated);
  });
}

function applyTranslations(lang) {
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  let node = walker.nextNode();

  while (node) {
    applyTextNodeTranslation(node, lang);
    node = walker.nextNode();
  }

  applyAttributeTranslation("[placeholder]", "placeholder", "winscriptPlaceholder", lang);
  applyAttributeTranslation("[title]", "title", "winscriptTitle", lang);
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
