//split the lines
//get the first number of each line
//get the second number of each line
//concatenate them
//add all the things

const numberString = {
    "one" : "1",
    "two": "2",
    "three": "3",
    "four": "4",
    "five": "5",
    "six": "6",
    "seven": "7",
    "eight": "8",
    "nine": "9"
}
const writtenNumbersPattern = Object.keys(numberString).join("|");
const digitPattern = "\\d";

const numberRegex = new RegExp(digitPattern + "|" + writtenNumbersPattern, "g");

export function collaborateAndSumValues(input){
    const split = splitIntoLines(input)

    const numbers = [];

    for (let index = 0; index < split.length; index++) {
        const line = split[index];
        const first = getFirstDigitOfLine(line);
        const last = getLastDigitofLine(line);
        const concat = concatDigits(first, last);
        numbers.push(parseInt(concat));
    }

    const sum = sumArray(numbers);
    return sum

}

export function splitIntoLines(input){
    return input.split('\n')
}

export function getFirstDigitOfLine(input){
    const rejexResult = input.match(numberRegex);
    const firstResult = rejexResult[0];
    if(numberString[firstResult]){
        return numberString[firstResult]
    }
    return firstResult;
}

export function getLastDigitofLine(input){
    const rejexResult = input.match(numberRegex)
    const lastResult = rejexResult[rejexResult.length -1];
    if(numberString[lastResult]){
        return numberString[lastResult]
    }
    return lastResult;
}

export function concatDigits(a, b){
    return a.concat(b);
}

export function sumArray(array){
    const sum = array.reduce((previous, current) => previous + current, 0);
    return sum;
}




