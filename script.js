    let btn = document.querySelector("#clickMe");
    let msg = document.querySelector("#message");

    btn.addEventListener("click", function() {
        msg.innerText = "You clicked the button!";
    });

console.log("Hello");