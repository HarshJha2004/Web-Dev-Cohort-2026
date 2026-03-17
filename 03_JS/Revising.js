// // Function create - 1st, normal function creation(function declaration).
    function addNumbers(num1, num2){
        const add = num1 + num2;
        return add;
    }

    const reserveResult = addNumbers(5, 6);
    // console.log(reserveResult);

// // one more option to create Fn -> using variable(fn expression).
    let cartoon = function(){
        console.log("Doreamon");
    }

// // 3rd option -> Arrow function Expression.
    const square = (num) => num * num;
    

    // Arrow fn is same as fn expression.
    // In arrow fn, it's not need a fn keyword.  
    // It uses arrow =>.
    // In arrow function when only one statement have to execute, that time it's not need of the {}, and also return keyword.
    
    const addTwoNumbers = (num1, num2) => num1 + num2;
    // console.log(addTwoNumbers(5, 3));

// // just for DRY Run:
    function cartoon1(){
    function cartoonInsideCartoon(){
        return 'Naruto';
    }
    return cartoonInsideCartoon;
    }

// // Array
    const fruits = ["mango", "Banana", "Apple", "Guava", false, 32];  //Array have index-based nature.

    // console.log(fruits[1]);
    // fruits.push("papaya") // To add elements end of the array.
    // console.log(fruits.length); // To check the array length.

    // console.log(fruits.includes("papaya")); // To check element present in array or not.

    // console.log(fruits.slice(3, 5));

    // console.log(fruits[3]);

// // Objects
    const personDetails = {
        name : "Harsh Jha",
        age : 21,
        Sex : "Male",
        BOD : "28/12/2004"
    }

    // console.log(typeof console.log);

    let choice = false;
    let strConvert = String(choice);

    console.log(strConvert);
    
    


