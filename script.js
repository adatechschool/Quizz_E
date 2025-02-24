
import { quizz_E } from './game.js';
let index = 0;
const nextButton = document.querySelector('#next-button');
let optionsBox = document.querySelector('.options');
const question = document.querySelector('.question')

const rejouer = document.querySelector('#replay-button')
const resultat = document.querySelector('.resultat')
let score = 0;
// console.log('Bonne réponse : ' + bonneReponse)


function loadQuestion() {
    optionsBox.innerHTML = "";
    // let score = 0
    //let i = 1;
    console.log(index)
    const bonneReponse = quizz_E.questions[index].correct_answer.trim();

    // const question = document.querySelector('.question');
    question.innerText = quizz_E.questions[index].text;
    quizz_E.questions[index].options.forEach((option) => {
        let bouton = document.createElement('button');
       // bouton.classList.add(`button-${i}`);

        let br = document.createElement('br');
        optionsBox.appendChild(br);
        optionsBox.appendChild(bouton);
        //i++;

        bouton.textContent = option;
        bouton.addEventListener("click", () => {
            console.log(optionsBox.innerText)
            if (bouton.innerText === quizz_E.questions[index].correct_answer.trim()) {
                score++
                bouton.style.border = "2px solid green";
                console.log('bonne réponse');
            }
            else {
                bouton.style.border = "2px solid red";
            }
            //   bouton.disabled = true;
            nextButton.disabled = false;
console.log(score)
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
        resultat.style.display = 'inline-block'
        resultat.innerText = 'votre resultat est de ' + score;
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


