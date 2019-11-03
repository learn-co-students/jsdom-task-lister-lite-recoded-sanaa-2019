document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let btn = document.getElementById("btn");
  btn.addEventListener('click',function (e){  
    let task = document.getElementById("new-task-description").value;
    let taskList = document.getElementById("tasks");
    let newLi = document.createElement("li")
    let content= document.createTextNode(task);
    newLi.appendChild(content);
    taskList.appendChild(newLi);
    e.preventDefault();
  })
});

