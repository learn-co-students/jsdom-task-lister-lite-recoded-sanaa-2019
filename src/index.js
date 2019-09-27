document.addEventListener("DOMContentLoaded", () => {
  function addToList(input) {
    let list = document.getElementById('tasks');
    let newListItem = document.createElement('li');
    newListItem.innerText = input;
    list.appendChild(newListItem);
  }
  document.querySelector("#create-task-form input[type='submit']").addEventListener("click", function (event) {
    event.preventDefault();
    let input = document.getElementById('new-task-description').value;
    addToList(input);
    input.value = "";

  });
});
