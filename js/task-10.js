function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes(amount) {
  const elementsCollection = document.getElementById('boxes');
  elementsCollection.innerHTML = '';
  let size = 30;  for (let i = 0; i < amount; i++) {
    const div = document.createElement('div');
    div.style.width = size + 'px';
    div.style.height = size + 'px';
    div.style.backgroundColor = getRandomHexColor();
    div.style.marginBottom = '10px';
    elementsCollection.appendChild(div);
    size += 10;
  }
  
}function destroyBoxes() {
  const elementsCollection = document.getElementById('boxes');
  elementsCollection.innerHTML = '';
}document.querySelector('[data-create]').addEventListener('click', () => {
  const amount = parseInt(document.querySelector('input').value);
  createBoxes(amount);
});document.querySelector('[data-destroy]').addEventListener('click', destroyBoxes);