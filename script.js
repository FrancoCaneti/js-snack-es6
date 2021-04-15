// Creare un array di oggetti
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
// Stampare a schermo la bici con peso minore


const bike1 = {
    name:'Bianchi',
    peso: 6,
}

const bike2 = {
    name:'Colnago',
    peso: 5.5,
}

const bike3 = {
    name:'Specialized',
    peso:5.2,
}

const bikes = {
    bike1,
    bike2,
    bike3,
}

for ( let i=0; i<bikes.length; i++){
    const {name, peso} = bikes[i]
    console.log(name,peso)
}

///////////////////////////////////////////////////////////

// Snack 2
/*Creare un array di oggetti di squadre di calcio. 
Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
Nome sarà l'unica proprietà da compilare, le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà:
Punti fatti e falli subiti
Infine usando la destrutturazione creiamo un nuovo array i cui
 elementi contengono solo nomi e falli subiti e stampiamo tutto in console.*/

 const randomNumber = (min,max) =>
 {
     min = Math.floor(min);
     max = Math.floor(max);
     return Math.floor(Math.random()*(max-min +1)) + min;
 };
let teams =[
    {
        name:'milan',
        points:0,
        fouls:0,

    },
    {
        name:'sassuolo',
        point:0,
        fouls:0,
    },
    {
        name:'torino',
        point:0,
        fouls:0,
    },
];


// clones Teams
let updatedTeams = [teams];

for(let i =0; i< updatedTeams.length; i++) {
    updatedTeams[i].points = randomNumber(0,100);
    updatedTeams[i].fouls = randomNumber(0,100);
};

console.log('results', updatedTeams);

// Nuovo array

let newArray =[];

for(let i=0; i<updatedTeams.length; i++){
    newArray.push({
        name: updatedTeams[i].name,
        points: updatedTeams[i].points

    })
}

console.log('New results',newArray);





