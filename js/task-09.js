function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const buttonChange = document.querySelector('.change-color');
const spanColor = document.querySelector('.color');
const colorBody = document.querySelector('body');

buttonChange.addEventListener("click", (event) => {
  const randomColor = getRandomHexColor();
  spanColor.textContent = randomColor;
  colorBody.style.backgroundColor = randomColor;
});

getRandomHexColor();
