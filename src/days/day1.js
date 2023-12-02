//split the lines
//get the first number of each line
//get the second number of each line
//concatenate them
//add all the things
export function solve(input){
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
    const firstDigitRegex = /\d/;
    const result = input.match(firstDigitRegex);
    return result[0];
}

export function getLastDigitofLine(input){
    const firstDigitRegex = /\d/;
    const split = input.split("");
    const reversed = split.reverse().join();

    const result = reversed.match(firstDigitRegex)

    return result[0]
}

export function concatDigits(a, b){
    return a.concat(b);
}

export function sumArray(array){
    const sum = array.reduce((previous, current) => previous + current, 0);
    return sum;
}




