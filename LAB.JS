
const form = document.getElementById('add-item');
const list = document.getElementById('list');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const itemName = document.getElementById('item-name').value;

  const item = document.createElement('li');
  item.innerHTML = itemName;
  list.appendChild(item);
});
