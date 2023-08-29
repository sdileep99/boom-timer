let timer = document.getElementById("timer");
let defuser = document.getElementById("defuser");

// counter 
let count = 10;
let inernalId = setInterval(function(){
    count = count -1;
    timer.textContent = count;
    if ( count === 0){
       timer.textContent = "BOOM!!";
        clearInterval(inernalId);
    }
     
},1000);
 
defuser.addEventListener("keydown", function(event){
    let boomdef = defuser.value;
    if(event.key === "Enter" && boomdef === "dileep" && count !==0){
        timer.textContent = "you did It..!";
        clearInterval(inernalId);
    }
    
});