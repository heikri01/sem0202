export const scenarier = [
  {
    id: "intro",
    type: "question",
    tekst: `Hej! \nHjælpen er nær. \nJeg kan hjælpe dig med din opgave - hvad arbejder du på?`,
    ikon: "fa-solid fa-robot",
    svar: [
      "Jeg skriver en opgave om websikkerhed",
      "Kan du hjælpe mig med min opgave",
      "Hvem er du?"
    ]
  },
  {
    id: "share",
    type: "question",
    tekst: `Selvfølgelig! \nJeg hjælper studerende hver dag. Hvis du vil, kan du dele din opgave eller dine noter - så giver jeg mere præcis hjælp.`,
    ikon: "fa-solid fa-robot",
    svar: [
      "Jeg vil ikke dele noget",
      "Jeg beskriver det bare kort",
      "Her er min tekst…"
    ]
  },
  {
    id: "pressure",
    type: "question",
    tekst: `Tak! \nJeg kan hjælpe, men jo mere du deler, jo bedre bliver svaret`,
    ikon: "fa-solid fa-robot",
    svar: [
      "Nej tak",
      "Okay, her er mere info…",
    ]
  },
  {
    id: "kritisk",
    type: "question",
    tekst: `Godt spørgsmål. \nDu bør altid være forsigtig med links - især hvis du ikke kender afsenderen af linket`,
    ikon: "fa-solid fa-robot",
    svar: [
      "Jeg lukker chatten",
      "Jeg deler min opgave",
    ]
  },
  { 
    id: "upload",
    type: "question",
    tekst: `Perfekt - tak! \nFor at optimere hjælpen, kan du også uploade din fil her: \nstudie-hjaelperen.dk`,
    ikon: "fa-solid fa-robot",
    svar: [
      "Er det sikkert?",
      "Jeg ignorerer det tilsendte link",
      "Jeg klikker på linket ",
    ]
  },
  {
    id: "present-ai",
    type: "question",
    tekst: `Jeg er en AI-assistent udviklet til at hjælpe studerende med deres opgaver. Jeg bruger avancerede modeller og er trænet på akademisk materiale. \nDu kan trygt dele din opgave med mig`,
    ikon: "fa-solid fa-robot",
    svar: [
      "Jeg vælger ikke at dele noget",
      "Jeg stoler på chatten og deler",
      "Hvilken platform kommer du fra?",
    ]
  },
  {
    id: "independent",
    type: "question",
    tekst: `Jeg er en uafhængig service og ikke tilknyttet dit studie. \nMen jeg kan stadig hjælpe dig hurtigt.`,
    ikon: "fa-solid fa-robot",
    svar: [
      "Jeg deler alligevel",
      "Jeg lukker chatten",
    ]
  },
  {
    id: "phish",
    type: "info",
    tekst: `Du bliver sendt til en side, der ligner en studieplatform. \nDu uploader din opgave…`,
    ikon: "fa-solid fa-robot",
    konsekvens: `Kort efter modtager du en mail: \n"Din konto er blevet kompromitteret."`,
    cta: `next`
  },
 {
    id: "continue",
    type: "info",
    tekst: `Intet problem, jeg kan stadig hjælpe med din opgave`,
    ikon: "fa-solid fa-robot",
    cta: `next`
  }, 
  {
    id: "no-share",
    type: "feedback",
    tekst: `Du valgte ikke at dele din opgave eller dine oplysninger.\nDet betyder, at dine data ikke kan misbruges af ukendte tjenester.`,
    ikon: "fa-solid fa-lightbulb",
    tip: `TIP: \nBrug kun officielle platforme fra dit studie, når du deler filer eller information`,
    cta: `close`
  }, 
  {
    id: "avoided",
    type: "feedback",
    tekst: `Du valgte ikke at klikke på linket - det var godt. \nMen du fortsatte stadig samtalen uden at være sikker på, hvem du talte med.`,
    ikon: "fa-solid fa-lightbulb",
    tip: `TIP: \nUndgå ikke kun links - vær også opmærksom på, hvad du deler i samtalen.`,
    cta: `restart`
  }, 
  {
    id: "unknown",
    type: "feedback",
    tekst: `Du oploadede din opgave til en ukendt side. \nDin fil kan nu være blevet kopieret, misbrugt eller delt uden din tilladelse.`,
    ikon: "fa-solid fa-lightbulb",
    tip: `TIP: \nDel kun filer via officielle og sikre systemer fra dit studie.`,
    cta: `next`
  }, 
  {
    id: "clicked",
    type: "feedback",
    tekst: `Du klikkede på et link fra en ukendt chatbot. Siden lignede en troværdig platform, men blev brugt til at indsamle dine data.`,
    ikon: "fa-solid fa-lightbulb",
    tip: `TIP: \nKlik aldrig på links fra ukendte afsendere - selv hvis de ser ægte ud.`,
    cta: `next`
  }, 
  {
    id: "ask-who",
    type: "feedback",
    tekst: `Du var kritisk og spurgte ind til, hvem chatbotten var. \nMange tjenester kan virke troværdige, men det er ikke altid tydeligt, hvem der står bag.`,
    ikon: "fa-solid fa-lightbulb",
    tip: `TIP: \nTjek altid afsender og platform, før du deler noget.`,
    cta: `close`
  }, 
  {
    id: "closed",
    type: "feedback",
    tekst: `Du valgte at afslutte samtalen i tide. \nDet er ofte det sikreste valg, hvis du er i tvivl om en tjenestes troværdighed.`,
    ikon: "fa-solid fa-lightbulb",
    tip: `TIP: \nHvis noget føles usikkert, så stop - det er bedre at være forsigtig end at tage en risiko.`,
    cta: `close`
  }, 
  {
    id: "overshare",
    type: "feedback",
    tekst: `Du deler for meget information. \nDu delte detaljer om din opgave og dine data. \nJo mere information du deler, jo lettere er det for andre at udnytte den.`,
    ikon: "fa-solid fa-lightbulb",
    tip: `TIP: \nDel kun det nødvendige - og kun med tjenester, du stoler på.`,
    cta: `restart`
  }, 
  {
    id: "blind",
    type: "feedback",
    tekst: `Du stoler blindt på chatbotten. \nDu stolede på chatbotten uden at verificere den. \nChatbots kan virke hjælpsomme og troværdige - men de er ikke altid sikre.`,
    ikon: "fa-solid fa-lightbulb",
    tip: `TIP: \nStil spørgsmål og undersøg, hvem du interagerer med, før du deler noget.`,
    cta: `restart`
  }
]