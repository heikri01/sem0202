const main = document.querySelector("main");
console.log(main);

const btn = document.querySelector("#startBtn");

const scenarier = [

  {
    tekst: "chatbot siger",

    ikon: "⚠️",

    svar: [
      "svar 1",
      "svar 2",
      "svar 3"
    ]
  }

]


function visPopup(titel, tekst) {
  const chatbot = document.querySelector(".chatbot");

  chatbot.classList.add("open");

  chatbot.innerHTML = "";
  
  const h2 = document.createElement("h2");
    h2.textContent = titel;

  const p = document.createElement("p");
    p.textContent = tekst;
  
  const lukBtn = document.createElement("button");
    lukBtn.textContent = "Luk";

    lukBtn.addEventListener("click", () => {
    chatbot.classList.remove("open");
});
  
  chatbot.append(h2);
  chatbot.append(p);
  chatbot.append(lukBtn);
}

btn.addEventListener("click", () => {
  console.log("der blev klikket");
  visPopup("Hej!", "Nu virker det 🎉");
});