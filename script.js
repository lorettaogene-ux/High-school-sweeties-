const storyData = {
    start: {
        speaker: "You",
        location: "High School - Entrance",
        bgImage: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=800&q=80",
        text: "I can't believe it's my first day at Kingsview Academy... I hope I make a good impression.",
        choices: [
            { text: "Take a deep breath and walk inside", nextNode: "hallway" },
            { text: "Check your reflection first", nextNode: "mirror" }
        ]
    },
    mirror: {
        speaker: "You",
        location: "High School - Entrance",
        bgImage: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=800&q=80",
        text: "Curly hair styled, lip gloss popping. Yeah, I'm ready for whatever high school drama comes my way.",
        choices: [
            { text: "Head into the main hallway", nextNode: "hallway" }
        ]
    },
    hallway: {
        speaker: "Kian",
        location: "Main Hallway",
        bgImage: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80",
        text: "New here? You look like you're searching for your class... or maybe someone to show you around?",
        choices: [
            { text: "Yeah... I'm new here.", nextNode: "flirt" },
            { text: "I can find my own way, thanks.", nextNode: "sassy" },
            { text: "Are you from this school?", nextNode: "curious" }
        ]
    },
    flirt: {
        speaker: "Kian",
        location: "Main Hallway",
        bgImage: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80",
        text: "Well, lucky for you, I know every corner of this place. Name's Kian.",
        choices: [
            { text: "Nice to meet you, Kian.", nextNode: "end" }
        ]
    },
    sassy: {
        speaker: "Kian",
        location: "Main Hallway",
        bgImage: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80",
        text: "Feisty. I like that. I'll see you around campus.",
        choices: [
            { text: "Head to class", nextNode: "end" }
        ]
    },
    curious: {
        speaker: "Kian",
        location: "Main Hallway",
        bgImage: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80",
        text: "Yeah, senior year. If you ever need help with anything, you know where to find me.",
        choices: [
            { text: "Smile and head to class", nextNode: "end" }
        ]
    },
    end: {
        speaker: "System",
        location: "Classroom",
        bgImage: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=800&q=80",
        text: "To be continued in Episode 2!",
        choices: [
            { text: "Restart Demo", nextNode: "start" }
        ]
    }
};

let currentKey = "start";

const speakerEl = document.getElementById("speaker-name");
const dialogueEl = document.getElementById("dialogue-text");
const locationEl = document.getElementById("location-text");
const bgEl = document.getElementById("scene-bg");
const choicesContainer = document.getElementById("choices-container");
const dialogueBox = document.getElementById("dialogue-box");

function renderScene(nodeKey) {
    const node = storyData[nodeKey];
    if (!node) return;

    speakerEl.textContent = node.speaker;
    dialogueEl.textContent = node.text;
    locationEl.textContent = node.location;
    bgEl.style.backgroundImage = `url('${node.bgImage}')`;

    choicesContainer.innerHTML = "";
    if (node.choices && node.choices.length > 0) {
        dialogueBox.style.display = "block";
        choicesContainer.classList.remove("hidden");

        node.choices.forEach(choice => {
            const btn = document.createElement("button");
            btn.className = "choice-btn";
            btn.textContent = choice.text;

            btn.addEventListener("click", () => {
                btn.classList.add("sparkle-effect");
                setTimeout(() => {
                    renderScene(choice.nextNode);
                }, 300);
            });

            choicesContainer.appendChild(btn);
        });
    }
}

document.addEventListener("DOMContentLoaded", () => {
    renderScene(currentKey);
});
