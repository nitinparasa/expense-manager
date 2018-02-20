import * as firebase from 'firebase';

const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};

firebase.initializeApp(config);

const database = firebase.database();
const GoogleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, GoogleAuthProvider, database as default };







//   const expenses = {
//         description: 'Expense 1',
//         amount: 2000,
//         note: '',
//         createdAt: 23000000
//   };

// //   database.ref('expenses').push(
// //     {
// //         description: 'Expense 3',
// //         note: '',
// //         createdAt: 32000000
// //     }
// //   );

// //   database.ref('expenses')
// //   .once('value', (snapshot) => {
// //     const expenses = [];
// //     snapshot.forEach((childSnapshot) => {
// //         expenses.push({
// //             id: childSnapshot.key,
// //             ...childSnapshot.val()
// //         });
// //     });

// //     console.log(expenses);
// //   });

// database.ref('expenses')
//   .on('value', (snapshot) => {
//     const expenses = [];
//     snapshot.forEach((childSnapshot) => {
//         expenses.push({
//             id: childSnapshot.key,
//             ...childSnapshot.val()
//         });
//     });

//     console.log(expenses);
//   })



//   const userSummary = database.ref('users')
//   .on('value', (snapshot) => {
//     console.log(console.log(`${snapshot.val().name} is a ${snapshot.val().job}.`));
//   })

//   setTimeout(() => {
//     database.ref('users/name').set('Pranathi');
//   }, 2000);

//   database.ref('users')
//   .on('value', (snapshot) => {
//     console.log(snapshot.val());
//   })

//   database.ref('users')
//     .once('value')
//     .then((snapshot) => {
//         const val = snapshot.val();
//         console.log(val);
//     })
//     .catch((e) => {
//         console.log('Error fetching data', e);
//     })

//   database.ref('users').set(
//       {
//           name: 'Nitin Parasa',
//           age: 24,
//           isSingle: true,
//           location: {
//               city: 'Gothenburg',
//               country: 'Sweden'
//           }
//       }
//   ).then((data) => { console.log('data loaded!');})
//   .catch((err) => console.log(err));

//   // referring to a specific attribute of the database
//   //database.ref('users/age').set(25);

//   database.ref('users/attributes').set({
      
//           height: 183,
//           weight: 8
//   }).then((data) => { console.log('data loaded');})
//   .catch((err) => console.log(err));

//   //deleting attributes
//   database.ref('users/isSingle')
//     .remove()
//     .then(() => { console.log('Successfully removed');})
//     .catch((err) => {
//         console.log(err);
//     });

//     // or delete using set by passing null
//     // database.ref('users/isSingle').set(null);

//     database.ref('users').update({
//         name: 'Pranathi Parasa',
//         age: 25,
//         job: 'Project Manager',
//         'location/city': 'Muscat'
//     });