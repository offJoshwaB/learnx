const sentence=["Ready to Escape the Matrix? Quit 9-5 jobs. JOIN the LearnX",
"Your Success, Our Business.",
"Where Innovation Meets Opportunity.",
"Quality and Service Excellence.",
"Turning Ideas Into Solutions.",
"Empowering Your Future.",
"Driven by Passion, Defined by Results.",
"Building Trust, Delivering Excellence.",
"Your Vision, Our Commitment.",
"Striving for Excellence Every Day.",
"Innovation Beyond Boundaries.",
"Together We Achieve More.",
"Customer-Centric, Quality-Driven.",
"Redefining Possibilities.",
"Inspiring Growth, Creating Value.",
"Your Partner in Progress.",
"Where Dreams Become Reality.",
"Excellence in Every Endeavor.",
"Investing in Your Success.",
"Crafting Success Stories Together.",
"Elevating Expectations, Exceeding Standards."];


let sentenceIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingSpeed = 50; // Adjust the typing speed (milliseconds)

function typeSentence() {
    const sentenceElement = document.getElementById('sentence');
    const currentSentence = sentences[sentenceIndex];
    if (charIndex < currentSentence.length) {
        sentenceElement.innerHTML += currentSentence.charAt(charIndex);
        charIndex++;
        setTimeout(typeSentence, typingSpeed);
    } else {
        // Sentence is fully typed
        setTimeout(eraseSentence, 1000); // Pause before erasing
    }
}

function eraseSentence() {
    const sentenceElement = document.getElementById('sentence');
    const currentSentence = sentences[sentenceIndex];
    if (charIndex > 0) {
        sentenceElement.innerHTML = currentSentence.substring(0, charIndex - 1);
        charIndex--;
        setTimeout(eraseSentence, typingSpeed / 2); // Faster erasing
    } else {
        // Sentence is fully erased
        sentenceIndex = (sentenceIndex + 1) % sentences.length; // Cycle through sentences
        setTimeout(typeSentence, 500); // Pause before typing the next sentence
    }
}

// Start the typewriting effect when the page loads
window.onload = function () {
    typeSentence();
}
