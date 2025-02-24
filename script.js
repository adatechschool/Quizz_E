
import { quizz_E } from './game.js';
let index = 0;
const nextButton = document.querySelector('#next-button');
let optionsBox = document.querySelector('.options');
const question = document.querySelector('.question')

const rejouer = document.querySelector('#replay-button')
//let score = 0;
// console.log('Bonne réponse : ' + bonneReponse)


function loadQuestion() {
    optionsBox.innerHTML = "";
    let i = 1;
    const bonneReponse = quizz_E.questions[index].correct_answer.trim();

    // const question = document.querySelector('.question');
    question.innerText = quizz_E.questions[index].text;
    quizz_E.questions[index].options.forEach((option) => {
        let bouton = document.createElement('button');
        bouton.classList.add(`button-${i}`);

        let br = document.createElement('br');
        optionsBox.appendChild(br);
        optionsBox.appendChild(bouton);
        i++;

        bouton.textContent = option;
        bouton.addEventListener("click", () => {
            console.log(optionsBox.innerText)
            if (bouton.innerText === bonneReponse) {
                //score++
                bouton.style.border = "2px solid green";
                console.log('bonne réponse');
            }
            else {
                bouton.style.border = "2px solid red";
            }
            //   bouton.disabled = true;
            nextButton.disabled = false;

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
        optionsBox.innerHTML = ""
        // let boutonfin = document.createElement('button');
        // boutonfin.textContent = 'bravo, vous avez terminé'
        // console.log(boutonfin)
        // Si plus de questions, indiquer la fin du quiz
        question.innerText = 'Bravo vous êtes arrivé à la fin du Quiz ! ! ! 🥳';
        // optionsBox.innerHTML = ''; // Effacer les options
        nextButton.style.display = 'none'; // Cacher le bouton Suivant
        rejouer.style.display = 'inline-block'
    }
});


rejouer.addEventListener('click', () => {
    index = 0
    rejouer.style.display = 'none'
    nextButton.style.display = 'inline-block'
    loadQuestion()
});

// // faire un forEach de addEventListener sur chaque bouton créé

// optionsBox.addEventListener('click', (event) => {
//     console.log(optionsBox.innerText)
//     console.log(bonneReReponse) {
//         score++
//         console.log('bonne réponse')eponse)
//     if (optionsBox.innerText === bonn
//     }
//     else {

//        bouton.style.border = "2px solid red";
//         console.log('bouh')
//     }
//     // bouton.disabled = true;
//     nextButton.disabled = false;
// })

// // pour chaque boutons créer des class pour les réponses = options

// loadQuestion()
