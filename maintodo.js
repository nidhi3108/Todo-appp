//create global variable to store old todo
var todos=[];



//create structure of todo
function todo(){
    var container=document.createElement("div")
    container.setAttribute("id","container")
    document.body.appendChild(container);
    var left=document.createElement("div")
    var right=document.createElement("div")
    left.setAttribute("id","left")
    right.setAttribute("id","right")
   container.appendChild(left)
   container.appendChild(right)
    var input=document.createElement("textarea")
    input.setAttribute("id","text")
    right.appendChild(input)
    input.placeholder="I need to..."
    var heading=document.createElement("h1")
    heading.innerHTML="TASK LIST"
    left.appendChild(heading)
    var subheading=document.createElement("h2")
    subheading.innerHTML="Add Tasks to your list by Typing to the right and pressing enter. You then view pending tasks below."
    left.appendChild(subheading)

    input.addEventListener("keydown",eventhandler)
 
}

//add tot in left side
function eventhandler(event){
    
    var KeyCode=event.code
    var textshow=document.getElementById("text")
    var value=textshow.value;
    if(KeyCode=="Enter"&& value!==""){
        event.preventDefault();
    var leftcontainer=document.createElement("div")
    var subheading1=document.createElement("div")
    var taskheading=document.createElement("p")
    var subheading2=document.createElement("div")
    var checkbox=document.createElement("button")    //checkbox done
    var checkbutton=document.createElement("button")  //edit button
    var crossbutton=document.createElement("button")   //del button
    checkbutton.setAttribute("id","check")
    crossbutton.setAttribute("id","cross")
    checkbox.setAttribute("id","done")
    
    checkbox.type="checkbox"
    checkbutton.innerHTML="edit"
    crossbutton.innerHTML="delete"
    todos.push(value);
    localStorage.setItem("todos",JSON.stringify(todos))

    subheading1.appendChild(taskheading)
    subheading2.appendChild(checkbox)
    subheading2.appendChild(checkbutton)
    subheading2.appendChild(crossbutton)
    leftcontainer.appendChild(subheading1)
    subheading1.setAttribute("id","heading1")
    subheading2.setAttribute("id","heading2")
    leftcontainer.appendChild(subheading2)

    leftcontainer.setAttribute("class","inputcontainer")
    taskheading.innerHTML=value;

    var leftdiv=document.getElementById("left")
    leftdiv.appendChild(leftcontainer)
    textshow.value=""
    crossbutton.addEventListener("click",removehandler)
    checkbutton.addEventListener("click",edithandler)
    }
}



//delete todo
// function removehandler(e){
//    console.log(e.target);
//    var remove =e.target.parentNode.parentNode;
//    remove.remove();
//    var t=[];
//    var a=localStorage.getItem("todos")
//    a=JSON.parse(a);
//    console.log(a);
//    var b=e.target.parentNode.parentNode.children[0].children[0].innerHTML;
//    console.log(b)
//     t=a.filter((g)=>{
//     if(g!=b){
//         return g;
//     }
// })
//    localStorage.setItem("todos", JSON.stringify(t));
// }
function removehandler(e){
    var remove =e.target.parentNode.parentNode;
   remove.remove();
   var a=localStorage.getItem("todos")
   a=JSON.parse(a);
   let idx = a.indexOf(e.target.parentNode.parentNode.children[0].children[0].innerHTML);
   console.log(idx);
   dellocal();
}
 
function dellocal(idx){
    var a = JSON.parse(localStorage.getItem("todos"));
  a.splice(idx, 1);
  localStorage.setItem("todos", JSON.stringify(a));
}





todo();
 



//after refresh todo come again
let storedtodos=localStorage.getItem("todos")
if(storedtodos!== null)
{
    todos=JSON.parse(storedtodos)
}

todos.forEach(function(value){   //foreach

    var leftcontainer=document.createElement("div")
    var subheading1=document.createElement("div")
    var taskheading=document.createElement("p")
    var subheading2=document.createElement("div")
    var checkbox=document.createElement("button")    //checkbox done
    var checkbutton=document.createElement("button")  //edit button
    var crossbutton=document.createElement("button")   //del button
    checkbutton.setAttribute("id","check")
    crossbutton.setAttribute("id","cross")
    checkbox.setAttribute("id","done")
    
    checkbox.type="checkbox"
    checkbutton.innerHTML="edit"
    crossbutton.innerHTML="delete"
    

    subheading1.appendChild(taskheading)
    subheading2.appendChild(checkbox)
    subheading2.appendChild(checkbutton)
    subheading2.appendChild(crossbutton)
    leftcontainer.appendChild(subheading1)
    subheading1.setAttribute("id","heading1")
    subheading2.setAttribute("id","heading2")
    leftcontainer.appendChild(subheading2)

    leftcontainer.setAttribute("class","inputcontainer")
    taskheading.innerHTML=value;

    var leftdiv=document.getElementById("left")
    leftdiv.appendChild(leftcontainer)
    crossbutton.addEventListener("click",removehandler)
    checkbutton.addEventListener("click",edithandler)
})


//edit todo
function edithandler(e){
    console.log(e.target);
    var edit=e.target.parentNode.parentNode.children[0].children[0].innerHTML;
    console.log(edit)
    // var bool=true;
    // var KeyCode=edit;
    // console.log(KeyCode)
    var editbox=document.createElement("textarea");
        leftcontainer.removeChild(subheading1);
        leftcontainer.appendChild(editbox);
    // edit.addEventListener("click",edittodo)
    }
    // function edittodo(event)
    // {
    //     var editbox=document.createElement("textarea");
    //     leftcontainer.removeChild(subheading1);
    //     leftcontainer.appendChild(editbox);
    // }
    
    