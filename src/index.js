document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const newTask = document.getElementById("new-task-description");
  const submitForm = document.getElementById("create-task-form");
  const tasksUl = document.getElementById("tasks");
  
  submitForm.addEventListener("submit",submitEvent);
  
  function submitEvent(event)
  {
    event.preventDefault();
    let li = document.createElement('li');
    li.innerText = newTask.value +" ";
    let btn = document.createElement('button');
    btn.innerText = 'X';
    btn.addEventListener("click",deleteTask);
    li.appendChild(btn);
    tasksUl.appendChild(li);
    
    newTask.value="";
  }
  function deleteTask(event)
  {
    event.currentTarget.parentNode.remove();
  }
  
});
