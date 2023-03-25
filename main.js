const item=document.querySelector("#item");
const todobox=document.querySelector("#to-do-list");

item.addEventListener(
    "keyup",
    function(event){
    // console.log(event);
    if(event.key=="Enter"){
        addToDo(this.value);
        this.value="";
    }
    }
)
const addToDo=(item)=>{
    const listitem=document.createElement("li");
    listitem.innerHTML=`
    ${item} 
    <i class="fas fa-times "></i>
     `
     listitem.addEventListener(
        "click",
        function(){
            this.classList.toggle("done");
        }
     )
     listitem.querySelector("i").addEventListener(
        "click",
        function(){
            listitem.remove();
        }
     )
     todobox.appendChild(listitem);
}