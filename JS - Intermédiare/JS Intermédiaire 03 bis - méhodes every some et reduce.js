///////////////////////////////////////////////////////////////////////////////////
/*                                                                               */
/*                 UTILISATION DE "EVERY", "SOME" ET "REDUCE"                    */
/*                                                                               */
///////////////////////////////////////////////////////////////////////////////////

// "EVERY" pour vérifier si toutes les valeurs d'un tableau répondent à une condition

const teamOne = [
    {
        name: "Bob",
        age: 19
    },
    {
        name: "Pierre",
        age: 17
    },
    {
        name: "Karl",
        age: 16
    },
    {
        name: "Ryan",
        age: 21
    }
];

function checkIfAdult(array) {
    if (array.every(player => player.age > 18)) {
        return 'Everybody is more than 18 years old.';
    } else {
        return 'At least one player is less than 18 yeard old.';
    }
}

console.log(checkIfAdult(teamOne));


// "SOME" pour vérifier si au moins une valeur répond à une condition

const teamTwo = [
    {
        name: "Bob",
        age: 19
    },
    {
        name: "Pierre",
        age: 17
    },
    {
        name: "Karl",
        age: 22
    },
    {
        name: "Ryan",
        age: 20
    }
];

function checkIfNotAdult(array) {
    if (array.some(player => player.age < 18)) {
        return 'At least one player is less than 18 yeard old.';
    }
}

console.log(checkIfNotAdult(teamTwo));


// "REDUCE" pour réduire un tableau pour obtenir une valeur unique

const cart = [
    { name: "eggs", price: 2 },
    { name: "milk", price: 1 },
    { name: "tomatoes", price: 1 },
    { name: "Cheese", price: 2 }
];
  
let result = cart.reduce((acc, currentValue) => acc + currentValue.price, 0);
console.log(result);

const students = [
    {
        name: "Vincent",
        note: 16
    },
    {
        name: "Bernard",
        note: 8
    },
    {
        name: "Michel",
        note: 12
    },
    {
        name: "Jacques",
        note: 19
    },
];

let moyenne = students.reduce((acc, currentValue) => acc + currentValue.note, 0) / students.length;
console.log(`La moyenne de la classe est de : ${moyenne}/20.`)