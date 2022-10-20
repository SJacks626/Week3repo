
//TASK 2
//Create an array called names that contains the following values: ‘Sam’,
// ‘Tommy’, ‘Tim’, ‘Sally’, ‘Buck’, ‘Bob’



// / Use a loop to iterate through the array and calculate the average 
//number of letters per name. 
//Use a loop to iterate through the array again and concatenate all the names 
//together, separated by spaces. 
let names= ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];
let x = names.map(function(element){
    return (element.length/ names.length)
});
console.log(x);








