(function () {
    let isEnglishActive = false;

    function setLanguage(lang) {
        isEnglishActive = lang === "en";
        document.documentElement.lang = lang;

        document.title = isEnglishActive ? I18N_EN.pageTitle : "¿Quién es Quién? - Dr. STONE";
        document.querySelector("header h1").textContent = isEnglishActive ? I18N_EN.headerTitle : "¿Quién es Quién? — Dr. STONE";
        document.getElementById("btn-mode-pvp").textContent = isEnglishActive ? I18N_EN.modePvp : "Modo 2 Jugadores (Tablero)";
        document.getElementById("btn-mode-cpu").textContent = isEnglishActive ? I18N_EN.modeCpu : "Modo Contra la Máquina";
        document.getElementById("toggle-include-alts").nextElementSibling.textContent = isEnglishActive
            ? I18N_EN.includeAlts
            : "Incluir formas alternativas y OC (110)";

        document.querySelector("#pvp-secret-box h3").textContent = isEnglishActive ? I18N_EN.secretTitle : "Tu Personaje Secreto";
        const secretP = document.querySelector("#secret-character-display p");
        if (secretP) {
            secretP.textContent = isEnglishActive ? I18N_EN.secretPlaceholder : "Pulsa el botón para asignarte uno";
        }
        document.getElementById("btn-randomize-secret").textContent = isEnglishActive ? I18N_EN.randomizeBtn : "🎲 Randomizar mi Personaje";

        document.querySelector("#cpu-box h3").textContent = isEnglishActive ? I18N_EN.cpuTitle : "🤖 VS Máquina";
        document.querySelector("#cpu-box > p").textContent = isEnglishActive
            ? I18N_EN.cpuDesc
            : "La máquina ha elegido un personaje oculto. Haz preguntas de Sí o No para deducirlo.";
        document.getElementById("btn-new-cpu").textContent = isEnglishActive ? I18N_EN.newCpuBtn : "🔄 Nueva Partida CPU";

        document.querySelector(".panel-header h2").textContent = isEnglishActive ? I18N_EN.panelTitle : "Preguntas de Sí / No";
        document.getElementById("btn-reset-filters").textContent = isEnglishActive ? I18N_EN.resetBtn : "Limpiar Todo";
        document.querySelector(".help-text").innerHTML = isEnglishActive
            ? I18N_EN.helpTextHtml
            : "<strong>Modo Tablero:</strong> Haz clic en una pregunta para <b>DESCARTAR (tachar)</b> a quienes cumplan esa característica.<br><strong>Modo CPU:</strong> Haz clic en una pregunta para obtener <b>SÍ</b> o <b>NO</b> y tachar automáticamente.";

        const summaries = document.querySelectorAll(".control-panel details > summary");
        const esSummaries = [
            "1. Género",
            "2. Arco de Aparición",
            "3. Edad en su Aparición",
            "4. Color Principal",
            "5. Facción y Tipo de Entrada"
        ];
        const enSummaries = [
            I18N_EN.catGender,
            I18N_EN.catArc,
            I18N_EN.catAge,
            I18N_EN.catColor,
            I18N_EN.catFactionType
        ];
        summaries.forEach((el, i) => {
            if (esSummaries[i]) el.textContent = isEnglishActive ? enSummaries[i] : esSummaries[i];
        });

        document.querySelectorAll(".filter-btn").forEach((btn) => {
            const cat = btn.dataset.category;
            const val = btn.dataset.value;

            if (cat === "gender") {
                if (val === "female") btn.textContent = isEnglishActive ? I18N_EN.qFemale : "¿Es mujer?";
                if (val === "male") btn.textContent = isEnglishActive ? I18N_EN.qMale : "¿Es hombre?";
                if (val === "other") btn.textContent = isEnglishActive ? I18N_EN.qOtherGender : "¿Es de otro género / IA / variante?";
            } else if (cat === "arc") {
                const arcName = isEnglishActive ? DR_STONE_ARCS[val].en : DR_STONE_ARCS[val].es;
                btn.textContent = isEnglishActive ? I18N_EN.qArcPrefix(arcName) : `¿Es del arco ${arcName}?`;
            } else if (cat === "ageGroup") {
                if (val === "child") btn.textContent = isEnglishActive ? I18N_EN.qChild : "¿Es un niño o niña?";
                if (val === "teen") btn.textContent = isEnglishActive ? I18N_EN.qTeen : "¿Es un adolescente?";
                if (val === "adult") btn.textContent = isEnglishActive ? I18N_EN.qAdult : "¿Es un adulto o adulta?";
                if (val === "elder") btn.textContent = isEnglishActive ? I18N_EN.qElder : "¿Es una persona mayor?";
            } else if (cat === "color") {
                const colorName = isEnglishActive ? DR_STONE_COLORS[val].en : DR_STONE_COLORS[val].es;
                btn.textContent = isEnglishActive ? I18N_EN.qColorPrefix(colorName) : `¿Su color principal es ${colorName}?`;
            } else if (cat === "faction") {
                const factionName = isEnglishActive ? DR_STONE_FACTIONS[val].en : DR_STONE_FACTIONS[val].es;
                btn.textContent = isEnglishActive ? I18N_EN.qFactionPrefix(factionName) : `¿Pertenece a ${factionName}?`;
            } else if (cat === "entryType") {
                if (val === "canon") btn.textContent = isEnglishActive ? I18N_EN.qCanon : "¿Es personaje canónico estándar?";
                if (val === "alt") btn.textContent = isEnglishActive ? I18N_EN.qAlt : "¿Es forma alternativa / genderbend / variante?";
                if (val === "oc") btn.textContent = isEnglishActive ? I18N_EN.qOc : "¿Es personaje original (OC)?";
            }
        });

        document.getElementById("search-character").placeholder = isEnglishActive
            ? I18N_EN.searchPlaceholder
            : "Buscar personaje por nombre, arco o color...";

        if (typeof renderSecretCard === "function" && currentSecretCharacter) {
            renderSecretCard();
        }
        if (typeof resetCpuLog === "function" && typeof cpuQuestionsCount !== "undefined" && cpuQuestionsCount === 0) {
            resetCpuLog();
        }
        if (typeof renderBoard === "function") {
            renderBoard();
        }

        const btnEs = document.getElementById("btn-lang-es");
        const btnEn = document.getElementById("btn-lang-en");
        if (btnEs && btnEn) {
            btnEs.style.background = !isEnglishActive ? "#42a5f5" : "";
            btnEs.style.color = !isEnglishActive ? "#000" : "";
            btnEn.style.background = isEnglishActive ? "#42a5f5" : "";
            btnEn.style.color = isEnglishActive ? "#000" : "";
        }
    }

    function initLanguageSelector() {
        const topControls = document.querySelector(".top-controls");
        if (!topControls || document.getElementById("lang-switch-box")) return;

        const box = document.createElement("div");
        box.id = "lang-switch-box";
        box.style.display = "flex";
        box.style.gap = "6px";

        const btnEs = document.createElement("button");
        btnEs.id = "btn-lang-es";
        btnEs.type = "button";
        btnEs.textContent = "ES";
        btnEs.className = "filter-btn";
        btnEs.onclick = () => setLanguage("es");

        const btnEn = document.createElement("button");
        btnEn.id = "btn-lang-en";
        btnEn.type = "button";
        btnEn.textContent = "EN";
        btnEn.className = "filter-btn";
        btnEn.onclick = () => setLanguage("en");

        box.appendChild(btnEs);
        box.appendChild(btnEn);
        topControls.appendChild(box);

        setLanguage("es");
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", () => setTimeout(initLanguageSelector, 0));
    } else {
        setTimeout(initLanguageSelector, 0);
    }
})();