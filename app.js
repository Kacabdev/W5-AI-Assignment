// GARASHO DHAQAN — Vanilla JavaScript
// Xogta su'aalaha: array ka kooban objects.

const categories = [
    {
        id: "food",
        name: "Cuntooyinka Soomaaliyeed",
        shortName: "Cuntooyinka",
        emoji: "🍲",
        description: "Baro cuntooyinka iyo dhaqanka cuntada.",
        questions: [
            {
                question: "Canjeerada badanaa maxaa laga sameeyaa?",
                options: ["Bur ama daqiiq", "Hilib", "Kalluun", "Timir"],
                answer: "Bur ama daqiiq",
                explanation: "Canjeero waa cunto caan ah oo laga sameeyo bur ama daqiiq."
            },
            {
                question: "Cuntadee ayaa inta badan lagu cunaa maraq ama suugo?",
                options: ["Bariis", "Buskud", "Moos keliya", "Laws"],
                answer: "Bariis",
                explanation: "Bariiska waxaa badanaa lala cunaa suugo ama maraq."
            },
            {
                question: "Maxaa badanaa lagu daraa shaaha Soomaalida?",
                options: ["Xawaash", "Ketchup", "Maraq", "Cusbo badan"],
                answer: "Xawaash",
                explanation: "Shaaha Soomaalida waxaa marar badan lagu daraa xawaash sida hayl iyo qorfe."
            },
            {
                question: "Sambuusku badanaa waa cunto noocee ah?",
                options: ["Cunto la shiilo oo la buuxiyo", "Cabitaan", "Miro", "Maraq khudradeed"],
                answer: "Cunto la shiilo oo la buuxiyo",
                explanation: "Sambuusku waa cunto cajiin ah oo badanaa hilib ama khudaar laga buuxiyo kadibna la shiilo."
            },
            {
                question: "Caanaha geela maxay ka mid yihiin?",
                options: ["Cuntooyinka dhaqanka", "Qalabka beeraha", "Noocyada dharka", "Qalabka muusikada"],
                answer: "Cuntooyinka dhaqanka",
                explanation: "Caanaha geelu waxay qayb muhiim ah ka yihiin cuntada bulshooyin badan oo Soomaaliyeed."
            }
        ]
    },
    {
        id: "culture",
        name: "Dhaqan iyo Hiddo",
        shortName: "Dhaqan iyo Hiddo",
        emoji: "👘",
        description: "Sahami caadooyinka iyo hab-nololeedka bulshada.",
        questions: [
            {
                question: "Maxaa loola jeedaa marti-soor?",
                options: ["Soo dhoweyn iyo martigelin", "Tartan orod", "Beer falid", "Safar ganacsi"],
                answer: "Soo dhoweyn iyo martigelin",
                explanation: "Marti-soorku waa dhaqanka soo dhoweynta iyo maamuuska martida."
            },
            {
                question: "Dharka dhaqanka dumarka Soomaalida ee munaasabadaha lagu xirto waxaa ka mid ah?",
                options: ["Dirac", "Jaakad roobaad", "Shaati ciyaareed", "Koofiyad"],
                answer: "Dirac",
                explanation: "Diracu waa dhar dhaqameed ay dumar badan xirtaan, gaar ahaan munaasabadaha."
            },
            {
                question: "Maxay muhiim u tahay is-xilqaan bulsho?",
                options: ["In la is-caawiyo", "In la kala fogaado", "In la qariyo aqoonta", "In la joojiyo wada hadalka"],
                answer: "In la is-caawiyo",
                explanation: "Is-xilqaanku wuxuu dhiirrigeliyaa iskaashi iyo in bulshada la isu gurmado."
            },
            {
                question: "Dhaqanka aroosyada Soomaalida badanaa maxaa ka mid ah?",
                options: ["Heeso iyo damaashaad", "Imtixaan dugsi", "Tartan dabaal", "Shir ganacsi oo keliya"],
                answer: "Heeso iyo damaashaad",
                explanation: "Aroosyada waxaa badanaa lagu xusaa damaashaad, heeso iyo kulanka qoysaska."
            },
            {
                question: "Maxaa lagu tilmaamaa oday-dhaqameed?",
                options: ["Qof door ku leh hoggaanka dhaqanka", "Ciyaaryahan", "Ganacsade keliya", "Arday cusub"],
                answer: "Qof door ku leh hoggaanka dhaqanka",
                explanation: "Oday-dhaqameedku wuxuu door ku yeelan karaa talo-bixinta iyo arrimaha bulshada."
            }
        ]
    },
    {
        id: "nomadic",
        name: "Nolosha Reer Miyiga",
        shortName: "Reer Miyiga",
        emoji: "🐪",
        description: "Ogow xoolaha, deegaanka iyo reer guuraaga.",
        questions: [
            {
                question: "Xayawaankee ayaa astaan muhiim ah u ah nolosha reer guuraaga Soomaaliyeed?",
                options: ["Geel", "Penguin", "Panda", "Kangaroo"],
                answer: "Geel",
                explanation: "Geelu wuxuu muhiim u yahay gaadiidka, caanaha iyo nolosha reer guuraaga."
            },
            {
                question: "Maxay reer guuraagu u guuraan meelo kale?",
                options: ["Raadinta biyo iyo daaq", "Raadinta baraf", "Ka fogaanshaha qorraxda oo keliya", "Dalxiis joogto ah"],
                answer: "Raadinta biyo iyo daaq",
                explanation: "Dhaqdhaqaaqa xoolo-dhaqatadu wuxuu inta badan la xiriiraa helitaanka biyo iyo daaq."
            },
            {
                question: "Xoolaha yaryar ee inta badan la dhaqdo waxaa ka mid ah?",
                options: ["Riyo iyo ido", "Shabeel iyo libaax", "Dawaco iyo yey", "Daanyeer iyo orso"],
                answer: "Riyo iyo ido",
                explanation: "Riyaha iyo iduhu waa xoolo dhaqameed muhiim u ah qoysas badan."
            },
            {
                question: "Maxaa loola jeedaa daaq?",
                options: ["Dhirta ay xooluhu cunaan", "Biyaha roobka", "Guri la dhisay", "Qalab beeraha"],
                answer: "Dhirta ay xooluhu cunaan",
                explanation: "Daaq waa dhirta iyo cawska ay xooluhu quutaan."
            },
            {
                question: "Aqal Soomaaligu taariikh ahaan muxuu ahaa?",
                options: ["Hoy dhaqameed la qaadi karo", "Dugsi weyn", "Markab", "Suuq xoolaad"],
                answer: "Hoy dhaqameed la qaadi karo",
                explanation: "Aqal Soomaaligu waa hoy dhaqameed ku habboon nolol guur-guur ah."
            }
        ]
    },
    {
        id: "literature",
        name: "Af iyo Suugaan",
        shortName: "Af iyo Suugaan",
        emoji: "📚",
        description: "Tijaabi aqoonta maahmaahyada iyo suugaanta.",
        questions: [
            {
                question: "Maahmaahdu badanaa maxay gudbisaa?",
                options: ["Xikmad iyo waayo-aragnimo", "War ciyaareed", "Liiska badeecadaha", "Xisaab keliya"],
                answer: "Xikmad iyo waayo-aragnimo",
                explanation: "Maahmaahyadu waxay soo koobaan xikmad iyo waayo-aragnimo bulsho."
            },
            {
                question: "Gabaygu waa qayb ka mid ah maxay?",
                options: ["Suugaanta", "Cilmiga xiddigiska", "Ciyaaraha", "Cunto karinta"],
                answer: "Suugaanta",
                explanation: "Gabaygu waa nooc ka mid ah suugaanta Soomaaliyeed."
            },
            {
                question: "Qofka tix gabay curiya waxaa badanaa lagu magacaabaa?",
                options: ["Abwaan", "Nijaar", "Kalluumeysato", "Dukaanle"],
                answer: "Abwaan",
                explanation: "Abwaan waa qof curiya gabay ama suugaan."
            },
            {
                question: "Sheeko-xariirtu badanaa sidee ayay u gudbi jirtay?",
                options: ["Afka oo jiilba jiil u gudbiyo", "Telefishan keliya", "Warqad rasmi ah oo keliya", "Ciyaar kombiyuutar"],
                answer: "Afka oo jiilba jiil u gudbiyo",
                explanation: "Sheeko-xariirtu waxay ka mid tahay hidaha afka ee jiilba jiil loo gudbiyo."
            },
            {
                question: "Maxaa lagu magacaabaa weedh kooban oo xikmad xambaarsan?",
                options: ["Maahmaah", "Warbixin", "Rasiid", "Jadwal"],
                answer: "Maahmaah",
                explanation: "Maahmaahdu waa oraah kooban oo xambaarsan xikmad ama waano."
            }
        ]
    }
];

// Hal object ayaa haya xogta isbeddelaysa ee ciyaarta.
const gameState = {
    score: 0,
    streak: 0,
    currentCategory: null,
    currentQuestions: [],
    currentQuestionIndex: 0,
    correctAnswers: 0,
    wrongAnswers: 0,
    categoryScore: 0,
    categoryCorrect: 0,
    categoryWrong: 0,
    completedCategories: [],
    answered: false
};

// HTML elements
const screens = document.querySelectorAll(".screen");
const startButton = document.querySelector("#start-btn");
const categoryList = document.querySelector("#category-list");
const categoryProgress = document.querySelector("#category-progress");
const totalScore = document.querySelector("#total-score");
const backButton = document.querySelector("#back-to-categories-btn");
const answerList = document.querySelector("#answer-list");
const nextButton = document.querySelector("#next-btn");
const feedback = document.querySelector("#feedback");
const progressTrack = document.querySelector(".progress-track");

function showScreen(screenId) {
    screens.forEach((screen) => {
        screen.classList.toggle("hidden", screen.id !== screenId);
    });
}

function startGame() {
    resetGame();
    renderCategories();
    showScreen("category-screen");
}

function resetGame() {
    gameState.score = 0;
    gameState.streak = 0;
    gameState.currentCategory = null;
    gameState.currentQuestions = [];
    gameState.currentQuestionIndex = 0;
    gameState.correctAnswers = 0;
    gameState.wrongAnswers = 0;
    gameState.categoryScore = 0;
    gameState.categoryCorrect = 0;
    gameState.categoryWrong = 0;
    gameState.completedCategories = [];
    gameState.answered = false;
}

function renderCategories() {
    categoryList.innerHTML = "";

    categories.forEach((category) => {
        const isCompleted = gameState.completedCategories.includes(category.id);
        const button = document.createElement("button");
        button.type = "button";
        button.className = isCompleted ? "category-card completed" : "category-card";
        button.disabled = isCompleted;

        const emoji = document.createElement("span");
        emoji.className = "category-emoji";
        emoji.textContent = category.emoji;

        const name = document.createElement("span");
        name.className = "category-name";
        name.textContent = category.name;

        const description = document.createElement("span");
        description.className = "category-description";
        description.textContent = category.description;

        const status = document.createElement("span");
        status.className = "category-status";
        status.textContent = isCompleted ? "✓ Waa la dhammeeyay" : "5 su'aalood →";

        button.append(emoji, name, description, status);

        if (!isCompleted) {
            button.addEventListener("click", () => selectCategory(category.id));
        }

        categoryList.append(button);
    });

    categoryProgress.textContent =
        `${gameState.completedCategories.length} / ${categories.length} qaybood ayaa dhammaaday`;
    totalScore.textContent = `Dhibcaha: ${gameState.score}`;
}

function selectCategory(categoryId) {
    const selectedCategory = categories.find((category) => category.id === categoryId);

    if (!selectedCategory) {
        return;
    }

    if (gameState.completedCategories.includes(categoryId)) {
        return;
    }

    gameState.currentCategory = selectedCategory;
    gameState.currentQuestions = shuffleArray(selectedCategory.questions);
    gameState.currentQuestionIndex = 0;
    gameState.categoryScore = 0;
    gameState.categoryCorrect = 0;
    gameState.categoryWrong = 0;

    document.querySelector("#quiz-category-label").textContent =
        `${selectedCategory.emoji} ${selectedCategory.shortName}`;

    showScreen("quiz-screen");
    loadQuestion();
}

function shuffleArray(items) {
    const shuffledItems = [...items];

    for (let i = shuffledItems.length - 1; i > 0; i--) {
        const randomIndex = Math.floor(Math.random() * (i + 1));
        [shuffledItems[i], shuffledItems[randomIndex]] =
            [shuffledItems[randomIndex], shuffledItems[i]];
    }

    return shuffledItems;
}

function loadQuestion() {
    const questionData = gameState.currentQuestions[gameState.currentQuestionIndex];

    if (!questionData) {
        finishCategory();
        return;
    }

    gameState.answered = false;
    feedback.textContent = "";
    feedback.className = "feedback";
    nextButton.classList.add("hidden");
    answerList.innerHTML = "";

    document.querySelector("#question-count").textContent =
        `Su'aal ${gameState.currentQuestionIndex + 1} / ${gameState.currentQuestions.length}`;
    document.querySelector("#quiz-score").textContent = `${gameState.score} dhibcood`;
    document.querySelector("#streak-count").textContent = `🔥 Isku xigxig: ${gameState.streak}`;
    document.querySelector("#question-text").textContent = questionData.question;

    const progressPercent =
        (gameState.currentQuestionIndex / gameState.currentQuestions.length) * 100;
    document.querySelector("#progress-fill").style.width = `${progressPercent}%`;
    progressTrack.setAttribute("aria-valuenow", String(gameState.currentQuestionIndex));

    questionData.options.forEach((option) => {
        const answerButton = document.createElement("button");
        answerButton.type = "button";
        answerButton.className = "answer-btn";
        answerButton.textContent = option;
        answerButton.addEventListener("click", () => checkAnswer(option));
        answerList.append(answerButton);
    });
}

function checkAnswer(selectedAnswer) {
    if (gameState.answered) {
        return;
    }

    gameState.answered = true;

    const questionData = gameState.currentQuestions[gameState.currentQuestionIndex];
    const answerButtons = answerList.querySelectorAll(".answer-btn");
    const isCorrect = selectedAnswer === questionData.answer;

    answerButtons.forEach((button) => {
        button.disabled = true;

        if (button.textContent === questionData.answer) {
            button.classList.add("correct");
        } else if (button.textContent === selectedAnswer) {
            button.classList.add("incorrect");
        }
    });

    if (isCorrect) {
        updateScore(10);
        gameState.streak += 1;
        gameState.correctAnswers += 1;
        gameState.categoryCorrect += 1;

        let message = "Waa sax! Waxaad heshay 10 dhibcood.";

        if (gameState.streak % 3 === 0) {
            updateScore(5);
            message += " 🔥 Bonus! 5 dhibcood oo dheeraad ah.";
        }

        feedback.textContent = `${message} ${questionData.explanation}`;
        feedback.classList.add("success");
    } else {
        gameState.streak = 0;
        gameState.wrongAnswers += 1;
        gameState.categoryWrong += 1;

        feedback.textContent =
            `Jawaabta saxda ahi waa: ${questionData.answer}. ${questionData.explanation}`;
        feedback.classList.add("error");
    }

    document.querySelector("#quiz-score").textContent = `${gameState.score} dhibcood`;
    document.querySelector("#streak-count").textContent = `🔥 Isku xigxig: ${gameState.streak}`;
    nextButton.classList.remove("hidden");
}

function updateScore(points) {
    gameState.score += points;
    gameState.categoryScore += points;
}

function goToNextQuestion() {
    gameState.currentQuestionIndex += 1;

    if (gameState.currentQuestionIndex < gameState.currentQuestions.length) {
        loadQuestion();
    } else {
        finishCategory();
    }
}

function finishCategory() {
    const category = gameState.currentCategory;

    gameState.completedCategories.push(category.id);

    document.querySelector("#progress-fill").style.width = "100%";
    progressTrack.setAttribute("aria-valuenow", "5");
    document.querySelector("#category-result-title").textContent =
        `${category.emoji} ${category.shortName} waa dhammaatay!`;

    document.querySelector("#category-result-message").textContent =
        gameState.categoryCorrect >= 4
            ? "Waxaad muujisay aqoon fiican oo ku saabsan qaybtan."
            : "Waad dhammeystirtay qaybtan. Waxaad fursad u haysataa inaad wax badan barato.";

    document.querySelector("#category-result-score").textContent = gameState.categoryScore;
    document.querySelector("#category-result-correct").textContent =
        `${gameState.categoryCorrect} / 5`;
    document.querySelector("#category-result-wrong").textContent = gameState.categoryWrong;

    showScreen("category-result-screen");
}

function continueJourney() {
    if (gameState.completedCategories.length === categories.length) {
        showFinalResult();
    } else {
        renderCategories();
        showScreen("category-screen");
    }
}

function showFinalResult() {
    const maxPossibleScore = 230;
    const percentage = (gameState.score / maxPossibleScore) * 100;
    let rank;
    let message;

    if (percentage >= 85) {
        rank = "Master-ka Dhaqanka";
        message = "Waxaad safarka ku dhammeystirtay natiijo aad u sarreysa. Hambalyo!";
    } else if (percentage >= 65) {
        rank = "Aqoonyahan Dhaqan";
        message = "Aqoontaadu way wanaagsan tahay. Sii wad barashada hiddaheenna.";
    } else if (percentage >= 40) {
        rank = "Sahmiye Dhaqan";
        message = "Waxaad leedahay aasaas aqooneed. Waxaa jira waxyaabo badan oo aad sii sahmin karto.";
    } else {
        rank = "Bilowga Safarka";
        message = "Safarkii koowaad waad dhammeystirtay. Mar kale ciyaar oo kordhi aqoontaada.";
    }

    document.querySelector("#final-rank").textContent = rank;
    document.querySelector("#final-message").textContent = message;
    document.querySelector("#final-score").textContent = gameState.score;
    document.querySelector("#final-correct").textContent = gameState.correctAnswers;
    document.querySelector("#final-wrong").textContent = gameState.wrongAnswers;
    document.querySelector("#final-categories").textContent =
        `${gameState.completedCategories.length} / ${categories.length}`;

    showScreen("final-screen");
}

// Event listeners
startButton.addEventListener("click", startGame);
nextButton.addEventListener("click", goToNextQuestion);
backButton.addEventListener("click", () => {
    renderCategories();
    showScreen("category-screen");
});
document.querySelector("#continue-btn").addEventListener("click", continueJourney);
document.querySelector("#play-again-btn").addEventListener("click", startGame);
