///////////////////////////////////////////////////////////////////////////////////
/*                                                                               */
/*                UTILISATION DE "MAP", "FOREACH" ET "FILTER"                    */
/*                                                                               */
///////////////////////////////////////////////////////////////////////////////////

// "MAP" pour transformer un tableau en un autre tableau

const animals = [
    { name: "Hector", species: "Beaver" },
    { name: "Edouard", species: "Duck" },
    { name: "José", species: "Boar" },
    { name: "Charlotte", species: "Groundhog" },
    { name: "Mireille", species: "Bee" },
    { name: "Leon", species: "Hornet" },
    { name: "Fedor", species: "Pig" }
];

let animalsSentence = animals.map((animal, index) => {
    return `${animal.name} the ${animal.species}, the number ${index + 1} of the array.`;
});

console.log(animalsSentence);


// "FOREACH" pour itérer sur les éléments d'un tableau

// Just image that there is an html file with ul element.
/* const animalz = [
    { name: "Hector", species: "Beaver", emoji: "🦫" },
    { name: "Edouard", species: "Duck", emoji: "🦆" },
    { name: "José", species: "Boar", emoji: "🐗" },
    { name: "Mireille", species: "Bee", emoji: "🐝" },
    { name: "Fedor", species: "Pig", emoji: "🐷" }
];
  
const ul = document.querySelector('.animal-list');
  
animalz.forEach((animal) => {
    let sentence = `${animal.name}, the ${animal.species} : ${animal.emoji}`;
    let ligne = document.createElement('li');
    ul.appendChild(ligne);
    ligne.innerHTML = sentence;
}); */


// "FILTER" pour filtrer un tableau

const dogsAndCats = [
    {
      name: "Oscar",
      species: "Dog"
    },
    {
      name: "Max",
      species: "Cat"
    },
    {
      name: "Tiger",
      species: "Cat"
    },
    {
      name: "Sam",
      species: "Dog"
    },
    {
      name: "Ginger",
      species: "Cat"
    },
    {
      name: "Gizmo",
      species: "Dog"
    },
    {
      name: "Billy",
      species: "Cat"
    }
];

let cats = dogsAndCats.filter((animal) => animal.species === "Cat");

console.log(cats);