
document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let submit=document.getElementById('submit');
  submit.addEventListener('click',function(event){
  let ul=document.getElementById('tasks')
  let input = document.getElementById("new-task-description").value,
  li =document.createElement('li'),
  txt=document.createTextNode(input);
  li.appendChild(txt);
  ul.appendChild(li);
  event.preventDefault();
  })

});
