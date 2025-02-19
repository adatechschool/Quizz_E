// import { quizz_E } from './game.js'; // Import des questions
// // Récupérer les emplacements pour injecter la question et les options
// // const __________ = document.getElementById('__________');
// // const questions = document.querySelector('.question');
// // console.log('question')
import { quizz_E } from './game.js' ; 
console.log("coucouuuuu");
let index = 3;
const question= document.querySelector('.question');
question.innerText= quizz_E.questions[index].text;

const reponse= document.querySelector('.options');
reponse.innerText= quizz_E.questions[index].options;


// import { quiz_fatoumata_kebe } from './questions.js'; // Import des questions

