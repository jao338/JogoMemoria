let grid = document.querySelector('.grid');
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

    card.addEventListener('click', showCard)

    return card;

}

const showCard = ({target}) => {

    target.parentNode.classList.add('show-card')

};


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

loadGame();