/**
 * Function Type
 */

// 함수의 타입을 선언하는 방법
type Mapper = (x: string) => string;

// Mapper 타입을 가지는 callback 함수를 인자로 받음
const runner = (callback: Mapper) => {
    return ['안유진', '장원영', '레이'].map(
        callback,
    );
}

// ['아이브 멤버: 안유진', '아이브 멤버: 장원영', '아이브 멤버: 레이']
console.log(runner((x) => `아이브 멤버: ${x}`));

// 함수의 타입을 선언하는 방법2
type MultiplyTwoNumbers = (x: number, y: number) => number;

// MultiplyTwoNumbers 타입을 가지는 multiplyTwoNumbers 함수를 선언
const multiplyTwoNumbers: MultiplyTwoNumbers = (x, y) => {
    return x + y;
}

/**
 * Interface로 함수 타입 선언하기
 */

interface IMultiplyTwoNumbers { 
    (x: number, y: number): number;
}

const multiplyTwoNumbers3: IMultiplyTwoNumbers = (x, y) => {
    // return true;
    return x * y;
}