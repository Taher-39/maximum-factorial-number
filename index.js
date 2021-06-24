/* main function */
function maxFactorialNumber(array, n) {
    let QuotientArray = [];
    for (let i = 0; i < array.length; i++) {
        const Quotient = Math.ceil(array[i] / n);
        QuotientArray.push(Quotient)
    }
    
    let factorialQuotient = factorializeArray(QuotientArray);

    let maxNumber = maxArray(factorialQuotient)

    return maxNumber;
}

/* get new factorialize array */
function factorializeArray(newArray) {
    let factorialQuotient = []
    for (let j = 0; j < newArray.length; j++) {
        let factorial = factorialize(newArray[j]);
        factorialQuotient.push(factorial);
    }

    return factorialQuotient;
}

/* factorial function*/
function factorialize(num) {
    if (num === 0 || num === 1)
        return 1;
    for (let i = num - 1; i >= 1; i--) {
        num *= i;
    }
    return num;
}

/* get maximum element an array */
function maxArray(arr) {
    let maxElement = arr[0];
    arr.forEach(element => {
        if (element > maxElement) {
            maxElement = element;
        }
    });
    return maxElement;
};

const arr = [1, 0, 8, 16];
const result = maxFactorialNumber(arr, 4);
console.log(result);
