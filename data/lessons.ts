import { Lesson } from '../types';

export const lessons: Lesson[] = [
  {
    id: 'intro',
    title: 'Wat is Vibe-coding?',
    category: 'Concepten',
    readTime: '3 min',
    content: `
# Welkom in de wereld van Vibe-coding

Vibe-coding is niet zomaar programmeren; het is een nieuwe manier van werken. Waar traditionele ontwikkelaars zich focussen op elke puntkomma en haakje, focus jij je als Vibe-coder op het **probleem** en de **oplossing**. De AI doet het zware werk.

### De Kernprincipes
1.  **Intentie boven Syntax**: Het gaat erom *wat* je wilt bouwen, niet *hoe* je het precies schrijft in code.
2.  **Iteratief Proces**: Je praat met de AI, test het resultaat, en stuurt bij. Het voelt meer als regisseren dan als typen.
3.  **Snelheid en Flow**: Door syntaxfouten te vermijden, blijf je in je creatieve "flow" (of vibe).

### Voor wie is dit?
Voor iedereen! Of je nu een ondernemer bent die snel een prototype wil bouwen, of een beginner die bang is voor complexe code. Vibe-coding democratiseert softwareontwikkeling.
    `
  },
  {
    id: 'tools',
    title: 'Essentiële Tools',
    category: 'Gereedschap',
    readTime: '5 min',
    content: `
# Je Gereedschapskist

Om een goede Vibe-coder te zijn, heb je de juiste partners nodig. Dit zijn geen hamers en zagen, maar slimme AI-assistenten.

### 1. De "Chat" Assistenten
Dit zijn modellen zoals **Gemini**. Je gebruikt ze om ideeën te brainstormen, logica uit te denken of foutmeldingen te begrijpen.
*   *Gebruik:* "Leg uit hoe ik een website maak met React."
*   *Kracht:* Diep begrip en uitleg in gewone taal.

### 2. De "Inline" Assistenten
Tools zoals GitHub Copilot of Cursor. Deze leven in je editor.
*   *Gebruik:* Je typt een commentaarregel \`// maak een blauwe knop\`, en de AI schrijft de code eronder.
*   *Kracht:* Snelheid tijdens het typen.

### 3. Visuele Bouwers
Platformen waar je code combineert met visuele elementen (Low-code/No-code), versterkt door AI.
    `
  },
  {
    id: 'prompting',
    title: 'De Kunst van het Vragen',
    category: 'Vaardigheden',
    readTime: '4 min',
    content: `
# Prompt Engineering voor Beginners

In Vibe-coding is je "prompt" (je vraag aan de AI) je belangrijkste stuk gereedschap. Een slechte vraag levert slechte code op.

### De Gouden Formule
Een goede prompt bevat meestal drie onderdelen:
1.  **Rol**: Wie moet de AI zijn? (bv. "Je bent een senior web developer")
2.  **Taak**: Wat moet er gebeuren? (bv. "Maak een contactformulier")
3.  **Context/Beperkingen**: Waar moet het aan voldoen? (bv. "Gebruik de kleur blauw en zorg dat het mobielvriendelijk is")

### Voorbeeld
*   *Slecht:* "Maak een website."
*   *Goed:* "Je bent een expert in design. Maak een landingspagina voor een bakkerij. Gebruik warme kleuren en zorg voor een sectie met 'Openingstijden'. Schrijf de code in HTML en Tailwind CSS."

Onthoud: Wees specifiek en duidelijk. De AI kan niet gedachtenlezen, maar wel heel goed luisteren.
    `
  }
];