
import { quizz_E } from './game.js';
// liste des variables qui créent les boutons

const nextButton = document.querySelector('#next-button');
let optionsBox = document.querySelector('.options');
const question = document.querySelector('.question');
const rejouer = document.querySelector('#replay-button');
const resultat = document.querySelector('.resultat');

let index = 0;
let score = 0;

// fonction qui charge les questions et les réponses
function loadQuestion() {
    optionsBox.innerHTML = "";

    // trim : enlève les esapces eaux extremites des chaines de caractères
    const bonneReponse = quizz_E.questions[index].correct_answer.trim();
    question.innerText = quizz_E.questions[index].text;
    //  permet de recupérr les questions

    //  fonction qui permet de créer les boutons des réponses
    quizz_E.questions[index].options.forEach((option) => {
        let bouton = document.createElement('button');
        let br = document.createElement('br');
        optionsBox.appendChild(br);
        optionsBox.appendChild(bouton);
        nextButton.disabled = true;
        bouton.textContent = option;

        //clicque sur les réponses qui indique la bonne ou la mauvaise
        bouton.addEventListener("click", () => {

            if (bouton.innerText === quizz_E.questions[index].correct_answer.trim()) {
                score++
                bouton.style.border = "5px solid green";
                bouton.style.backgroundColor = "#6FCF97";
            }
            else {
                bouton.style.border = "5px solid red";
                bouton.style.backgroundColor = "#ffb3b3";
                document.body.classList.add("alarme");
            }
            // lorsque l'utilisateur n'a pas selectionner de réponses, le bouton suivant est incliquable
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
    document.body.classList.remove("alarme");
    // Vérifier s'il reste des questions
    if (index < quizz_E.questions.length) {
        // Afficher la question suivante
        loadQuestion();
    } else {
        optionsBox.innerHTML = "";

        question.innerText = 'Bravo vous êtes arrivé à la fin du Quiz ! ! ! 🥳';
        resultat.style.display = 'inline-block';
        // fait apparaître le bouton du résultat
        resultat.innerHTML = 'votre resultat est de ' + score + "/" + quizz_E.questions.length;
        nextButton.style.display = 'none'; // Cacher le bouton Suivant

        rejouer.style.display = 'inline-block';
        
        if(score >= 2){
            confetti({
              particleCount: 800, // Nombre de confettis
              spread: 200, // Angle de dispersion
              colors: ["#ff0000", "#ff69b4", "#00ff00", "#0000ff", "#800080"], // Couleurs rouge, rose, vert, bleu
              origin: { y: 0.6 }, // Position d'origine des confettis
              shapes: ["stars"], //  (on peut essayer 'circle' ou 'star')
            });
    };
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
