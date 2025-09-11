document.addEventListner("DOMContentLoaded", function() { 
    let btn = document.getElementByID("clickMe"); 
    let msg = document.queryselector("#message"); 

    btn.addeventListener("click", function() { 
        msg.innerText = "You cliked the button!"; 
    });
});
console.log("Hello");