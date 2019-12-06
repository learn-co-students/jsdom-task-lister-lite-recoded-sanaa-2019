document.addEventListener("DOMContentLoaded", () => {
  // your code here

  let form = document.getElementById("create-task-form");
  let list = document.getElementById("tasks");
  let Item = document.getElementById('new-task-description');
  let btn = document.getElementById('button');
  
  btn.addEventListener('click', addItem);
  //delete event // listen to list // you have to listen to sth that was created in html and you can get its id
  // Delete item from list
  list.addEventListener('click', function(e){

  console.log("button activated")
  var target = e.target.className;
  console.log(target);

  if(target == "delete"){
    console.log("object");
    if(confirm('Are you sure you want to delete?')){
      let li = e.target.parentElement;
      console.log(li);
      li.remove();
    }
  }


})
  Item.addEventListener("click",  myFunction)
  
  //Add item to list 
  function addItem(e) {
      // e.preventDefault();
      console.log(1);
      let flag = 1;
      myFunction(flag); 

   }




let array =[];


//choose pirority option 
function myFunction(flag) {
  if(flag == 1){
    
  var x = document.getElementById("mySelect").value;
  document.getElementById("demo").innerHTML = "You selected: " + x;
  alert("Note: The priority you chose is " + x );

  // Get input value
  let Item = document.getElementById('new-task-description');
  let newItem = Item.value;
  console.log("in priority " + newItem);

  // for(const element in array){

  if(x=="default"){document.getElementById("mySelect").style.backgroundColor= "grey";


      // create new li element
  
      var li = document.createElement('li');
      li.id = "addtasks";
      li.style.margin= "1% auto";
      li.style.width= "100%";
      li.style.display= "inline-block";
      li.style.cssFloat ="left";

      console.log(li);
  
      //add text node with input value 
          // append the input text
  
      li.appendChild(document.createTextNode(newItem));

       //add delete button // or you use createTextNode()
       let DelBtn = document.createElement('button');

       DelBtn.style.backgroundColor= "red";
       DelBtn.style.width= "100%;";
       DelBtn.innerHTML= "X";
       DelBtn.style.fontSize = "14px"
       DelBtn.style.padding = "0px 3px"
       DelBtn.style.cssFloat ="right";
       DelBtn.className = "delete"
       li.appendChild(DelBtn);
       console.log(DelBtn.className);


      list.appendChild(li);
      array.push(newItem);
    }

  
  if(x=="Low"){ document.getElementById("mySelect").style.backgroundColor= "green";
      // create new li element

      var li = document.createElement('li');
      li.id = "addtasks";
      li.style.margin= "1% auto";
      li.style.width= "100%";
      li.style.display= "inline-block";
      li.style.color="green"
      li.style.cssFloat ="left";
      console.log(li);
  
      //add text node with input value 
          // append the input text
  
      li.appendChild(document.createTextNode(newItem));

        //add delete button // or you use createTextNode()
        var DelBtn = document.createElement('button');

        DelBtn.style.backgroundColor= "red";
        DelBtn.style.width= "100%;";
        DelBtn.innerHTML= "X";
        DelBtn.style.fontSize = "14px"
        DelBtn.style.padding = "0px 3px"
        DelBtn.style.cssFloat ="right";
        DelBtn.classList = "delete"
        li.appendChild(DelBtn);
  
        console.log(DelBtn.classList);
      list.appendChild(li);
      array.push(newItem);
  }
  if(x== "Medium"){ document.getElementById("mySelect").style.backgroundColor= "yellow";
       // create new li element

       var li = document.createElement('li');
       li.id = "addtasks";
       li.style.margin= "1% auto";
       li.style.width= "100%";
       li.style.display= "inline-block";
       li.style.color="orange"
       li.style.cssFloat ="left";
       console.log(li);
   
       //add text node with input value 
           // append the input text
   
       li.appendChild(document.createTextNode(newItem));
 
         //add delete button // or you use createTextNode()
         var DelBtn = document.createElement('button');
 
         DelBtn.style.backgroundColor= "red";
         DelBtn.style.width= "100%;";
         DelBtn.innerHTML= "X";
         DelBtn.style.fontSize = "14px"
         DelBtn.style.padding = "0px 3px"
       
         DelBtn.style.cssFloat ="right";
         DelBtn.classList = "delete"
         li.appendChild(DelBtn);
   
         console.log(DelBtn.classList);
       list.appendChild(li);
       array.push(newItem);
}
 
  if(x=="High"){document.getElementById("mySelect").style.backgroundColor= "red";
      // create new li element

      var li = document.createElement('li');
      li.id = "addtasks";
      li.style.margin= "1% auto";
      li.style.width= "100%";
      li.style.display= "inline-block";
      li.style.color="red"
      li.style.cssFloat ="left";
      console.log(li);
  
      //add text node with input value 
          // append the input text
  
      li.appendChild(document.createTextNode(newItem));

        //add delete button // or you use createTextNode()
        var DelBtn = document.createElement('button');

        DelBtn.style.backgroundColor= "red";
        DelBtn.style.width= "100%;";
        DelBtn.innerHTML= "X";
        DelBtn.style.fontSize = "14px"
        DelBtn.style.padding = "0px 3px"
      
        DelBtn.style.cssFloat ="right";
        DelBtn.classList = "delete"
        li.appendChild(DelBtn);
  
        console.log(DelBtn.classList);
      list.appendChild(li);
      array.push(newItem);
}

  console.log(x) 
  console.log(array)
}
}

});//end of code