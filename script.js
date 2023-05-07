let menu = document.querySelector('.menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    navbar.classList.toggle('open-menu')
    menu.classList.toggle("move");
}; 

window.onscroll = () => {
    navbar.classList.remove('open-menu');
    menu.classList.remove('move');
}

let header = document.querySelector('header');

window.addEventListener('scroll', () => {
    header.classList.toggle('header-active', window.scrollY > 0);
})

document.addEventListener('scroll', function() {
    var skillsArea = document.querySelector('.skills-area');
    var skillsAreaTop = skillsArea.getBoundingClientRect().top;
    var windowHeight = window.innerHeight;
  
    if (skillsAreaTop < windowHeight) {
      skillsArea.classList.add('fade-in');
    }
  });

  // define the possible questions and answers
const faq = {
	"what is your name?": "My name is Chatbot.",
	"how are you?": "I'm doing fine, thank you!",
	"what can you do?": "I can answer some common questions. Ask me anything!",
	"what is the time?": new Date().toLocaleTimeString(),
	"default": "I'm sorry, I don't understand. Can you please try again?"
}

// get the necessary HTML elements
const inputEl = document.getElementById("input");
const messagesEl = document.getElementById("messages");
const sendBtnEl = document.getElementById("send-btn");

// function to display a message in the chat
function displayMessage(text, sender) {
	const div = document.createElement("div");
	div.classList.add("message", sender);
	div.textContent = text;
	messagesEl.appendChild(div);
}


