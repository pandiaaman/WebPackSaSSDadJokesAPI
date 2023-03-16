import generateJoke from "./generateJoke";
import "./style/main.scss";
import reading from "./assets/reading.svg";

const readingImg = document.getElementById("readingImg");
readingImg.src = reading;

const jokeBtn = document.getElementById("jokeBtn");
jokeBtn.addEventListener("click", generateJoke);

generateJoke();
// console.log(generateJoke());
console.log(1);
