const input = document.getElementById('itemInput');
const button = document.getElementById('addBtn');
const list = document.getElementById('itemList');
const feedback = document.querySelector('.feedback');

function addItem() {
  const li = document.createElement('li');

  if (input.value.trim() !== "") {
    li.textContent = input.value.trim();
    list.appendChild(li);
    feedback.textContent = "";
    input.value = "";
    input.focus();
  } else {
    feedback.textContent = "Nothing entered!";
  }
}

button.addEventListener('click', addItem);
