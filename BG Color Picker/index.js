const buttons = document.querySelectorAll(".button");
buttons.forEach(function(button){
    const body = document.querySelector("body");
    button.addEventListener("click", function(e){
        if(e.target.id=="grey"){
            body.style.backgroundColor=e.target.id;
        }
        if(e.target.id=="purple"){
            body.style.backgroundColor=e.target.id;
        }
        if(e.target.id=="yellow"){
            body.style.backgroundColor=e.target.id;
        }
        if(e.target.id=="blue"){
            body.style.backgroundColor=e.target.id;
        }
    })
})