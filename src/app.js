import { collaborateAndSumValues } from "./utils/documentProcessor.js";
import { promises } from "fs";
import 'fs'

async function readFile(path){
    const result = await promises.readFile(path, {encoding: 'utf8'})
    return result.trim();
}

async function run(){
    const file = await readFile("./src/utils/document.txt");
    const result = collaborateAndSumValues(file);

    console.log(result)
}

await run()