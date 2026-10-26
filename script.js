// Episode 2: "Rivalries & Whispers" - High School Hearts
// Complete Branching Visual Novel Script with Characters & Visual Scenes

const episode2Story = [
    {
        id: "node_1",
        speaker: "Maya (You)",
        location: "Kingsview High - Courtyard",
        bgImage: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=800&q=80",
        characterImg: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80",
        text: "The morning air is crisp as I step into the main courtyard. My second week at Kingsview High, and already rumors are flying about the upcoming Homecoming Dance.",
        next: "node_2"
    },
    {
        id: "node_2",
        speaker: "Maya (You)",
        location: "Kingsview High - Courtyard",
        bgImage: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=800&q=80",
        characterImg: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80",
        text: "Suddenly, a friendly voice calls out my name from across the cherry blossom trees.",
        next: "node_3"
    },
    {
        id: "node_3",
        speaker: "Nia",
        location: "Kingsview High - Courtyard",
        bgImage: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=800&q=80",
        characterImg: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=600&q=80",
        text: "Girl! Over here! Did you hear what happened yesterday after track practice?",
        choices: [
            { text: " spill the tea! What happened?", nextNode: "node_nia_tea", popularity: 5 },
            { text: " Hey Nia! Is it about the Homecoming dance?", nextNode: "node_dance_talk", popularity: 2 },
            { text: " Keep it down, people are watching us...", nextNode: "node_cool_response", popularity: 0 }
        ]
    },

    // --- BRANCH A: TELLING TEA ---
    {
        id: "node_nia_tea",
        speaker: "Nia",
        location: "Kingsview High - Courtyard",
        bgImage: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=800&q=80",
        characterImg: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=600&q=80",
        text: "Okay so Kian got into a heated argument with Chloe from the drama club! Word is he declined her invitation to be his dance partner.",
        next: "node_kian_appears"
    },

    // --- BRANCH B: DANCE TALK ---
    {
        id: "node_dance_talk",
        speaker: "Nia",
        location: "Kingsview High - Courtyard",
        bgImage: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=800&q=80",
        characterImg: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=600&q=80",
        text: "Bingo! Everyone is trying to figure out who Kian is going with. He's been turned down three popular girls already!",
        next: "node_kian_appears"
    },

    // --- BRANCH C: PLAYING IT COOL ---
    {
        id: "node_cool_response",
        speaker: "Nia",
        location: "Kingsview High - Courtyard",
        bgImage: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=800&q=80",
        characterImg: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=600&q=80",
        text: "You always play it so unbothered, Maya! But seriously, this is big news.",
        next: "node_kian_appears"
    },

    // --- KIAN ENTERS THE SCENE ---
    {
        id: "node_kian_appears",
        speaker: "Kian",
        location: "Kingsview High - Courtyard",
        bgImage: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80",
        characterImg: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=600&q=80",
        text: "Talking about me again? You two really need a better hobby.",
        next: "node_kian_interaction"
    },
    {
        id: "node_kian_interaction",
        speaker: "Maya (You)",
        location: "Kingsview High - Courtyard",
        bgImage: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80",
        characterImg: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80",
        text: "Kian leans against the courtyard locker with that usual confident smirk on his face.",
        choices: [
            { text: " We weren't talking about you... much.", nextNode: "node_flirt_kian", popularity: 5 },
            { text: " Don't flatter yourself, Kian.", nextNode: "node_sassy_kian", popularity: 3 },
            { text: " So, are the rumors true about Homecoming?", nextNode: "node_direct_kian", popularity: 2 }
        ]
    },

    // --- BRANCH: FLIRT KIAN ---
    {
        id: "node_flirt_kian",
        speaker: "Kian",
        location: "Kingsview High - Courtyard",
        bgImage: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80",
        characterImg: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=600&q=80",
        text: "'Much'? So I was on your mind. I can live with that.",
        next: "node_confrontation"
    },

    // --- BRANCH: SASSY KIAN ---
    {
        id: "node_sassy_kian",
        speaker: "Kian",
        location: "Kingsview High - Courtyard",
        bgImage: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80",
        characterImg: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=600&q=80",
        text: "Ouch. You really don't hold back, do you, Maya?",
        next: "node_confrontation"
    },

    // --- BRANCH: DIRECT KIAN ---
    {
        id: "node_direct_kian",
        speaker: "Kian",
        location: "Kingsview High - Courtyard",
        bgImage: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80",
        characterImg: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=600&q=80",
        text: "Straight to the point. I haven't picked a date yet. Maybe I'm waiting for the right person to ask.",
        next: "node_confrontation"
    },

    // --- DRAMA/CONFRONTATION SCENE ---
    {
        id: "node_confrontation",
        speaker: "Chloe",
        location: "Kingsview High - Hallway",
        bgImage: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=800&q=80",
        characterImg: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=600&q=80",
        text: "Well, well, well. What's going on here? Maya, shouldn't you be getting to your morning class?",
        next: "node_chloe_drama"
    },
    {
        id: "node_chloe_drama",
        speaker: "Maya (You)",
        location: "Kingsview High - Hallway",
        bgImage: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=800&q=80",
        characterImg: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80",
        text: "Chloe steps in, crossing her arms. You can feel the tension in the hallway rise instantly.",
        choices: [
            { text: " Class starts in 10 minutes, Chloe. I'm right on time.", nextNode: "node_chloe_standoff", popularity: 5 },
            { text: " Is there a problem here?", nextNode: "node_chloe_attitude", popularity: 3 },
            { text: " Walk away quietly with Nia", nextNode: "node_walk_away", popularity: 0 }
        ]
    },

    // --- CLOE RESOLUTIONS ---
    {
        id: "node_chloe_standoff",
        speaker: "Chloe",
        location: "Kingsview High - Hallway",
        bgImage: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=800&q=80",
        characterImg: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=600&q=80",
        text: "Just making sure you know your place around here, new girl.",
        next: "node_climax"
    },
    {
        id: "node_chloe_attitude",
        speaker: "Chloe",
        location: "Kingsview High - Hallway",
        bgImage: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=800&q=80",
        characterImg: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=600&q=80",
        text: "Only that you seem to be hovering where you don't belong.",
        next: "node_climax"
    },
    {
        id: "node_walk_away",
        speaker: "Nia",
        location: "Kingsview High - Hallway",
        bgImage: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=800&q=80",
        characterImg: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=600&q=80",
        text: "Good move not engaging with her. She's just looking for drama.",
        next: "node_climax"
    },

    // --- EPISODE 2 CLIMAX ---
    {
        id: "node_climax",
        speaker: "Kian",
        location: "Kingsview High - Rooftop Terrace",
        bgImage: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=800&q=80",
        characterImg: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=600&q=80",
        text: "Later after school, Kian catches you up on the rooftop terrace overlooking the sunset.",
        next: "node_rooftop_invitation"
    },
    {
        id: "node_rooftop_invitation",
        speaker: "Kian",
        location: "Kingsview High - Rooftop Terrace",
        bgImage: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=800&q=80",
        characterImg: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=600&q=80",
        text: "I wanted to ask you properly... without everyone staring. Will you go to the Homecoming dance with me, Maya?",
        choices: [
            { text: " Yes! I'd love to go with you! 💕", nextNode: "node_ending_romantic", popularity: 10 },
            { text: " Let me think about it... 😉", nextNode: "node_ending_mysterious", popularity: 5 },
            { text: " Only if we go as friends!", nextNode: "node_ending_friendly", popularity: 2 }
        ]
    },

    // --- ENDINGS ---
    {
        id: "node_ending_romantic",
        speaker: "System",
        location: "Rooftop - Sunset",
        bgImage: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=800&q=80",
        characterImg: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=600&q=80",
        text: "✨ ROMANTIC ENDING ✨\nKian smiles softly. 'It's a date then.' You've earned the Romantic Connection achievement!",
        choices: [
            { text: "Play Episode 2 Again 🔄", nextNode: "node_1" }
        ]
    },
    {
        id: "node_ending_mysterious",
        speaker: "System",
        location: "Rooftop - Sunset",
        bgImage: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=800&q=80",
        characterImg: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=600&q=80",
        text: "✨ MYSTERIOUS ENDING ✨\nKian chuckles. 'Keeping me on my toes, huh? I like a challenge.'",
        choices: [
            { text: "Play Episode 2 Again 🔄", nextNode: "node_1" }
        ]
    },
    {
        id: "node_ending_friendly",
        speaker: "System",
        location: "Rooftop - Sunset",
        bgImage: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=800&q=80",
        characterImg: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=600&q=80",
        text: "✨ FRIENDSHIP ENDING ✨\nKian nods gracefully. 'Friends works for me. As long as we get the best table at the dance.'",
        choices: [
            { text: "Play Episode 2 Again 🔄", nextNode: "node_1" }
        ]
    }
];

let currentScore = 50;
let currentStepIndex = 0;

// DOM Elements
const speakerEl = document.getElementById("speaker-name");
const dialogueEl = document.getElementById("dialogue-text");
const locationEl = document.getElementById("location-text");
const repEl = document.getElementById("rep-text");
const bgEl = document.getElementById("scene-bg");
const characterImgEl = document.getElementById("character-sprite");
const choicesContainer = document.getElementById("choices-container");
const dialogueBox = document.getElementById("dialogue-box");
const tapIndicator = document.getElementById("tap-indicator");

let currentStoryNode = episode2Story[0];

function loadNodeById(id) {
    const found = episode2Story.find(n => n.id === id);
    if (found) {
        currentStoryNode = found;
        renderCurrentNode();
    }
}

function renderCurrentNode() {
    if (!currentStoryNode) return;

    // Update Header HUD
    locationEl.textContent = currentStoryNode.location;
    repEl.textContent = `Popularity: ${currentScore}`;

    // Update Background Image
    bgEl.style.backgroundImage = `url('${currentStoryNode.bgImage}')`;

    // Update Dialogue Box
    speakerEl.textContent = currentStoryNode.speaker;
    dialogueEl.textContent = currentStoryNode.text;

    // Update Character Sprite Portrait
    if (currentStoryNode.characterImg) {
        characterImgEl.src = currentStoryNode.characterImg;
        characterImgEl.classList.remove("hidden");
    } else {
        characterImgEl.classList.add("hidden");
    }

    // Handle Choices vs Line progression
    choicesContainer.innerHTML = "";

    if (currentStoryNode.choices && currentStoryNode.choices.length > 0) {
        choicesContainer.classList.remove("hidden");
        tapIndicator.style.display = "none";

        currentStoryNode.choices.forEach(choice => {
            const btn = document.createElement("button");
            btn.className = "choice-btn";
            btn.textContent = choice.text;

            btn.addEventListener("click", (e) => {
                e.stopPropagation();
                btn.classList.add("sparkle-effect");

                if (choice.popularity) {
                    currentScore += choice.popularity;
                }

                setTimeout(() => {
                    loadNodeById(choice.nextNode);
                }, 350);
            });

            choicesContainer.appendChild(btn);
        });
    } else {
        choicesContainer.classList.add("hidden");
        tapIndicator.style.display = "block";
    }
}

// Click anywhere on Dialogue Box to advance linear text
dialogueBox.addEventListener("click", () => {
    if (currentStoryNode.choices && currentStoryNode.choices.length > 0) {
        return; // Wait for player to choose
    }

    if (currentStoryNode.next) {
        loadNodeById(currentStoryNode.next);
    }
});

document.addEventListener("DOMContentLoaded", () => {
    renderCurrentNode();
});
