const starWarsCharacters = [
  {
    name: "Luke Skywalker",
    height: 172,
    mass: 277,
    hair_color: "blond",
    skin_color: "fair",
    eye_color: "blue",
    birth_year: "19BBY",
    gender: "male",
  },
  {
    name: "C-3PO",
    height: 167,
    mass: 75,
    hair_color: "n/a",
    skin_color: "gold",
    eye_color: "yellow",
    birth_year: "112BBY",
    gender: "n/a",
  },
  {
    name: "R2-D2",
    height: 96,
    mass: 32,
    hair_color: "n/a",
    skin_color: "white, blue",
    eye_color: "red",
    birth_year: "33BBY",
    gender: "n/a",
  },
  {
    name: "Darth Vader",
    height: 202,
    mass: 136,
    hair_color: "none",
    skin_color: "white",
    eye_color: "yellow",
    birth_year: "41.9BBY",
    gender: "male",
  },
  {
    name: "Leia Organa",
    height: 150,
    mass: 49,
    hair_color: "brown",
    skin_color: "light",
    eye_color: "brown",
    birth_year: "19BBY",
    gender: "female",
  },
  {
    name: "Owen Lars",
    height: 178,
    mass: 120,
    hair_color: "brown, grey",
    skin_color: "light",
    eye_color: "blue",
    birth_year: "52BBY",
    gender: "male",
  },
  {
    name: "Beru Whitesun lars",
    height: 165,
    mass: 75,
    hair_color: "brown",
    skin_color: "light",
    eye_color: "blue",
    birth_year: "47BBY",
    gender: "female",
  },
  {
    name: "R5-D4",
    height: 97,
    mass: 32,
    hair_color: "n/a",
    skin_color: "white, red",
    eye_color: "red",
    birth_year: "unknown",
    gender: "n/a",
  },
  {
    name: "Biggs Darklighter",
    height: 183,
    mass: 84,
    hair_color: "black",
    skin_color: "light",
    eye_color: "brown",
    birth_year: "24BBY",
    gender: "male",
  },
  {
    name: "Obi-Wan Kenobi",
    height: 182,
    mass: 77,
    hair_color: "auburn, white",
    skin_color: "fair",
    eye_color: "blue-gray",
    birth_year: "57BBY",
    gender: "male",
  },
];

/* ESERCIZIO 1
  Crea una variabile chiamata "charactersNames" e assegnale un array vuoto
*/

let charactersNames = [];

/* ESERCIZIO 2
  Utilizzando un ciclo for, cicla l'array "starWarsCharacters".
  Dovrai accedere alla proprietà "name" di ogni oggetto in esso contenuto, e inserirla nell'array "charactersNames" creato precedentemente.
  Come risultato dovresti ottenere qualcosa di simile: ["Luke Skywalker", "C-3PO", "R2-D2", etc..]
*/

for (let i = 0; i < starWarsCharacters.length; i++) {
  charactersNames.push(starWarsCharacters[i].name);
}

console.log(charactersNames);
/* ESERCIZIO 3
  Seguendo i passaggi precedenti crea un nuovo array chiamato "femaleCharacters" e inserisci al suo interno tutti gli oggetti femminili.
*/
let femaleCharacters = [];

for (let i = 0; i < starWarsCharacters.length; i++) {
  if (starWarsCharacters[i].gender === "female") {
    femaleCharacters.push(starWarsCharacters[i]);
  }
}
console.log(femaleCharacters);

/* ESERCIZIO 4
  Crea un oggetto "eyeColor" che abbia le seguenti proprietà: blue, yellow, brown, red, blue-gray.
  Ad ognuna di queste proprietà assegna come valore un array vuoto.
*/

const eyeColor = {
  blue: [],
  yellow: [],
  brown: [],
  red: [],
  "blue-gray": [],
};
/* ESERCIZIO 5
  Utilizza uno switch statement per inserire uno ad uno gli oggetti dei personaggi di "starWarsCharacters" negli array relativi al colore degli occhi precedentemente creati.
  Ogni personaggio dovrà finire nell'array corrispondente al suo colore degli occhi (al valore della sua proprietà "eye_color").
*/
for (let i = 0; i < starWarsCharacters.length; i++) {
  switch (starWarsCharacters[i].eye_color) {
    case "blue":
      eyeColor.blue.push(starWarsCharacters[i]);
      break;
    case "yellow":
      eyeColor.yellow.push(starWarsCharacters[i]);
      break;
    case "brown":
      eyeColor.brown.push(starWarsCharacters[i]);
      break;
    case "red":
      eyeColor.red.push(starWarsCharacters[i]);
      break;
    case "blue-gray":
      eyeColor["blue-gray"].push(starWarsCharacters[i]);
      break;
    default:
      break;
  }
}
console.log(eyeColor);
/* ESERCIZIO 6
  Usa un while loop per calcolare la massa totale dell'equipaggio. Salvala in una variabile chiamata "crewMass".
*/
let Mass = 0;
let crewMass = 0; //totale
while (Mass < starWarsCharacters.length) {
  crewMass = starWarsCharacters[Mass].mass + crewMass;

  Mass++;
}
console.log(crewMass);

/* ESERCIZIO 7
  Crea uno if/else statement per rivelare la tipologia di carico, utilizzando la massa totale, di un'ipotetica astronave contenente i personaggi dell'array "starWarsCharacters".

  Se la massa è inferiore a 500 stampa in console: "Ship is under loaded"
  Se la massa è superiore a 500 e inferiore a 700 stampa in console: "Ship is half loaded"
  Se la massa è superiore a 700 e inferiore a 900 stampa in console: "Warning: Load is over 700"
  Se la massa è superiore a 900 e inferiore a 1000 stampa in console: "Critical Load: Over 900"
  Se la massa è superiore a 1000 stampa in console: "DANGER! OVERLOAD ALERT: escape from ship now!"

  Una volta fatto, modifica la massa di qualche elemento dell'equipaggio e vedi se riesci ad ottenere un messaggio diverso.
*/
if (crewMass < 500) {
  console.log("Ship is under loaded");
} else if (crewMass > 500 && crewMass < 700) {
  console.log("Ship is half loaded");
} else if (crewMass > 700 && crewMass < 900) {
  console.log("Warning: Load is over 700");
} else if (crewMass > 900 && crewMass < 1000) {
  console.log("Critical Load: Over 900");
} else {
  console.log("DANGER! OVERLOAD ALERT: escape from ship now!");
}

/* ESERCIZIO 8
  Usa un for loop per cambiare il valore della proprietà "gender" di alcuni personaggi dal valore "n/a" a "robot" (Tip: puoi effettuare la riassegnazione del valore corrispondente o creare un nuovo array)
*/
for (let i = 0; i < starWarsCharacters.length; i++) {
  if (starWarsCharacters[i].gender === "n/a") {
    starWarsCharacters[i].gender = "robot";
  }

  console.log(starWarsCharacters[i].gender);
}

/* --EXTRA-- ESERCIZIO 9
  Utilizzando gli elementi presenti nell'array "femaleCharacters" rimuovi dall'array "charactersNames" le stringhe corrispondenti a personaggi con lo stesso nome.
  Una volta fatto crea un console.log per controllare la proprietà length di "charactersNames" prima e dopo l'operazione.
*/
console.log(femaleCharacters);

console.log(charactersNames.length);
charactersNames.splice(4, 1);
charactersNames.splice(5, 1);
console.log(charactersNames.length);

console.log(charactersNames)
/* --EXTRA-- ESERCIZIO 10
  Crea una funzionalità che selezioni un elemento casuale dall'array "starWarsCharacters" e ne stampi in console le proprietà in modo discorsivo (a tuo piacimento).
*/
console.log("extra");
const random = Math.random();
for (let i = 1; i < 2; i++) {
  if (random < 0.05) {
    console.log("mi chiamo: ", starWarsCharacters[0].name);
    console.log("sono alto/a: ", starWarsCharacters[0].height, "cm");
    console.log("ho una massa di: ", starWarsCharacters[0].mass);
    console.log(
      "i miei capelli sono di colore:  ",
      starWarsCharacters[0].hair_color
    );
    console.log("la mia pelle è di colore: ", starWarsCharacters[0].skin_color);
    console.log(
      "i miei occhi sono di colore: ",
      starWarsCharacters[0].eye_color
    );
    console.log("il mio anno di nascita è: ", starWarsCharacters[0].birth_year);
    console.log("il mio genere è: ", starWarsCharacters[0].gender);
  } else if (random >= 0.05 && random < 0.1) {
    console.log("mi chiamo: ", starWarsCharacters[1].name);
    console.log("sono alto/a: ", starWarsCharacters[1].height, "cm");
    console.log("ho una massa di: ", starWarsCharacters[1].mass);
    console.log(
      "i miei capelli sono di colore:  ",
      starWarsCharacters[1].hair_color
    );
    console.log("la mia pelle è di colore: ", starWarsCharacters[1].skin_color);
    console.log(
      "i miei occhi sono di colore: ",
      starWarsCharacters[1].eye_color
    );
    console.log("il mio anno di nascita è: ", starWarsCharacters[1].birth_year);
    console.log("il mio genere è: ", starWarsCharacters[1].gender);
  } else if (random >= 0.1 && random < 0.15) {
    console.log("mi chiamo: ", starWarsCharacters[3].name);
    console.log("sono alto/a: ", starWarsCharacters[3].height, "cm");
    console.log("ho una massa di: ", starWarsCharacters[3].mass);
    console.log(
      "i miei capelli sono di colore:  ",
      starWarsCharacters[3].hair_color
    );
    console.log("la mia pelle è di colore: ", starWarsCharacters[3].skin_color);
    console.log(
      "i miei occhi sono di colore: ",
      starWarsCharacters[3].eye_color
    );
    console.log("il mio anno di nascita è: ", starWarsCharacters[3].birth_year);
    console.log("il mio genere è: ", starWarsCharacters[3].gender);
  } else if (random >= 0.15 && random < 0.2) {
    console.log("mi chiamo: ", starWarsCharacters[2].name);
    console.log("sono alto/a: ", starWarsCharacters[2].height, "cm");
    console.log("ho una massa di: ", starWarsCharacters[2].mass);
    console.log(
      "i miei capelli sono di colore:  ",
      starWarsCharacters[2].hair_color
    );
    console.log("la mia pelle è di colore: ", starWarsCharacters[2].skin_color);
    console.log(
      "i miei occhi sono di colore: ",
      starWarsCharacters[2].eye_color
    );
    console.log("il mio anno di nascita è: ", starWarsCharacters[2].birth_year);
    console.log("il mio genere è: ", starWarsCharacters[2].gender);
  } else if (random >= 0.2 && random < 0.3) {
    console.log("mi chiamo: ", starWarsCharacters[4].name);
    console.log("sono alto/a: ", starWarsCharacters[4].height, "cm");
    console.log("ho una massa di: ", starWarsCharacters[4].mass);
    console.log(
      "i miei capelli sono di colore:  ",
      starWarsCharacters[4].hair_color
    );
    console.log("la mia pelle è di colore: ", starWarsCharacters[4].skin_color);
    console.log(
      "i miei occhi sono di colore: ",
      starWarsCharacters[4].eye_color
    );
    console.log("il mio anno di nascita è: ", starWarsCharacters[4].birth_year);
    console.log("il mio genere è: ", starWarsCharacters[4].gender);
  } else if (random >= 0.3 && random < 0.4) {
    console.log("mi chiamo: ", starWarsCharacters[5].name);
    console.log("sono alto/a: ", starWarsCharacters[5].height, "cm");
    console.log("ho una massa di: ", starWarsCharacters[5].mass);
    console.log(
      "i miei capelli sono di colore:  ",
      starWarsCharacters[5].hair_color
    );
    console.log("la mia pelle è di colore: ", starWarsCharacters[5].skin_color);
    console.log(
      "i miei occhi sono di colore: ",
      starWarsCharacters[5].eye_color
    );
    console.log("il mio anno di nascita è: ", starWarsCharacters[5].birth_year);
    console.log("il mio genere è: ", starWarsCharacters[5].gender);
  } else if (random >= 0.4 && random < 0.5) {
    console.log("mi chiamo: ", starWarsCharacters[6].name);
    console.log("sono alto/a: ", starWarsCharacters[6].height, "cm");
    console.log("ho una massa di: ", starWarsCharacters[6].mass);
    console.log(
      "i miei capelli sono di colore:  ",
      starWarsCharacters[6].hair_color
    );
    console.log("la mia pelle è di colore: ", starWarsCharacters[6].skin_color);
    console.log(
      "i miei occhi sono di colore: ",
      starWarsCharacters[6].eye_color
    );
    console.log("il mio anno di nascita è: ", starWarsCharacters[6].birth_year);
    console.log("il mio genere è: ", starWarsCharacters[6].gender);
  } else if (random >= 0.5 && random < 0.6) {
    console.log("mi chiamo: ", starWarsCharacters[7].name);
    console.log("sono alto/a: ", starWarsCharacters[7].height, "cm");
    console.log("ho una massa di: ", starWarsCharacters[7].mass);
    console.log(
      "i miei capelli sono di colore:  ",
      starWarsCharacters[7].hair_color
    );
    console.log("la mia pelle è di colore: ", starWarsCharacters[7].skin_color);
    console.log(
      "i miei occhi sono di colore: ",
      starWarsCharacters[7].eye_color
    );
    console.log("il mio anno di nascita è: ", starWarsCharacters[7].birth_year);
    console.log("il mio genere è: ", starWarsCharacters[7].gender);
  } else if (random >= 0.6 && random < 0.8) {
    console.log("mi chiamo: ", starWarsCharacters[8].name);
    console.log("sono alto/a: ", starWarsCharacters[8].height, "cm");
    console.log("ho una massa di: ", starWarsCharacters[8].mass);
    console.log(
      "i miei capelli sono di colore:  ",
      starWarsCharacters[8].hair_color
    );
    console.log("la mia pelle è di colore: ", starWarsCharacters[8].skin_color);
    console.log(
      "i miei occhi sono di colore: ",
      starWarsCharacters[8].eye_color
    );
    console.log("il mio anno di nascita è: ", starWarsCharacters[8].birth_year);
    console.log("il mio genere è: ", starWarsCharacters[8].gender);
  } else if (random >= 0.8 && random < 1) {
    console.log("mi chiamo: ", starWarsCharacters[9].name);
    console.log("sono alto/a: ", starWarsCharacters[9].height, "cm");
    console.log("ho una massa di: ", starWarsCharacters[9].mass);
    console.log(
      "i miei capelli sono di colore:  ",
      starWarsCharacters[9].hair_color
    );
    console.log("la mia pelle è di colore: ", starWarsCharacters[9].skin_color);
    console.log(
      "i miei occhi sono di colore: ",
      starWarsCharacters[9].eye_color
    );
    console.log("il mio anno di nascita è: ", starWarsCharacters[9].birth_year);
    console.log("il mio genere è: ", starWarsCharacters[9].gender);
  } else {
    console.log(starWarsCharacters);
  }
  console.log(random)
}

