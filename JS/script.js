const clickMeButton = document.querySelector(".clickMe");
const cartImg = document.querySelector("#cartingShop");
const buttonContainer = document.querySelector(".buttonContainer")

function turnPink()
{
    document.body.classList.add("pink");
}

function toggleClickText()
{
    clickMeButton.classList.toggle("isClicked");
        if ("clickMe isClicked" == clickMeButton.classList)
        {
            clickMeButton.textContent = "Clicked"
        } else
        {
            clickMeButton.textContent = "Click me!"
        }
}

function updateImage() 
{
    cartImg.setAttribute("src", "Images/263142.png");
    cartImg.setAttribute("height", "100");
    cartImg.setAttribute("width", "100");
    cartImg.setAttribute("alt", "a cart of shop");
}

function changeColorWithClick(e)
{
    e.target.style.color = e.target.textContent
}

clickMeButton.addEventListener("click", turnPink /*or {once:true}*/);
clickMeButton.addEventListener("click", toggleClickText);
clickMeButton.addEventListener("click", updateImage);
buttonContainer.addEventListener("click", changeColorWithClick);