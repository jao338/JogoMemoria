let grid = document.querySelector('.grid');
let spanPlayer = document.querySelector('.player');
let btn_reset = document.querySelector('.btn-reset');
let block = false;


let firstCard = "";
let secondCard = "";

let numbers = [
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8'
]

const createCard = (number) => {

    const card = createElement('div', 'card');
    const front = createElement('div', 'face front');
    const back = createElement('div', 'face back');

    front.style.backgroundImage = `url(img/${number}.jpg)`

    card.appendChild(front);
    card.appendChild(back);

    card.style.cursor = 'pointer'

    card.addEventListener('click', showCard);

    card.setAttribute('data-num', number)

    return card;

}

const showCard = ({ target }) => {

    if (target.parentNode.className.includes('show-card')) {
        return;
    }

    if (firstCard === "") {

        target.parentNode.classList.add('show-card')
        firstCard = target.parentNode;

    } else if (secondCard === "") {
        target.parentNode.classList.add('show-card');
        secondCard = target.parentNode;

        checkCards();


    }


};

const checkCards = () => {


    const firstNum = firstCard.getAttribute('data-num');
    const secondNum = secondCard.getAttribute('data-num');

    if (firstNum == secondNum) {

        firstCard.classList.add('disabled-card')
        secondCard.classList.add('disabled-card')

        firstCard = '';
        secondCard = '';

        checkEndGame();

    } else {

        setTimeout(() => {
            firstCard.classList.remove('show-card')
            secondCard.classList.remove('show-card')

            firstCard = '';
            secondCard = '';
        }, 500)

    }

}


const createElement = (tag, className) => {

    const element = document.createElement(tag);

    element.className = className;

    return element;

}

const loadGame = () => {


    const newNumbers = [...numbers, ...numbers]
    const shuffledArray = newNumbers.sort(() => Math.random() - 0.5);

    shuffledArray.forEach((number) => {

        const card = createCard(number);

        grid.appendChild(card);

    });


}

const checkEndGame = () => {
    const disableCards = document.querySelectorAll('.disabled-card');

    if (disableCards.length === 16) {
        reset();
    }

};

window.onload = () => {

    loadGame();

}

function reset() {

    document.querySelector('.grid').innerHTML = '';

    loadGame();

}

btn_reset.addEventListener('click', reset);