const STORAGE_KEYS = {
    profile: "neonDice.profile.v2",
    history: "neonDice.rollHistory.v2",
    settings: "neonDice.settings.v2",
    presets: "neonDice.rollPresets.v1",
    activeEncounter: "neonDice.activeEncounter.v1"
};

const DEFAULT_SETTINGS = {
    language: "es",
    selectedDie: 20,
    quantity: 1,
    modifier: 0,
    rollType: "skillCheck"
};

const DEFAULT_HP = {
    max: 24,
    current: 24
};

const translations = {
    es: {
        eyebrow: "RPG Dice Roller",
        heroSubtitle: "Una mesa digital de dados para campañas fantasy, cyberpunk y sistemas personalizados.",
        heroSubcopy: "Cree un perfil local, configure atributos, controle HP, lance dados animados y registre encuentros desde una web app ligera. Todo funciona en este navegador: sin cuentas, sin servidores y sin APIs externas.",
        language: "Idioma",
        activeSystem: "Sistema activo",
        profileKicker: "Perfil local",
        profileTitle: "Personaje",
        profileCopy: "Guarde un personaje local para asociar sus tiradas, atributos, notas y estado de campaña.",
        profileNotSaved: "Cree su primer personaje para vincular tiradas, HP y encuentros a una campaña.",
        profileSaved: "Perfil guardado en este dispositivo.",
        profileLoaded: "Perfil cargado desde este dispositivo.",
        profileCleared: "Perfil borrado.",
        privacyNote: "Su perfil se guarda únicamente en este dispositivo.",
        playerName: "Nombre del jugador",
        characterName: "Nombre del personaje / alias",
        gameSystem: "Sistema",
        level: "Nivel",
        lineageRole: "Linaje o rol",
        classArchetype: "Clase o arquetipo",
        lineage: "Linaje",
        role: "Rol",
        classLabel: "Clase",
        archetype: "Arquetipo",
        description: "Descripción corta",
        campaignNotes: "Notas de campaña",
        saveProfile: "Guardar perfil",
        resetProfile: "Borrar perfil",
        attributesKicker: "Atributos",
        attributesTitle: "Sistema activo",
        attributesCopy: "Los atributos cambian según el sistema activo para mantener cada campaña organizada.",
        hpKicker: "HP Tracker",
        hpTitle: "Puntos de golpe",
        hpCopy: "Controle daño y curación del personaje. También puede aplicar directamente la última tirada.",
        maxHp: "HP máximo",
        currentHp: "HP actual",
        hpDelta: "Daño / curación rápida",
        applyDamage: "Aplicar daño",
        heal: "Curar",
        resetHp: "Restaurar HP",
        lastRollEmpty: "Última tirada: -",
        lastRollValue: "Última tirada",
        lastRollDamage: "Usar última tirada como daño",
        lastRollHeal: "Usar última tirada como curación",
        lastRollEncounterDamage: "Usar última tirada como daño al encuentro",
        lastRollEncounterHeal: "Usar última tirada como curación del encuentro",
        lastRollDamageApplied: "Se aplicó la última tirada como daño.",
        lastRollHealingApplied: "Se aplicó la última tirada como curación.",
        noRecentRoll: "No hay una tirada reciente para aplicar.",
        hpStable: "Estable",
        hpWounded: "Herido",
        hpCritical: "Crítico",
        hpDown: "Caído",
        rollerKicker: "Dice Roller",
        rollerTitle: "Tirada rápida",
        rollerCopy: "Seleccione dado, cantidad, modificador y tipo de tirada. El resultado queda guardado en el historial.",
        total: "Total",
        rollPrompt: "Configure tipo, dado y modificador para lanzar la primera prueba.",
        diceType: "Dado",
        quantity: "Cantidad",
        modifier: "Modificador",
        rollType: "Tipo de tirada",
        rollDice: "Tirar dados",
        rolling: "Tirando...",
        individualResults: "Resultados",
        historyKicker: "Registro",
        historyTitle: "Historial",
        historyCopy: "Consulte, copie o descargue el registro de sesión en formato TXT.",
        clearHistory: "Limpiar historial",
        copyHistory: "Copiar historial",
        downloadTxt: "Descargar TXT",
        historyCopied: "Historial copiado.",
        historyDownloaded: "Historial descargado como TXT.",
        emptyHistory: "Todavía no hay tiradas. Seleccione un dado y lance su primera prueba.",
        presetsKicker: "Presets",
        presetsTitle: "Tiradas rápidas",
        presetsCopy: "Guarde tiradas frecuentes para resolver acciones repetidas con un clic.",
        presetName: "Nombre del preset",
        savePreset: "Guardar preset",
        emptyPresets: "Guarde sus tiradas frecuentes para lanzar ataques, pruebas o hackeos con un clic.",
        runPreset: "Lanzar",
        deletePreset: "Borrar",
        presetLimit: "Máximo 8 presets.",
        presetSaved: "Preset guardado.",
        presetDeleted: "Preset borrado.",
        encounterKicker: "Sesión",
        encounterTitle: "Encuentros",
        encounterCopy: "Cargue encuentros originales con HP propio para probar ataques, daño, curación y escenas de combate.",
        encounterSelect: "Encuentro",
        loadEncounter: "Cargar encuentro",
        encounterDelta: "Daño / curación",
        healEncounter: "Curar encuentro",
        resetEncounter: "Restaurar encuentro",
        encounterLoaded: "Encuentro cargado.",
        suggestedRoll: "Tirada sugerida",
        aboutKicker: "Portfolio",
        aboutTitle: "About Neon Dice",
        aboutText: "Neon Dice es una web app RPG bilingüe creada como herramienta funcional y pieza de portafolio interactiva. Combina perfiles locales, dados animados, HP Tracker, presets, encuentros e historial exportable en una experiencia estática construida con HTML, CSS y JavaScript vanilla. No usa cuentas, servidores ni APIs externas.",
        relatedTitle: "Más proyectos de LYNX VISUAL DIVISION",
        relatedCopy: "Explore otras web apps, herramientas visuales y experimentos interactivos del estudio.",
        footerCredit: "Diseñado y desarrollado por LYNX VISUAL DIVISION como una web app experimental para juegos de rol, interfaces interactivas y herramientas digitales sin backend.",
        footerTech: "Construida con HTML, CSS y JavaScript vanilla. Los datos se guardan localmente en este navegador.",
        notesPlaceholder: "Agregue notas de campaña, misión o trasfondo.",
        fantasyModeCopy: "Modo de fantasía clásica para campañas medievales, exploración de mazmorras y personajes heroicos.",
        cyberpunkModeCopy: "Modo urbano y tecnológico para campañas de hackers, mercenarios, megacorporaciones y misiones nocturnas.",
        customModeCopy: "Modo flexible para campañas caseras, prototipos de sistema y reglas personalizadas.",
        unnamedCharacter: "Personaje sin nombre",
        noModifier: "sin modificador",
        modifierShort: "mod.",
        rolled: "tiró",
        rolls: "Rolls"
    },
    en: {
        eyebrow: "RPG Dice Roller",
        heroSubtitle: "A digital dice table for fantasy, cyberpunk and custom RPG systems.",
        heroSubcopy: "Create a local profile, configure attributes, track HP, roll animated dice and manage encounters from a lightweight web app. Everything runs in this browser: no accounts, no servers and no external APIs.",
        language: "Language",
        activeSystem: "Active system",
        profileKicker: "Local profile",
        profileTitle: "Character",
        profileCopy: "Save a local character to connect rolls, attributes, notes and campaign state.",
        profileNotSaved: "Create your first character to connect rolls, HP and encounters to a campaign.",
        profileSaved: "Profile saved on this device.",
        profileLoaded: "Profile loaded from this device.",
        profileCleared: "Profile cleared.",
        privacyNote: "Your profile is saved only on this device.",
        playerName: "Player name",
        characterName: "Character name / alias",
        gameSystem: "System",
        level: "Level",
        lineageRole: "Lineage or role",
        classArchetype: "Class or archetype",
        lineage: "Lineage",
        role: "Role",
        classLabel: "Class",
        archetype: "Archetype",
        description: "Short description",
        campaignNotes: "Campaign notes",
        saveProfile: "Save profile",
        resetProfile: "Clear profile",
        attributesKicker: "Attributes",
        attributesTitle: "Active system",
        attributesCopy: "Attributes change with the active system to keep each campaign organized.",
        hpKicker: "HP Tracker",
        hpTitle: "Hit points",
        hpCopy: "Track character damage and healing. You can also apply the latest roll directly.",
        maxHp: "Max HP",
        currentHp: "Current HP",
        hpDelta: "Quick damage / healing",
        applyDamage: "Apply Damage",
        heal: "Heal",
        resetHp: "Reset HP",
        lastRollEmpty: "Last roll: -",
        lastRollValue: "Last roll",
        lastRollDamage: "Use last roll as damage",
        lastRollHeal: "Use last roll as healing",
        lastRollEncounterDamage: "Use last roll as encounter damage",
        lastRollEncounterHeal: "Use last roll as encounter healing",
        lastRollDamageApplied: "Last roll applied as damage.",
        lastRollHealingApplied: "Last roll applied as healing.",
        noRecentRoll: "No recent roll available.",
        hpStable: "Stable",
        hpWounded: "Wounded",
        hpCritical: "Critical",
        hpDown: "Down",
        rollerKicker: "Dice Roller",
        rollerTitle: "Quick roll",
        rollerCopy: "Choose die, quantity, modifier and roll type. The result is saved to the history.",
        total: "Total",
        rollPrompt: "Set type, die and modifier to make your first check.",
        diceType: "Die",
        quantity: "Quantity",
        modifier: "Modifier",
        rollType: "Roll type",
        rollDice: "Roll Dice",
        rolling: "Rolling...",
        individualResults: "Results",
        historyKicker: "Log",
        historyTitle: "History",
        historyCopy: "Review, copy or download the session log as a TXT file.",
        clearHistory: "Clear history",
        copyHistory: "Copy History",
        downloadTxt: "Download TXT",
        historyCopied: "History copied.",
        historyDownloaded: "History downloaded as TXT.",
        emptyHistory: "No rolls yet. Choose a die and make your first check.",
        presetsKicker: "Presets",
        presetsTitle: "Quick rolls",
        presetsCopy: "Save frequent rolls to resolve repeated actions with one click.",
        presetName: "Preset name",
        savePreset: "Save preset",
        emptyPresets: "Save frequent rolls to launch attacks, checks or hacks with one click.",
        runPreset: "Run",
        deletePreset: "Delete",
        presetLimit: "Maximum 8 presets.",
        presetSaved: "Preset saved.",
        presetDeleted: "Preset deleted.",
        encounterKicker: "Session",
        encounterTitle: "Encounters",
        encounterCopy: "Load original encounters with their own HP to test attacks, damage, healing and combat scenes.",
        encounterSelect: "Encounter",
        loadEncounter: "Load Encounter",
        encounterDelta: "Damage / healing",
        healEncounter: "Heal Encounter",
        resetEncounter: "Reset Encounter",
        encounterLoaded: "Encounter loaded.",
        suggestedRoll: "Suggested roll",
        aboutKicker: "Portfolio",
        aboutTitle: "About Neon Dice",
        aboutText: "Neon Dice is a bilingual RPG web app created as both a functional tool and an interactive portfolio piece. It combines local profiles, animated dice, HP tracking, presets, encounters and exportable history in a static experience built with vanilla HTML, CSS and JavaScript. It uses no accounts, servers or external APIs.",
        relatedTitle: "More by LYNX VISUAL DIVISION",
        relatedCopy: "Explore other web apps, visual tools and interactive experiments by the studio.",
        footerCredit: "Designed and developed by LYNX VISUAL DIVISION as an experimental web app for role-playing games, interactive interfaces and backend-free digital tools.",
        footerTech: "Built with vanilla HTML, CSS and JavaScript. Data is stored locally in this browser.",
        notesPlaceholder: "Add campaign, mission or backstory notes.",
        fantasyModeCopy: "Classic fantasy mode for medieval campaigns, dungeon exploration and heroic characters.",
        cyberpunkModeCopy: "Urban tech mode for hackers, mercenaries, megacorporations and night missions.",
        customModeCopy: "Flexible mode for homebrew campaigns, system prototypes and custom rules.",
        unnamedCharacter: "Unnamed character",
        noModifier: "no modifier",
        modifierShort: "mod.",
        rolled: "rolled",
        rolls: "Rolls"
    }
};

const ROLL_TYPES = [
    { value: "attack", label: { es: "Ataque", en: "Attack" } },
    { value: "damage", label: { es: "Daño", en: "Damage" } },
    { value: "skillCheck", label: { es: "Prueba de habilidad", en: "Skill Check" } },
    { value: "savingThrow", label: { es: "Tirada de salvación", en: "Saving Throw" } },
    { value: "luck", label: { es: "Suerte", en: "Luck" } },
    { value: "initiative", label: { es: "Iniciativa", en: "Initiative" } },
    { value: "perception", label: { es: "Percepción", en: "Perception" } },
    { value: "hacking", label: { es: "Hackeo", en: "Hacking" } },
    { value: "stealth", label: { es: "Sigilo", en: "Stealth" } },
    { value: "persuasion", label: { es: "Persuasión", en: "Persuasion" } },
    { value: "custom", label: { es: "Personalizada", en: "Custom" } }
];

const SYSTEMS = {
    fantasy: {
        key: "fantasy",
        themeClass: "theme-fantasy",
        label: { es: "Classic Fantasy RPG", en: "Classic Fantasy RPG" },
        lineageLabel: "lineage",
        classLabel: "classLabel",
        lineages: [
            { value: "human", label: { es: "Humano", en: "Human" } },
            { value: "elf", label: { es: "Elfo", en: "Elf" } },
            { value: "dwarf", label: { es: "Enano", en: "Dwarf" } },
            { value: "halfling", label: { es: "Mediano", en: "Halfling" } },
            { value: "gnome", label: { es: "Gnomo", en: "Gnome" } },
            { value: "orc", label: { es: "Orco", en: "Orc" } },
            { value: "tiefling", label: { es: "Tiefling", en: "Tiefling" } },
            { value: "draconic", label: { es: "Dracónico", en: "Draconic" } },
            { value: "bestial", label: { es: "Bestial", en: "Bestial" } },
            { value: "custom", label: { es: "Personalizado", en: "Custom" } }
        ],
        classes: [
            { value: "warrior", label: { es: "Guerrero", en: "Warrior" } },
            { value: "mage", label: { es: "Mago", en: "Mage" } },
            { value: "rogue", label: { es: "Pícaro", en: "Rogue" } },
            { value: "ranger", label: { es: "Explorador", en: "Ranger" } },
            { value: "cleric", label: { es: "Clérigo", en: "Cleric" } },
            { value: "paladin", label: { es: "Paladín", en: "Paladin" } },
            { value: "barbarian", label: { es: "Bárbaro", en: "Barbarian" } },
            { value: "bard", label: { es: "Bardo", en: "Bard" } },
            { value: "druid", label: { es: "Druida", en: "Druid" } },
            { value: "monk", label: { es: "Monje", en: "Monk" } },
            { value: "sorcerer", label: { es: "Hechicero", en: "Sorcerer" } },
            { value: "warlock", label: { es: "Brujo", en: "Warlock" } },
            { value: "artificer", label: { es: "Artificiero", en: "Artificer" } },
            { value: "custom", label: { es: "Personalizado", en: "Custom" } }
        ],
        attributes: [
            { key: "strength", short: "STR", label: { es: "Fuerza", en: "Strength" } },
            { key: "dexterity", short: "DEX", label: { es: "Destreza", en: "Dexterity" } },
            { key: "constitution", short: "CON", label: { es: "Constitución", en: "Constitution" } },
            { key: "intelligence", short: "INT", label: { es: "Inteligencia", en: "Intelligence" } },
            { key: "wisdom", short: "WIS", label: { es: "Sabiduría", en: "Wisdom" } },
            { key: "charisma", short: "CHA", label: { es: "Carisma", en: "Charisma" } }
        ]
    },
    cyberpunk: {
        key: "cyberpunk",
        themeClass: "theme-cyberpunk",
        label: { es: "Cyberpunk Modern RPG", en: "Cyberpunk Modern RPG" },
        lineageLabel: "role",
        classLabel: "archetype",
        lineages: [
            { value: "nomad", label: { es: "Nómada", en: "Nomad" } },
            { value: "mercenary", label: { es: "Mercenario", en: "Mercenary" } },
            { value: "hacker", label: { es: "Hacker", en: "Hacker" } },
            { value: "technician", label: { es: "Técnico", en: "Technician" } },
            { value: "corporate", label: { es: "Corporativo", en: "Corporate" } },
            { value: "fixer", label: { es: "Fixer", en: "Fixer" } },
            { value: "investigator", label: { es: "Investigador", en: "Investigator" } },
            { value: "streetMedic", label: { es: "Médico callejero", en: "Street medic" } },
            { value: "rebelArtist", label: { es: "Artista rebelde", en: "Rebel artist" } },
            { value: "urbanAgent", label: { es: "Agente urbano", en: "Urban agent" } },
            { value: "smuggler", label: { es: "Contrabandista", en: "Smuggler" } },
            { value: "pilot", label: { es: "Piloto", en: "Pilot" } },
            { value: "bountyHunter", label: { es: "Cazarrecompensas", en: "Bounty hunter" } },
            { value: "custom", label: { es: "Personalizado", en: "Custom" } }
        ],
        classes: [
            { value: "infiltrator", label: { es: "Infiltrador", en: "Infiltrator" } },
            { value: "operator", label: { es: "Operador", en: "Operator" } },
            { value: "netrunner", label: { es: "Netrunner", en: "Netrunner" } },
            { value: "streetSamurai", label: { es: "Samurái urbano", en: "Street samurai" } },
            { value: "face", label: { es: "Negociador", en: "Face" } },
            { value: "custom", label: { es: "Personalizado", en: "Custom" } }
        ],
        attributes: [
            { key: "reflexes", short: "REF", label: { es: "Reflejos", en: "Reflexes" } },
            { key: "technique", short: "TEC", label: { es: "Técnica", en: "Technique" } },
            { key: "intelligence", short: "INT", label: { es: "Inteligencia", en: "Intelligence" } },
            { key: "cool", short: "COOL", label: { es: "Frialdad", en: "Cool" } },
            { key: "body", short: "BODY", label: { es: "Cuerpo", en: "Body" } },
            { key: "presence", short: "PRE", label: { es: "Presencia", en: "Presence" } },
            { key: "luck", short: "LCK", label: { es: "Suerte", en: "Luck" } },
            { key: "hacking", short: "HCK", label: { es: "Hackeo", en: "Hacking" } }
        ]
    },
    custom: {
        key: "custom",
        themeClass: "theme-custom",
        label: { es: "Custom RPG", en: "Custom RPG" },
        lineageLabel: "lineageRole",
        classLabel: "classArchetype",
        lineages: [{ value: "custom", label: { es: "Personalizado", en: "Custom" } }],
        classes: [{ value: "custom", label: { es: "Personalizado", en: "Custom" } }],
        attributes: [
            { key: "power", short: "PWR", label: { es: "Poder", en: "Power" } },
            { key: "speed", short: "SPD", label: { es: "Velocidad", en: "Speed" } },
            { key: "mind", short: "MND", label: { es: "Mente", en: "Mind" } },
            { key: "presence", short: "PRE", label: { es: "Presencia", en: "Presence" } },
            { key: "luck", short: "LCK", label: { es: "Suerte", en: "Luck" } },
            { key: "control", short: "CTRL", label: { es: "Control", en: "Control" } }
        ]
    }
};

const ENCOUNTERS = [
    { id: "ashen-prior", system: "fantasy", difficulty: "hard", maxHp: 80, name: { en: "The Ashen Prior", es: "El Prior Ceniciento" }, suggestedRoll: { en: "Wisdom Save", es: "Salvación de Sabiduría" }, description: { en: "A figure covered in ash guards a bell that should never ring again.", es: "Una figura cubierta de ceniza custodia una campana que no debería volver a sonar." } },
    { id: "mourngrim", system: "fantasy", difficulty: "standard", maxHp: 65, name: { en: "Mourngrim, Bell Warden", es: "Mourngrim, Guardián de la Campana" }, suggestedRoll: { en: "Strength Check", es: "Prueba de Fuerza" }, description: { en: "An armored keeper waits beneath cracked bronze towers.", es: "Un guardián acorazado espera bajo torres de bronce agrietadas." } },
    { id: "saint-veyra", system: "fantasy", difficulty: "legendary", maxHp: 120, name: { en: "Saint Veyra of the Hollow Choir", es: "Santa Veyra del Coro Hueco" }, suggestedRoll: { en: "Charisma Save", es: "Salvación de Carisma" }, description: { en: "Her silent hymn bends the will of those who enter the chapel.", es: "Su himno silencioso doblega la voluntad de quienes entran a la capilla." } },
    { id: "thorn-knight", system: "fantasy", difficulty: "hard", maxHp: 95, name: { en: "The Thorn-Crowned Knight", es: "El Caballero de la Corona de Espinas" }, suggestedRoll: { en: "Dexterity Save", es: "Salvación de Destreza" }, description: { en: "A fallen knight moves with impossible grace under a crown of living thorns.", es: "Un caballero caído se mueve con una gracia imposible bajo una corona de espinas vivas." } },
    { id: "eldric", system: "fantasy", difficulty: "hard", maxHp: 90, name: { en: "Eldric, the Pale Oathbreaker", es: "Eldric, el Rompejuramentos Pálido" }, suggestedRoll: { en: "Constitution Save", es: "Salvación de Constitución" }, description: { en: "Every broken oath follows him like a second shadow.", es: "Cada juramento roto lo sigue como una segunda sombra." } },
    { id: "lantern-hag", system: "fantasy", difficulty: "standard", maxHp: 58, name: { en: "The Lantern Hag", es: "La Bruja del Farol" }, suggestedRoll: { en: "Perception Check", es: "Prueba de Percepción" }, description: { en: "She offers light only to lead travelers deeper into the marsh.", es: "Ofrece luz solo para guiar a los viajeros más profundo en el pantano." } },
    { id: "null-saint", system: "cyberpunk", difficulty: "legendary", maxHp: 120, name: { en: "Null Saint.exe", es: "Santo Nulo.exe" }, suggestedRoll: { en: "Hacking Check", es: "Prueba de Hackeo" }, description: { en: "A cult intelligence manifests through dead servers and security cameras.", es: "Una inteligencia de culto se manifiesta entre servidores muertos y cámaras de vigilancia." } },
    { id: "chrome-widow", system: "cyberpunk", difficulty: "hard", maxHp: 85, name: { en: "Chrome Widow", es: "Viuda Cromada" }, suggestedRoll: { en: "Reflexes Check", es: "Prueba de Reflejos" }, description: { en: "She moves between neon signs like a rumor with metal bones.", es: "Se mueve entre letreros de neón como un rumor con huesos de metal." } },
    { id: "vektor-9", system: "cyberpunk", difficulty: "standard", maxHp: 70, name: { en: "Vektor-9, Corporate Hound", es: "Vektor-9, Sabueso Corporativo" }, suggestedRoll: { en: "Cool Save", es: "Salvación de Frialdad" }, description: { en: "A tactical unit trained to erase witnesses before the sirens start.", es: "Una unidad táctica entrenada para borrar testigos antes de que empiecen las sirenas." } },
    { id: "mother-signal", system: "cyberpunk", difficulty: "legendary", maxHp: 130, name: { en: "Mother Signal", es: "Señal Madre" }, suggestedRoll: { en: "Intelligence Check", es: "Prueba de Inteligencia" }, description: { en: "The signal speaks in every device at once, and none of them are yours anymore.", es: "La señal habla en todos los dispositivos a la vez, y ninguno de ellos le pertenece ya." } },
    { id: "razorline-broker", system: "cyberpunk", difficulty: "hard", maxHp: 78, name: { en: "Razorline Broker", es: "El Corredor Razorline" }, suggestedRoll: { en: "Persuasion Check", es: "Prueba de Persuasión" }, description: { en: "He sells access, secrets and names that should have stayed buried.", es: "Vende accesos, secretos y nombres que debieron permanecer enterrados." } },
    { id: "ghost-node-mara", system: "cyberpunk", difficulty: "standard", maxHp: 62, name: { en: "Ghost Node Mara", es: "Mara Nodo Fantasma" }, suggestedRoll: { en: "Stealth Check", es: "Prueba de Sigilo" }, description: { en: "She exists only between cameras, cached memories and corrupted maps.", es: "Existe solo entre cámaras, memorias en caché y mapas corruptos." } },
    { id: "unknown-challenger", system: "custom", difficulty: "standard", maxHp: 60, name: { en: "The Unknown Challenger", es: "El Retador Desconocido" }, suggestedRoll: { en: "Skill Check", es: "Prueba de habilidad" }, description: { en: "A flexible encounter for custom systems and homebrew sessions.", es: "Un encuentro flexible para sistemas personalizados y campañas caseras." } },
    { id: "wandering-threat", system: "custom", difficulty: "hard", maxHp: 85, name: { en: "The Wandering Threat", es: "La Amenaza Errante" }, suggestedRoll: { en: "Luck Check", es: "Prueba de Suerte" }, description: { en: "Something dangerous crosses the scene before anyone is ready.", es: "Algo peligroso cruza la escena antes de que alguien esté preparado." } },
    { id: "final-gatekeeper", system: "custom", difficulty: "legendary", maxHp: 120, name: { en: "The Final Gatekeeper", es: "El Guardián Final" }, suggestedRoll: { en: "Power Check", es: "Prueba de Poder" }, description: { en: "A final obstacle for any system, genre or campaign.", es: "Un obstáculo final para cualquier sistema, género o campaña." } },
    { id: "broken-machine", system: "custom", difficulty: "standard", maxHp: 75, name: { en: "The Broken Machine", es: "La Máquina Rota" }, suggestedRoll: { en: "Control Check", es: "Prueba de Control" }, description: { en: "A neutral mechanical threat for experimental rules.", es: "Una amenaza mecánica neutral para reglas experimentales." } }
];

let state = {
    profile: null,
    history: [],
    settings: { ...DEFAULT_SETTINGS },
    presets: [],
    activeEncounter: null
};

let currentLanguage = "es";
let profileStatusKey = "profileNotSaved";
let historyFeedbackTimer = null;
let hpFeedbackTimer = null;
let encounterFeedbackTimer = null;

const $ = (id) => document.getElementById(id);

function loadJSON(key, fallback) {
    try {
        const raw = localStorage.getItem(key);
        return raw ? JSON.parse(raw) : fallback;
    } catch {
        return fallback;
    }
}

function saveJSON(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}

function clamp(n, min, max) {
    return Math.max(min, Math.min(max, n));
}

function escapeHtml(str) {
    return String(str)
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#039;");
}

function t(key) {
    return translations[currentLanguage][key] || translations.es[key] || key;
}

function labelFor(item) {
    return item.label[currentLanguage] || item.label.es;
}

function textFor(item) {
    return item[currentLanguage] || item.es || item.en || "";
}

function loadState() {
    state.settings = { ...DEFAULT_SETTINGS, ...loadJSON(STORAGE_KEYS.settings, {}) };
    state.profile = normalizeProfile(loadJSON(STORAGE_KEYS.profile, null));
    state.history = loadJSON(STORAGE_KEYS.history, []);
    state.presets = loadJSON(STORAGE_KEYS.presets, []).slice(0, 8);
    state.activeEncounter = normalizeEncounter(loadJSON(STORAGE_KEYS.activeEncounter, null));
    state.lastRoll = state.history[0] ? makeLastRoll(state.history[0]) : null;
    currentLanguage = state.settings.language === "en" ? "en" : "es";
}

function saveSettings() {
    saveJSON(STORAGE_KEYS.settings, state.settings);
}

function normalizeProfile(profile) {
    if (!profile) return null;
    const system = profile.system || "fantasy";
    const hp = {
        ...DEFAULT_HP,
        ...(profile.hp || {})
    };
    hp.max = clamp(parseInt(hp.max, 10) || DEFAULT_HP.max, 1, 999);
    hp.current = clamp(parseInt(hp.current, 10) || hp.max, 0, hp.max);
    return {
        ...profile,
        system,
        attributes: {
            ...getDefaultAttributes(system),
            ...(profile.attributes || {})
        },
        hp
    };
}

function normalizeEncounter(encounter) {
    if (!encounter) return null;
    const base = ENCOUNTERS.find((item) => item.id === encounter.id) || ENCOUNTERS[0];
    const maxHp = clamp(parseInt(encounter.maxHp ?? base.maxHp, 10) || base.maxHp, 1, 999);
    return {
        ...base,
        ...encounter,
        maxHp,
        currentHp: clamp(parseInt(encounter.currentHp ?? maxHp, 10) || maxHp, 0, maxHp)
    };
}

function makeLastRoll(entry) {
    if (!entry) return null;
    return {
        total: Number(entry.total) || 0,
        rolls: Array.isArray(entry.rolls) ? entry.rolls : [],
        modifier: Number(entry.modifier) || 0,
        die: Number(entry.die) || 20,
        quantity: Number(entry.quantity) || 1,
        rollType: entry.rollType || "skillCheck",
        rollTypeLabel: entry.rollTypeLabel || getRollTypeLabel(entry.rollType || "skillCheck"),
        createdAt: entry.createdAt || new Date().toISOString()
    };
}

function applyTranslations() {
    document.documentElement.lang = currentLanguage;
    document.querySelectorAll("[data-i18n]").forEach((node) => {
        node.textContent = t(node.dataset.i18n);
    });
    document.querySelectorAll("[data-i18n-placeholder]").forEach((node) => {
        node.placeholder = t(node.dataset.i18nPlaceholder);
    });
    renderRollTypes();
    renderLineageRoleOptions();
    renderClassOptions();
    renderAttributes(null, true);
    renderHp();
    renderLastRoll();
    renderPresets();
    renderHistory();
    renderEncounterOptions();
    renderEncounter();
    updateSystemUI();
    updateRollReadoutText();
    $("profileStatus").textContent = t(profileStatusKey);
}

function setLanguage(language) {
    currentLanguage = language === "en" ? "en" : "es";
    state.settings.language = currentLanguage;
    $("languageSelect").value = currentLanguage;
    saveSettings();
    applyTranslations();
}

function getSystemConfig(system) {
    return SYSTEMS[system] || SYSTEMS.fantasy;
}

function getActiveSystemKey() {
    return $("gameSystem")?.value || state.profile?.system || "fantasy";
}

function setGameSystem(system) {
    const config = getSystemConfig(system);
    $("gameSystem").value = config.key;
    document.body.classList.remove("theme-fantasy", "theme-cyberpunk", "theme-custom");
    document.body.classList.add(config.themeClass);
    renderLineageRoleOptions();
    renderClassOptions();
    renderAttributes(state.profile?.system === config.key ? state.profile.attributes : getDefaultAttributes(config.key));
    renderEncounterOptions();
    if (!state.activeEncounter || state.activeEncounter.system !== config.key) {
        state.activeEncounter = makeEncounterState(getEncountersForSystem(config.key)[0]);
        saveActiveEncounter();
    }
    renderEncounter();
    updateSystemUI();
}

function updateSystemUI() {
    const config = getSystemConfig(getActiveSystemKey());
    $("activeSystemLabel").textContent = config.label[currentLanguage];
    $("systemModeCopy").textContent = t(`${config.key}ModeCopy`);
    $("lineageRoleLabel").textContent = t(config.lineageLabel);
    $("classArchetypeLabel").textContent = t(config.classLabel);
    $("attributeCount").textContent = config.attributes.length;
}

function getDefaultAttributes(system) {
    return getSystemConfig(system).attributes.reduce((attrs, attribute) => {
        attrs[attribute.key] = 10;
        return attrs;
    }, {});
}

function getCurrentAttributeValues() {
    const values = {};
    document.querySelectorAll("[data-attribute-key]").forEach((input) => {
        values[input.dataset.attributeKey] = clamp(parseInt(input.value, 10) || 0, 0, 99);
    });
    return values;
}

function getHpFromInputs() {
    const max = clamp(parseInt($("maxHp").value, 10) || DEFAULT_HP.max, 1, 999);
    const current = clamp(parseInt($("currentHp").value, 10) || 0, 0, max);
    return { max, current };
}

function getProfileFromForm() {
    const system = getActiveSystemKey();
    const attributes = {};
    document.querySelectorAll("[data-attribute-key]").forEach((input) => {
        attributes[input.dataset.attributeKey] = clamp(parseInt(input.value, 10) || 0, 0, 99);
    });

    return normalizeProfile({
        playerName: $("playerName").value.trim(),
        characterName: $("characterName").value.trim(),
        system,
        level: clamp(parseInt($("level").value, 10) || 1, 1, 99),
        lineageOrRole: $("lineageRole").value,
        classOrArchetype: $("classArchetype").value,
        description: $("description").value.trim(),
        campaignNotes: $("campaignNotes").value.trim(),
        attributes: { ...getDefaultAttributes(system), ...attributes },
        hp: getHpFromInputs()
    });
}

function fillProfileForm(profile) {
    const activeProfile = normalizeProfile(profile) || {
        playerName: "",
        characterName: "",
        system: "fantasy",
        level: 1,
        lineageOrRole: "human",
        classOrArchetype: "warrior",
        description: "",
        campaignNotes: "",
        attributes: getDefaultAttributes("fantasy"),
        hp: { ...DEFAULT_HP }
    };

    $("playerName").value = activeProfile.playerName || "";
    $("characterName").value = activeProfile.characterName || "";
    $("gameSystem").value = activeProfile.system || "fantasy";
    $("level").value = activeProfile.level || 1;
    $("description").value = activeProfile.description || "";
    $("campaignNotes").value = activeProfile.campaignNotes || "";
    $("maxHp").value = activeProfile.hp.max;
    $("currentHp").value = activeProfile.hp.current;

    setGameSystem(activeProfile.system || "fantasy");
    $("lineageRole").value = activeProfile.lineageOrRole || $("lineageRole").options[0]?.value || "";
    $("classArchetype").value = activeProfile.classOrArchetype || $("classArchetype").options[0]?.value || "";
    renderAttributes(activeProfile.attributes);
    renderHp();
}

function saveProfile() {
    state.profile = getProfileFromForm();
    saveJSON(STORAGE_KEYS.profile, state.profile);
    profileStatusKey = "profileSaved";
    $("profileStatus").textContent = t("profileSaved");
}

function resetProfile() {
    localStorage.removeItem(STORAGE_KEYS.profile);
    state.profile = null;
    fillProfileForm(null);
    profileStatusKey = "profileCleared";
    $("profileStatus").textContent = t("profileCleared");
}

function renderLineageRoleOptions() {
    const config = getSystemConfig(getActiveSystemKey());
    const select = $("lineageRole");
    const currentValue = select.value;
    select.innerHTML = config.lineages.map((option) => (
        `<option value="${escapeHtml(option.value)}">${escapeHtml(labelFor(option))}</option>`
    )).join("");
    if (config.lineages.some((option) => option.value === currentValue)) select.value = currentValue;
}

function renderClassOptions() {
    const config = getSystemConfig(getActiveSystemKey());
    const select = $("classArchetype");
    const currentValue = select.value;
    select.innerHTML = config.classes.map((option) => (
        `<option value="${escapeHtml(option.value)}">${escapeHtml(labelFor(option))}</option>`
    )).join("");
    if (config.classes.some((option) => option.value === currentValue)) select.value = currentValue;
}

function renderAttributes(values, preserveCurrent = false) {
    const system = getActiveSystemKey();
    const config = getSystemConfig(system);
    const currentValues = values || !preserveCurrent ? null : getCurrentAttributeValues();
    const hasCurrentValues = currentValues && Object.keys(currentValues).length > 0;
    const sourceValues = values || (hasCurrentValues ? currentValues : null) || (state.profile?.system === system ? state.profile.attributes : null);
    const attributes = { ...getDefaultAttributes(system), ...(sourceValues || {}) };

    $("attributesGrid").innerHTML = config.attributes.map((attribute) => {
        const parsedValue = parseInt(attributes[attribute.key], 10);
        const value = Number.isFinite(parsedValue) ? clamp(parsedValue, 0, 99) : 10;
        return `
            <div class="attribute-card">
                <label>
                    <span class="attribute-name">
                        ${escapeHtml(labelFor(attribute))}
                        <span class="attribute-key">${escapeHtml(attribute.short)}</span>
                    </span>
                    <input type="number" min="0" max="99" value="${value}" data-attribute-key="${escapeHtml(attribute.key)}" />
                </label>
            </div>
        `;
    }).join("");
}

function getHpStatus(current, max) {
    const percent = max > 0 ? (current / max) * 100 : 0;
    if (current <= 0) return { key: "hpDown", className: "hp-down" };
    if (percent <= 30) return { key: "hpCritical", className: "hp-critical" };
    if (percent <= 69) return { key: "hpWounded", className: "hp-wounded" };
    return { key: "hpStable", className: "hp-stable" };
}

function renderHp() {
    const hp = getHpFromInputs();
    $("maxHp").value = hp.max;
    $("currentHp").value = hp.current;
    const percent = Math.round((hp.current / hp.max) * 100);
    const status = getHpStatus(hp.current, hp.max);
    const panel = document.querySelector(".hp-panel");
    panel.classList.remove("hp-stable", "hp-wounded", "hp-critical", "hp-down");
    panel.classList.add(status.className);
    $("hpBar").style.width = `${percent}%`;
    $("hpState").textContent = t(status.key);
    $("hpReadout").textContent = `${hp.current} / ${hp.max} HP`;
}

function renderLastRoll() {
    const text = state.lastRoll ? `${t("lastRollValue")}: ${state.lastRoll.total}` : t("lastRollEmpty");
    $("lastRollHp").textContent = text;
    $("lastRollEncounter").textContent = text;
    ["lastRollDamage", "lastRollHeal", "lastRollEncounterDamage", "lastRollEncounterHeal"].forEach((id) => {
        $(id).disabled = !state.lastRoll;
    });
}

function persistHp() {
    state.profile = getProfileFromForm();
    saveJSON(STORAGE_KEYS.profile, state.profile);
    renderHp();
}

function applyHpDelta(mode) {
    const hp = getHpFromInputs();
    const delta = clamp(parseInt($("hpDelta").value, 10) || 0, 0, 999);
    hp.current = mode === "damage"
        ? clamp(hp.current - delta, 0, hp.max)
        : clamp(hp.current + delta, 0, hp.max);
    $("currentHp").value = hp.current;
    persistHp();
}

function applyLastRollToHp(mode) {
    if (!state.lastRoll) {
        showInlineFeedback("hpFeedback", "noRecentRoll", "hp");
        return;
    }
    const hp = getHpFromInputs();
    const delta = Math.max(0, Number(state.lastRoll.total) || 0);
    hp.current = mode === "damage"
        ? clamp(hp.current - delta, 0, hp.max)
        : clamp(hp.current + delta, 0, hp.max);
    $("currentHp").value = hp.current;
    persistHp();
    showInlineFeedback("hpFeedback", mode === "damage" ? "lastRollDamageApplied" : "lastRollHealingApplied", "hp");
}

function resetHp() {
    const hp = getHpFromInputs();
    $("currentHp").value = hp.max;
    persistHp();
}

function renderRollTypes() {
    const select = $("rollType");
    const currentValue = select.value || state.settings.rollType;
    select.innerHTML = ROLL_TYPES.map((type) => (
        `<option value="${escapeHtml(type.value)}">${escapeHtml(labelFor(type))}</option>`
    )).join("");
    select.value = ROLL_TYPES.some((type) => type.value === currentValue) ? currentValue : "skillCheck";
}

function getRollTypeLabel(value = $("rollType").value) {
    const type = ROLL_TYPES.find((item) => item.value === value) || ROLL_TYPES[2];
    return labelFor(type);
}

function randomInt(min, max) {
    if (window.crypto && crypto.getRandomValues) {
        const array = new Uint32Array(1);
        crypto.getRandomValues(array);
        return min + (array[0] % (max - min + 1));
    }
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function rollDice() {
    const die = clamp(parseInt($("diceType").value, 10) || 20, 4, 100);
    const quantity = clamp(parseInt($("diceQuantity").value, 10) || 1, 1, 10);
    const modifier = clamp(parseInt($("modifier").value, 10) || 0, -99, 99);
    const rolls = Array.from({ length: quantity }, () => randomInt(1, die));
    const total = rolls.reduce((sum, value) => sum + value, 0) + modifier;

    $("diceQuantity").value = quantity;
    $("modifier").value = modifier;
    state.settings.selectedDie = die;
    state.settings.quantity = quantity;
    state.settings.modifier = modifier;
    state.settings.rollType = $("rollType").value;
    saveSettings();
    animateRoll(rolls, total);
}

function animateRoll(finalRolls, total) {
    const die = parseInt($("diceType").value, 10);
    const display = $("diceDisplay");
    const value = $("diceValue");
    const panel = document.querySelector(".dice-panel");
    const duration = die === 20 ? 880 : die === 100 ? 820 : 680;
    const startedAt = performance.now();

    display.className = `die-shape die-d${die} rolling`;
    panel.classList.add("roll-glow");
    $("rollDice").disabled = true;
    $("individualResults").textContent = t("rolling");
    $("totalResult").textContent = "-";
    updateDieMark(die);

    const tick = () => {
        value.textContent = randomInt(1, die);
        if (performance.now() - startedAt < duration) {
            requestAnimationFrame(tick);
            return;
        }

        display.classList.remove("rolling");
        display.classList.add("roll-impact");
        value.textContent = finalRolls.length === 1 ? finalRolls[0] : total;
        $("totalResult").textContent = total;
        $("individualResults").textContent = formatRollResultText(finalRolls, total);
        $("rollDice").disabled = false;

        const entry = buildHistoryEntry(finalRolls, total);
        state.lastRoll = makeLastRoll(entry);
        renderLastRoll();
        addRollToHistory(entry);

        window.setTimeout(() => {
            display.classList.remove("roll-impact");
            panel.classList.remove("roll-glow");
        }, 440);
    };

    requestAnimationFrame(tick);
}

function updateDieMark(die) {
    const mark = document.querySelector("#diceDisplay .die-mark");
    if (mark) mark.textContent = `d${die}`;
}

function buildHistoryEntry(rolls, total) {
    const system = getActiveSystemKey();
    const die = parseInt($("diceType").value, 10);
    const quantity = clamp(parseInt($("diceQuantity").value, 10) || 1, 1, 10);
    const modifier = clamp(parseInt($("modifier").value, 10) || 0, -99, 99);
    const profile = getProfileFromForm();
    const rollType = $("rollType").value;

    return {
        id: `${Date.now()}-${randomInt(1000, 9999)}`,
        characterName: profile.characterName || t("unnamedCharacter"),
        system,
        systemLabel: getSystemConfig(system).label[currentLanguage],
        rollType,
        rollTypeLabel: getRollTypeLabel(rollType),
        die,
        quantity,
        modifier,
        rolls,
        total,
        createdAt: new Date().toISOString()
    };
}

function addRollToHistory(entry) {
    state.history = [entry, ...state.history].slice(0, 20);
    saveJSON(STORAGE_KEYS.history, state.history);
    renderHistory();
}

function formatRollExpression(entry) {
    const modifier = Number(entry.modifier) || 0;
    const sign = modifier > 0 ? "+" : "";
    const modifierText = modifier === 0 ? "" : ` ${sign}${modifier}`;
    return `${entry.quantity}d${entry.die}${modifierText}`;
}

function formatRollResultText(rolls, total) {
    const profile = getProfileFromForm();
    const character = profile.characterName || t("unnamedCharacter");
    const expression = `${$("diceQuantity").value}d${$("diceType").value}${Number($("modifier").value) ? ` ${Number($("modifier").value) > 0 ? "+" : ""}${$("modifier").value}` : ""}`;
    return `${character} ${t("rolled")} ${getRollTypeLabel()}: ${expression} → ${total} · ${t("individualResults")}: ${rolls.join(", ")}`;
}

function renderHistory() {
    const list = $("historyList");
    if (!state.history.length) {
        list.innerHTML = `<p class="empty-state">${escapeHtml(t("emptyHistory"))}</p>`;
        return;
    }

    list.innerHTML = state.history.map((entry) => `
        <article class="history-item">
            <div class="history-top">
                <div>
                    <strong>${escapeHtml(entry.characterName || t("unnamedCharacter"))} · ${escapeHtml(entry.rollTypeLabel || getRollTypeLabel(entry.rollType))}</strong>
                    <p class="history-meta">${escapeHtml(getSystemConfig(entry.system).label[currentLanguage])} · ${escapeHtml(formatTimestamp(entry.createdAt))}</p>
                </div>
                <div class="history-total">${escapeHtml(entry.total)}</div>
            </div>
            <p class="history-meta">
                ${escapeHtml(formatRollExpression(entry))} · ${escapeHtml(t("rolls"))}: ${escapeHtml(entry.rolls.join(", "))} · Total: ${escapeHtml(entry.total)}
            </p>
        </article>
    `).join("");
}

function clearHistory() {
    state.history = [];
    state.lastRoll = null;
    localStorage.removeItem(STORAGE_KEYS.history);
    renderLastRoll();
    renderHistory();
}

function formatHistoryText() {
    const activeProfile = getProfileFromForm();
    const header = [
        "NEON DICE — Roll History",
        `Generated: ${formatTimestampForExport(new Date().toISOString())}`,
        `Character: ${activeProfile.characterName || t("unnamedCharacter")}`,
        `System: ${getSystemConfig(getActiveSystemKey()).label[currentLanguage]}`
    ];
    const entries = state.history.map((entry) => {
        const stamp = formatTimestampForExport(entry.createdAt);
        const rollType = entry.rollTypeLabel || getRollTypeLabel(entry.rollType);
        return [
            `[${stamp}]`,
            `Type: ${rollType}`,
            `Formula: ${formatRollExpression(entry)}`,
            `Rolls: ${entry.rolls.join(", ")}`,
            `Total: ${entry.total}`
        ].join("\n");
    });
    return `${header.join("\n")}\n\n${entries.join("\n\n---\n\n")}`;
}

async function copyHistory() {
    const text = formatHistoryText();
    if (!text) return;
    try {
        if (!navigator.clipboard?.writeText) throw new Error("Clipboard API unavailable");
        await navigator.clipboard.writeText(text);
    } catch {
        const textarea = document.createElement("textarea");
        textarea.value = text;
        textarea.setAttribute("readonly", "");
        textarea.style.position = "fixed";
        textarea.style.opacity = "0";
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand("copy");
        textarea.remove();
    }
    showHistoryFeedback("historyCopied");
}

function downloadHistoryTxt() {
    const blob = new Blob([formatHistoryText()], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "neon-dice-roll-history.txt";
    document.body.appendChild(link);
    link.click();
    link.remove();
    URL.revokeObjectURL(url);
    showHistoryFeedback("historyDownloaded");
}

function showHistoryFeedback(key) {
    showInlineFeedback("historyFeedback", key, "history");
}

function showInlineFeedback(elementId, key, channel) {
    const timerMap = {
        history: historyFeedbackTimer,
        hp: hpFeedbackTimer,
        encounter: encounterFeedbackTimer
    };
    const setterMap = {
        history: (value) => { historyFeedbackTimer = value; },
        hp: (value) => { hpFeedbackTimer = value; },
        encounter: (value) => { encounterFeedbackTimer = value; }
    };
    $(elementId).textContent = t(key);
    window.clearTimeout(timerMap[channel]);
    setterMap[channel](window.setTimeout(() => {
        $(elementId).textContent = "";
    }, 2200));
}

function savePreset() {
    if (state.presets.length >= 8) {
        showHistoryFeedback("presetLimit");
        return;
    }
    const name = $("presetName").value.trim() || getRollTypeLabel();
    const preset = {
        id: `${Date.now()}-${randomInt(100, 999)}`,
        name,
        die: parseInt($("diceType").value, 10),
        quantity: clamp(parseInt($("diceQuantity").value, 10) || 1, 1, 10),
        modifier: clamp(parseInt($("modifier").value, 10) || 0, -99, 99),
        rollType: $("rollType").value
    };
    state.presets = [preset, ...state.presets].slice(0, 8);
    saveJSON(STORAGE_KEYS.presets, state.presets);
    $("presetName").value = "";
    renderPresets();
    showHistoryFeedback("presetSaved");
}

function runPreset(id) {
    const preset = state.presets.find((item) => item.id === id);
    if (!preset) return;
    $("diceType").value = preset.die;
    $("diceQuantity").value = preset.quantity;
    $("modifier").value = preset.modifier;
    $("rollType").value = preset.rollType;
    updateDieDisplay(preset.die);
    rollDice();
}

function deletePreset(id) {
    state.presets = state.presets.filter((item) => item.id !== id);
    saveJSON(STORAGE_KEYS.presets, state.presets);
    renderPresets();
    showHistoryFeedback("presetDeleted");
}

function renderPresets() {
    $("presetCount").textContent = `${state.presets.length} / 8`;
    const list = $("presetList");
    if (!state.presets.length) {
        list.innerHTML = `<p class="empty-state">${escapeHtml(t("emptyPresets"))}</p>`;
        return;
    }
    list.innerHTML = state.presets.map((preset) => `
        <article class="preset-item">
            <div class="preset-item-top">
                <strong>${escapeHtml(preset.name)}</strong>
                <span class="history-meta">${escapeHtml(preset.quantity)}d${escapeHtml(preset.die)} ${preset.modifier ? `${preset.modifier > 0 ? "+" : ""}${escapeHtml(preset.modifier)}` : ""}</span>
            </div>
            <p class="history-meta">${escapeHtml(getRollTypeLabel(preset.rollType))}</p>
            <div class="preset-actions">
                <button class="small" type="button" data-preset-run="${escapeHtml(preset.id)}">${escapeHtml(t("runPreset"))}</button>
                <button class="ghost small" type="button" data-preset-delete="${escapeHtml(preset.id)}">${escapeHtml(t("deletePreset"))}</button>
            </div>
        </article>
    `).join("");
}

function getEncountersForSystem(system) {
    return ENCOUNTERS.filter((encounter) => encounter.system === system);
}

function makeEncounterState(base) {
    return base ? { ...base, currentHp: base.maxHp } : null;
}

function saveActiveEncounter() {
    if (state.activeEncounter) saveJSON(STORAGE_KEYS.activeEncounter, state.activeEncounter);
}

function renderEncounterOptions() {
    const system = getActiveSystemKey();
    const options = getEncountersForSystem(system);
    $("encounterSelect").innerHTML = options.map((encounter) => (
        `<option value="${escapeHtml(encounter.id)}">${escapeHtml(textFor(encounter.name))}</option>`
    )).join("");
    if (state.activeEncounter?.system === system) {
        $("encounterSelect").value = state.activeEncounter.id;
    }
}

function loadEncounter() {
    const encounter = ENCOUNTERS.find((item) => item.id === $("encounterSelect").value);
    state.activeEncounter = makeEncounterState(encounter);
    saveActiveEncounter();
    renderEncounter();
    showInlineFeedback("encounterFeedback", "encounterLoaded", "encounter");
}

function renderEncounter() {
    const system = getActiveSystemKey();
    if (!state.activeEncounter || state.activeEncounter.system !== system) {
        state.activeEncounter = makeEncounterState(getEncountersForSystem(system)[0]);
        saveActiveEncounter();
    }
    const encounter = state.activeEncounter;
    if (!encounter) return;
    const percent = Math.round((encounter.currentHp / encounter.maxHp) * 100);
    const status = getHpStatus(encounter.currentHp, encounter.maxHp);
    const card = document.querySelector(".encounter-card");
    card.classList.remove("hp-stable", "hp-wounded", "hp-critical", "hp-down");
    card.classList.add(status.className);
    $("encounterSelect").value = encounter.id;
    $("encounterName").textContent = textFor(encounter.name);
    $("encounterDifficulty").textContent = encounter.difficulty;
    $("encounterSuggested").textContent = `${t("suggestedRoll")}: ${textFor(encounter.suggestedRoll)}`;
    $("encounterDescription").textContent = textFor(encounter.description);
    $("encounterHpReadout").textContent = `${encounter.currentHp}/${encounter.maxHp}`;
    $("encounterHpBar").style.width = `${percent}%`;
}

function applyEncounterDelta(mode) {
    if (!state.activeEncounter) return;
    const delta = clamp(parseInt($("encounterDelta").value, 10) || 0, 0, 999);
    state.activeEncounter.currentHp = mode === "damage"
        ? clamp(state.activeEncounter.currentHp - delta, 0, state.activeEncounter.maxHp)
        : clamp(state.activeEncounter.currentHp + delta, 0, state.activeEncounter.maxHp);
    saveActiveEncounter();
    renderEncounter();
}

function applyLastRollToEncounter(mode) {
    if (!state.lastRoll || !state.activeEncounter) {
        showInlineFeedback("encounterFeedback", "noRecentRoll", "encounter");
        return;
    }
    const delta = Math.max(0, Number(state.lastRoll.total) || 0);
    state.activeEncounter.currentHp = mode === "damage"
        ? clamp(state.activeEncounter.currentHp - delta, 0, state.activeEncounter.maxHp)
        : clamp(state.activeEncounter.currentHp + delta, 0, state.activeEncounter.maxHp);
    saveActiveEncounter();
    renderEncounter();
    showInlineFeedback("encounterFeedback", mode === "damage" ? "lastRollDamageApplied" : "lastRollHealingApplied", "encounter");
}

function resetEncounter() {
    if (!state.activeEncounter) return;
    state.activeEncounter.currentHp = state.activeEncounter.maxHp;
    saveActiveEncounter();
    renderEncounter();
}

function formatTimestamp(isoString) {
    const date = new Date(isoString);
    return new Intl.DateTimeFormat(currentLanguage === "es" ? "es-CO" : "en-US", {
        hour: "2-digit",
        minute: "2-digit",
        day: "2-digit",
        month: "short"
    }).format(date);
}

function formatTimestampForExport(isoString) {
    const date = new Date(isoString);
    const pad = (value) => String(value).padStart(2, "0");
    return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())} ${pad(date.getHours())}:${pad(date.getMinutes())}`;
}

function updateRollReadoutText() {
    if ($("totalResult").textContent === "-") {
        $("individualResults").textContent = t("rollPrompt");
    }
}

function updateDieDisplay(die) {
    $("diceDisplay").className = `die-shape die-d${die}`;
    $("diceValue").textContent = die;
    updateDieMark(die);
}

function bindEvents() {
    $("languageSelect").addEventListener("change", (event) => setLanguage(event.target.value));
    $("gameSystem").addEventListener("change", (event) => {
        setGameSystem(event.target.value);
        state.settings.system = event.target.value;
        saveSettings();
    });
    $("diceType").addEventListener("change", (event) => {
        const die = Number(event.target.value);
        updateDieDisplay(die);
        state.settings.selectedDie = die;
        saveSettings();
    });
    $("rollType").addEventListener("change", (event) => {
        state.settings.rollType = event.target.value;
        saveSettings();
    });
    $("diceQuantity").addEventListener("change", () => {
        $("diceQuantity").value = clamp(parseInt($("diceQuantity").value, 10) || 1, 1, 10);
    });
    $("modifier").addEventListener("change", () => {
        $("modifier").value = clamp(parseInt($("modifier").value, 10) || 0, -99, 99);
    });
    $("maxHp").addEventListener("change", persistHp);
    $("currentHp").addEventListener("change", persistHp);
    $("saveProfile").addEventListener("click", saveProfile);
    $("resetProfile").addEventListener("click", resetProfile);
    $("applyDamage").addEventListener("click", () => applyHpDelta("damage"));
    $("healHp").addEventListener("click", () => applyHpDelta("heal"));
    $("resetHp").addEventListener("click", resetHp);
    $("lastRollDamage").addEventListener("click", () => applyLastRollToHp("damage"));
    $("lastRollHeal").addEventListener("click", () => applyLastRollToHp("heal"));
    $("rollDice").addEventListener("click", rollDice);
    $("clearHistory").addEventListener("click", clearHistory);
    $("copyHistory").addEventListener("click", copyHistory);
    $("downloadHistory").addEventListener("click", downloadHistoryTxt);
    $("savePreset").addEventListener("click", savePreset);
    $("presetList").addEventListener("click", (event) => {
        const runId = event.target.dataset.presetRun;
        const deleteId = event.target.dataset.presetDelete;
        if (runId) runPreset(runId);
        if (deleteId) deletePreset(deleteId);
    });
    $("loadEncounter").addEventListener("click", loadEncounter);
    $("damageEncounter").addEventListener("click", () => applyEncounterDelta("damage"));
    $("healEncounter").addEventListener("click", () => applyEncounterDelta("heal"));
    $("resetEncounter").addEventListener("click", resetEncounter);
    $("lastRollEncounterDamage").addEventListener("click", () => applyLastRollToEncounter("damage"));
    $("lastRollEncounterHeal").addEventListener("click", () => applyLastRollToEncounter("heal"));
}

function initApp() {
    loadState();
    bindEvents();
    $("languageSelect").value = currentLanguage;
    renderRollTypes();
    $("diceType").value = String(state.settings.selectedDie);
    $("diceQuantity").value = state.settings.quantity;
    $("modifier").value = state.settings.modifier;
    $("rollType").value = state.settings.rollType;
    updateDieDisplay(state.settings.selectedDie);
    fillProfileForm(state.profile);
    profileStatusKey = state.profile ? "profileLoaded" : "profileNotSaved";
    $("profileStatus").textContent = t(profileStatusKey);
    renderLastRoll();
    renderPresets();
    renderEncounterOptions();
    renderEncounter();
    applyTranslations();
}

document.addEventListener("DOMContentLoaded", initApp);
