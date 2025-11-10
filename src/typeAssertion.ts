//Type Assertion

let anything : any;

anything = 20;

(anything as number)

const convertKgToGm = (input: string | number) : string | number | undefined => {
if(typeof input === "number"){
    return input * 1000;
} else if(typeof input === "string"){
    const [value] = input.split(" ");
    return `Converted Input is: ${Number(value) * 1000}`;
}
}

const result1 = convertKgToGm(2);
console.log({result1});
const result2 = convertKgToGm("2 KG");
console.log({result2});

type customError = {
    message: string,
}

try{

} catch(error){
    console.log((error as customError).message);
}