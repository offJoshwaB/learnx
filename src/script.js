// Typewriting effect
const sentenceElement = document.getElementById('sentence');
const sentenceText = ["Ready to Escape the Matrix? Quit 9-5 jobs. JOIN the LearnX",
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

function typeSentence() {
    if (sentenceIndex < sentenceText.length) {
        sentenceElement.innerHTML += sentenceText.charAt(sentenceIndex);
        sentenceIndex++;
        setTimeout(typeSentence, 50); // Adjust the typing speed (milliseconds)
    }
}

// Start the typewriting effect when the page loads
window.onload = function () {
    typeSentence();
};

