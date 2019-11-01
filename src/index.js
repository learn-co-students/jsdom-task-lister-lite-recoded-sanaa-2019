document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let task = document.querySelector("div form input");
  let submit =document.querySelector(`div form input[type="submit"]`);
  let taskListH=document.querySelector("#tasksH");
  let taskListM=document.querySelector("#tasksM");
  let taskListL=document.querySelector("#tasksL");
  let priority= document.querySelector("select");
  let dueDate=document.getElementById("dueDate");
  let user=document.getElementById("user");
  let duration=document.getElementById("duration");
  let colory;
  priority.addEventListener("change", function(){
    colory= this.value;
    console.log(colory);
  })
  submit.addEventListener("click", function(event){
    let listItem =document.createElement("li");
    let deleteBtn = document.createElement("button");
    listItem.innerText=task.value+" "+" "+dueDate.value+" "+" "+duration.value+" "+" "+user.value;
    listItem.style.color=colory;
    if(listItem.style.color=="red"){
      taskListH.appendChild(listItem);
    }
    else if (listItem.style.color=="orange"){
      taskListM.appendChild(listItem);
    }
    else if (listItem.style.color=="green"){
      taskListL.appendChild(listItem);
    }
    
    deleteBtn.innerText="Delete";
    deleteBtn.style.fontSize="0.7em";
    deleteBtn.style.marginLeft="1em";
    listItem.appendChild(deleteBtn);
    deleteBtn.addEventListener("click",function(){
      listItem.remove();
    })
  
    
    
    event.preventDefault();
    
  })
});
