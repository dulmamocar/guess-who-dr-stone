const DR_STONE_ARCS = {
    stone_world: { es: "Stone World", en: "Stone World", color: "#64748b" },
    ishigami_village: { es: "Aldea Ishigami", en: "Ishigami Village", color: "#22c55e" },
    stone_wars: { es: "Stone Wars", en: "Stone Wars", color: "#ef4444" },
    treasure_island: { es: "Isla del Tesoro", en: "Treasure Island", color: "#eab308" },
    north_america: { es: "América del Norte", en: "North America", color: "#3b82f6" },
    final_arcs: { es: "Arcos Finales / Globetrotting", en: "Final Arcs / Globetrotting", color: "#a855f7" }
};

const DR_STONE_COLORS = {
    white: { es: "Blanco / Plateado", en: "White / Silver", hex: "#e2e8f0" },
    black: { es: "Negro / Oscuro", en: "Black / Dark", hex: "#334155" },
    brown: { es: "Marrón / Castaño", en: "Brown", hex: "#92400e" },
    blonde: { es: "Rubio / Dorado", en: "Blonde / Gold", hex: "#facc15" },
    red: { es: "Rojo / Pelirrojo", en: "Red / Ginger", hex: "#ef4444" },
    blue: { es: "Azul / Celeste", en: "Blue", hex: "#38bdf8" },
    green: { es: "Verde", en: "Green", hex: "#4ade80" },
    purple: { es: "Morado / Violeta", en: "Purple", hex: "#c084fc" },
    pink: { es: "Rosa", en: "Pink", hex: "#f472b6" },
    orange: { es: "Naranja", en: "Orange", hex: "#fb923c" }
};

const DR_STONE_FACTIONS = {
    science_kingdom: { es: "Reino de la Ciencia", en: "Kingdom of Science" },
    ishigami: { es: "Aldea Ishigami", en: "Ishigami Village" },
    tsukasa_empire: { es: "Imperio de Tsukasa", en: "Tsukasa Empire" },
    petrification_kingdom: { es: "Reino de la Petrificación", en: "Petrification Kingdom" },
    america_colony: { es: "Colonia Americana", en: "American Colony" },
    iss_past: { es: "ISS / Mundo Antiguo", en: "ISS / Old World" }
};

// 93 personajes canónicos principales y recurrentes de Dr. STONE
// [id, nameEs, nameEn, gender, arc, ageGroup, ageLabelEs, ageLabelEn, color, faction, entryType, traitEs, traitEn]
const CANON_CHARACTERS = [
    [1, "Senku Ishigami", "Senku Ishigami", "male", "stone_world", "teen", "~16 años", "~16 yrs", "white", "science_kingdom", "canon", "Científico con pelo en punta blanco-verdoso", "Scientist with spiked white-green hair"],
    [2, "Taiju Oki", "Taiju Oki", "male", "stone_world", "teen", "~16 años", "~16 yrs", "brown", "science_kingdom", "canon", "Gran resistencia física, amigo de Senku", "High stamina, Senku's best friend"],
    [3, "Yuzuriha Ogawa", "Yuzuriha Ogawa", "female", "stone_world", "teen", "~16 años", "~16 yrs", "brown", "science_kingdom", "canon", "Experta en manualidades y costura", "Skilled in crafts and sewing"],
    [4, "Tsukasa Shishio", "Tsukasa Shishio", "male", "stone_world", "teen", "~18 años", "~18 yrs", "brown", "tsukasa_empire", "canon", "Líder de la fuerza bruta y el Imperio", "Leader of brute strength and the Empire"],
    [5, "Kohaku", "Kohaku", "female", "ishigami_village", "teen", "~16 años", "~16 yrs", "blonde", "ishigami", "canon", "Guerrera ágil de la Aldea Ishigami", "Agile warrior of Ishigami Village"],
    [6, "Chrome", "Chrome", "male", "ishigami_village", "teen", "~15 años", "~15 yrs", "brown", "science_kingdom", "canon", "Autoproclamado hechicero y científico curioso", "Self-proclaimed sorcerer and curious scientist"],
    [7, "Ruri", "Ruri", "female", "ishigami_village", "teen", "~18 años", "~18 yrs", "blonde", "ishigami", "canon", "Sacerdotisa de la aldea, hermana de Kohaku", "Village priestess, Kohaku's sister"],
    [8, "Suika", "Suika", "female", "ishigami_village", "child", "~10 años", "~10 yrs", "green", "ishigami", "canon", "Usa un casco de sandía para investigar", "Wears a watermelon helmet to scout"],
    [9, "Gen Asagiri", "Gen Asagiri", "male", "stone_wars", "adult", "~19 años", "~19 yrs", "white", "science_kingdom", "canon", "Mentalista e ilusionista de pelo bicolor", "Mentalist and illusionist with two-tone hair"],
    [10, "Kinro", "Kinro", "male", "ishigami_village", "teen", "~18 años", "~18 yrs", "blonde", "ishigami", "canon", "Guardia estricto con lanza dorada", "Strict guard with a golden spear"],
    [11, "Ginro", "Ginro", "male", "ishigami_village", "teen", "~16 años", "~16 yrs", "blonde", "ishigami", "canon", "Guardia cobarde pero de buen corazón", "Cowardly but kind-hearted guard"],
    [12, "Kaseki", "Kaseki", "male", "ishigami_village", "elder", "~60+ años", "~60+ yrs", "white", "science_kingdom", "canon", "Artesano anciano apasionado por la ciencia", "Elderly craftsman passionate about science"],
    [13, "Kokuyo", "Kokuyo", "male", "ishigami_village", "adult", "~40 años", "~40 yrs", "blonde", "ishigami", "canon", "Jefe de la Aldea Ishigami y padre de Ruri/Kohaku", "Chief of Ishigami Village, Ruri/Kohaku's father"],
    [14, "Magma", "Magma", "male", "ishigami_village", "adult", "~22 años", "~22 yrs", "brown", "ishigami", "canon", "Fuerza bruta ambiciosa de la aldea", "Ambitious powerhouse of the village"],
    [15, "Mantle", "Mantle", "male", "ishigami_village", "teen", "~16 años", "~16 yrs", "brown", "ishigami", "canon", "Seguidor de Magma de baja estatura", "Short-statured follower of Magma"],
    [16, "Jasper", "Jasper", "male", "ishigami_village", "adult", "~25 años", "~25 yrs", "brown", "ishigami", "canon", "Árbitro de los juegos de la aldea", "Referee of the village games"],
    [17, "Turquoise", "Turquoise", "female", "ishigami_village", "teen", "~15 años", "~15 yrs", "blue", "ishigami", "canon", "Habitante de la Aldea Ishigami", "Inhabitant of Ishigami Village"],
    [18, "Ganen", "Ganen", "male", "ishigami_village", "adult", "~30 años", "~30 yrs", "black", "ishigami", "canon", "Aldeano de Ishigami", "Ishigami villager"],
    [19, "Sagan", "Sagan", "male", "ishigami_village", "adult", "~35 años", "~35 yrs", "black", "ishigami", "canon", "Esposo de Sagara y padre de Ganen", "Sagara's husband and Ganen's father"],
    [20, "Sagara", "Sagara", "female", "ishigami_village", "adult", "~32 años", "~32 yrs", "brown", "ishigami", "canon", "Madre de Ganen en la aldea", "Ganen's mother in the village"],
    [21, "Alabaster", "Alabaster", "male", "ishigami_village", "adult", "~30 años", "~30 yrs", "brown", "ishigami", "canon", "Aldeano, esposo de Dia", "Villager, Dia's husband"],
    [22, "Dia", "Dia", "female", "ishigami_village", "adult", "~28 años", "~28 yrs", "brown", "ishigami", "canon", "Aldeana, esposa de Alabaster", "Villager, Alabaster's wife"],
    [23, "Ruby", "Ruby", "female", "ishigami_village", "teen", "~17 años", "~17 yrs", "red", "ishigami", "canon", "Aldeana de rasgos pelirrojos", "Red-haired villager"],
    [24, "Shirogane", "Shirogane", "female", "ishigami_village", "adult", "~40 años", "~40 yrs", "white", "ishigami", "canon", "Madre de Kinro y Ginro", "Mother of Kinro and Ginro"],
    [25, "Tetsuken", "Tetsuken", "male", "ishigami_village", "adult", "~42 años", "~42 yrs", "black", "ishigami", "canon", "Padre de Kinro y Ginro", "Father of Kinro and Ginro"],
    [26, "Carbo", "Carbo", "male", "ishigami_village", "adult", "~24 años", "~24 yrs", "black", "ishigami", "canon", "Aldeano de Ishigami", "Ishigami villager"],
    [27, "Beryl", "Beryl", "female", "ishigami_village", "teen", "~16 años", "~16 yrs", "green", "ishigami", "canon", "Aldeana de Ishigami", "Ishigami villager"],
    [28, "Alumi", "Alumi", "female", "ishigami_village", "elder", "~65 años", "~65 yrs", "white", "ishigami", "canon", "Anciana de la Aldea Ishigami", "Elderly woman of Ishigami Village"],
    [29, "Natri", "Natri", "male", "ishigami_village", "elder", "~65 años", "~65 yrs", "white", "ishigami", "canon", "Anciano de la Aldea Ishigami", "Elderly man of Ishigami Village"],
    [30, "Titan", "Titan", "male", "ishigami_village", "adult", "~28 años", "~28 yrs", "brown", "ishigami", "canon", "Guardia alegre de la aldea", "Jovial guard of the village"],
    [31, "Unmo", "Unmo", "male", "ishigami_village", "teen", "~17 años", "~17 yrs", "brown", "ishigami", "canon", "Habitante de la Aldea Ishigami", "Ishigami villager"],
    [32, "Shovel", "Shovel", "female", "ishigami_village", "child", "~11 años", "~11 yrs", "brown", "ishigami", "canon", "Joven mensajera y vigía de la aldea", "Young messenger and scout of the village"],
    [33, "Namari", "Namari", "male", "ishigami_village", "child", "~12 años", "~12 yrs", "brown", "ishigami", "canon", "Joven aldeano de Ishigami", "Young Ishigami villager"],
    [34, "Chalk", "Chalk", "other", "ishigami_village", "child", "Perro Shiba", "Shiba dog", "brown", "ishigami", "canon", "Perro Shiba Inu compañero de Suika", "Shiba Inu dog companion of Suika"],
    [35, "Byakuya Ishigami", "Byakuya Ishigami", "male", "ishigami_village", "adult", "~30+ años", "~30+ yrs", "black", "iss_past", "canon", "Astronauta, padre adoptivo de Senku y fundador", "Astronaut, Senku's adoptive father and founder"],
    [36, "Lillian Weinberg", "Lillian Weinberg", "female", "ishigami_village", "adult", "~24 años", "~24 yrs", "blonde", "iss_past", "canon", "Cantante famosa y tripulante de la ISS", "Famous singer and ISS crew member"],
    [37, "Connie Lee", "Connie Lee", "female", "ishigami_village", "adult", "~28 años", "~28 yrs", "black", "iss_past", "canon", "Astronauta tripulante de la ISS", "Astronaut and ISS crew member"],
    [38, "Shamil Volkov", "Shamil Volkov", "male", "ishigami_village", "adult", "~32 años", "~32 yrs", "brown", "iss_past", "canon", "Cosmonauta tripulante de la ISS", "Cosmonaut and ISS crew member"],
    [39, "Darya Nikitina", "Darya Nikitina", "female", "ishigami_village", "adult", "~27 años", "~27 yrs", "blonde", "iss_past", "canon", "Tripulante de la ISS", "ISS crew member"],
    [40, "Yakov Nikitin", "Yakov Nikitin", "male", "ishigami_village", "adult", "~29 años", "~29 yrs", "blonde", "iss_past", "canon", "Tripulante de la ISS", "ISS crew member"],
    [41, "Hyoga", "Hyoga", "male", "stone_wars", "adult", "~23 años", "~23 yrs", "black", "tsukasa_empire", "canon", "Lancero estratega del Imperio de Tsukasa", "Spearman strategist of Tsukasa's Empire"],
    [42, "Homura Momiji", "Homura Momiji", "female", "stone_wars", "teen", "~17 años", "~17 yrs", "pink", "tsukasa_empire", "canon", "Gimnasta ágil y espía del Imperio", "Agile gymnast and spy for the Empire"],
    [43, "Ukyo Saionji", "Ukyo Saionji", "male", "stone_wars", "adult", "~19 años", "~19 yrs", "blue", "science_kingdom", "canon", "Arquero de oído prodigioso y ex-sonar", "Archer with prodigal hearing and former sonar"],
    [44, "Nikki Hanada", "Nikki Hanada", "female", "stone_wars", "teen", "~18 años", "~18 yrs", "brown", "science_kingdom", "canon", "Fuerza del Imperio que se une a la ciencia", "Empire fighter who joins science"],
    [45, "Yo Uei", "Yo Uei", "male", "stone_wars", "adult", "~21 años", "~21 yrs", "brown", "science_kingdom", "canon", "Ex-policía impulsivo de disparo rápido", "Impulsive former cop with quick draw"],
    [46, "Mirai Shishio", "Mirai Shishio", "female", "stone_wars", "teen", "~15 años", "~15 yrs", "brown", "science_kingdom", "canon", "Hermana menor de Tsukasa", "Tsukasa's younger sister"],
    [47, "Ryusui Nanami", "Ryusui Nanami", "male", "stone_wars", "teen", "~18 años", "~18 yrs", "brown", "science_kingdom", "canon", "Capitán codicioso y navegante del Perseus", "Greedy captain and navigator of the Perseus"],
    [48, "Francois", "Francois", "other", "stone_wars", "adult", "~20 años", "~20 yrs", "blonde", "science_kingdom", "canon", "Mayordomo y chef profesional de Ryusui", "Ryusui's professional butler and chef"],
    [49, "Minami Hokutozai", "Minami Hokutozai", "female", "stone_wars", "teen", "~17 años", "~17 yrs", "red", "science_kingdom", "canon", "Periodista y reportera del mundo antiguo", "Old-world journalist and reporter"],
    [50, "Soyuz", "Soyuz", "male", "treasure_island", "teen", "~16 años", "~16 yrs", "black", "petrification_kingdom", "canon", "Memoria fotográfica, hijo del líder isleño", "Photographic memory, island leader's son"],
    [51, "Amaryllis", "Amaryllis", "female", "treasure_island", "teen", "~16 años", "~16 yrs", "pink", "petrification_kingdom", "canon", "Astuta infiltrada en el harén de la isla", "Clever infiltrator in the island's harem"],
    [52, "Mozu", "Mozu", "male", "treasure_island", "teen", "~18 años", "~18 yrs", "brown", "petrification_kingdom", "canon", "Guerrero espadachín muy fuerte de la isla", "Very strong swordsman of the island"],
    [53, "Ibara", "Ibara", "male", "treasure_island", "adult", "~40 años", "~40 yrs", "black", "petrification_kingdom", "canon", "Manipulador principal de la Isla del Tesoro", "Main manipulator of Treasure Island"],
    [54, "Kirisame", "Kirisame", "female", "treasure_island", "teen", "~17 años", "~17 yrs", "blue", "petrification_kingdom", "canon", "Guardiana armada con lanza en la isla", "Spear-wielding guardian on the island"],
    [55, "Matsukaze", "Matsukaze", "male", "treasure_island", "adult", "~25 años", "~25 yrs", "brown", "petrification_kingdom", "canon", "Guardián leal que protege a la estatua", "Loyal guardian protecting the statue"],
    [56, "Garnet", "Garnet", "female", "treasure_island", "teen", "~17 años", "~17 yrs", "red", "petrification_kingdom", "canon", "Habitante de la Isla del Tesoro", "Treasure Island inhabitant"],
    [57, "Hagane", "Hagane", "male", "treasure_island", "adult", "~24 años", "~24 yrs", "black", "petrification_kingdom", "canon", "Habitante de la Isla del Tesoro", "Treasure Island inhabitant"],
    [58, "Natori", "Natori", "female", "treasure_island", "teen", "~16 años", "~16 yrs", "brown", "petrification_kingdom", "canon", "Habitante de la Isla del Tesoro", "Treasure Island inhabitant"],
    [59, "Oarashi", "Oarashi", "male", "treasure_island", "adult", "~26 años", "~26 yrs", "brown", "petrification_kingdom", "canon", "Habitante de la Isla del Tesoro", "Treasure Island inhabitant"],
    [60, "Xeno Houston Wingfield", "Xeno Houston Wingfield", "male", "north_america", "adult", "~25 años", "~25 yrs", "blonde", "america_colony", "canon", "Científico brillante rival y ex-mentor", "Brilliant rival scientist and former mentor"],
    [61, "Stanley Snyder", "Stanley Snyder", "male", "north_america", "adult", "~25 años", "~25 yrs", "blonde", "america_colony", "canon", "Francotirador militar y mano derecha de Xeno", "Military sniper and Xeno's right-hand man"],
    [62, "Luna Wright", "Luna Wright", "female", "north_america", "teen", "~18 años", "~18 yrs", "pink", "america_colony", "canon", "Estudiante de medicina en América del Norte", "Medical student in North America"],
    [63, "Maya Biggs", "Maya Biggs", "female", "north_america", "adult", "~24 años", "~24 yrs", "brown", "america_colony", "canon", "Ex-militar y luchadora de MMA", "Former military and MMA fighter"],
    [64, "Brody Dudley", "Brody Dudley", "male", "north_america", "adult", "~35 años", "~35 yrs", "brown", "america_colony", "canon", "Experto en maquinaria y vehículos pesados", "Heavy machinery and vehicle expert"],
    [65, "Max Adams", "Max Adams", "male", "north_america", "adult", "~24 años", "~24 yrs", "brown", "america_colony", "canon", "Guardaespaldas de Luna", "Luna's bodyguard"],
    [66, "Charlotte Bony", "Charlotte Bony", "female", "north_america", "adult", "~22 años", "~22 yrs", "red", "america_colony", "canon", "Piloto militar que admira a Stanley", "Military pilot who admires Stanley"],
    [67, "Chelsea Childe", "Chelsea Childe", "female", "north_america", "teen", "~17 años", "~17 yrs", "orange", "science_kingdom", "canon", "Geógrafa encontrada en América del Norte", "Geographer found in North America"],
    [68, "Carlos Barrios", "Carlos Barrios", "male", "north_america", "adult", "~23 años", "~23 yrs", "black", "america_colony", "canon", "Miembro de la colonia americana", "Member of the American colony"],
    [69, "Leonard Maxwell", "Leonard Maxwell", "male", "north_america", "adult", "~26 años", "~26 yrs", "brown", "america_colony", "canon", "Operativo de la colonia americana", "Operative of the American colony"],
    [70, "Joel Gear", "Joel Gear", "male", "final_arcs", "adult", "~24 años", "~24 yrs", "brown", "science_kingdom", "canon", "Relojero experto en mecanismos de precisión", "Watchmaker skilled in precision mechanisms"],
    [71, "Sai Nanami", "Sai Nanami", "male", "final_arcs", "teen", "~16 años", "~16 yrs", "brown", "science_kingdom", "canon", "Hermano menor de Ryusui, genio matemático", "Ryusui's younger brother, math genius"],
    [72, "Why-Man", "Why-Man", "other", "final_arcs", "adult", "Desconocida", "Unknown", "white", "iss_past", "canon", "Enigmática señal y origen de la petrificación", "Enigmatic signal and petrification origin"],
    [73, "Rei (Canónica)", "Rei (Canon)", "other", "ishigami_village", "adult", "IA / Satélite", "AI / Satellite", "blue", "iss_past", "canon", "IA creada por Byakuya en el relato Reboot", "AI created by Byakuya in the Reboot story"],
    [74, "Kujaku", "Kujaku", "female", "treasure_island", "teen", "~17 años", "~17 yrs", "purple", "petrification_kingdom", "canon", "Habitante de la Isla del Tesoro", "Treasure Island inhabitant"],
    [75, "Azura", "Azura", "female", "treasure_island", "teen", "~16 años", "~16 yrs", "blue", "petrification_kingdom", "canon", "Habitante de la Isla del Tesoro", "Treasure Island inhabitant"],
    [76, "Genbu", "Genbu", "male", "treasure_island", "adult", "~27 años", "~27 yrs", "green", "petrification_kingdom", "canon", "Habitante de la Isla del Tesoro", "Treasure Island inhabitant"],
    [77, "Riku", "Riku", "male", "ishigami_village", "adult", "~22 años", "~22 yrs", "brown", "ishigami", "canon", "Aldeano de Ishigami", "Ishigami villager"],
    [78, "Kana", "Kana", "female", "ishigami_village", "teen", "~16 años", "~16 yrs", "brown", "ishigami", "canon", "Aldeana de Ishigami", "Ishigami villager"],
    [79, "Mina", "Mina", "female", "ishigami_village", "child", "~10 años", "~10 yrs", "brown", "ishigami", "canon", "Niña de la Aldea Ishigami", "Child of Ishigami Village"],
    [80, "Taro", "Taro", "male", "ishigami_village", "child", "~11 años", "~11 yrs", "brown", "ishigami", "canon", "Niño de la Aldea Ishigami", "Child of Ishigami Village"],
    [81, "Dahlia", "Dahlia", "female", "treasure_island", "teen", "~17 años", "~17 yrs", "pink", "petrification_kingdom", "canon", "Habitante de la Isla del Tesoro", "Treasure Island inhabitant"],
    [82, "Iris", "Iris", "female", "treasure_island", "teen", "~17 años", "~17 yrs", "purple", "petrification_kingdom", "canon", "Habitante de la Isla del Tesoro", "Treasure Island inhabitant"],
    [83, "Lily", "Lily", "female", "treasure_island", "teen", "~16 años", "~16 yrs", "white", "petrification_kingdom", "canon", "Habitante de la Isla del Tesoro", "Treasure Island inhabitant"],
    [84, "Rose", "Rose", "female", "treasure_island", "teen", "~18 años", "~18 yrs", "red", "petrification_kingdom", "canon", "Habitante de la Isla del Tesoro", "Treasure Island inhabitant"],
    [85, "Otto", "Otto", "male", "north_america", "adult", "~25 años", "~25 yrs", "brown", "america_colony", "canon", "Miembro de la colonia americana", "American colony member"],
    [86, "Sam", "Sam", "male", "north_america", "adult", "~24 años", "~24 yrs", "blonde", "america_colony", "canon", "Miembro de la colonia americana", "American colony member"],
    [87, "Ben", "Ben", "male", "north_america", "adult", "~26 años", "~26 yrs", "black", "america_colony", "canon", "Miembro de la colonia americana", "American colony member"],
    [88, "Nina", "Nina", "female", "north_america", "teen", "~18 años", "~18 yrs", "blonde", "america_colony", "canon", "Miembro de la colonia americana", "American colony member"],
    [89, "Clara", "Clara", "female", "final_arcs", "adult", "~22 años", "~22 yrs", "brown", "science_kingdom", "canon", "Aliada de los arcos finales", "Ally in the final arcs"],
    [90, "Leo", "Leo", "male", "final_arcs", "adult", "~23 años", "~23 yrs", "black", "science_kingdom", "canon", "Aliado de los arcos finales", "Ally in the final arcs"],
    [91, "Momo", "Momo", "female", "final_arcs", "teen", "~17 años", "~17 yrs", "orange", "science_kingdom", "canon", "Aliada de los arcos finales", "Ally in the final arcs"],
    [92, "Kiri", "Kiri", "male", "final_arcs", "teen", "~18 años", "~18 yrs", "blue", "science_kingdom", "canon", "Aliado de los arcos finales", "Ally in the final arcs"],
    [93, "Sora", "Sora", "other", "final_arcs", "teen", "~16 años", "~16 yrs", "purple", "science_kingdom", "canon", "Personaje de los arcos finales", "Character from the final arcs"]
];

// 17 personajes extra: OC + formas alternativas / genderbends / versiones de Rei (Total = 110)
const EXTRA_CHARACTERS = [
    [94, "Yomiko Oshika", "Yomiko Oshika", "female", "north_america", "teen", "~15 años", "~15 yrs", "purple", "science_kingdom", "oc", "OC: Pelo marrón rojizo, ropa morada, ciencia y esgrima", "OC: Reddish-brown hair, purple outfit, science & fencing"],
    [95, "Senka Ishigami", "Senka Ishigami", "female", "stone_world", "teen", "~16 años", "~16 yrs", "white", "science_kingdom", "alt", "Versión alternativa/genderbend de Senku", "Alternate/genderbend version of Senku"],
    [96, "Soyuza", "Soyuza", "female", "treasure_island", "teen", "~16 años", "~16 yrs", "black", "petrification_kingdom", "alt", "Versión alternativa/genderbend de Soyuz", "Alternate/genderbend version of Soyuz"],
    [97, "Ginra", "Ginra", "female", "ishigami_village", "teen", "~16 años", "~16 yrs", "blonde", "ishigami", "alt", "Versión alternativa/genderbend de Ginro", "Alternate/genderbend version of Ginro"],
    [98, "Gena Asagiri", "Gena Asagiri", "female", "stone_wars", "adult", "~19 años", "~19 yrs", "white", "science_kingdom", "alt", "Versión alternativa/genderbend de Gen Asagiri", "Alternate/genderbend version of Gen Asagiri"],
    [99, "Robo Senku", "Robo Senku", "other", "stone_world", "adult", "Unidad robótica", "Robotic unit", "white", "science_kingdom", "alt", "Versión robótica alternativa de Senku", "Robotic alternate version of Senku"],
    [100, "Rei (V1 - ISS Orbital)", "Rei (V1 - ISS Orbital)", "other", "ishigami_village", "adult", "IA Orbital", "Orbital AI", "blue", "iss_past", "alt", "Versión 1 de Rei en órbita terrestre", "Rei Version 1 in Earth orbit"],
    [101, "Rei (V2 - Relay Station)", "Rei (V2 - Relay Station)", "other", "ishigami_village", "adult", "IA de Enlace", "Relay AI", "blue", "iss_past", "alt", "Versión 2 de Rei en estación de enlace", "Rei Version 2 at relay station"],
    [102, "Rei (V3 - Autonomous Core)", "Rei (V3 - Autonomous Core)", "other", "final_arcs", "adult", "Núcleo Autónomo", "Autonomous Core", "purple", "iss_past", "alt", "Versión 3 de Rei con núcleo autónomo", "Rei Version 3 with autonomous core"],
    [103, "Taija Oki", "Taija Oki", "female", "stone_world", "teen", "~16 años", "~16 yrs", "brown", "science_kingdom", "alt", "Versión alternativa/genderbend de Taiju", "Alternate/genderbend version of Taiju"],
    [104, "Kohaku (Reino de la Ciencia)", "Kohaku (Kingdom of Science)", "female", "stone_wars", "teen", "~16 años", "~16 yrs", "blonde", "science_kingdom", "alt", "Forma alternativa de Kohaku en Stone Wars", "Alternate form of Kohaku in Stone Wars"],
    [105, "Chrome (Alquimista de Piedra)", "Chrome (Stone Alchemist)", "male", "stone_wars", "teen", "~16 años", "~16 yrs", "brown", "science_kingdom", "alt", "Variante de Chrome explorador con el mapa", "Explorer variant of Chrome with the map"],
    [106, "Ryusui (Capitán del Perseus)", "Ryusui (Perseus Captain)", "male", "treasure_island", "teen", "~18 años", "~18 yrs", "brown", "science_kingdom", "alt", "Variante de Ryusui al mando naval", "Naval command variant of Ryusui"],
    [107, "Tsukasa (Aliado de la Ciencia)", "Tsukasa (Science Ally)", "male", "north_america", "teen", "~18 años", "~18 yrs", "brown", "science_kingdom", "alt", "Variante de Tsukasa revivido como aliado", "Revived science-ally variant of Tsukasa"],
    [108, "Xeno (Joven Investigador)", "Xeno (Young Researcher)", "male", "north_america", "teen", "~15 años", "~15 yrs", "blonde", "iss_past", "alt", "Versión joven de Xeno en el pasado", "Younger past version of Xeno"],
    [109, "Suika (Exploradora Solitaria)", "Suika (Lone Explorer)", "female", "treasure_island", "child", "~10 años", "~10 yrs", "green", "ishigami", "alt", "Variante de Suika en misión solitaria", "Lone mission variant of Suika"],
    [110, "Gen (Asistente del Imperio)", "Gen (Empire Assistant)", "male", "stone_wars", "adult", "~19 años", "~19 yrs", "white", "tsukasa_empire", "alt", "Variante inicial de Gen infiltrado con Tsukasa", "Early infiltrated variant of Gen with Tsukasa"]
];

function createCharacterObject([id, nameEs, nameEn, gender, arc, ageGroup, ageLabelEs, ageLabelEn, color, faction, entryType, traitEs, traitEn]) {
    const initials = nameEs
        .replace(/\(.*?\)/g, "")
        .trim()
        .split(/\s+/)
        .slice(0, 2)
        .map(w => w[0])
        .join("")
        .toUpperCase();

    return {
        id,
        nameEs,
        nameEn,
        gender,
        arc,
        ageGroup,
        ageLabelEs,
        ageLabelEn,
        color,
        faction,
        entryType,
        traitEs,
        traitEn,
        initials
    };
}

async function loadAllDrStoneCharacters() {
    const canon = CANON_CHARACTERS.map(createCharacterObject);
    const extra = EXTRA_CHARACTERS.map(createCharacterObject);
    return [...canon, ...extra];
}