let input = document.querySelector('.input');
let butt = document.querySelector('.add');
let alltasks = document.querySelector('.alltasks');
 butt.addEventListener('click', adding);
 alltasks.addEventListener('click', remove);
// clicks.addEventListener("click", remove);




function adding(){
    let divisionlist = document.createElement("div");
    let ele=document.createElement("p");
    let text=document.createTextNode(input.value);
    ele.appendChild(text);
    let icon=document.createElement("img");
    icon.classList.add("close");
    icon.setAttribute("src","/icons8-close-24.png");
    icon.style.width="15px";
    divisionlist.appendChild(ele);
    divisionlist.appendChild(icon)
    divisionlist.classList.add("divl");
    alltasks.appendChild(divisionlist);
    input.value="enter task";
}

function remove(e){
    
     if(e.target.classList.contains("close")){
        e.target.parentElement.remove();
    }
    
    // document.getElementsByClassName(e.target.p)
    //     let num = document.querySelector('.divl');
         
    // let x = document.querySelectorAll(.)
    // let num = document.querySelector('.divl');
    // let abv=e.target.classList.contains("close");

    
}
