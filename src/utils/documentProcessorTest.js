import { concatDigits, getFirstDigitOfLine, getLastDigitofLine, splitIntoLines } from "./documentProcessor.js"

function splitsTextIntoLines(){
    const string = ` hello
    one two
    `.trim()

    const split = splitIntoLines(string)
    assert(splitIntoLines(string).length === 2, `length is ${splitIntoLines(string).length}`)
}

function returnsFirstDigit(){
    const result = getFirstDigitOfLine("1ew3sa4");
    assert(result === '1', `result is ${result}`)
}

function returnsFirstWrittenNumber(){
    const result = getFirstDigitOfLine("seven2ew3sa4");
    assert(result === '7', `result is ${result}`)
}

function returnsLastDigit(){
    const result = getLastDigitofLine("2123ds7d");
    assert(result === '7', `result is ${result}`)
}

function returnsLastWrittenNumber(){
    const result = getLastDigitofLine("seven2ew3sa4six");
    assert(result === '6', `result is ${result}`)
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
returnsFirstWrittenNumber();
returnsLastWrittenNumber();