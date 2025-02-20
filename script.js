// import { quizz_E } from './game.js'; // Import des questions
// // Récupérer les emplacements pour injecter la question et les options
// // const __________ = document.getElementById('__________');
// const questions = document.querySelector('.question');
// // console.log('question')
import { quizz_E } from './game.js'; 
let index = 0;
const nextButton = document.querySelector('#next-button');
let optionsBox = document.querySelector('.options');
const question = document.querySelector('.question');
question.innerText= quizz_E.questions[index].text;
// Ici ça créé un doublon avec optionsBox
//  const options = document.querySelector('.options');
quizz_E.questions[index].options.forEach((option) => {
    // pour vérifier ce que contient option
  console.log(option);
  let bouton = document.createElement('button');
  bouton.classList.add('another-class');
  optionsBox.appendChild(bouton);
  bouton.textContent = option; 
});
nextButton.addEventListener('click',() => {
    // Ici on vide la div qui contient les options
    optionsBox.innerHTML = "";
    // On incrémente la variable index
    index++;
    // Ici c'est in doublon avec "culture.questions[index].options.forEach((option)"
    // optionsBox.innerText = culture.questions[index].options;
    question.innerText = quizz_E.questions[index].text;
    // On boucle avec le forEach sur les options et on créé les boutons liés
    quizz_E.questions[index].options.forEach((option) => {
        // pour vérifier ce que contient option
        console.log(option);
        console.log(index);
        let bouton = document.createElement('button');
        bouton.classList.add('another-class');
        optionsBox.appendChild(bouton);
        bouton.textContent = option;
        let br = document.createElement('br');
        optionsBox.appendChild(br);
    });
});
