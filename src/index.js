document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const input = document.getElementById('new-task-description');
  const form = document.getElementById('create-task-form');
  const tasks = document.getElementById("tasks");
  const priority = document.getElementById('priority');
  
  
  function list(input) {
    
    let li = document.createElement('li');
    li.innerHTML = input;
    tasks.appendChild(li);
  }
  

form.addEventListener("onClick", function (e) {
e.preventDefault();

list(input);
input.value = " ";

  });

});
