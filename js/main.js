const layout = document.querySelector('.layout');
const shapes = document.querySelectorAll('[data-shape]');
const button = document.querySelector('button');

const player = document.querySelector('.player span');
const computer = document.querySelector('.computer span');

const toWin = {
  paper: 'rock',
  scissors: 'paper',
  rock: 'scissors'
}

// Function to appear the message 
shapes.forEach((shape) => {
  shape.addEventListener('click', () => {
    computerChooser(shape);
    layout.style.visibility = 'visible';

    window.addEventListener('click', (event) => {
      if (layout == event.target) {
        layout.style.visibility = 'hidden';
      }
    })
  })
})

// Function to make random choose by computer
function computerChooser(shape) {
  const message = document.querySelector('.message h3');
  const icon = document.querySelector('.message div');
  const computerChoose = document.querySelector('.message p span');

  const randChoose = shapes[Math.floor(Math.random() * shapes.length)];
  icon.innerHTML = randChoose.innerHTML;
  computerChoose.innerText = `'${randChoose.className}'`;

  for(let counter = 0; counter < Object.keys(toWin).length; counter++) {
    if (shape.className == Object.keys(toWin)[counter] && randChoose.className == Object.values(toWin)[counter]) {
      message.innerText = 'You win';
      message.className = 'win';
      player.innerHTML++;
      break;
    }

    else if (shape === randChoose) {
      message.innerText = `It's a draw`;
      message.className = 'draw';
    }

    else {
      if (counter + 1 == Object.keys(toWin).length) {
        computer.innerHTML++; 
      }
      message.innerText = 'You Lose';
      message.className = 'lose';
    }
  }
}

button.addEventListener('click', () => {
  player.innerHTML = 0;
  computer.innerHTML = 0;
})