/**
 * Loopholes of Any
 * 
 * any 타입의 사용은 타입스크립트의 타입 검사를 무력화 시키는 효과가 있다.
 * 리팩토링할 때, any 타입을 사용하면 
 * 타입스크립트가 제공하는 장점을 활용할 수 없다.
 */
let number: number;
number = 10;

// number.toUpperCase();

// (number as any).toUpperCase();

const multiplyTwo = (x: number, y: number) => {
    return x * y;
}

let args1: any = '코드팩토리';
let args2: any = true;

multiplyTwo(args1, args2);
// multiplyTwo('코드팩토리', true);

let iu: any = { name: '아이유', age: 30 };
iu;

const callbackRunner = (x: number, y: number, callback: any) => {
    return callback(x);
}

const callback = (x: number, y: number) => {
    return x * y;
}

console.log(callbackRunner(5, 4, callback));