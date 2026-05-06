import { scenarier } from "./scenarier.js";
const main = document.querySelector("main");
console.log(main);

const btn = document.querySelector("#startBtn");


let index = 0; 
let firstElement;
let lastElement;

const currentScenario = scenarier[index];

function visPopup(scenarie) {
  const chatbot = document.querySelector(".chatbot");

  chatbot.classList.add("open");
  chatbot.innerHTML = "";
 
  const overlay = document.querySelector(".overlay");
  overlay.classList.add("open");

  const topBar = document.createElement("div");
    topBar.classList.add("topbar");

  const restartBtn = document.createElement("button");
    restartBtn.textContent = "Start forfra";
    restartBtn.classList.add("restart-btn");

   const lukBtn = document.createElement("button");
    lukBtn.textContent = "Luk";
    lukBtn.classList.add("luk-btn");
    lukBtn.addEventListener("click", () => {
    chatbot.classList.remove("open");
    overlay.classList.remove("open");
    btn.focus();
   });
  
    topBar.append(restartBtn);
    topBar.append(lukBtn);
  
  const p = document.createElement("p");
    p.textContent = scenarie.tekst;
    p.classList.add("dialog");

  const ikon = document.createElement("div");
    ikon.innerHTML = `<i class="${scenarie.ikon}"></i>`;
    ikon.classList.add("bot-ikon");
 
  const svarContainer = document.createElement("div");
      svarContainer.classList.add("svar-container");
          
  scenarie.svar.forEach((svarTekst) => {
    
    const svarBtn = document.createElement("button");
      svarBtn.textContent = svarTekst;
      svarBtn.classList.add("svar-btn");
      svarContainer.append(svarBtn);
       
  });
  chatbot.append(topBar);
  chatbot.append(p);
  chatbot.append(ikon);
  chatbot.append(svarContainer);

  const focusable = chatbot.querySelectorAll("button"); 
  firstElement = focusable[0];
  lastElement = focusable[focusable.length - 1];
  firstElement.focus();
}

document.addEventListener("keydown", (e) => {
  const chatbot = document.querySelector(".chatbot");
  const overlay = document.querySelector(".overlay");
  if (!chatbot.classList.contains("open")) return;

  if (e.key === "Tab" && e.shiftKey) {
    if (document.activeElement === firstElement) {
      e.preventDefault();
      lastElement.focus();
    }
  }
  else if (e.key === "Tab") {
    if (document.activeElement === lastElement) {
    e.preventDefault();
    firstElement.focus();
    }
  }
  if (e.key === "Escape") {
    chatbot.classList.remove("open");
    overlay.classList.remove("open");
    btn.focus();
  }
});

btn.addEventListener("click", () => {
  console.log("der blev klikket");
  visPopup(currentScenario);
});