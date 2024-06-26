//Exercise:3
//Functions
const addNumbers = (num1: number, num2: number): number => {
    return num1 + num2;
}

let sum = addNumbers(49, 57);
console.log(sum); 

const getFixedNumber = (): number => {
    return 56; // 
}
let fixeNumber = getFixedNumber();
console.log(fixeNumber);

const transformString = (input: string, toUpperCase?: boolean): string => {
    if (toUpperCase) {
        return input.toUpperCase();
    } else {
        return input.toLowerCase();
    }
};



