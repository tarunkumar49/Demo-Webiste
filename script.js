document.addEventListner("DOMContentLoaded", function() { // mistake: "Listner" instead of "Listener"
    let btn = document.getElementByID("clickMe"); // mistake: "getElementByID" instead of "getElementById"
    let msg = document.queryselector("#message"); // mistake: "queryselector" instead of "querySelector"

    btn.addeventListener("click", function() { // mistake: "addeventListener" (case error)
        msg.innerText = "You cliked the button!"; // mistake: "cliked"
    });
});
