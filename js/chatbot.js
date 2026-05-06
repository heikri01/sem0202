import { scenarier } from "./scenarier.js"; //henter listen med alle scenarier fra en anden js fil
const main = document.querySelector("main"); //finder main elementet i html
console.log(main);

const btn = document.querySelector("#startBtn");

let firstElement; //globale variabler - skal kunne bruges af alle funktioner
let lastElement; //globale variabler

//start scenariet ->
const startScenarie = scenarier.find(
  scenarie => scenarie.id === "intro"
); //-> finder scenariet med id = intro

//funktion der bygger og viser popup-indhold
function visPopup(scenarie) {
  const chatbot = document.querySelector(".chatbot");//finder html klassen .chatbot
  chatbot.classList.add("open"); //tilføjer klassen open til chatbot
  chatbot.innerHTML = ""; //rydder op i .chatbot - dvs sletter alt indhold, så der kan puttes nyt indhold ind
 
  const overlay = document.querySelector(".overlay"); //finder overlay-elementet
  overlay.classList.add("open"); //tilføjer klassen open til .overlay

  const topBar = document.createElement("div"); //opretter en div 
    topBar.classList.add("topbar"); // - med klassen topbar

  const restartBtn = document.createElement("button"); //opretter en knap
    restartBtn.textContent = "Start forfra"; // - med teksten Start forfra
    restartBtn.classList.add("restart-btn"); // - med klassen restart-btn

   const lukBtn = document.createElement("button"); //opretter en knap
    lukBtn.textContent = "Luk"; // - med teksten Luk
    lukBtn.classList.add("luk-btn"); // - med klassen luk-btn
    //Lytter efter klik på luk-knappen
    lukBtn.addEventListener("click", () => {
      chatbot.classList.remove("open"); //når der klikkes på knappen luk, fjerner klassen "open" fra chatbotten
      overlay.classList.remove("open"); //når der klikkes på knappen luk, fjernes klassen open fra klassen overlay
      btn.focus();
   } 
  );//EventListener til lukBtn slutter her
  
    topBar.append(restartBtn); //der tilføjes en restartBtn til klassen topBar
    topBar.append(lukBtn); //der tilføjes en lukBtn til klassen topBar
  
    //opretter chatbot-beskeden
  const p = document.createElement("p"); //opretter tekstfeltet
    p.textContent = scenarie.tekst; //henter teksten ind fra scenarie listen i scenarier.js
    p.classList.add("dialog"); //tilføjer klassen dialog til tekstfeltet

  const ikon = document.createElement("div"); //opretter en div
    ikon.innerHTML = `<i class="${scenarie.ikon}"></i>`; // - med et ikon
    ikon.classList.add("bot-ikon"); // - og tilføjer klassen bot-ikon til div'en 
 
  //kun scenarier med svar får svar-knapper:
  let svarContainer; //variablen oprettes før if-blokken så den kan bruges senere i funktionen
  //hvis scenariet indeholder svar
  if (scenarie.svar) { 
      svarContainer = document.createElement("div"); // - oprettes en div
      svarContainer.classList.add("svar-container"); // - og tilføjer klassen svar-container til div'en

      //gennemgår alle svarmuligheder i scenariet:
      scenarie.svar.forEach((svar) => { //for hvert svar oprettes en ny knap
      
        const svarBtn = document.createElement("button"); // - oprettes en knap
          svarBtn.textContent = svar.tekst; // - knappen får teksten som svar indeholder
          svarBtn.classList.add("svar-btn"); //tilføjer klassen svar-btn til knappen
          //når der klikkes på et svar: 
          svarBtn.addEventListener("click", () => {
            const næsteScenarie = scenarier.find(
              scenarie => scenarie.id === svar.næste
          ); // - finder scenariet med det id der står i svar.næste
          visPopup(næsteScenarie); //og så vises det scenarie som det næste
    });
        svarContainer.append(svarBtn); //for hvert (forEach) svarmulighed der står tilføjes hver sin knap i svarContainer
  });

   } //if funktionen for svar slutter her
  chatbot.append(topBar); //der tilføjes et topbar element til chatbot
  chatbot.append(p); //der tilføjes et tekstfelt element til chatbot
  chatbot.append(ikon); //der tilføjes et ikon element til chatbot
  //hvis der er et svar, så tilføjes der en svarContainer element til chatbot
  if (scenarie.svar) {
    chatbot.append(svarContainer);
  }
  //lokaliserer alle knapperne inde i chatbotten
  const focusable = chatbot.querySelectorAll("button"); 
  firstElement = focusable[0];
  lastElement = focusable[focusable.length - 1];
  firstElement.focus();
}//indholdet i funktionen afsluttes her

//EventListener der lytter efter tastatur-input på hele siden
document.addEventListener("keydown", (e) => {
  const chatbot = document.querySelector(".chatbot"); //finder klassen chatbot
  const overlay = document.querySelector(".overlay"); //finder klassen overlay
  if (!chatbot.classList.contains("open")) return; //gør intet hvis popup'en er lukket

  //holder tastatur-fokus inde i popup'en
  if (e.key === "Tab" && e.shiftKey) {
    if (document.activeElement === firstElement) {
      e.preventDefault(); //forhindrer standard tab-adfærd
      lastElement.focus();
    }
  }
  else if (e.key === "Tab") {
    if (document.activeElement === lastElement) {
    e.preventDefault(); //forhindrer standard tab-adfærd
    firstElement.focus();
    }
  }
  //lukker popup'en når Escape trykkes
  if (e.key === "Escape") {
    chatbot.classList.remove("open");
    overlay.classList.remove("open");
    btn.focus();
  }
});

//EventListener lytter efter klik på start-knappen
btn.addEventListener("click", () => {
  console.log("der blev klikket");
  visPopup(startScenarie);
});