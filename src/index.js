import './styles.css';

const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const btnStart = document.querySelector('button[data-action="start"]');
const btnStop = document.querySelector('button[data-action="stop"]');

let timerId;

function changeColor() {
  timerId = setInterval(() => {
    const color = randomIntegerFromInterval(0, colors.length - 1);
    document.body.style.backgroundColor = colors[color];
  }, 1000);
  btnStart.disabled = true;
}

btnStart.addEventListener('click', changeColor);
btnStop.addEventListener('click', () => {
  clearTimeout(timerId);
  btnStart.disabled = false;
});
