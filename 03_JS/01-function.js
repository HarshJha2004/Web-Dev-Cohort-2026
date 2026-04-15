// function declaration
function addThreeNumbers(number1, number2, number3){
    const storeNumber = number1 + number2 + number3;
    return storeNumber;
}

const reserveNumber = addThreeNumbers(2, 5, 7);
console.log(reserveNumber);

// function expression
    let addFourNumbers = function(nums1, nums2, nums3, nums4){
        let storeResultNumbers = nums1 + nums2 + nums3 + nums4;
        return storeResultNumbers;
    }

    let finalNumbers = addFourNumbers(4, 4, 4, 4);
    console.log(finalNumbers);

// arrow fn

    let multiply = (pro1, pro2) => pro1 * pro2;
    
    let callmul = multiply(2, 3);
    console.log(callmul);

// example program of arrow fn.
const isUserAllowedToOpenBankAc = (age, minBal) => {return age >= 18 && minBal >= 5000}

console.log(isUserAllowedToOpenBankAc(18, 6000));