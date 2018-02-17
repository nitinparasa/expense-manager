
//
// Object Destructuring
//

// const person = {
//     name: 'Nitin',
//     age: 24,
//     address: {
//         city: 'Kakinada',
//         temp: 45
//     }
// };

// const {name: firstName = 'Anonymous', age, address} = person;
// const {city, temp: temperature} = person.address; // renaming the object keys
// console.log(`${firstName} is ${age} years old.`);
// console.log(`${city} is currently ${temperature} degrees hot.`);

// const book = {
//     title: 'Ready Player One',
//     author: 'Brene Brown',
//     publisher: {
//         //name: 'Cloudbyz'
//     }
// }

// const {name: publisherName = 'Self Published'}  = book.publisher;

// console.log(publisherName);


//
// Array Destructuring
//

const address = ['Pratap Nagar','Kakinada', ,'533004'];

const [,city, state = 'Telangana'] = address;

console.log(`${city}; ${state}`);