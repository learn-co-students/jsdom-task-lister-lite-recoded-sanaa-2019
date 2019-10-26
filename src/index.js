document.body.addEventListener("DOMContentLoaded", () => {
  function addLi(input) {
    let uList = document.getElementById('tasks');
    let element = document.createElement('li');
    element.innerHTML = input;
    uList.appendChild(element);
  }
  let a=document.body.querySelector("#create-task-form input[type='submit']")
  a.addEventListener("click", function (e) {
    e.preventDefault();
    let input = document.getElementById('new-task-description').value;
    addLi(input);
    input.value = "";

  });
});