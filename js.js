
//JS-STRING METHOD
        // console.log("Hello world");
        // console.log("all string method");
        // const str = "aHello";
        // const str1 = "world";
        // const regex = /[A-Z]/g;

        // console.log(str.charAt(3)); //find the char at the given index
        // console.log(str.charCodeAt(0)); //returns the unicode value of the charat given index
        // console.log(str.concat(str1)); //add two string together
        // console.log(str.indexOf("o")); //returns the index value of the given character in the given index
        // console.log(str.lastIndexOf("l")); //returns the last index of the given character from the string
        // console.log(str.match(regex)); //this take the regex array and matches the pattern descibed in the regex and return the array with the finding
        // console.log(str.replace("aH","H")); //replace the first value s=which is already in the string with the new provide value passed as the second argument of the function
        // console.log(str.search('o')); //it gives the position of the string passed as a arguments
        // console.log(str.slice(0,3)); //this returns a new string satisfying the given conditions 
        // //if we provide negative value to the slice it start slecting from the last element of the array
        // //for example-->
        // console.log(str.slice(-3));
        // console.log(str.split('e')); //splits the string from the position where it found the given argument and store the result in the array
        // console.log(str.startsWith('a'));//check if the string starts with the search pattern or the argument provide
        // console.log(str.substring(0,2)); //same as slice but dont support the negative value
        // console.log(str.toLowerCase()); //change the strong to lower cas
        // console.log(str.toUpperCase()); //change the string to uppercase
        // console.log(str.valueOf()); //Returns the primitive value that has no properties or methods of a string method

//JS_NUMBERS METHOD
        // const num1 = 2345.6334;
        // console.log(num1.toExponential()); //returns the exponential value of the given numbers
        // console.log(num1.toFixed(2)); //returns the float value of the given number to the fixed decimal places
        // console.log(num1.toPrecision(6)); //returns the string number with the given lenth
        // console.log(num1.toString());
//JS_MATHS
    //    const randNumber = Math.random();
    //    console.log(randNumber);
    //    console.log(Math.ceil(randNumber)); //it returns the rounded-up value for the given number
    //    console.log(Math.floor(randNumber)); //it round-down the number 
    //    console.log(Math.round(randNumber));//round to the nearest integer
    //    console.log(Math.pow(randNumber,2));//gives the square of the random number generated
    //    console.log(Math.sqrt(randNumber)); //gives the square root of the number
//JS ARRAYS
const fruits = ["apple","banana","donut","cherry","apple"];
const eaters = ["ant","monkey","man","birds"];

console.log(fruits.concat(eaters));
console.log(fruits.indexOf('banana'));
console.log(fruits.lastIndexOf("apple"));
// console.log(typeof(fruits.pop()));  //pop method mutate the array and change the original value by removing the element from the original array
// console.log(fruits);
// console.log(fruits.pop());
// console.log(fruits);
            //to avoid this problem with the pop method of the array we use the destructuring of the array
            // to do that we use three-dots or ... infront of the name of that array and use that array as a original mutant so that the original array has no effect of these
            //mutant-occuring method
// console.log(fruits.push("cat")); 
//         //this method returns the new length of the original array by pishing the element at the back of the array

// console.log(fruits);
// console.log(eaters.reverse());
// console.log(eaters);
//console.log(fruits.shift()); //it removes the first element of the array
// console.log(fruits.slice(1,4)); //this method is not mutant-generating method it returns the array satisfying the rule we have set upon
// console.log(fruits)
//console.log(fruits.sort()); //it is also a mutant
// console.log(fruits.splice(2,2));
// console.log(fruits)
// console.log(fruits.toString());//this is not amutant generating method that means yous still have the access to the original array
// console.log(fruits)
//console.log(fruits.unshift("cat")); //this one returns the length of the array by making changes in the array itslef it is the mutant
//console.log(fruits.some());


// const fruit = ["apple","apple","ball","calt"];
// const someArg = fruit.some((item,i)=> item ==="bal"
// )
// console.log(someArg);

// const everyArg = fruit.every((item,i)=>{
//        return item.includes("a"&&"l")})
//        console.log(everyArg);

//       function maxvalue(m){
//             return totalval =  m.reduce((item,i)=>{return item > i ? (item):(i)});
//       }
//       console.log(maxvalue([-10,-2,-11]));

//       function percentagegenerator(a,b) {
//               return b/a;

              
//       }
//       console.log(percentagegenerator(50,100));

//       function
// myFunction
// (
// a, b, c, d, e, f
// )
// {
// return Math.pow(((c-(a + b))*d / e),f);

// }
// console.log(myFunction(6,5,4,3,2,1));

// // Write a function that takes two strings (a and b) as arguments
// // Return the number of times a occurs in b
// function myFunction1(a,b){
// return b.split(a).length -1;
// }
// console.log(myFunction1('w',"howow"));



// Write a function that takes a number (a) as argument
// If a is a whole number (has no decimal place), return true
// Otherwise, return false
// function myFunction(a)
// {
//  return ((a*10 % 10 == 0)? true:false)

// }
// console.log(myFunction(12.288));

// Write a function that takes two numbers (a and b) as arguments
// If a is smaller than b, divide a by b
// Otherwise, multiply both numbers
// Return the resulting value
// function myFunction(a, b)
// {

// return ((a<b) ? (a/b):(a*b))
// }
// console.log(myFunction(10,100));

// Write a function that takes two strings (a and b) as arguments
// If a contains b, append b to the beginning of a
// If not, append it to the end
// Return the concatenation
// function myFunction(a, b)
// {
// let num = a.concat(b).length;
// for(let i=0;i<num;i++){
//       return  (a.includes(b)) ? (b.concat(a)):(a.concat(b));
// }

// }
// console.log(myFunction('lips','s'));


// Write a function that takes a number (a) as argument
// Round a to the 2nd digit after the comma
// Return the rounded number
// function
// myFunction(a)
// {
// return Math.round(a*1000)/1000;
// // return Number(a.toFixed(2));
// }
// console.log(myFunction(1233.55660));


// Write a function that takes a number (a) as argument
// Split a into its individual digits and return them in an array
// Tipp: you might want to change the type of the number for the splitting
                        // function myFunction(a)
                        // {
                        // return a.toString().split("").map(a=>{
                        //         return Number(a)
                        // })
                        // }
                        // console.log(myFunction(1011));
// It seems like something happened to these strings
// Can you figure out how to clear up the chaos?
// Write a function that joins these strings together such that they form the following words:
// 'Javascript', 'Countryside', and 'Downtown'
// You might want to apply basic JS string methods such as replace(), split(), slice() etc
                //      function chaosSolve(a,b){
                //              //a
                //              let solvedA = String(a).toLowerCase().split('%');
                //              //b
                //              let solvedB = String(b).toLowerCase().replace('%','').split('').reverse();
                         
                //              let  solvedAll = solvedA.concat(solvedB);
                //              let solvedC =  solvedAll.toString();
                //               solvedC[0].toUpperCase();

                             
                       

                //      }   
                //      console.log(chaosSolve('ja%v%a','t%pircs'));

// This challenge is a little bit more complex
// Write a function that takes a number (a) as argument
// If a is prime, return a
// If not, return the next higher prime number
        