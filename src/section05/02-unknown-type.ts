/**
 * Unknown Type (알 수 없는 타입)
 */

let anyValue: any;

anyValue = 24;
anyValue = '아이유';
anyValue = false;
anyValue = [];
anyValue = {};
anyValue = null;
anyValue = undefined;

let unknownValue: unknown;

unknownValue = 24;
unknownValue = '아이유';
unknownValue = false;
unknownValue = [];
unknownValue = {};
unknownValue = null;
unknownValue = undefined;

/**
 * 어떤 타입의 변수를 새로 선언하든 
 * 그 값에는 any 타입의 다른 변수 값을 할당할 수 있다.
 */
// let anyType: any = anyValue;
// let unknownType: unknown = anyValue;
// let booleanType: boolean = anyValue;
// let arrayType: string[] = anyValue;
// let objectType: {} = anyValue;
// let nullType: null = anyValue;
// let undefinedType: undefined = anyValue;

/**
 * unknown 타입으로 assigin 하면,
 * any 타입으로 선언된 변수에는 
 * any 또는 unknown 타입의 변수 값만 할당이 가능하다.
 */
// let anyType: any = unknownValue;
// let unknownType: unknown = unknownValue;

// Erorr:
// let booleanType: boolean = unknownValue;
// let arrayType: string[] = unknownValue;
// let objectType: {} = unknownValue;
// let nullType: null = unknownValue;
// let undefinedType: undefined = unknownValue;

anyValue.toUpperCase(); // any 타입은 모든 메소드 사용 가능
anyValue.name; // any 타입은 모든 프로퍼티 사용 가능
new anyValue(); // any 타입은 모든 생성자 사용 가능

// unknownValue.toUpperCase(); // Error
// unknownValue.name; // Error
// new unknownValue(); // Error

function isString(target: unknown): target is string {
    return typeof target === 'string';
}

let testVal: unknown;

if (isString(testVal)) {
    testVal;
}

/**
 * Union Type
 */
type uOrString = unknown | string; // unknown
type uOrBoolean = unknown | boolean; // unknown
type uOrNumber = unknown | number; // unknown
type uOrAny = unknown | any; // any
type anyOrU = any | unknown; // any

/**
 * Intersection Type
 */
type uAndString = unknown & string; // string
type uAndBoolean = unknown & boolean; // boolean
type uAndNumber = unknown & number; // number
type uAndAny = unknown & any; // any
type anyAndU = any & unknown; // any

/**
 * Operator 사용
 * 
 * unknown 타입은 다른 타입과 연산이 불가능하다.
 * 그러나, 타입 체크를 통해 연산이 가능하다.
 */
let number1: unknown = 10;
let number2: unknown = 20;

// number1 + number2; // Error
// number1 - number2; // Error
// number1 * number2; // Error
// number1 / number2; // Error

number1 === number2; // 타입 체크: 같은지 확인
number1 == number2; // 타입을 제외하고 값만 체크: 같은지 확인
number1 !== number2; // 타입 체크: 다른지 확인
number1 != number2; // 타입을 제외하고 값만 체크: 다른지 확인