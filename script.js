// script.js
const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const initialContent = document.getElementById('initialContent');
const response = document.getElementById('response');

// Define a list of strings to cycle through for the "No" button text
const noButtonTexts = [
    "Sure?", "Really sure?", "Think again!", "Are you positive?",
    "Last chance!", "Yes, I do!", "I can do this all day!",
    "Still no?", "You gotta be kidding me!", "This button is unstoppable!",
    "Oops, try again!", "How about now?", "Persistence is key!",
    "Unbreakable spirit!", "I'm getting stronger!", "Aren't you tired yet?",
    "We can keep going!", "Endurance level 100!", "I have all the time in the world!",
    "Just click yes already!", "Your persistence is admirable!", "But seriously, yes?",
    "I can do this all day!", "Day 341 I'm still waiting", "Your finger must be getting tired?",
    "Resistance is futile", "Or is it?", "No it definitely is futile", "why?", "because I'm ascending!",
    "To my final Dudu form!", "Are you prepared for love?!", "I know you are!",
    "Give in to me", "La da da", "Oh you're still going?", "Soon you will give in..."
];
let currentTextIndex = 0; // Keep track of which text is currently displayed

// Function to enlarge the "Yes" button and cycle its text
function updateNoButton() {
    let fontSize = parseInt(window.getComputedStyle(yesBtn).fontSize);
    fontSize += 5; // Adjust the size increment as desired
    yesBtn.style.fontSize = `${fontSize}px`;
    yesBtn.style.padding = `${fontSize * 0.5}px ${fontSize}px`; // Adjust padding based on your design needs

    // Cycle through the list of strings for the button text
    noBtn.textContent = noButtonTexts[currentTextIndex];
    currentTextIndex = (currentTextIndex + 1) % noButtonTexts.length;
}

function moveButton() {
    // Get the viewport dimensions
    const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
    const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);

    // Calculate random position within the viewport
    const newTop = Math.floor(Math.random() * (vh - 60));
    const newLeft = Math.floor(Math.random() * (vw - 60));

    // Apply the new position
    noBtn.style.position = 'fixed'; // Use 'fixed' to position relative to the viewport
    noBtn.style.top = `${newTop}px`;
    noBtn.style.left = `${newLeft}px`;
}

// Combine text update and movement on hover and click
noBtn.addEventListener('mouseover', function() {
    updateNoButton();
    moveButton();
});
noBtn.addEventListener('click', function() {
    updateNoButton();
    moveButton();
});

yesBtn.addEventListener('click', function() {
    initialContent.style.display = 'none';
    response.classList.remove('hidden');
});
