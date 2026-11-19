let ALL_CHARACTERS = [];
let manualEliminated = new Set();
let eliminatedFilters = [];
let includeAltsAndOc = true;
let currentMode = "pvp"; // "pvp" o "cpu"
let currentSecretCharacter = null;

function isEnglishMode() {
    return document.documentElement.lang === "en";
}

function getCharacterName(char) {
    return isEnglishMode() ? char.nameEn : char.nameEs;
}

function getCharacterAgeLabel(char) {
    return isEnglishMode() ? char.ageLabelEn : char.ageLabelEs;
}

function getCharacterTrait(char) {
    return isEnglishMode() ? char.traitEn : char.traitEs;
}

function getArcName(arcKey) {
    const arc = DR_STONE_ARCS[arcKey];
    if (!arc) return arcKey;
    return isEnglishMode() ? arc.en : arc.es;
}

function getColorName(colorKey) {
    const c = DR_STONE_COLORS[colorKey];
    if (!c) return colorKey;
    return isEnglishMode() ? c.en : c.es;
}

function getFactionName(factionKey) {
    const f = DR_STONE_FACTIONS[factionKey];
    if (!f) return factionKey;
    return isEnglishMode() ? f.en : f.es;
}

function getGenderLabel(genderKey) {
    const en = isEnglishMode();
    if (genderKey === "female") return en ? "Female" : "Mujer";
    if (genderKey === "male") return en ? "Male" : "Hombre";
    return en ? "Other / AI / Variant" : "Otro / IA / Variante";
}

function getAgeGroupLabel(ageGroupKey) {
    const en = isEnglishMode();
    if (ageGroupKey === "child") return en ? "Child" : "Niño/a";
    if (ageGroupKey === "teen") return en ? "Teenager" : "Adolescente";
    if (ageGroupKey === "adult") return en ? "Adult" : "Adulto/a";
    return en ? "Elder" : "Mayor";
}

function getActiveRoster() {
    if (includeAltsAndOc) return ALL_CHARACTERS;
    return ALL_CHARACTERS.filter(c => c.entryType === "canon");
}

document.addEventListener("DOMContentLoaded", async () => {
    renderDynamicFilterButtons();
    setupEventListeners();

    try {
        ALL_CHARACTERS = await loadAllDrStoneCharacters();
        document.getElementById("loading-bar").style.display = "none";
        renderBoard();
        if (typeof initCpuMode === "function") initCpuMode();
    } catch (err) {
        document.getElementById("loading-bar").textContent = "Error al cargar los personajes de Dr. STONE.";
        console.error(err);
    }
});

function renderDynamicFilterButtons() {
    const arcContainer = document.getElementById("filter-arcs");
    Object.entries(DR_STONE_ARCS).forEach(([key, info]) => {
        const btn = document.createElement("button");
        btn.className = "filter-btn";
        btn.dataset.category = "arc";
        btn.dataset.value = key;
        btn.style.borderLeft = `4px solid ${info.color}`;
        btn.textContent = `¿Es del arco ${info.es}?`;
        arcContainer.appendChild(btn);
    });

    const colorContainer = document.getElementById("filter-colors");
    Object.entries(DR_STONE_COLORS).forEach(([key, info]) => {
        const btn = document.createElement("button");
        btn.className = "filter-btn";
        btn.dataset.category = "color";
        btn.dataset.value = key;
        btn.style.borderLeft = `4px solid ${info.hex}`;
        btn.textContent = `¿Su color principal es ${info.es}?`;
        colorContainer.appendChild(btn);
    });

    const factionContainer = document.getElementById("filter-factions");
    Object.entries(DR_STONE_FACTIONS).forEach(([key, info]) => {
        const btn = document.createElement("button");
        btn.className = "filter-btn";
        btn.dataset.category = "faction";
        btn.dataset.value = key;
        btn.textContent = `¿Pertenece a ${info.es}?`;
        factionContainer.appendChild(btn);
    });
}

function renderSecretCard() {
    const box = document.getElementById("secret-character-display");
    if (!currentSecretCharacter) return;

    const c = currentSecretCharacter;
    const colorInfo = DR_STONE_COLORS[c.color] || { hex: "#42a5f5" };
    const arcInfo = DR_STONE_ARCS[c.arc] || { color: "#64748b" };

    box.innerHTML = `
        <div class="secret-avatar" style="background:${colorInfo.hex}; border-color:${arcInfo.color};">${c.initials}</div>
        <strong>#${c.id} ${getCharacterName(c)}</strong>
        <div class="secret-specs">
            <span><b>${isEnglishMode() ? "Gender" : "Género"}:</b> ${getGenderLabel(c.gender)}</span>
            <span><b>${isEnglishMode() ? "Arc" : "Arco"}:</b> ${getArcName(c.arc)}</span>
            <span><b>${isEnglishMode() ? "Age" : "Edad"}:</b> ${getAgeGroupLabel(c.ageGroup)} (${getCharacterAgeLabel(c)})</span>
            <span><b>${isEnglishMode() ? "Main Color" : "Color principal"}:</b> ${getColorName(c.color)}</span>
            <span><b>${isEnglishMode() ? "Faction" : "Facción"}:</b> ${getFactionName(c.faction)}</span>
            <small class="trait-note">${getCharacterTrait(c)}</small>
        </div>
    `;
}

function setupEventListeners() {
    document.getElementById("btn-mode-pvp").addEventListener("click", () => switchMode("pvp"));
    document.getElementById("btn-mode-cpu").addEventListener("click", () => switchMode("cpu"));

    document.getElementById("toggle-include-alts").addEventListener("change", (e) => {
        includeAltsAndOc = e.target.checked;
        if (currentSecretCharacter && !includeAltsAndOc && currentSecretCharacter.entryType !== "canon") {
            currentSecretCharacter = null;
            document.getElementById("secret-character-display").innerHTML = `<p>${isEnglishMode() ? "Click the button to assign one" : "Pulsa el botón para asignarte uno"}</p>`;
        }
        if (currentMode === "cpu" && typeof pickNewCpuCharacter === "function") {
            pickNewCpuCharacter();
        }
        renderBoard();
    });

    document.getElementById("btn-randomize-secret").addEventListener("click", () => {
        const pool = getActiveRoster();
        if (pool.length === 0) return;
        currentSecretCharacter = pool[Math.floor(Math.random() * pool.length)];
        renderSecretCard();
    });

    document.getElementById("btn-reset-filters").addEventListener("click", () => {
        manualEliminated.clear();
        eliminatedFilters = [];
        document.querySelectorAll(".filter-btn").forEach(b => {
            b.classList.remove("eliminated", "asked-yes", "asked-no");
        });
        if (typeof resetCpuLog === "function") resetCpuLog();
        renderBoard();
    });

    document.getElementById("search-character").addEventListener("input", () => renderBoard());

    document.querySelector(".control-panel").addEventListener("click", (e) => {
        if (!e.target.classList.contains("filter-btn")) return;
        const btn = e.target;
        const category = btn.dataset.category;
        const value = btn.dataset.value;

        if (currentMode === "pvp") {
            const idx = eliminatedFilters.findIndex(f => f.category === category && f.value === value && f.mode === "exclude");
            if (idx > -1) {
                eliminatedFilters.splice(idx, 1);
                btn.classList.remove("eliminated");
            } else {
                eliminatedFilters.push({ category, value, mode: "exclude" });
                btn.classList.add("eliminated");
            }
            renderBoard();
        } else if (currentMode === "cpu") {
            if (typeof handleCpuQuestion === "function") {
                handleCpuQuestion(btn, category, value);
            }
        }
    });
}

function switchMode(mode) {
    currentMode = mode;
    document.getElementById("btn-mode-pvp").classList.toggle("active", mode === "pvp");
    document.getElementById("btn-mode-cpu").classList.toggle("active", mode === "cpu");
    document.getElementById("pvp-secret-box").classList.toggle("hidden", mode !== "pvp");
    document.getElementById("cpu-box").classList.toggle("hidden", mode !== "cpu");
    document.getElementById("btn-reset-filters").click();
    if (mode === "cpu" && typeof pickNewCpuCharacter === "function") {
        pickNewCpuCharacter();
    }
}

function matchesCondition(character, category, value) {
    switch (category) {
        case "gender":
            return character.gender === value;
        case "arc":
            return character.arc === value;
        case "ageGroup":
            return character.ageGroup === value;
        case "color":
            return character.color === value;
        case "faction":
            return character.faction === value;
        case "entryType":
            return character.entryType === value;
        default:
            return false;
    }
}

function isEliminatedByFilters(character) {
    for (const filter of eliminatedFilters) {
        const matches = matchesCondition(character, filter.category, filter.value);
        if (filter.mode === "exclude" && matches) return true;
        if (filter.mode === "require" && !matches) return true;
    }
    return false;
}

function renderBoard() {
    const grid = document.getElementById("character-grid");
    const searchTerm = document.getElementById("search-character").value.toLowerCase().trim();
    const roster = getActiveRoster();
    grid.innerHTML = "";

    let remainingCount = 0;

    roster.forEach(char => {
        const isEliminated = manualEliminated.has(char.id) || isEliminatedByFilters(char);
        if (!isEliminated) remainingCount++;

        const displayName = getCharacterName(char);
        const arcLabel = getArcName(char.arc);
        const colorLabel = getColorName(char.color);

        if (
            searchTerm &&
            !displayName.toLowerCase().includes(searchTerm) &&
            !String(char.id).includes(searchTerm) &&
            !arcLabel.toLowerCase().includes(searchTerm) &&
            !colorLabel.toLowerCase().includes(searchTerm)
        ) {
            return;
        }

        const colorInfo = DR_STONE_COLORS[char.color] || { hex: "#42a5f5" };
        const arcInfo = DR_STONE_ARCS[char.arc] || { color: "#64748b" };

        const card = document.createElement("div");
        card.className = `char-card ${isEliminated ? "eliminated" : ""}`;
        card.innerHTML = `
            <div class="char-num">#${String(char.id).padStart(3, "0")}</div>
            <div class="char-avatar" style="background:${colorInfo.hex}; border-color:${arcInfo.color};">${char.initials}</div>
            <div class="char-name" title="${displayName}">${displayName}</div>
            <div class="char-meta">${getGenderLabel(char.gender)} • ${getAgeGroupLabel(char.ageGroup)}</div>
            <span class="badge" style="background:${arcInfo.color}">${arcLabel}</span>
        `;

        card.addEventListener("click", () => {
            if (currentMode === "cpu" && !isEliminated && remainingCount <= 5) {
                const msg = isEnglishMode()
                    ? `Do you want to guess that the secret character is ${displayName}?`
                    : `¿Quieres arriesgarte y decir que el personaje secreto es ${displayName}?`;
                if (confirm(msg) && typeof checkCpuFinalGuess === "function") {
                    checkCpuFinalGuess(char);
                    return;
                }
            }
            if (manualEliminated.has(char.id)) {
                manualEliminated.delete(char.id);
            } else {
                manualEliminated.add(char.id);
            }
            renderBoard();
        });

        grid.appendChild(card);
    });

    const prefix = isEnglishMode() ? "Remaining" : "Restantes";
    document.getElementById("counter-display").textContent = `${prefix}: ${remainingCount} / ${roster.length}`;
}