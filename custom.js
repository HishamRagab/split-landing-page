let left = document.querySelector(".left");
let right = document.querySelector(".right");

left.onmouseover = () => document.body.classList.add("l");
left.onmouseout = () => document.body.classList.remove("l");

right.onmouseover = () => document.body.classList.add("r");
right.onmouseout = () => document.body.classList.remove("r");
