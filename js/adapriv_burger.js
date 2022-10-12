const hamb = document.querySelector('.hamb');
const popup = document.querySelector('.popup');
const menu = document.querySelector('.nav_ul').cloneNode(1)
const btn = document.querySelector('.btn_header')
const body = document.body

hamb.addEventListener("click", hambHandler)

function hambHandler(e) {
    e.preventDefault();
    popup.classList.toggle('open');
    hamb.classList.toggle('active');
    body.classList.toggle("noscroll");
    renderPopup();
}

function renderPopup(){
    popup.appendChild(menu);
}

const links = Array.from(menu.children);

links.forEach((link) => {
    link.addEventListener("click", closeOnClick);
});

function closeOnClick() {
    popup.classList.remove("open");
    hamb.classList.remove("active");
    body.classList.remove("noscroll");
}