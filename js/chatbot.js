import { scenarier } from "./scenarier.js"; //henter listen med alle scenarier fra en anden js fil

const openBtns = document.querySelectorAll(".open-chatbot");

let firstElement; //globale variabler - skal kunne bruges af alle funktioner
let lastElement; //globale variabler
let activeTrigger; //gemmer det element der åbnede popup'en

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
     //Lytter efter klik på start forfra-knappen
    restartBtn.addEventListener("click", () => {
      visPopup(startScenarie); 
    })

   const lukBtn = document.createElement("button"); //opretter en knap
    lukBtn.textContent = "Luk"; // - med teksten Luk
    lukBtn.classList.add("luk-btn"); // - med klassen luk-btn
    //Lytter efter klik på luk-knappen
    lukBtn.addEventListener("click", () => {
      chatbot.classList.remove("open"); //når der klikkes på knappen luk, fjerner klassen "open" fra chatbotten
      overlay.classList.remove("open"); //når der klikkes på knappen luk, fjernes klassen open fra klassen overlay
      if (activeTrigger) {
        activeTrigger.focus();
      }
   } 
  );//EventListener til lukBtn slutter her
  
    topBar.append(restartBtn); //der tilføjes en restartBtn til klassen topBar
    topBar.append(lukBtn); //der tilføjes en lukBtn til klassen topBar
  
    //opretter chatbot-beskeden
  const p = document.createElement("p"); //opretter tekstfeltet
    p.textContent = scenarie.tekst; //henter teksten ind fra scenarie listen i scenarier.js
    p.classList.add("dialog"); //tilføjer klassen dialog til tekstfeltet
      if (scenarie.type === "feedback") {
        p.classList.add("feedback-dialog");
        p.classList.add(scenarie.farve);
      }

  const ikon = document.createElement("div"); //opretter en div
    ikon.innerHTML = `<i class="${scenarie.ikon}"></i>`; // - med et ikon
    ikon.classList.add("bot-ikon"); // - og tilføjer klassen bot-ikon til div'en 
      if (scenarie.type === "feedback") {
        ikon.classList.add("feedback-ikon");
      }
 
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
  let konsekvens;
  let cta;
  let tip;
  let feedbackWrap; 
  //hvis scenariet er typen info
  if (scenarie.type === "info") {
      konsekvens = document.createElement("p");
      konsekvens.textContent = scenarie.konsekvens; //henter teksten ind fra scenarie listen i scenarier.js
      konsekvens.classList.add("dialog-extra");
      cta = document.createElement("button");
      cta.textContent = "Næste";
      cta.classList.add("cta");
  }
    //if funktionen for feedback starter her
  if (scenarie.type === "feedback") {
      cta = document.createElement("button");
      if (scenarie.cta === "restart") {
        cta.textContent = "Start forfra";
      }
      else if (scenarie.cta === "close") {
        cta.textContent = "Luk chat";
      }
      else {
        cta.textContent = "Næste";
      }
        cta.classList.add("cta");
        tip = document.createElement("p");
        tip.textContent = scenarie.tip;
        tip.classList.add("tip");
        feedbackWrap = document.createElement("div");
        feedbackWrap.classList.add("feedback-wrap");
        feedbackWrap.append(ikon);
        feedbackWrap.append(tip);
  }
  //if funktionen for feedback slutter her
  //cta EventListener for både info og feedback
  if (cta) {
      cta.addEventListener("click", () => {
        if (scenarie.cta === "restart") {
          visPopup(startScenarie);
        }
        else if (scenarie.cta === "close") {
          chatbot.classList.remove("open");
          overlay.classList.remove("open");
          if (activeTrigger) {
            activeTrigger.focus();
          }
        }
        else {
          const næsteScenarie = scenarier.find(
            item => item.id === scenarie.cta
          );
          visPopup(næsteScenarie);
        }
      })
  }
  //EventListener cta sluttes her
  
  chatbot.append(topBar); //der tilføjes et topbar element til chatbot
  chatbot.append(p); //der tilføjes et tekstfelt element til chatbot
if (scenarie.type !== "feedback") {
  chatbot.append(ikon);
  } //der tilføjes et ikon element til chatbot
  //hvis der er et svar, så tilføjes der en svarContainer element til chatbot
  if (scenarie.svar) {
    chatbot.append(svarContainer);
  }
  if (konsekvens) {
    chatbot.append(konsekvens);  
  }
  if (feedbackWrap) {
    chatbot.append(feedbackWrap);
  }
  if (cta) {
    chatbot.append(cta);  
  }

  //lokaliserer alle knapperne inde i chatbotten
  const focusable = chatbot.querySelectorAll("button"); //finder alle knapper inde i chatbotten
  firstElement = focusable[0]; //gemmer første ->
  lastElement = focusable[focusable.length - 1]; // -> og sidste fokusbare element
  firstElement.focus(); //sætter tastatur-fokus på første knap i popup'en
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
    if (activeTrigger) {
    activeTrigger.focus();
    }
  }
});

//EventListener lytter efter klik på start-knappen
openBtns.forEach((btn) => {

btn.addEventListener("click", (e) => {
  e.preventDefault();
  activeTrigger = btn;
  visPopup(startScenarie);
});

});