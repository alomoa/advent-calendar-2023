import { concatDigits, getFirstDigitOfLine, getLastDigitofLine, splitIntoLines } from "./day1.js"

function splitsTextIntoLines(){
    const string = ` hello
    one two
    `.trim()

    const split = splitIntoLines(string)
    assert(splitIntoLines(string).length === 2, `length is ${splitIntoLines(string).length}`)
}

function returnsFirstDigit(){
    const result = getFirstDigitOfLine("2ew3sa4");
    assert(result === '2', `result is ${result}`)
}

function returnsLastDigit(){
    const result = getLastDigitofLine("2123dsd7");
    assert(result === '7', `result is ${result}`)
    
}

function returnsConcatDigits(){
    const result = concatDigits("2", "5");
    assert(result === '25', `result is ${result}`)


}

function assert(condition, message){

    if(!condition){
        throw new Error(message || "Assersion failed")
    }
}

splitsTextIntoLines();
returnsFirstDigit();
returnsLastDigit();
returnsConcatDigits();