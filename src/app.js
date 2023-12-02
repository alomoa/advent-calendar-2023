import { solve } from "./days/day1.js";
import { promises } from "fs";
import 'fs'

async function readFile(path){
    const result = await promises.readFile(path, {encoding: 'utf8'})
    return result
}

async function day1(){
    const file = await readFile("./src/days/day1.txt");
    const result = solve(file);

    console.log(result)
}

await day1()