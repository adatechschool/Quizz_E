
import { quizz_E } from './game.js';

let index = 0;
const nextButton = document.querySelector('#next-button');
let optionsBox = document.querySelector('.options');
const question = document.querySelector('.question')
const rejouer = document.querySelector('#replay-button')
const resultat = document.querySelector('.resultat')

let score = 0;



function loadQuestion() {
    optionsBox.innerHTML = "";


    const bonneReponse = quizz_E.questions[index].correct_answer.trim();
    question.innerText = quizz_E.questions[index].text;

    quizz_E.questions[index].options.forEach((option) => {
        let bouton = document.createElement('button');
        let br = document.createElement('br');
        optionsBox.appendChild(br);
        optionsBox.appendChild(bouton);
        nextButton.disabled = true;
        bouton.textContent = option;

        bouton.addEventListener("click", () => {
            
             if (bouton.innerText === quizz_E.questions[index].correct_answer.trim()) {
                score++
                bouton.style.border = "5px solid green";
                bouton.style.backgroundColor = "#6FCF97";

                console.log('bonne réponse');
            }
            else {
                bouton.style.border = "5px solid red";
                bouton.style.backgroundColor = "#ffb3b3";
            }
            nextButton.disabled = false;
            let answers = document.querySelectorAll(".options button")
            answers.forEach((button) => {
                button.disabled = true;
            })
           
        });
    });
}


loadQuestion();

nextButton.addEventListener('click', () => {
    index++;
    // Vérifier s'il reste des questions
    if (index < quizz_E.questions.length) {
        // Afficher la question suivante
        loadQuestion();
    } else {
        optionsBox.innerHTML = "";
       
        question.innerText = 'Bravo vous êtes arrivé à la fin du Quiz ! ! ! 🥳';
        resultat.style.display = 'inline-block'
        resultat.innerHTML = 'votre resultat est de ' + score + " / 4";
        nextButton.style.display = 'none'; // Cacher le bouton Suivant
        rejouer.style.display = 'inline-block'
    }
});

rejouer.addEventListener('click', () => {
    index = 0
    rejouer.style.display = 'none';
    nextButton.style.display = 'inline-block';
    resultat.style.display = 'none';
    score = 0
    loadQuestion()
});


