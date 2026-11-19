let cpuSecretCharacter = null;
let cpuQuestionsCount = 0;

function initCpuMode() {
    pickNewCpuCharacter();

    document.getElementById("btn-new-cpu").addEventListener("click", () => {
        document.getElementById("btn-reset-filters").click();
        pickNewCpuCharacter();
    });
}

function pickNewCpuCharacter() {
    const pool = typeof getActiveRoster === "function" ? getActiveRoster() : ALL_CHARACTERS;
    if (!pool || pool.length === 0) return;
    cpuSecretCharacter = pool[Math.floor(Math.random() * pool.length)];
    cpuQuestionsCount = 0;
    resetCpuLog();
}

function resetCpuLog() {
    const log = document.getElementById("cpu-answer-log");
    if (!log) return;
    const en = document.documentElement.lang === "en";
    log.innerHTML = en
        ? `<p class="log-placeholder">Questions asked: 0. Click any question below to ask the CPU.</p>`
        : `<p class="log-placeholder">Preguntas realizadas: 0. Haz clic en cualquier pregunta de abajo.</p>`;
}

function handleCpuQuestion(btn, category, value) {
    if (!cpuSecretCharacter) pickNewCpuCharacter();
    if (!cpuSecretCharacter) return;

    if (btn.classList.contains("asked-yes") || btn.classList.contains("asked-no")) return;

    cpuQuestionsCount++;
    const answerIsYes = matchesCondition(cpuSecretCharacter, category, value);
    const en = document.documentElement.lang === "en";

    if (answerIsYes) {
        btn.classList.add("asked-yes");
        eliminatedFilters.push({ category, value, mode: "require" });
    } else {
        btn.classList.add("asked-no");
        eliminatedFilters.push({ category, value, mode: "exclude" });
    }

    const log = document.getElementById("cpu-answer-log");
    if (cpuQuestionsCount === 1) log.innerHTML = "";

    const entry = document.createElement("div");
    entry.className = "log-entry";
    const yesText = en ? "YES" : "SÍ";
    const noText = "NO";
    entry.innerHTML = `
        <span>${cpuQuestionsCount}. ${btn.textContent}</span> →
        <span class="${answerIsYes ? "log-yes" : "log-no"}">${answerIsYes ? yesText : noText}</span>
    `;
    log.prepend(entry);

    renderBoard();

    const pool = typeof getActiveRoster === "function" ? getActiveRoster() : ALL_CHARACTERS;
    const remaining = pool.filter(c => !manualEliminated.has(c.id) && !isEliminatedByFilters(c));
    const secretName = en ? cpuSecretCharacter.nameEn : cpuSecretCharacter.nameEs;

    if (remaining.length === 1) {
        setTimeout(() => {
            if (en) {
                alert(`🎉 You deduced it in ${cpuQuestionsCount} question(s)! The CPU's secret character was ${secretName} (#${cpuSecretCharacter.id}).`);
            } else {
                alert(`🎉 ¡Lo has deducido en ${cpuQuestionsCount} pregunta(s)! El personaje oculto de la máquina era ${secretName} (#${cpuSecretCharacter.id}).`);
            }
        }, 200);
    } else if (remaining.length === 0) {
        setTimeout(() => {
            if (en) {
                alert(`⚠️ No characters match all your filters. Resetting the round. The character was ${secretName} (#${cpuSecretCharacter.id}).`);
            } else {
                alert(`⚠️ No queda ningún personaje compatible con los filtros. Reiniciando partida. Era ${secretName} (#${cpuSecretCharacter.id}).`);
            }
            document.getElementById("btn-new-cpu").click();
        }, 200);
    }
}

function checkCpuFinalGuess(guessedCharacter) {
    const en = document.documentElement.lang === "en";
    const secretName = en ? cpuSecretCharacter.nameEn : cpuSecretCharacter.nameEs;
    const guessedName = en ? guessedCharacter.nameEn : guessedCharacter.nameEs;

    if (guessedCharacter.id === cpuSecretCharacter.id) {
        if (en) {
            alert(`🏆 CORRECT! It was ${secretName} (#${cpuSecretCharacter.id}). You got it in ${cpuQuestionsCount} question(s).`);
        } else {
            alert(`🏆 ¡CORRECTO! Era ${secretName} (#${cpuSecretCharacter.id}). Lo lograste en ${cpuQuestionsCount} pregunta(s).`);
        }
    } else {
        if (en) {
            alert(`❌ Wrong! You guessed ${guessedName}, but the secret character was ${secretName} (#${cpuSecretCharacter.id}).`);
        } else {
            alert(`❌ ¡Fallaste! Elegiste a ${guessedName}, pero el personaje secreto era ${secretName} (#${cpuSecretCharacter.id}).`);
        }
    }
    document.getElementById("btn-new-cpu").click();
}