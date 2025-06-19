
# 🧩 Memory Game — Zwei-Spieler Modus mit TypeScript

Willkommen zu meinem Memory-Spiel!  
Dies ist ein modernes, zweispielerfähiges Memory-Game, komplett umgesetzt mit **TypeScript**, **HTML**, **CSS**, und **Bootstrap 4**.

## 🚀 Features

- ✅ Zwei-Spieler-Modus mit Punkte-Tracking
- ✅ Dynamische Auswahl der Kartenpaare vor Spielstart
- ✅ Visuelle Hervorhebung des aktiven Spielers
- ✅ Schöne Flip-Animationen für Karten
- ✅ Match-Animation bei richtigen Paaren
- ✅ Übersichtliches Endgame-Summary mit Punktestand und Gewinneranzeige
- ✅ Responsive Design (Bootstrap 4)

---

## 🖥️ Projektstruktur

```
/src/               # TypeScript-Quellcode
  script.ts
/dist/              # Kompilierter JavaScript-Code
  script.js
index.html          # Haupt-HTML-Datei
styles.css          # Stylesheet für das Spiel
tsconfig.json       # TypeScript Konfiguration
README.md           # Projektbeschreibung
```

---

## 📦 Setup & Installation

### Voraussetzungen

- [Node.js](https://nodejs.org) installiert
- TypeScript Compiler (`tsc`) global oder lokal im Projekt

### Projekt starten

1. Repository klonen oder Projektordner öffnen.

2. Im Projektordner das Terminal öffnen und TypeScript installieren (falls noch nicht):

```bash
npm install -g typescript
```

3. TypeScript kompilieren:

```bash
npx tsc
```

Oder besser: Starte den Watch Mode für automatisches Kompilieren bei Änderungen:

```bash
npx tsc --watch
```

4. Starte ein lokales Development-Server, z.B. mit VSCode "Live Server" Extension  
   oder mit Node.js:

```bash
npx http-server .
```

5. Öffne im Browser:

```
http://localhost:8080
```

(Die genaue Adresse wird dir im Terminal angezeigt.)

---

## 🎮 Spielanleitung

1. Wähle die Anzahl der Paare (zwischen 1 und 10).
2. Klicke auf **Spiel starten**, um das Spielfeld zu generieren.
3. Spieler 1 beginnt das Spiel. Spieler wechseln sich ab.
4. Finde Paare, um Punkte zu sammeln. Der aktuelle Spieler wird visuell hervorgehoben!
5. Sobald alle Paare gefunden wurden, wird der Gewinner automatisch angezeigt.

---

## 🧩 Technologien

- TypeScript
- HTML5
- CSS3
- Bootstrap 4
- (Optional: Node.js für lokalen Server)

---

## 📈 Verbesserungsideen (Optional für Erweiterung)

- ⏱️ Timer für die Spieldauer
- 🏆 Highscore speichern mit LocalStorage
- 🎵 Soundeffekte für Flip / Treffer / Sieg
- 🖼️ Vorder- und Rückseite für echte Karteneffekte
- 🎉 Modal für Endgame Summary und „Nochmal spielen?“

---

## 🛠️ Mitwirkende

Erstellt mit ❤️ und TypeScript.

---

## 📄 Lizenz

Dieses Projekt ist frei nutzbar für Lern- und Übungszwecke.
