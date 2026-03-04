# WinScript

[![Downloads](https://img.shields.io/github/downloads/flick9000/winscript/total?style=for-the-badge)](https://github.com/flick9000/winscript/releases)
[![Release](https://img.shields.io/github/v/release/flick9000/winscript?style=for-the-badge&label=Letzter%20release)](https://github.com/flick9000/winscript/releases/latest)
[![Discussions](https://img.shields.io/badge/Der%20Diskussion-beitreten-2D9F2D?style=for-the-badge&logo=github&logoColor=white)](https://github.com/flick9000/winscript/discussions)
[![Ko-Fi](https://shields.io/badge/ko--fi-Spenden-13c3ff?logo=kofi&style=for-the-badge)](https://ko-fi.com/flick9000)

WinScript ist ein leistungsstarkes, einfach zu bedienendes und schlankes Open-Source-Tool, das entwickelt wurde, um dein Windows-Erlebnis zu verbessern und individuell anzupassen. 
Es bietet eine Vielzahl von Funktionen, darunter das Entfernen unnötiger Systembestandteile (Debloating), die Verbesserung der Privatsphäre, Performance-Optimierungen sowie eine 
vereinfachte Installation von Anwendungen.
<br>

![App Screenshot](/website/public/winscript.webp)

## Funktionen

### 🧹 Debloat

WinScript erlaubt es, sämtliche vorinstallierte Bloatware und unnötige Komponente von Windows zu entfernen. Es können der Microsoft Store, OneDrive und Copilot deinstalliert, sowie Microsoft Edge deinstalliert oder von Ballast befreit werden.
Es können auch Widgets sowie Taskleisten-Widgets, Windows Recall, Windows-Features und Kundenfeatures deaktiviert werden.

### 🔒 Datenschutz
Es kann auch der Zugang zu persönlichen Daten für Apps gesperrt werden, das Synchronieren von Themes und Passwörtern im Hintergrund verhindert, und die Nutzung von Tracking wie Aktivitätsfeeds, Bildschirmaufnahmen und standortbasierten Funktionen deaktiviert werden.
Der Telemetrie-Bereich ermöglichst es, die Datenaufzeichnung durch Microsoft für Windows, Office, Updates, Suchen und Feedback zu beenden. Die Aufzeichnung von Daten durch Drittanbieterapps (Adobe, VS Code, Google, Nvidia, usw.) kann ebenfalls blockiert werden.
Außerdem können die cloudbasierte Spracherkennung sowie biometrische Services ausgeschaltet werden, sowie vieles mehr.

### ⚡ Performance
Der Energieplan „Ultimate Performance“ kann aktiviert, Hintergrunddienste auf manuellen Start gesetzt und Maus-Eingabeverzögerungen reduziert werden.
Zudem lassen sich Funktionen wie Superfetch, HAGS, Speicheroptimierung (Storage Sense), Windows-Suchindizierung und der Ruhezustand deaktivieren.

Darüber hinaus können Sicherheitseinstellungen gezielt angepasst werden, um die Systemleistung zu steigern – beispielsweise durch Begrenzung der
CPU-Auslastung von Windows Defender, Deaktivierung der Core Isolation sowie weitere Feinoptimierungen.

### 📦 Appinstallation
Im Bereich "Browse Apps" können eine Menge Anwendungen in wenigen Klicks installiert werden. Die Auswahl ist dabei nicht auf Browser, Hilfsanwendungen, Entwicklertools und Medienplayer begrenzt. 
WinScript erstellt dafür ein passendes Installationsscript für den bevorzugten Paketmanager winget oder Chocolatey und fürhrt eine automatische Installation durch.

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

Unterstützung ist immer gern gesehen! Forke die Repository und erstelle einen Pull-Request mit den vorgenommenen Änderungen.

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

📒 Dieses Projekt ist unter GNU GPLv3 lizensiert. Weitere Informationen gibt es in der Datei [LICENSE](LICENSE).




