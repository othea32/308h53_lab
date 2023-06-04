// Pass by Value and Pass by Reference
const personOne = {
 name: {
     first: 'Timmy',
     last: 'Timtim'
 },
 age: 30,
 location: {
     city: 'New York',
     state: 'New York',
     zip: 10001
 }
}

const personTwo = {
 name: {
     first: 'Julie',
     last: 'July'
 },
 age: 28,
 location: {
     city: 'Albany',
     state: 'New York',
     zip: 12201
 }
}

// Create a new function moveLocation().

function moveLocation(person, location) {
 person.location.city = location.city;
 person.location.state = location.state;
 person.location.zip = location.zip;
}



// moveLocation() should take one of our person objects as its first parameter and a location object as the second parameter.
// The location object will have the properties city, state, and zip.
// The function should change the city, state, and zip properties of the person to match those of the new location.
// Test your function by using the following code. Does personTwo now live in Rochester? (They should.)

moveLocation(personTwo, {city: 'Rochester', state: 'New York', zip: 14623})

const nLoc = {
 city: 'Rochester',
 state: 'New York',
 zip: 14604
}

moveLocation(personTwo, nLoc);

nLoc.city = 'Buffalo';
nLoc.zip = 14201;

console.log(personTwo.location.city);

// pass by reference
// Create a new object personThree.

// Set personThree.name.first to whatever you'd like, and personThree.name.last to a hyphenated combination of personOne and personTwo's last names.
// Give personThree an age of 0.
// Set personThree's location to that of their parents, by reference so that the baby stays with its family.
// Test your code's behavior by using your moveLocation() function.

const personThree = {
 name: {
     first: 'Timmy',
     last: 'Timtim'
 },
 age: 0,
 location: {
     city: 'New York',
     state: 'New York',
     zip: 10001
 }
}

personThree.name.last = personOne.name.last + '-' + personTwo.name.last;

personThree.location = personOne.location;

moveLocation(personThree, {city: 'Rochester', state: 'New York', zip: 14623})

console.log(personThree.location.city);




