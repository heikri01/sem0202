const main = document.querySelector("main");
console.log(main);

const btn = document.querySelector("#startBtn");

const scenarier = [
  {
    tekst: "chatbot siger",

    ikon: "fa-solid fa-robot",

    svar: [
      "svar 1",
      "svar 2",
      "svar 3"
    ]
  }
]
let index = 0; 

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
}

btn.addEventListener("click", () => {
  console.log("der blev klikket");
  visPopup(currentScenario);
});