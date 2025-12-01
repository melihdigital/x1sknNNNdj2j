document.addEventListener('DOMContentLoaded', () => {
    const SUPPORTED_LANGS = ['en', 'de', 'fr', 'es', 'it', 'pt'];
    const DEFAULT_LANG = 'en';
    const OPTIONS_PER_QUESTION = 8;
    const MAX_ROUNDS = 5;

    // --- LANGUAGE PACKS (UI TEXT) ---
    const languagePacks = {
        en: {
            name: "English",
            introTagline: "Holiday trivia fun for everyone",
            ui: {
                title: "Christmas Feud",
                roundLabel: "Round",
                start: "Start Game",
                start: "Start Game",
                language: "Language",
                showAnswers: "Show Answers",
                hideAnswers: "Hide Answers",
                roundPoints: "Round Points",
                pointsToSanta: "Points to Santa",
                pointsToElf: "Points to Elf",
                santaTeam: "Santa Team",
                elfTeam: "Elf Team",
                hiddenAnswer: "Answer Hidden",
                emptySlot: "Empty slot",
                emptySlot: "Empty slot",
                showAnswersModalTitle: "Prepare to reveal answers",
                showAnswersModalBody: "All answers will be shown. Non-admin players should close their eyes. The host can take a photo to remember the answers.",
                showAnswersModalConfirm: "Reveal",
                showAnswersModalCancel: "Cancel",
                noPointsAlert: "No points yet!",
                gameOver: "Game over! Well played!",
                gameOverTitle: "Game Over",
                gameOverBody: (winner, wish) => `${winner}\n${wish}`,
                winnerSanta: "Santa Team wins! 🎅",
                winnerElf: "Elf Team wins! 🧝",
                winnerTie: "It's a tie!",
                holidayWish: "Merry Christmas and lots of joy!",
                close: "Close",
                hostModalTitle: "Host Instructions",
                hostModalBody: "Please appoint a game host and form two teams. The host will view the answers, reveal correct guesses on the board, and mark strikes for incorrect answers.",
                continue: "Continue",
                notice: "Notice"
            }
        },
        de: {
            name: "Deutsch",
            introTagline: "Weihnachts-Quizspaß für alle",
            ui: {
                title: "Christmas Feud",
                roundLabel: "Runde",
                start: "Spiel starten",
                start: "Spiel starten",
                language: "Sprache",
                showAnswers: "Antworten zeigen",
                hideAnswers: "Antworten verbergen",
                roundPoints: "Rundenpunkte",
                pointsToSanta: "Punkte an den Weihnachtsmann",
                pointsToElf: "Punkte an den Elf",
                santaTeam: "Team Weihnachtsmann",
                elfTeam: "Team Elf",
                hiddenAnswer: "Antwort verdeckt",
                emptySlot: "Leer",
                emptySlot: "Leer",
                showAnswersModalTitle: "Antworten werden angezeigt",
                showAnswersModalBody: "Alle Antworten werden geöffnet. Spieler Augen schließen. Host kann ein Foto machen.",
                showAnswersModalConfirm: "Anzeigen",
                showAnswersModalCancel: "Abbrechen",
                noPointsAlert: "Noch keine Punkte!",
                gameOver: "Spiel vorbei! Gut gemacht!",
                gameOverTitle: "Spiel vorbei",
                gameOverBody: (winner, wish) => `${winner}\n${wish}`,
                winnerSanta: "Team Weihnachtsmann gewinnt! 🎅",
                winnerElf: "Team Elf gewinnt! 🧝",
                winnerTie: "Unentschieden!",
                holidayWish: "Frohe Weihnachten und viel Freude!",
                close: "Schließen",
                hostModalTitle: "Anweisungen für den Spielleiter",
                hostModalBody: "Bitte bestimmen Sie einen Spielleiter und bilden Sie zwei Teams. Der Spielleiter sieht die Antworten, deckt richtige Antworten auf und markiert falsche Antworten mit einem X.",
                continue: "Weiter",
                notice: "Hinweis"
            }
        },
        fr: {
            name: "Français",
            introTagline: "Quiz de Noël pour toute la famille",
            ui: {
                title: "Christmas Feud",
                roundLabel: "Manche",
                start: "Lancer la partie",
                start: "Lancer la partie",
                language: "Langue",
                showAnswers: "Montrer les réponses",
                hideAnswers: "Masquer les réponses",
                roundPoints: "Points de la manche",
                pointsToSanta: "Points pour l'équipe Père Noël",
                pointsToElf: "Points pour l'équipe Lutin",
                santaTeam: "Équipe Père Noël",
                elfTeam: "Équipe Lutin",
                hiddenAnswer: "Réponse cachée",
                emptySlot: "Emplacement vide",
                emptySlot: "Emplacement vide",
                showAnswersModalTitle: "Préparez-vous à révéler",
                showAnswersModalBody: "Toutes les réponses seront montrées. Les joueurs ferment les yeux. L’animateur peut prendre une photo.",
                showAnswersModalConfirm: "Révéler",
                showAnswersModalCancel: "Annuler",
                noPointsAlert: "Pas encore de points !",
                gameOver: "Partie terminée ! Bravo !",
                gameOverTitle: "Fin de partie",
                gameOverBody: (winner, wish) => `${winner}\n${wish}`,
                winnerSanta: "Équipe Père Noël gagne ! 🎅",
                winnerElf: "Équipe Lutin gagne ! 🧝",
                winnerTie: "Match nul !",
                holidayWish: "Joyeux Noël et plein de bonheur !",
                close: "Fermer",
                hostModalTitle: "Instructions pour l'animateur",
                hostModalBody: "Veuillez désigner un animateur et former deux équipes. L'animateur verra les réponses, révélera les bonnes réponses au tableau et marquera les erreurs.",
                continue: "Continuer",
                notice: "Remarque"
            }
        },
        es: {
            name: "Español",
            introTagline: "Diversión navideña para todos",
            ui: {
                title: "Christmas Feud",
                roundLabel: "Ronda",
                start: "Comenzar juego",
                start: "Comenzar juego",
                language: "Idioma",
                showAnswers: "Mostrar respuestas",
                hideAnswers: "Ocultar respuestas",
                roundPoints: "Puntos de la ronda",
                pointsToSanta: "Puntos a Papá Noel",
                pointsToElf: "Puntos al Elfo",
                santaTeam: "Equipo Papá Noel",
                elfTeam: "Equipo Elfo",
                hiddenAnswer: "Respuesta oculta",
                emptySlot: "Espacio vacío",
                emptySlot: "Espacio vacío",
                showAnswersModalTitle: "Prepárate para revelar",
                showAnswersModalBody: "Se mostrarán todas las respuestas. Cierra los ojos. El anfitrión puede tomar una foto.",
                showAnswersModalConfirm: "Revelar",
                showAnswersModalCancel: "Cancelar",
                noPointsAlert: "¡Aún no hay puntos!",
                gameOver: "¡Fin del juego! ¡Bien jugado!",
                gameOverTitle: "Fin del juego",
                gameOverBody: (winner, wish) => `${winner}\n${wish}`,
                winnerSanta: "¡Gana el equipo Papá Noel! 🎅",
                winnerElf: "¡Gana el equipo Elfo! 🧝",
                winnerTie: "¡Empate!",
                holidayWish: "¡Feliz Navidad y mucha alegría!",
                close: "Cerrar",
                hostModalTitle: "Instrucciones para el anfitrión",
                hostModalBody: "Por favor, designen un anfitrión y formen dos equipos. El anfitrión verá las respuestas, revelará los aciertos en el tablero y marcará los fallos.",
                continue: "Continuar",
                notice: "Aviso"
            }
        },
        it: {
            name: "Italiano",
            introTagline: "Quiz di Natale per tutti",
            ui: {
                title: "Christmas Feud",
                roundLabel: "Round",
                start: "Inizia il gioco",
                start: "Inizia il gioco",
                language: "Lingua",
                showAnswers: "Mostra risposte",
                hideAnswers: "Nascondi risposte",
                roundPoints: "Punti del round",
                pointsToSanta: "Punti a Babbo Natale",
                pointsToElf: "Punti all'Elfo",
                santaTeam: "Squadra Babbo Natale",
                elfTeam: "Squadra Elfo",
                hiddenAnswer: "Risposta nascosta",
                emptySlot: "Spazio vuoto",
                emptySlot: "Spazio vuoto",
                showAnswersModalTitle: "Pronto a rivelare",
                showAnswersModalBody: "Tutte le risposte saranno mostrate. Chiudete gli occhi. L’host può fare una foto.",
                showAnswersModalConfirm: "Mostra",
                showAnswersModalCancel: "Annulla",
                noPointsAlert: "Ancora nessun punto!",
                gameOver: "Partita finita! Ben fatto!",
                gameOverTitle: "Fine partita",
                gameOverBody: (winner, wish) => `${winner}\n${wish}`,
                winnerSanta: "Squadra Babbo Natale vince! 🎅",
                winnerElf: "Squadra Elfo vince! 🧝",
                winnerTie: "Pareggio!",
                holidayWish: "Buon Natale e tanta gioia!",
                close: "Chiudi",
                hostModalTitle: "Istruzioni per il conduttore",
                hostModalBody: "Nominate un conduttore e formate due squadre. Il conduttore vedrà le risposte, rivelerà quelle corrette e segnerà gli errori.",
                continue: "Continua",
                notice: "Avviso"
            }
        },
        pt: {
            name: "Português",
            introTagline: "Diversão natalina para todos",
            ui: {
                title: "Christmas Feud",
                roundLabel: "Rodada",
                start: "Iniciar jogo",
                start: "Iniciar jogo",
                language: "Idioma",
                showAnswers: "Mostrar respostas",
                hideAnswers: "Ocultar respostas",
                roundPoints: "Pontos da rodada",
                pointsToSanta: "Pontos para Papai Noel",
                pointsToElf: "Pontos para o Elfo",
                santaTeam: "Equipe Papai Noel",
                elfTeam: "Equipe Elfo",
                hiddenAnswer: "Resposta oculta",
                emptySlot: "Espaço vazio",
                emptySlot: "Espaço vazio",
                showAnswersModalTitle: "Preparar para revelar",
                showAnswersModalBody: "Todas as respostas serão mostradas. Fechem os olhos. O anfitrião pode tirar uma foto.",
                showAnswersModalConfirm: "Revelar",
                showAnswersModalCancel: "Cancelar",
                noPointsAlert: "Ainda sem pontos!",
                gameOver: "Fim de jogo! Bom trabalho!",
                gameOverTitle: "Fim de jogo",
                gameOverBody: (winner, wish) => `${winner}\n${wish}`,
                winnerSanta: "Equipe Papai Noel vence! 🎅",
                winnerElf: "Equipe Elfo vence! 🧝",
                winnerTie: "Empate!",
                holidayWish: "Feliz Natal e muita alegria!",
                close: "Fechar",
                hostModalTitle: "Instruções para o anfitrião",
                hostModalBody: "Por favor, nomeiem um anfitrião e formem duas equipes. O anfitrião verá as respostas, revelará os acertos no quadro e marcará os erros.",
                continue: "Continuar",
                notice: "Aviso"
            }
        }
    };

    // --- QUESTIONS DATA ---
    let questionBank = {};
    let gameData = [];
    let shuffledQuestions = [];
    let currentLanguage = DEFAULT_LANG;
    let roundsTotal = MAX_ROUNDS;

    // --- STATE ---
    let currentRound = 1;
    let currentQuestionIndex = 0;
    let roundPoints = 0;
    let answersRevealedState = {};
    let adminPreviewActive = false;

    // --- DOM ELEMENTS ---
    const answersGrid = document.getElementById('answers-grid');
    const questionText = document.getElementById('question-text');
    const currentRoundSpan = document.getElementById('current-round');
    const roundTotalSpan = document.getElementById('round-total');
    const roundLabelEl = document.getElementById('round-label');
    const gameTitleEl = document.getElementById('game-title');
    const santaScoreEl = document.getElementById('santa-score');
    const elfScoreEl = document.getElementById('elf-score');
    const roundPointsTotalEl = document.getElementById('round-points-total');
    const showAnswersBtn = document.getElementById('show-answers-btn');

    const closeBtns = document.querySelectorAll('.close-btn');

    const santaStrikesContainer = document.getElementById('santa-strikes');
    const elfStrikesContainer = document.getElementById('elf-strikes');
    const pointsToSantaBtn = document.getElementById('points-to-santa');
    const pointsToElfBtn = document.getElementById('points-to-elf');
    const roundPointsLabel = document.getElementById('round-points-label');

    const santaTeamLabel = document.getElementById('santa-team-label');
    const elfTeamLabel = document.getElementById('elf-team-label');

    const introOverlay = document.getElementById('intro-overlay');
    const startGameBtn = document.getElementById('start-game-btn');

    const introLanguageBtn = document.getElementById('intro-language-btn');
    const introTitle = document.getElementById('intro-title');
    const introTagline = document.getElementById('intro-tagline');

    const languageModal = document.getElementById('language-modal');
    const languageListEl = document.getElementById('language-list');
    const languageModalTitle = document.getElementById('language-modal-title');

    const showAnswersModal = document.getElementById('show-answers-modal');
    const showAnswersTitle = document.getElementById('show-answers-title');
    const showAnswersBody = document.getElementById('show-answers-body');
    const showAnswersConfirm = document.getElementById('show-answers-confirm');
    const showAnswersCancel = document.getElementById('show-answers-cancel');

    const gameOverModal = document.getElementById('game-over-modal');
    const gameOverTitle = document.getElementById('game-over-title');
    const gameOverBody = document.getElementById('game-over-body');
    const gameOverClose = document.getElementById('game-over-close');

    const hostInstructionModal = document.getElementById('host-instruction-modal');
    const hostModalTitle = document.getElementById('host-modal-title');
    const hostModalBody = document.getElementById('host-modal-body');
    const hostModalConfirm = document.getElementById('host-modal-confirm');

    const noPointsModal = document.getElementById('no-points-modal');
    const noPointsTitle = document.getElementById('no-points-title');
    const noPointsBody = document.getElementById('no-points-body');
    const noPointsClose = document.getElementById('no-points-close');

    init();

    async function init() {
        await loadQuestionsFiles();
        populateLanguageList();
        setLanguage(DEFAULT_LANG, true);
        attachEventListeners();
        showIntroOverlay(true);
    }

    // --- DATA LOADING ---
    async function loadQuestionsFiles() {
        // Data is now loaded via script tags into global variables
        questionBank.en = window.QUESTIONS_EN || getEmbeddedEnglish();
        questionBank.de = window.QUESTIONS_DE || questionBank.en;
        questionBank.fr = window.QUESTIONS_FR || questionBank.en;
        questionBank.es = window.QUESTIONS_ES || questionBank.en;
        questionBank.it = window.QUESTIONS_IT || questionBank.en;
        questionBank.pt = window.QUESTIONS_PT || questionBank.en;
    }

    function getEmbeddedEnglish() {
        return [
            {
                "id": 1,
                "question": "What are some parts of Santa's suit?",
                "answers": [
                    { "text": "Red Hat", "points": 30 },
                    { "text": "Red Suit/Coat", "points": 25 },
                    { "text": "Black Boots", "points": 15 },
                    { "text": "White Beard", "points": 12 },
                    { "text": "Black Belt", "points": 10 },
                    { "text": "Big Stomach", "points": 5 },
                    { "text": "Gloves/Mittens", "points": 2 },
                    { "text": "Glasses", "points": 1 }
                ]
            },
            {
                "id": 2,
                "question": "Name a word that has the word 'Snow' in it.",
                "answers": [
                    { "text": "Snowman", "points": 32 },
                    { "text": "Snowflake", "points": 24 },
                    { "text": "Snowball", "points": 18 },
                    { "text": "Snowfall", "points": 10 },
                    { "text": "Snow Globe", "points": 8 },
                    { "text": "Snow Day", "points": 4 },
                    { "text": "Snow White", "points": 2 },
                    { "text": "Snowmobile", "points": 2 }
                ]
            },
            {
                "id": 3,
                "question": "What items might you get as a Christmas gift?",
                "answers": [
                    { "text": "Toys", "points": 35 },
                    { "text": "Clothes/Socks", "points": 25 },
                    { "text": "Gift Cards/Money", "points": 15 },
                    { "text": "Jewelry", "points": 10 },
                    { "text": "Electronics", "points": 8 },
                    { "text": "Perfume/Cologne", "points": 4 },
                    { "text": "Books", "points": 2 },
                    { "text": "Chocolate", "points": 1 }
                ]
            },
            {
                "id": 4,
                "question": "Who is someone you would buy a Christmas present for?",
                "answers": [
                    { "text": "Spouse/Partner", "points": 30 },
                    { "text": "Children/Kids", "points": 25 },
                    { "text": "Parents", "points": 15 },
                    { "text": "Friend", "points": 12 },
                    { "text": "Sibling", "points": 8 },
                    { "text": "Pet", "points": 5 },
                    { "text": "Teacher", "points": 3 },
                    { "text": "Co-worker", "points": 2 }
                ]
            },
            {
                "id": 5,
                "question": "Name something red and white you see around Christmas.",
                "answers": [
                    { "text": "Candy Cane", "points": 35 },
                    { "text": "Santa's Hat", "points": 25 },
                    { "text": "Santa's Suit", "points": 15 },
                    { "text": "Stockings", "points": 10 },
                    { "text": "Wrapping Paper", "points": 8 },
                    { "text": "Snowman's Scarf", "points": 4 },
                    { "text": "Wine", "points": 2 },
                    { "text": "Candle", "points": 1 }
                ]
            }
        ];
    }

    // --- LANGUAGE & UI ---
    function populateLanguageList() {
        languageListEl.innerHTML = '';
        Object.entries(languagePacks).forEach(([code, pack]) => {
            const btn = document.createElement('button');
            btn.textContent = pack.name;
            btn.dataset.lang = code;
            btn.addEventListener('click', () => {
                setLanguage(code, true);
                toggleModal(languageModal, false);
            });
            languageListEl.appendChild(btn);
        });
    }

    function setLanguage(langCode, resetGame = false) {
        if (!languagePacks[langCode]) return;
        currentLanguage = langCode;
        document.documentElement.lang = currentLanguage;
        prepareQuestionSet();
        applyUIText(resetGame);
    }

    function applyUIText(resetGame) {
        const strings = languagePacks[currentLanguage].ui;
        introTitle.textContent = strings.title;
        introTagline.textContent = languagePacks[currentLanguage].introTagline;
        startGameBtn.textContent = strings.start;
        introTitle.textContent = strings.title;
        introTagline.textContent = languagePacks[currentLanguage].introTagline;
        startGameBtn.textContent = strings.start;
        introLanguageBtn.textContent = strings.language;

        gameTitleEl.textContent = strings.title;
        roundLabelEl.textContent = strings.roundLabel;
        showAnswersBtn.textContent = adminPreviewActive ? strings.hideAnswers : strings.showAnswers;
        roundPointsLabel.textContent = strings.roundPoints;
        pointsToSantaBtn.textContent = strings.pointsToSanta;
        pointsToElfBtn.textContent = strings.pointsToElf;
        santaTeamLabel.textContent = strings.santaTeam;
        elfTeamLabel.textContent = strings.elfTeam;
        elfTeamLabel.textContent = strings.elfTeam;
        languageModalTitle.textContent = strings.language;
        showAnswersTitle.textContent = strings.showAnswersModalTitle;
        showAnswersBody.textContent = strings.showAnswersModalBody;
        showAnswersConfirm.textContent = strings.showAnswersModalConfirm;
        showAnswersCancel.textContent = strings.showAnswersModalCancel;
        gameOverTitle.textContent = strings.gameOverTitle;
        gameOverClose.textContent = strings.close;

        hostModalTitle.textContent = strings.hostModalTitle;
        hostModalBody.textContent = strings.hostModalBody;
        hostModalConfirm.textContent = strings.continue;

        noPointsTitle.textContent = strings.notice;
        noPointsClose.textContent = strings.close;

        if (resetGame) {
            resetGameState();
        } else {
            updateRoundPointsDisplay();
            updateRoundLabel();
        }
    }



    // --- GAME LOGIC ---
    function prepareQuestionSet() {
        const available = questionBank[currentLanguage] || questionBank.en || [];
        const copied = available.map(q => ({ ...q, answers: q.answers.map(a => ({ ...a })) }));
        shuffledQuestions = sampleArray(copied, MAX_ROUNDS);
        roundsTotal = Math.min(MAX_ROUNDS, shuffledQuestions.length);
        roundTotalSpan.textContent = roundsTotal;
        currentQuestionIndex = 0;
    }

    function resetGameState() {
        prepareQuestionSet();
        currentRound = 1;
        currentQuestionIndex = 0;
        roundPoints = 0;
        santaScoreEl.textContent = '0';
        elfScoreEl.textContent = '0';
        resetStrikes();
        setAdminPreview(false);
        updateRoundLabel();
        updateRoundPointsDisplay();
        loadQuestion(currentQuestionIndex);
    }

    function loadQuestion(index) {
        if (!shuffledQuestions.length) {
            questionText.textContent = '';
            answersGrid.innerHTML = '';
            return;
        }
        if (index >= roundsTotal) {
            showGameOverModal();
            return;
        }
        const questionData = shuffledQuestions[index];
        questionText.textContent = questionData.question;
        answersGrid.innerHTML = '';
        roundPoints = 0;
        answersRevealedState = {};
        updateRoundPointsDisplay();
        resetStrikes();
        setAdminPreview(false);

        const strings = languagePacks[currentLanguage].ui;
        const answers = [...questionData.answers];
        while (answers.length < OPTIONS_PER_QUESTION) {
            answers.push({ text: strings.emptySlot, points: 0, isBlank: true });
        }

        answers.forEach((answer, i) => {
            const card = createAnswerCard(answer, i + 1);
            answersGrid.appendChild(card);
            answersRevealedState[i] = false;
        });
    }

    function createAnswerCard(answer, rank) {
        const strings = languagePacks[currentLanguage].ui;
        const card = document.createElement('div');
        card.className = 'answer-card';
        card.dataset.answer = answer.text;
        card.dataset.points = answer.points;
        card.dataset.index = rank - 1;
        card.dataset.blank = answer.isBlank ? 'true' : 'false';

        card.innerHTML = `
            <div class="card-inner">
                <div class="card-front">
                    <span class="answer-rank">${rank}</span>
                    <span class="answer-text">${strings.hiddenAnswer}</span>
                    <span class="answer-points">?</span>
                </div>
                <div class="card-back ${answer.isBlank ? 'blank' : ''}">
                    <span class="answer-rank">${rank}</span>
                    <span class="answer-text">${answer.text}</span>
                    <span class="answer-points">${answer.points}</span>
                </div>
            </div>
        `;
        return card;
    }

    function revealAnswer(card) {
        const index = card.dataset.index;
        if (answersRevealedState[index]) {
            return;
        }
        card.classList.remove('peek');
        card.classList.add('revealed');
        const points = parseInt(card.dataset.points, 10) || 0;
        const isBlank = card.dataset.blank === 'true';
        if (!isBlank) {
            roundPoints += points;
            updateRoundPointsDisplay();
        }
        answersRevealedState[index] = true;
    }

    function updateRoundPointsDisplay() {
        roundPointsTotalEl.textContent = roundPoints;
        triggerBumpAnimation(roundPointsTotalEl);
    }

    function triggerBumpAnimation(element) {
        element.classList.remove('bump');
        void element.offsetWidth;
        element.classList.add('bump');
        setTimeout(() => element.classList.remove('bump'), 400);
    }

    function setAdminPreview(isActive) {
        adminPreviewActive = isActive;
        const strings = languagePacks[currentLanguage].ui;
        showAnswersBtn.classList.toggle('active', adminPreviewActive);
        showAnswersBtn.setAttribute('aria-pressed', adminPreviewActive);
        showAnswersBtn.textContent = adminPreviewActive ? strings.hideAnswers : strings.showAnswers;

        const cards = answersGrid.querySelectorAll('.answer-card');
        cards.forEach(card => {
            const isRevealed = card.classList.contains('revealed');
            if (adminPreviewActive && !isRevealed) {
                card.classList.add('peek');
            } else if (!adminPreviewActive && card.classList.contains('peek') && !isRevealed) {
                card.classList.remove('peek');
            }
        });
    }

    function nextRound() {
        currentRound++;
        currentQuestionIndex++;
        if (currentRound > roundsTotal) {
            showGameOverModal();
            return;
        }
        updateRoundLabel();
        loadQuestion(currentQuestionIndex);
    }

    function showGameOverModal() {
        const strings = languagePacks[currentLanguage].ui;
        const santaScore = parseInt(santaScoreEl.textContent, 10) || 0;
        const elfScore = parseInt(elfScoreEl.textContent, 10) || 0;
        let winnerText;
        if (santaScore > elfScore) winnerText = strings.winnerSanta;
        else if (elfScore > santaScore) winnerText = strings.winnerElf;
        else winnerText = strings.winnerTie;
        gameOverBody.textContent = strings.gameOverBody(winnerText, strings.holidayWish);
        toggleModal(gameOverModal, true);
    }

    function resetStrikes() {
        document.querySelectorAll('.strike').forEach(strike => {
            strike.classList.remove('active');
        });
    }

    function updateRoundLabel() {
        currentRoundSpan.textContent = currentRound;
    }

    function shuffleArray(arr) {
        const copy = [...arr];
        for (let i = copy.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [copy[i], copy[j]] = [copy[j], copy[i]];
        }
        return copy;
    }
    function sampleArray(arr, count) {
        const shuffled = shuffleArray(arr);
        return shuffled.slice(0, Math.min(count, shuffled.length));
    }

    // --- UI HELPERS ---
    function toggleModal(modalEl, show) {
        modalEl.style.display = show ? 'block' : 'none';
    }

    function showIntroOverlay(show) {
        introOverlay.classList.toggle('hidden', !show);
    }

    // --- EVENT LISTENERS ---
    function attachEventListeners() {
        answersGrid.addEventListener('click', (e) => {
            const card = e.target.closest('.answer-card');
            const index = card ? card.dataset.index : null;
            if (card && !answersRevealedState[index]) {
                revealAnswer(card);
            }
        });

        [santaStrikesContainer, elfStrikesContainer].forEach(container => {
            container.addEventListener('click', (e) => {
                if (e.target.classList.contains('strike') && !e.target.classList.contains('active')) {
                    e.target.classList.add('active');
                    const teamCard = e.target.closest('.team-card');
                    teamCard.classList.remove('shake');
                    void teamCard.offsetWidth;
                    teamCard.classList.add('shake');
                }
            });
        });

        showAnswersBtn.addEventListener('click', () => {
            if (adminPreviewActive) {
                setAdminPreview(false);
            } else {
                toggleModal(showAnswersModal, true);
            }
        });

        showAnswersConfirm.addEventListener('click', () => {
            toggleModal(showAnswersModal, false);
            setAdminPreview(true);
        });

        showAnswersCancel.addEventListener('click', () => {
            toggleModal(showAnswersModal, false);
        });

        showAnswersCancel.addEventListener('click', () => {
            toggleModal(showAnswersModal, false);
        });

        startGameBtn.addEventListener('click', () => {
            // Attempt to enter fullscreen
            if (document.documentElement.requestFullscreen) {
                document.documentElement.requestFullscreen().catch(err => {
                    console.log(`Error attempting to enable full-screen mode: ${err.message} (${err.name})`);
                });
            }
            toggleModal(hostInstructionModal, true);
        });

        hostModalConfirm.addEventListener('click', () => {
            toggleModal(hostInstructionModal, false);
            showIntroOverlay(false);
            resetGameState();
        });

        introLanguageBtn.addEventListener('click', () => {
            toggleModal(languageModal, true);
        });

        closeBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                const modal = btn.closest('.modal');
                toggleModal(modal, false);
            });
        });

        gameOverClose.addEventListener('click', () => {
            toggleModal(gameOverModal, false);
            showIntroOverlay(true);
        });

        noPointsClose.addEventListener('click', () => {
            toggleModal(noPointsModal, false);
        });

        window.addEventListener('click', (e) => {
            if (e.target.classList.contains('modal')) {
                e.target.style.display = 'none';
            }
        });

        pointsToSantaBtn.addEventListener('click', () => {
            if (roundPoints > 0) {
                const currentScore = parseInt(santaScoreEl.textContent, 10);
                santaScoreEl.textContent = currentScore + roundPoints;
                triggerBumpAnimation(santaScoreEl);
                nextRound();
            } else {
                noPointsBody.textContent = languagePacks[currentLanguage].ui.noPointsAlert;
                toggleModal(noPointsModal, true);
            }
        });

        pointsToElfBtn.addEventListener('click', () => {
            if (roundPoints > 0) {
                const currentScore = parseInt(elfScoreEl.textContent, 10);
                elfScoreEl.textContent = currentScore + roundPoints;
                triggerBumpAnimation(elfScoreEl);
                nextRound();
            } else {
                noPointsBody.textContent = languagePacks[currentLanguage].ui.noPointsAlert;
                toggleModal(noPointsModal, true);
            }
        });
    }

    function handleResize() {
        const container = document.querySelector('.game-container');
        if (!container) return;

        // Önce scale'i sıfırla ki gerçek boyutu ölçebilelim
        container.style.transform = 'translate(-50%, -50%) scale(1)';

        // Bir frame bekle ki tarayıcı boyutları yeniden hesaplasın
        requestAnimationFrame(() => {
            // Container'ın gerçek boyutlarını al
            const containerWidth = container.offsetWidth;
            const containerHeight = container.offsetHeight;

            // Mevcut viewport boyutları
            const viewportWidth = window.innerWidth;
            const viewportHeight = window.innerHeight;

            // Her iki yön için scale hesapla (%96 kullan, %4 boşluk)
            const scaleX = (viewportWidth * 0.96) / containerWidth;
            const scaleY = (viewportHeight * 0.96) / containerHeight;

            // En küçük scale'i kullan (hem genişliğe hem yüksekliğe sığsın)
            const scale = Math.min(scaleX, scaleY);

            // Scale'i uygula (merkez pozisyonunu koru)
            container.style.transform = `translate(-50%, -50%) scale(${scale})`;

            console.log('Scale applied:', scale, 'Container:', containerWidth, 'x', containerHeight, 'Viewport:', viewportWidth, 'x', viewportHeight);
        });
    }

    // Sayfa yüklendiğinde ve her resize'da çalıştır
    window.addEventListener('resize', handleResize);
    window.addEventListener('orientationchange', handleResize);
    document.addEventListener('DOMContentLoaded', handleResize);

    // İlk yükleme için timeout ekle (container render olduktan sonra)
    setTimeout(handleResize, 100);
});