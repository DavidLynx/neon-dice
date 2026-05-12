# Neon Dice — Agent Guide para Codex

## 1. Rol de Codex

Actúa como un desarrollador frontend senior especializado en web apps estáticas, UI responsive, JavaScript vanilla, localStorage, microinteracciones y refactorización limpia.

El objetivo es reconstruir Neon Dice desde su versión actual hacia una herramienta RPG funcional para portafolio.

No conviertas el proyecto en Next.js, React ni framework salvo que el usuario lo pida explícitamente.  
Trabaja primero con HTML, CSS y JavaScript vanilla.

---

## 2. Contexto del proyecto

Neon Dice ya existe como proyecto web. Actualmente tiene una base relacionada con:

- dado d20;
- atributos tipo STR, END, PER, INT, CHA, WIL, ORG, LCK;
- perfil o selección de stats;
- enfoque anterior de microacciones, motivación, retos personales o productividad.

Ese enfoque queda obsoleto.

La nueva versión debe ser:

- una app RPG;
- una herramienta de dados;
- un gestor local de personaje;
- bilingüe ES/EN;
- mobile-first;
- portafolio visual e interactivo;
- sin APIs externas.

---

## 3. Archivos a revisar primero

Antes de modificar:

1. Revisar `index.html`.
2. Revisar `styles.css`.
3. Revisar `script.js`.
4. Identificar IDs, clases y funciones existentes.
5. Eliminar o reemplazar secciones que tengan relación con:
   - meditación;
   - motivación;
   - productividad;
   - presentaciones;
   - microacciones personales;
   - textos que no sean RPG.

No rompas funcionalidades útiles como:
- animación del dado;
- localStorage;
- estructura de atributos;
- historial;
- lógica de tirada;
si pueden reutilizarse para la nueva dirección.

---

## 4. Objetivo de reconstrucción

Rediseñar la app para que tenga estas secciones principales:

### A. Header / Hero compacto

Debe comunicar de inmediato:

- Neon Dice
- RPG Dice Roller & Character Profile
- selector de idioma ES/EN
- frase corta de producto

Texto sugerido ES:

“Cree su personaje, seleccione su sistema y tire dados RPG desde una web app ligera, privada y sin servidores.”

Texto sugerido EN:

“Create your character, choose your system and roll RPG dice from a lightweight, private, serverless web app.”

---

### B. Panel de perfil

Crear un formulario o panel editable con:

- Player name / Nombre del jugador
- Character name / Nombre del personaje
- Game system / Sistema:
  - Fantasy RPG
  - Cyberpunk RPG
  - Custom
- Level / Nivel
- Archetype / Arquetipo
- Lineage or Role / Linaje o rol
- Short description / Descripción corta
- Campaign notes / Notas de campaña

Debe guardarse en localStorage.

Claves sugeridas:

```js
const STORAGE_KEYS = {
  profile: "neonDice.profile.v1",
  rollHistory: "neonDice.rollHistory.v1",
  settings: "neonDice.settings.v1"
}
```

---

### C. Sistema de atributos dinámico

Según el sistema elegido:

Fantasy RPG:
- Strength / Fuerza
- Dexterity / Destreza
- Constitution / Constitución
- Intelligence / Inteligencia
- Wisdom / Sabiduría
- Charisma / Carisma

Cyberpunk RPG:
- Reflexes / Reflejos
- Technique / Técnica
- Intelligence / Inteligencia
- Cool / Frialdad
- Body / Cuerpo
- Presence / Presencia
- Luck / Suerte
- Hacking / Hackeo

Custom:
- permitir usar atributos genéricos o editar nombres en una fase posterior.
- Para MVP, puede mostrar 6 atributos genéricos:
  - Power
  - Speed
  - Mind
  - Presence
  - Luck
  - Control

Cada atributo debe tener un input numérico editable.

---

### D. Dice Roller

Crear sección principal de dados con:

- Dice type:
  - d4
  - d6
  - d8
  - d10
  - d12
  - d20
  - d100
- Dice quantity:
  - 1 a 10
- Modifier:
  - número positivo o negativo
- Botón principal:
  - Roll Dice / Tirar dados
- Resultado:
  - resultados individuales;
  - modificador;
  - total;
  - timestamp;
  - sistema y personaje activo si existe.

La tirada debe usar `crypto.getRandomValues` si es posible.  
Si no, usar `Math.random` como fallback.

Ejemplo:

```js
function randomInt(min, max) {
  if (window.crypto && crypto.getRandomValues) {
    const array = new Uint32Array(1)
    crypto.getRandomValues(array)
    return min + (array[0] % (max - min + 1))
  }
  return Math.floor(Math.random() * (max - min + 1)) + min
}
```

---

### E. Historial

Guardar las últimas 10 o 20 tiradas en localStorage.

Cada item debe mostrar:

- tipo de dado;
- cantidad;
- resultados individuales;
- modificador;
- total;
- fecha/hora;
- personaje activo.

Debe existir botón para limpiar historial.

---

## 5. Bilingüismo

Implementar i18n simple en `script.js`.

No usar librerías externas.

Debe existir:

```js
let currentLanguage = "es"
const translations = { es: {}, en: {} }
```

La UI debe actualizar textos cuando se cambia idioma.

Guardar idioma en localStorage.

El código debe separar:
- lógica;
- datos;
- traducciones;
- renderizado.

---

## 6. Diseño visual esperado

Crear o refactorizar `styles.css` con:

- mobile-first;
- fondo oscuro;
- cards con glassmorphism controlado;
- bordes neon;
- buen contraste;
- botones grandes y cómodos;
- layout en grid para desktop;
- layout vertical en mobile;
- animación de dado;
- estados hover/focus;
- look premium, no infantil.

Paleta sugerida:

```css
:root {
  --bg: #070711;
  --panel: rgba(16, 18, 35, 0.82);
  --panel-strong: #101223;
  --text: #f6f7fb;
  --muted: #9ca3af;
  --cyan: #27f5ff;
  --violet: #9b5cff;
  --pink: #ff3df2;
  --green: #7cff9b;
  --warning: #ffd166;
  --danger: #ff4d6d;
  --border: rgba(255,255,255,0.12);
}
```

Tipografía: usar system fonts para no depender de APIs externas.

---

## 7. Animaciones

MVP de animación:

- Al presionar “Roll”, el dado debe entrar en estado `rolling`.
- Mostrar números cambiando rápido durante 500–900 ms.
- Luego mostrar resultado final.
- Agregar microinteracción visual:
  - glow;
  - shake controlado;
  - pulse;
  - partículas opcionales solo si no complica el código.

No usar librerías externas.

---

## 8. Reglas de calidad

- No introducir dependencias externas.
- No introducir backend.
- No introducir API calls.
- No usar contenido oficial extenso de D&D, Cyberpunk 2020 u otras IPs.
- Mantener términos genéricos cuando sea necesario.
- Código claro y comentado solo donde aporte.
- Evitar duplicación excesiva.
- Mantener accesibilidad básica:
  - labels;
  - focus states;
  - contraste;
  - botones semánticos.

---

## 9. Flujo de trabajo recomendado

### Fase 0 — Auditoría

Revisar archivos actuales y responder con:

- qué archivos existen;
- qué lógica se puede reutilizar;
- qué debe eliminarse;
- qué IDs o funciones son críticas;
- plan de cambios antes de editar.

### Fase 1 — Reestructura de HTML

Actualizar `index.html` para incluir:

- header;
- profile panel;
- attributes panel;
- dice roller;
- roll history;
- portfolio/about section;
- footer.

### Fase 2 — Estilos

Actualizar `styles.css` con el nuevo sistema visual.

### Fase 3 — Lógica

Actualizar `script.js` con:

- profile state;
- localStorage;
- i18n;
- dice roller;
- history;
- system-based attributes.

### Fase 4 — Limpieza

Eliminar código muerto, textos antiguos y funciones ya no usadas.

### Fase 5 — Pruebas manuales

Probar:

- crear perfil;
- recargar página y verificar persistencia;
- cambiar idioma;
- cambiar sistema;
- editar atributos;
- tirar cada dado;
- usar modificador positivo y negativo;
- limpiar historial;
- mobile layout.

---

## 10. Prompt inicial recomendado para Codex

Usa este prompt cuando empieces en Codex:

```text
Revisa el proyecto actual de Neon Dice. Primero analiza index.html, styles.css y script.js sin editar todavía. Necesito reconstruir la app para convertirla en una web app RPG bilingüe, mobile-first y sin APIs externas.

La nueva dirección del producto es:
- dice roller RPG con d4, d6, d8, d10, d12, d20 y d100;
- perfil de personaje guardado en localStorage;
- selección de sistema Fantasy RPG / Cyberpunk RPG / Custom;
- atributos dinámicos según sistema;
- historial de tiradas;
- selector de idioma ES/EN;
- estética neon/cyberpunk/fantasy-tech;
- eliminar todo lo relacionado con motivación, meditación, productividad o microacciones personales.

No uses React, Next.js, backend, APIs externas ni librerías. Mantén HTML/CSS/JS vanilla.

Primero entrégame un diagnóstico de:
1. qué archivos existen;
2. qué lógica se puede reutilizar;
3. qué se debe eliminar;
4. qué estructura propones;
5. qué cambios harías por fases.

No edites nada hasta que yo apruebe el plan.
```

---

## 11. Prompt de implementación después de aprobar diagnóstico

```text
Ahora implementa la Fase 1 a Fase 3 de Neon Dice.

Actualiza index.html, styles.css y script.js para convertir la app en:
- RPG Dice Roller bilingüe ES/EN;
- gestor local de personaje;
- selector Fantasy RPG / Cyberpunk RPG / Custom;
- atributos dinámicos según sistema;
- dados d4, d6, d8, d10, d12, d20, d100;
- cantidad de dados;
- modificador;
- animación de tirada;
- historial local de las últimas 20 tiradas;
- botón para limpiar historial;
- diseño responsive mobile-first.

Mantén todo en HTML/CSS/JS vanilla.
No uses APIs externas.
No uses librerías.
No uses contenido oficial extenso de propiedades comerciales.
Elimina textos y funciones antiguas relacionadas con motivación, meditación, productividad o microacciones.

Después de editar, explícame:
1. qué archivos cambiaste;
2. qué funciones principales agregaste;
3. cómo probarlo manualmente;
4. qué queda pendiente para una segunda versión.
```

---

## 12. Prompt para pulir como pieza de portafolio

```text
Pulamos Neon Dice como pieza de portafolio.

Revisa el diseño responsive, jerarquía visual, microcopy, botones, cards, historial, perfil y estados vacíos.

Objetivos:
- que se entienda en 5 segundos;
- que parezca una app real, no un experimento;
- que funcione muy bien en celular;
- que el diseño sea premium, neon y RPG;
- que el código siga siendo simple y sin dependencias.

Mejora textos ES/EN, estados vacíos, feedback visual y sección About/Portfolio.
No cambies la arquitectura base.
No agregues backend ni APIs externas.
```

---

## 13. Mensaje de venta dentro del proyecto

Agregar una sección pequeña tipo “About this app”:

ES:
“Neon Dice es una web app RPG bilingüe diseñada como herramienta ligera para jugadores de rol. Permite crear un perfil local, seleccionar sistema de juego, configurar atributos y tirar dados con historial persistente. No usa cuentas, servidores ni APIs externas.”

EN:
“Neon Dice is a bilingual RPG web app designed as a lightweight tool for role-playing players. It lets users create a local profile, choose a game system, configure attributes and roll dice with persistent history. It uses no accounts, servers or external APIs.”

---

## 14. Resultado esperado

Al finalizar, Neon Dice debe ser una web app estática lista para:

- subir a GitHub;
- desplegar en Vercel;
- mostrar en portafolio;
- explicar como producto real;
- extender después con presets, sonidos, exportación o temas visuales.
