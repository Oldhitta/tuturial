////1.1 Informatie//////
const naam = "Zaid El Jattari";
const lijn1 = "Naam: ";
const leeftijd = 29;
const lijn2 = "Leeftijd: ";
const email = "zaid.elj@outlook.com";
const lijn3 = "Email: ";
const opleiding = "Full Stack Developer";
const lijn4 = "Opleiding: ";

console.log(lijn1.concat(naam));
console.log(lijn2.concat(leeftijd));
console.log(lijn3.concat(email));
console.log(lijn4.concat(opleiding));

//////1.2 BMI///////////
const gewichtInKg = 115;
const lengteInMeter = 1.95;
const bmi = Math.round(gewichtInKg / lengteInMeter ** 2);
console.log(bmi);

//////1.3 BMI-namen///////////////

const gewichtPersoon1 = 60;
const lengtePersoon1 = 1.6;
const naamPersoon1 = "Anna";

const gewichtPersoon2 = 100;
const lengtePersoon2 = 1.87;
const naamPersoon2 = "Francis";

function calcBmi(gewicht, lengte, naam) {
  const bmi = Math.round(gewicht / lengte ** 2);
  const zin = naam + " heeft een bmi van " + bmi;
  return zin;
}
const bmi1 = calcBmi(gewichtPersoon1, lengtePersoon1, naamPersoon1);
const bmi2 = calcBmi(gewichtPersoon2, lengtePersoon2, naamPersoon2);
console.log(bmi1, bmi2);

/////1.4 Interest////////////////////

const startBedrag = 100;
const loopTijdInJaren = 7;
const renteVoet = 0.02;
let voorlopigeresultaat = startBedrag;
for (let index = 1; index <= loopTijdInJaren; index++) {
  voorlopigeresultaat = renteVoet * voorlopigeresultaat + voorlopigeresultaat;
}

console.log(voorlopigeresultaat);

/////1.5 Hours/////////

const huidigeUur = 17;
const urenToevoegen = 10;
const eindresultaat = actueleTijd(huidigeUur, urenToevoegen);

function actueleTijd(uur, tijdToevoegen) {
  const opsommenTijd = uur + tijdToevoegen;
  const afgerondGetal = opsommenTijd % 24;
  const zinMetEindResultaat =
    "Het is nu " +
    uur +
    " uur s'avonds. Over " +
    tijdToevoegen +
    " uur is het " +
    afgerondGetal +
    " uur s'nachts.";
  return zinMetEindResultaat;
}

console.log(eindresultaat);


////////1.6 Wisselgeld///////////

const teBetalenBedrag = 480;
const betalenMetBriefje = 50;
const aantalBriefjesnodig = Math.ceil(teBetalenBedrag / betalenMetBriefje);
const wisselGeld = aantalBriefjesnodig * betalenMetBriefje - teBetalenBedrag;
console.log("Te betalen bedrag " + teBetalenBedrag);
console.log(
  "Je hebt " +
    aantalBriefjesnodig +
    " briefjes van " +
    betalenMetBriefje +
    " nodig"
);
console.log("Je wisselgeld is dan " + wisselGeld + "euro");


