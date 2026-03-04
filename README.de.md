# WinScript

[![Downloads](https://img.shields.io/github/downloads/flick9000/winscript/total?style=for-the-badge)](https://github.com/flick9000/winscript/releases)
[![Release](https://img.shields.io/github/v/release/flick9000/winscript?style=for-the-badge&label=Neueste%20Version)](https://github.com/flick9000/winscript/releases/latest)
[![Discussions](https://img.shields.io/badge/Der%20Diskussion-beitreten-2D9F2D?style=for-the-badge&logo=github&logoColor=white)](https://github.com/flick9000/winscript/discussions)
[![Ko-Fi](https://shields.io/badge/ko--fi-Spenden-13c3ff?logo=kofi&style=for-the-badge)](https://ko-fi.com/flick9000)

WinScript ist ein leistungsstarkes, einfach zu bedienendes und schlankes Open-Source-Tool, das entwickelt wurde, um das Windows-Erlebnis zu verbessern und individuell anzupassen.\
Es bietet eine Vielzahl von Funktionen, darunter das Entfernen unnötiger Systembestandteile (Debloating), die Verbesserung der Privatsphäre, Leistungsoptimierungen sowie eine vereinfachte Installation von Anwendungen
<br>

![App Screenshot](/website/public/winscript.webp)

## Funktionen

### 🧹 Debloat

WinScript erlaubt es, sämtliche vorinstallierte Bloatware und unnötige Komponenten von Windows zu entfernen. Es können der Microsoft Store, OneDrive und Copilot deinstalliert, 
sowie Microsoft Edge entweder vollständig deinstalliert oder von unnötigen Bestandteilen bereinigt werden.
Es können auch Widgets sowie Taskleisten-Widgets, Windows Recall, Windows-Features und Consumer-Features deaktiviert werden.

### 🔒 Datenschutz
Es kann auch der Zugang zu persönlichen Daten für Apps gesperrt werden, das Synchronisieren von Themes und Passwörtern im Hintergrund verhindert, und die Nutzung von Tracking wie Aktivitätsfeeds, Bildschirmaufnahmen und standortbasierten Funktionen deaktiviert werden.
Der Telemetrie-Bereich ermöglicht es, die Datenaufzeichnung durch Microsoft für Windows, Office, Updates, die Suche und das Feedbackportal zu beenden. Die Aufzeichnung von Daten durch Drittanbieter-Apps (Adobe, VS Code, Google, Nvidia und weitere) kann ebenfalls blockiert werden.
Außerdem können die cloudbasierte Spracherkennung sowie biometrische Dienste deaktiviert werden, sowie vieles mehr.

### ⚡ Performance
Der Energieplan „Ultimate Performance“ kann aktiviert, Hintergrunddienste auf manuellen Start gesetzt und Maus-Eingabeverzögerungen reduziert werden.
Zudem lassen sich Funktionen wie Superfetch, HAGS, die Speicheroptimierung (Storage Sense), die Windows-Suchindizierung und der Ruhezustand deaktivieren.

Darüber hinaus können Sicherheitseinstellungen gezielt angepasst werden, um die Systemleistung zu steigern – beispielsweise durch Begrenzung der
CPU-Auslastung von Windows Defender, Deaktivierung der Core Isolation sowie weitere Feinoptimierungen.

### 📦 Appinstallation
Im Bereich "Browse Apps" können eine Menge Anwendungen in wenigen Klicks installiert werden. Die Auswahl ist dabei nicht auf Browser, Hilfsprogramme, Entwicklertools oder Medienplayer beschränkt.
WinScript erstellt automatisch ein passendes Installationsskript für den bevorzugten Paketmanager (winget oder Chocolatey) und führt die Installation eigenständig durch.

## Installation

> [!Warning]
> WinScript muss als Administrator ausgeführt werden, damit alles korrekt funktioniert.


🖥️ **Startbefehl**:

```
irm "https://winscript.cc/irm" | iex
```

🖥️ **Installation über winget**:

```
winget install winscript
```

## Nutzung

### 📋 Voraussetzungen

- NodeJS (LTS)
```
winget install --id OpenJS.NodeJS.LTS
```

- Rust & Cargo
```
winget install --id Rustlang.Rustup
```

### 🛠️ Kompilieren der App

- Repository klonen
```
git clone https://github.com/flick9000/winscript.git
cd winscript/app
```

- Abhängigkeiten installieren
```
npm install
```

- Kompilieren
```
npm run tauri build
```

Nach der Kompilierung ist die fertige ausführbare Datei im Ordner `src-tauri/target/release` abrufbar.

## Hilfe

### 👷 Mitwirken

Unterstützung ist immer gern gesehen! Forke das Repository und erstelle einen Pull-Request mit den vorgenommenen Änderungen.

1. Fork erstellen
2. Eine neue Feature-Branch erstellen
3. Änderungen committen
4. Änderungen in die Branch pushen
5. Einen neuen Pull-Request erstellen

### ⭐ Sterne

Hinterlasse gerne einen Stern, um das Projekt zu unterstützen und noch mehr Menschen zu erreichen!

### ☕ Spenden

Wenn du das Projekt unterstützen willst, [kauf gerne einen Kaffee!](https://ko-fi.com/flick9000)

## Lizenz

📒 Dieses Projekt ist unter GNU GPLv3 lizenziert. Weitere Informationen gibt es in der Datei [LICENSE](LICENSE).




