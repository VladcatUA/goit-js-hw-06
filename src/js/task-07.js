const range = document.querySelector('#font-size-control');
const spanText = document.querySelector('#text');

range.addEventListener("input", () => {
    spanText.style.fontSize = `${range.value}px`;
});
  
spanText.style.fontSize = `${range.value}px`;