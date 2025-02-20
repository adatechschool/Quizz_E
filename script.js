
import { quizz_E } from './game.js'; 
let index = 0;
const nextButton = document.querySelector('#next-button');
let optionsBox = document.querySelector('.options');

function loadQuestion() {
    optionsBox.innerHTML = ""; 

const question = document.querySelector('.question');
question.innerText= quizz_E.questions[index].text;

quizz_E.questions[index].options.forEach((option) => {

  console.log(option);
  let bouton = document.createElement('button');
//   bouton.classList.add('another-class');
  optionsBox.appendChild(bouton);
  bouton.textContent = option; 
});
}

nextButton.addEventListener('click',() => {
    // Ici on vide la div qui contient les options
       // On incrémente la variable index
    index++;
  loadQuestion()
        let br = document.createElement('br');
        optionsBox.appendChild(br);
    });
loadQuestion()
