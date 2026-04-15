// array
const fruits = ['Apple', "mango", "Banana", "orange"];

//high-order fn
function outer(){
   return function inner(){
        console.log('Hello');
    }
}

const result = outer(); 
console.log(outer());