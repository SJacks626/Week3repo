
//Q

// function createFullName(firstName, lastName) {
//   return firstName + " " + lastName;
// }

//A

 const createFullName = (firstName, lastName) => {

   return firstName + ' ' + lastName;

 }
 console.log((createFullName) firstName, lastName);





//Q

// function doubleNumber(number) {
//   return number * 2;
// }

 //A

 const doubleNumber = (number) => {

  return number * 2;
 }

 console.log(doubleNumber);



 //Q


// function getEvenNumbers(array) {
//   let evenNumbers = [ ];
//   for (let i of array) {
//     if (i % 2 === 0) {
//       evenNumbers.push(i);
//     }
//   }
//   return evenNumbers;
// }


//A

 const getEvenNumbers = (array) =>{
  let evenNumbers = [ ];
  for (let i of array) {
     if (i % 2 === 0) {
       evenNumbers.push(i);
     }
   }
   return evenNumbers;
 };





////The product owner on your development team believes they've seen a pattern as 
//to which customers purchase the most socks. To verify, you've been asked to write 
//a function that processes an array of customer objects and return a new array that 
//contains only customers that match ANY of the following criteria:

//name starts with a 'C' (upper or lowercase)
//address contains no undefined fields
//the city is Peoria and the state is AZ
//membership level is GOLD or PLATINUM unless the customer is younger than 29, 
//then SILVER is okay too
//The array of customer objects will have the following schema:

let customers = [
    {
        name: 'Sam',
        address: {
            street: '1234 W Bell Rd',
            city: 'Phoenix',
            zip: '85308',
            state: 'AZ'
        },
        membershipLevel: 'GOLD',
        age: 32
    },
    
    {
        name: 'Carl',
        address: {
            street: '24015 N Cave Creek Rd',
            city: 'Peoria',
            zip: '85028',
            state: 'AZ'
        },
        membershipLevel: 'PLATINUM',
        age: 28
    },{
        name: 'Kari',
        address: {
            street: '145 W Olive Rd',
            city: 'Glendale',
            zip: undefined,
            state: 'AZ'
        },
        membershipLevel: 'GOLD',
        age: 40
    },{
        name: 'Carissa',
        address: {
            street: '1172 W Thunderbird Rd',
            city: 'Phoenix',
            zip: '85308',
            state: 'AZ'
        },
        membershipLevel: 'SILVER',
        age: 28
    },{
        name: 'Chris',
        address: {
            street: '1172 W Thunderbird Rd',
            city: 'Phoenix',
            zip: '85308',
            state: 'AZ'
        },
        membershipLevel: 'PLATINNUM',
        age: 28
    },{
        name: 'Marissa',
        address: {
            street: '1172 W Thunderbird Rd',
            city: 'PEORIA',
            zip: '85308',
            state: 'AZ'
        },
        membershipLevel: 'SILVER',
        age: 30
    },{
        name: 'Courtney',
        address: {
            street: '1172 W Thunderbird Rd',
            city: 'Phoenix',
            zip: '85308',
            state: 'AZ'
        },
        membershipLevel: 'GOLD',
        age: 25
    },{
        name: 'Carissa',
        address: {
            street: '1172 W Thunderbird Rd',
            city: 'Phoenix',
            zip: '85308',
            state: 'MA'
        },
        membershipLevel: 'SILVER',
        age: 28
    },{
        name: 'Larissa',
        address: {
            street: undefined,
            city: 'Phoenix',
            zip: '85308',
            state: 'AZ'
        },
        membershipLevel: 'SILVER',
        age: 28
    },{
        name: 'charlie',
        address: {
            street: '1172 W Thunderbird Rd',
            city: 'Peoria',
            zip: '85308',
            state: 'az'
        },
        membershipLevel: 'SILVER',
        age: 29
    },{
        name: 'CHARISARD',
        address: {
            street: 'Pikachu street',
            city: 'Pokemon',
            zip: '811118',
            state: 'AZ'
        },
        membershipLevel: 'SILVER',
        age: 15
    }
];

const theMostSocks = [] 
for (let i = 0; i < customers.length; i++){
console.log(customers[i].name);
console.log(customers[i].address.city);
if (customers[i].name[0] == 'c' || customers[i].name[0] == 'C'){
theMostSocks.push(customers[i])
};
    console.log(customers[i].name);
    { 
          if (customers[i].address.state == undefined || customers[i].address.city == undefined || customers[i].address.zip == undefined || customers[i].address.street == undefined)
     theMostSocks.push(customers[i]);
     else if (customers[i].address.city == 'Peoria' || customers[i].address.state == 'AZ'){
         theMostSocks.push(customers[i])
 console.log(theMostSocks)
     };
 }  { (customers [i].membershipLevel == 'GOLD', 'SILVER, PLATINUM' && customers[i].age > 29 )
 {  (theMostSocks.push(customers[i].membershipLevel < 29))
 }
} console.log(theMostSocks[i].names);
};


// test.js: 131 Sam
// test.js:132 Phoenix
// test.js:136 Sam
// test.js:142 Array(28)
// test.js:147 Object
// test.js:131 Carl
// test.js:132 Peoria
// test.js:136 Carl
// test.js:142 Array(28)
// test.js:147 false
// test.js:131 Kari
// test.js:132 Glendale
// test.js:136 Kari
// test.js:147 Object
// test.js:131 Carissa
// test.js:132 Phoenix
// test.js:136 Carissa
// test.js:142 Array(28)
// test.js:147 Object
// test.js:131 Chris
// test.js:132 Phoenix
// test.js:136 Chris
// test.js:142 Array(28)
// test.js:147 false
// test.js:131 Marissa
// test.js:132 PEORIA
// test.js:136 Marissa
// test.js:142 Array(28)
// test.js:147 Object
// test.js:131 Courtney
// test.js:132 Phoenix
// test.js:136 Courtney
// test.js:142 Array(28)
// test.js:147 false
// test.js:131 Carissa
// test.js:132 Phoenix
// test.js:136 Carissa
// test.js:147 Object
// test.js:131 Larissa
// test.js:132 Phoenix
// test.js:136 Larissa
// test.js:147 Object
// test.js:131 charlie
// test.js:132 Peoria
// test.js:136 charlie
// test.js:142 Array(28)
// test.js:147 false
// test.js:131 CHARISARD
// test.js:132 Pokemon
// test.js:136 CHARISARD
// test.js:142 Array(28)0: {name: 'Sam', address: {…}, membershipLevel: 'GOLD', age: 32}1: false2: {name: 'Carl', address: {…}, 
// membershipLevel: 'PLATINUM', age: 28}3: {name: 'Carl', address: {…}, membershipLevel: 'PLATINUM', age: 28}4: 
// false5: {name: 'Kari', address: {…}, membershipLevel: 'GOLD', age: 40}6: false7: {name: 'Carissa', address: {…}, membershipLevel: 'SILVER', age: 28}8: {name: 'Carissa', address: {…}, membershipLevel: 'SILVER', age: 28}9: false10: {name: 'Chris', address: {…}, membershipLevel: 'PLATINNUM', age: 28}11: {name: 'Chris', address: {…}, membershipLevel: 'PLATINNUM', age: 28}12: false13: {name: 'Marissa', address: {…}, membershipLevel: 'SILVER', age: 30}14: false15: {name: 'Courtney', address: {…}, membershipLevel: 'GOLD', age: 25}16: {name: 'Courtney', address: {…}, membershipLevel: 'GOLD', age: 25}17: false18: {name: 'Carissa', address: {…}, membershipLevel: 'SILVER', age: 28}19: false20: {name: 'Larissa', address: {…}, membershipLevel: 'SILVER', age: 28}21: false22: {name: 'charlie', address: {…}, membershipLevel: 'SILVER', age: 29}23: {name: 'charlie', address: {…}, membershipLevel: 'SILVER', age: 29}24: false25: {name: 'CHARISARD', address: {…}, membershipLevel: 'SILVER', age: 15}26: {name: 'CHARISARD', address: {…}, membershipLevel: 'SILVER', age: 15}27: falselength: 28[[Prototype]]: Array(0)
// test.js:147 Objectaddress: {street: '1172 W Thunderbird Rd', city: 'Phoenix', zip: '85308', state: 'AZ'}age:
//  28membershipLevel: "PLATINNUM"name: "Chris"[[Prototype]]: Object