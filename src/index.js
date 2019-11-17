document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let submit=document.getElementById("submit");
  submit.addEventListener("click",function(Event){
    let task=document.getElementById("new-task-description").value;
    let ul=document.getElementById("tasks");
    let li=document.createElement("li");
    let taskContent=document.createTextNode(task);
    li.appendChild(taskContent);
    ul.appendChild(li);
    Event.preventDefault()
  })
});
