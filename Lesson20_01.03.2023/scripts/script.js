const form = document.querySelector("form");
const cardsSection = document.querySelector(".cards-section");

const addCardButton = document.querySelector("#add_cards");
const removeCardsButton = document.querySelector("#remove_cards");

const questionInput = document.querySelector("#question");
const answerInput = document.querySelector("#answer");

let flashCards = [];
form.addEventListener("submit", function (event) {
  event.preventDefault();
});

addCardButton.addEventListener("click", function () {
  const questionText = questionInput.value;
  const answerText = answerInput.value;

  const flashcard = {
    question: questionText,
    answer: answerText,
  };
  flashCards.push(flashcard);
  updateFlashCards()
  form.reset();
});

removeCardsButton.addEventListener('click', function(){
    flashCards = []
    updateFlashCards()
})

function updateFlashCards(){
    cardsSection.innerHTML = "";
    for (let index = 0; index < flashCards.length; index++) {
        const {question, answer} = flashCards[index]
        const cardDiv = document.createElement('div')
        cardDiv.classList.add("card")
        const cardFront = document.createElement('div')
        cardFront.classList.add("card-front")
        const cardFrontParagraph = document.createElement('p')
        cardFrontParagraph.innerText = question
        cardFront.append(cardFrontParagraph)
        const cardBack = document.createElement('div')
        cardBack.classList.add("card-back")
        const cardBackParagraph = document.createElement('p')
        cardBackParagraph.innerText = answer
        cardBack.append(cardBackParagraph)

        cardDiv.append(cardFront, cardBack)

        cardsSection.append(cardDiv)
    }
}
