document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let input = document.getElementById("new-task-description");
  let submit = document.getElementById("submit");
  submit.onclick = function (e) {
    let tasks = document.getElementById("tasks");
    let li = document.createElement("li")
    li.innerHTML = input.value;
    tasks.appendChild(li);
    e.preventDefault();
  }
});


