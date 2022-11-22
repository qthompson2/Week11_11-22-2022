const clickMeButton = document.querySelector(".clickMe");

function clickHandler()
{
    alert("Ouch")
    clickMeButton.removeEventListener("click", clickHandler);
}

clickMeButton.addEventListener("click", clickHandler /*or {once:true}*/);