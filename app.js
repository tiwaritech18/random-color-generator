//Randomcolor Generator

const body=document.body;
const btn=document.querySelector(".generate");
const number=document.querySelector(".number");

const colorGenerator= () => {
    const randomColor=Math.random().toString(16).substring(2,8);
    body.style.backgroundColor="#" + randomColor;
    number.innerHTML = "#" + randomColor;

}
btn.addEventListener("click",colorGenerator);