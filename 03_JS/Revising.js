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
    console.log(addTwoNumbers(5, 3));
// // just for DRY Run:
    function cartoon1(){
    function cartoonInsideCartoon(){
        return 'Naruto';
    }
    return cartoonInsideCartoon;
}



