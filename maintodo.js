//create global variable to store old todo
var todos=[];
var idx=0;


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
    var checkbox=document.createElement("input")    //checkbox done
    var checkbutton=document.createElement("button")  //edit button
    var crossbutton=document.createElement("button")   //del button
    checkbutton.setAttribute("id","check")
    crossbutton.setAttribute("id","cross")
    checkbox.setAttribute("id","done")
    checkbox.setAttribute("type","checkbox")
    
    // checkbox.type="checkbox"
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
    leftcontainer.setAttribute('data-foo',idx)    //,,,,,,,,,,,,,,,,,,,,,give idx
    idx=idx+1;
    taskheading.innerHTML=value;

    var leftdiv=document.getElementById("left")
    leftdiv.appendChild(leftcontainer)
    textshow.value=""
    crossbutton.addEventListener("click",removehandler)
    checkbutton.addEventListener("click",edithandler)
    }
}


function removehandler(e){
    var remove =e.target.parentNode.parentNode;
   remove.remove();
   var a=localStorage.getItem("todos")
   a=JSON.parse(a);
   var idx = e.target.parentNode.parentNode;
//    console.log(idx);
   var index=idx.getAttribute('data-foo')
//    console.log(index);
   dellocal(index);
}

function dellocal(index) {
    var a = JSON.parse(localStorage.getItem("todos"));
    // console.log(a);
    a.splice((index), 1);
    // console.log(a);
    localStorage.setItem("todos", JSON.stringify(a));
    window.location.reload();
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
    var checkbox=document.createElement("input")    //checkbox done
    var checkbutton=document.createElement("button")  //edit button
    var crossbutton=document.createElement("button")   //del button
    checkbutton.setAttribute("id","check")
    crossbutton.setAttribute("id","cross")
    checkbox.setAttribute("id","done")
    checkbox.setAttribute("type","checkbox")
    
    // checkbox.type="checkbox"
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
    leftcontainer.setAttribute('data-foo',idx)  ////////////////////////give idx........
    idx=idx+1;
    taskheading.innerHTML=value;

    var leftdiv=document.getElementById("left")
    leftdiv.appendChild(leftcontainer)
    crossbutton.addEventListener("click",removehandler)
    checkbutton.addEventListener("click",edithandler)
})


//edit todo
function edithandler(e){
    var edit=e.target.parentNode.parentNode.children[1].children[1].innerHTML;
    var idx = e.target.parentNode.parentNode;
    var index=idx.getAttribute('data-foo')
    // console.log(index)
    var h1=e.target.parentNode.parentNode.children[0];  //subheading1
    // console.log(h1);     
    var h2=e.target.parentNode.parentNode.children[0].children[0];   //whole p tag includinf todo
    // console.log(h2);
    var h3=e.target.parentNode.parentNode.children[0].children[0].innerHTML;
    var inp=document.createElement("input")
    inp.setAttribute("id","inp")
    inp.setAttribute("type","text")
   
    edittodo(h1,h2,inp,index,edit,e,h3);
}
function edittodo(h1,h2,inp,index,edit,e,h3)
{
    console.log(index);
    var a=localStorage.getItem("todos")
    a=JSON.parse(a);
    if(edit=="edit"){
        h1.replaceChild(inp,h2)
        console.log(a);
        a.splice((index),1)
        localStorage.setItem("todos", JSON.stringify(a));
        window.location.reload();
        e.target.parentNode.parentNode.children[1].children[1].innerHTML="save";
    }
    else{
        h1.replaceChild(h2,inp)
        var newinp=document.getElementById("inp")
        var newdata =newinp.value;
        console.log(newdata);
        if(inp!=null)
        {
            a.splice((index),0,newdata)
            localStorage.setItem("todos", JSON.stringify(a));  
        }
        else{
            a.splice((index),0,h3)
            localStorage.setItem("todos", JSON.stringify(a));
        }
        e.target.parentNode.parentNode.children[1].children[1].innerHTML="edit"
        // savetodo(inp,h1,h2)
    }
}
    