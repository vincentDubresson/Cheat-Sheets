///////////////////////////////////////////////////////////////////////////////////
/*                                                                               */
/*               FONCTIONS FLECHÉES ET PARAMÈTRES PAR DEFAUT                     */
/*                                                                               */
///////////////////////////////////////////////////////////////////////////////////

// Fonctions avec paramètres par défaut

function sayHello(name = "World") {

    console.log(`Hello, ${name} !`);

}

sayHello();
  
sayHello("Bob");


// Fonctions flechées

// Variante 1
const sayHi = (name) => {
    return `Hi ${name} !`;
}

console.log(sayHi("Vincent"));

// Variante 2
const sayBye = (name) => `Bye ${name} !`;

console.log(sayBye("Vincent"));
