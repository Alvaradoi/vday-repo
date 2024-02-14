// script.js
const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const initialContent = document.getElementById('initialContent');
const response = document.getElementById('response');

// Define a list of strings to cycle through for the "Yes" button text
const noButtonTexts = [    
"Sure?", "Really sure?", "Think again!", "Are you positive?", 
"Last chance!", "Yes, I do!", "I can do this all day!", 
"Still no?", "You gotta be kidding me!", "This button is unstoppable!", 
"Oops, try again!", "How about now?", "Persistence is key!", 
"Unbreakable spirit!", "I'm getting stronger!", "Aren't you tired yet?", 
"We can keep going!", "Endurance level 100!", "I have all the time in the world!", 
"Just click yes already!", "Your persistence is admirable!", "But seriously, yes?"
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

// Enlarge and cycle text on hover
noBtn.addEventListener('mouseover', updateNoButton);

// Enlarge and cycle text on click
noBtn.addEventListener('click', updateNoButton);

yesBtn.addEventListener('click', function() {
    // Hide initial elements
    initialContent.style.display = 'none';


    // Show response elements
    response.classList.remove('hidden');
});
