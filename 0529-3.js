const closeBtn = document.getElementById("closeBtn");
const popup = document.getElementById("popup");
const Footer = document.querySelector("footer");
const subMenu_1 = document.querySelectorAll("#subMenu_1 a");
const subMenu_4 = document.querySelectorAll("#subMenu_4 a");

const closeClick = (event) => {
    popup.style.display = 'none';
    Footer.innerText = "Show Popup";
};

const footerFunc = (event) => {
    popup.style.display = 'block';
    Footer.innerText = "";
}

closeBtn.addEventListener("click", closeClick);
Footer.addEventListener("click", footerFunc);
subMenu_1[1].addEventListener("click", (event) => {
    if (event.target.style.backgroundColor === "red"){
        event.target.style.backgroundColor = "transparent";
    } else {
        event.target.style.backgroundColor = "red";
    }
});

const blue = document.getElementById("blue");
blue.addEventListener("click", () => {
    blue.style.backgroundColor = "blue";
    blue.style.color = "white";
});

const on4_1Click = () => {
    subMenu_4[0].style.color = "red";
    subMenu_4[0].style.textDecoration = "none";
}

popup.addEventListener("click", (event) => {
    event.target.style.backgroundColor = "tomato";
});