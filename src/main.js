// main.js
import { greet } from "./module.js";

const name = "World";
const message = greet(name);

// console.log(greet(message));

const messageElement = document.getElementById("message");
messageElement.textContent = message;
