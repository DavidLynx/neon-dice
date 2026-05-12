# Neon Dice — Product Brief para reconstrucción RPG

## 1. Resumen del proyecto

**Neon Dice** será una web app estática, bilingüe y mobile-first para jugadores de rol de mesa y videojuegos RPG que necesitan una herramienta rápida, visual y útil para:

- tirar dados RPG de diferentes caras;
- crear y guardar perfiles/personajes localmente;
- consultar atributos, nivel, sistema de juego y tipo de personaje;
- usar una experiencia visual con estética neon/cyberpunk/fantasy-tech;
- mostrar en portafolio una app interactiva funcional, sin APIs externas.

La versión anterior de Neon Dice estaba orientada a gamificación personal, microacciones, motivación y atributos tipo RPG para la vida diaria. Esa dirección queda descartada.  
A partir de ahora Neon Dice será una herramienta RPG real, enfocada en dados, perfiles de personaje y utilidad para sesiones de juego.

---

## 2. Objetivo principal

Convertir Neon Dice en una web app de portafolio que funcione como:

1. **Dice roller avanzado** para juegos de rol.
2. **Mini gestor de personaje** guardado en localStorage.
3. **Demo interactiva premium** para mostrar habilidades de diseño web, UI, UX, animación, JavaScript y producto digital.
4. **Producto reutilizable** para jugadores, mesas de rol, streamers, comunidades y clientes que necesiten herramientas web pequeñas, personalizadas y sin backend.

---

## 3. Concepto central

**Neon Dice es una mesa digital de dados y perfiles RPG.**

El usuario abre la app, crea un perfil/personaje, elige un sistema de juego, configura atributos y usa dados animados para resolver acciones.

La app debe sentirse como una herramienta de sesión, no como una página decorativa.

Debe responder a esta lógica:

> “Tengo mi personaje, tengo mis atributos y necesito tirar dados rápido con estilo, claridad y control.”

---

## 4. Sistemas de juego iniciales

La app no debe copiar reglas oficiales protegidas ni usar contenido propietario excesivo.  
Debe inspirarse en géneros y sistemas conocidos, pero usar nombres genéricos o compatibles.

### 4.1 Modo Fantasy RPG

Inspirado en:
- Dungeons & Dragons;
- Baldur’s Gate 3;
- Skyrim;
- RPGs medievales de fantasía;
- campañas caseras de rol.

El modo Fantasy RPG puede incluir:

**Tipos de personaje / linajes sugeridos**
- Humano
- Elfo
- Enano
- Mediano
- Orco
- Gnomo
- Tiefling
- Dracónico
- No muerto
- Bestial
- Custom / Personalizado

**Clases sugeridas**
- Guerrero
- Mago
- Pícaro
- Explorador
- Clérigo
- Paladín
- Bárbaro
- Bardo
- Druida
- Monje
- Hechicero
- Brujo
- Custom / Personalizado

**Atributos fantasy**
- Fuerza
- Destreza
- Constitución
- Inteligencia
- Sabiduría
- Carisma

---

### 4.2 Modo Cyberpunk RPG

Inspirado en:
- Cyberpunk 2020;
- Cyberpunk RED;
- Shadowrun;
- Deus Ex;
- mundos neon-noir, hackers, megacorporaciones y calles distópicas.

El modo Cyberpunk RPG puede incluir:

**Roles sugeridos**
- Nómada
- Mercenario
- Hacker
- Técnico
- Corporativo
- Fixer
- Investigador
- Médico callejero
- Artista rebelde
- Agente urbano
- Custom / Personalizado

**Atributos cyberpunk**
- Reflejos
- Técnica
- Inteligencia
- Frialdad
- Cuerpo
- Presencia
- Suerte
- Hackeo

---

## 5. Dados disponibles

La app debe permitir seleccionar y tirar:

- d4
- d6
- d8
- d10
- d12
- d20
- d100

El d20 puede mantenerse como dado principal por identidad del proyecto, pero ya no debe ser el único.

### Funciones de dados

MVP:
- seleccionar tipo de dado;
- seleccionar cantidad de dados;
- tirar;
- mostrar resultado individual y total;
- mostrar historial reciente;
- limpiar historial;
- animación de tirada.

Fase posterior:
- modificadores positivos y negativos;
- ventaja/desventaja;
- tiradas rápidas guardadas;
- presets por sistema;
- sonido opcional;
- exportar resultado como imagen o texto.

---

## 6. Perfil de personaje

El usuario debe poder crear un perfil guardado en localStorage.

### Campos principales

- Nombre del jugador
- Nombre del personaje
- Sistema de juego:
  - Fantasy RPG
  - Cyberpunk RPG
  - Custom
- Idioma:
  - Español
  - English
- Nivel
- Tipo / linaje / rol
- Clase o arquetipo
- Descripción corta del personaje
- Atributos según sistema elegido
- Notas de campaña

### Comportamiento

- El perfil se guarda localmente en el navegador.
- La app debe indicar de forma clara que no usa nube ni cuenta.
- El usuario puede editar el perfil.
- El usuario puede reiniciar o borrar el perfil.
- El perfil debe persistir al recargar la página.

Texto sugerido:

**ES:**  
“Su perfil se guarda solo en este dispositivo. Neon Dice no usa cuentas, servidores ni APIs externas.”

**EN:**  
“Your profile is saved only on this device. Neon Dice does not use accounts, servers, or external APIs.”

---

## 7. Bilingüismo

La app debe estar preparada en español e inglés.

### Idioma principal de desarrollo

Puede construirse primero en español, pero la estructura debe permitir traducción por objeto i18n en JavaScript.

Ejemplo esperado:

```js
const i18n = {
  es: {
    appTitle: "Neon Dice",
    createProfile: "Crear perfil",
    rollDice: "Tirar dados"
  },
  en: {
    appTitle: "Neon Dice",
    createProfile: "Create profile",
    rollDice: "Roll dice"
  }
}
```

No quemar textos directamente en HTML si se puede evitar.  
La UI debe poder cambiar de idioma sin recargar.

---

## 8. Estética visual

Neon Dice debe sentirse como una mezcla entre:

- RPG digital;
- mesa de juego nocturna;
- interfaz neon;
- cyberpunk elegante;
- fantasía oscura moderna;
- dashboard de herramienta para jugadores.

### Dirección visual

- Fondo oscuro.
- Gradientes neon controlados.
- UI tipo paneles.
- Bordes luminosos sutiles.
- Microanimaciones.
- Dados con presencia visual fuerte.
- Tipografía clara.
- Layout mobile-first.
- Sensación premium, no genérica.

### Evitar

- Página de motivación personal.
- Meditación.
- Coaching.
- Productividad.
- Frases espirituales.
- Presentaciones motivacionales.
- UI infantil.
- Exceso de colores sin jerarquía.
- Copiar contenido oficial de D&D o Cyberpunk.

---

## 9. Arquitectura recomendada

Para este proyecto conviene mantener una web app estática simple:

- `index.html`
- `styles.css`
- `script.js`
- carpeta `assets/` si se usan imágenes o sonidos.

### Por qué HTML/CSS/JS vanilla

- Es más rápido para reconstruir.
- Es suficiente para el alcance del MVP.
- No requiere build.
- No requiere servidor.
- Se puede subir fácil a GitHub y Vercel.
- Funciona como portafolio claro de diseño e interacción.
- Evita complejidad innecesaria de Next.js.
- No usa APIs externas ni backend.
- Permite explicar el proyecto como una web app ligera, privada y portable.

Next.js solo tendría sentido si luego se agregan:
- login;
- perfiles en nube;
- biblioteca online de personajes;
- base de datos;
- comunidad;
- pagos;
- blog o SEO avanzado.

Para la versión actual, usar Next sería más pesado de lo necesario.

---

## 10. Mensaje comercial para portafolio

Neon Dice se puede vender como:

> “A bilingual static RPG web app for tabletop players, built without external APIs. It includes local character profiles, animated dice rolls, persistent history and a responsive neon interface designed for portfolio, gaming communities and custom interactive tools.”

En español:

> “Una web app RPG bilingüe para jugadores de rol, construida sin APIs externas. Incluye perfiles de personaje guardados localmente, tiradas de dados animadas, historial persistente e interfaz neon responsive, pensada como pieza de portafolio y herramienta interactiva personalizable.”

---

## 11. Alcance MVP

La primera reconstrucción debe lograr:

1. Nueva pantalla de inicio.
2. Perfil de personaje local.
3. Selector Fantasy / Cyberpunk / Custom.
4. Selector de idioma ES / EN.
5. Dados d4, d6, d8, d10, d12, d20, d100.
6. Tirada animada.
7. Resultado total.
8. Historial de tiradas.
9. Edición y borrado del perfil.
10. Limpieza total de contenido anterior no relacionado con RPG.

---

## 12. Criterios de éxito

La app estará bien reconstruida cuando:

- se entienda en menos de 5 segundos que es una herramienta RPG;
- el usuario pueda crear un personaje sin instrucciones largas;
- los dados funcionen de forma clara y rápida;
- el perfil persista al recargar;
- la app se vea bien en celular;
- la estética sea premium y de portafolio;
- no queden rastros del enfoque anterior de motivación/meditación;
- el código sea fácil de leer, editar y extender.
