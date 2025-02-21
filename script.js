
import { quizz_E } from './game.js'; 
let index = 0;
const nextButton = document.querySelector('#next-button');
let optionsBox = document.querySelector('.options');
const question = document.querySelector('.question')

const rejouer = document.querySelector('#replay-button')



function loadQuestion() {
    optionsBox.innerHTML = ""; 
// const question = document.querySelector('.question');
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
 index++;
  
        let br = document.createElement('br');
        optionsBox.appendChild(br);
           // Vérifier s'il reste des questions
    if (index < quizz_E.questions.length) {
        // Afficher la question suivante
       loadQuestion();
      } else {
        optionsBox.innerHTML = ""
        // let boutonfin = document.createElement('button');
        // boutonfin.textContent = 'bravo, vous avez terminé'
        // console.log(boutonfin)
        // Si plus de questions, indiquer la fin du quiz
       question.innerText = 'vous avez terminé';
        // optionsBox.innerHTML = ''; // Effacer les options
        nextButton.style.display = 'none'; // Cacher le bouton Suivant
        rejouer.style.display = 'inline-block'
    }});


   
loadQuestion()
