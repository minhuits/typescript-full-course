/**
 * Types
 */
let helloText: string = 'Hello';

// Error: 
// 'boolean' 형식은 'string' 형식에 할당할 수 없습니다.ts(2322)
// helloText = true;

/**
 * 7개의 타입
 */
const stringValue: string = 'String';
const numberValue: number = 1;
// "target": "es2020"으로 변경해야 실행가능함.
const bigIntValue: bigint = BigInt(9999);
const booleanValue: boolean = true;
const symbolValue: symbol = Symbol(1);
const nullValue: null = null;
const undefinedValue: undefined = undefined;

/**
 * TS만 존재하는 타입
 */

// any - 아무 타입이나 입력할 수 있는 타입
let anyValue: any;
anyValue = 100;
anyValue = 'String';
anyValue = true;

let numberType: number = anyValue;
let stringType: string = anyValue;
let booleanType: boolean = anyValue;

// unknow - 알 수 없는 타입
// 해당 변수에 입력을 할 수는 있지만, 같은 'unknown' 타입 또는 'any' 타입만 할당할 수 있다.
let anyValue2: unknown;
anyValue2 = 100;
anyValue2 = 'String';
anyValue2 = true;

// Error:
// 'unknown' 형식은 'number' 형식에 할당할 수 없습니다.ts(2322)
// let numberType2: number = anyValue2;

// Error:
// 'unknown' 형식은 'string' 형식에 할당할 수 없습니다.ts(2322)
// let stringType2: string = anyValue2;

// Error:
// 'unknown' 형식은 'boolean' 형식에 할당할 수 없습니다.ts(2322)
// let booleanType2: boolean = anyValue2;
let unknownType2: unknown = anyValue2;
let anyType2: any = anyValue2;

// never - 어떤한 타입도 저장되거나 반환되지 않을 떄 사용하는 타입
// Error: 'null' 형식은 'never' 형식에 할당할 수 없습니다.ts(2322)
// let neverType:never = null;

// Error: 'undefined' 형식은 'never' 형식에 할당할 수 없습니다.ts(2322)
// let neverType:never = undefined;

// Error: '"String"' 형식은 'never' 형식에 할당할 수 없습니다.ts(2322)
// let neverType:never = 'String';

/**
 * List Type
 */
const stringListType: string[] = ['아이브', '레드벨벳', '블랙핑크'];
const booleanListType: boolean[] = [true, false];