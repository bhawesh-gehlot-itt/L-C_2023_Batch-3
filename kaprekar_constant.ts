function getNextNumber(previousNumber: number): number {
    const digits = previousNumber.toString().padStart(4, "0").split("").map(Number);

    const ascending = parseInt(digits.slice().sort().join(""));
    const descending = parseInt(digits.slice().sort((a, b) => b - a).join(""));

    return descending - ascending;
}

function findKaprekarSteps(number: number): number {
    const kaprekarConstant = 6174;
    let steps = 0;

    while (number !== kaprekarConstant) {
        if (steps > 7) {
            return -1;
        }

        number = getNextNumber(number);
        steps++;

        if (number === kaprekarConstant) {
            break;
        }
    }

    return steps;
}

const inputNumber = 1459;
if (inputNumber.toString().length !== 4) {
    console.log("Please enter a 4 digit number.")
} else {
    const stepsRequired = findKaprekarSteps(inputNumber);
    if (stepsRequired >= 0) {
        console.log(`Number of steps for ${inputNumber} to reach 6174: ${stepsRequired}`);
    } else {
        console.log("Number cannot be converted to Kaprekar constant.");
    }
}