const clickMeButton = document.querySelector(".clickMe");

function turnPink()
{
    document.body.classList.add("pink");
}

function toggleClickText()
{
    clickMeButton.classList.toggle("isClicked");
        if ("clickMe isClicked" === clickMeButton.classList)
        {
            clickMeButton.textContent = "Clicked"
        } else
        {
            clickMeButton.textContent = "Click me!"
        }
}

clickMeButton.addEventListener("click", turnPink /*or {once:true}*/);
clickMeButton.addEventListener("click", toggleClickText);