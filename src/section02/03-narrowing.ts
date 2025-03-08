/**
 * Narrowing
 * 
 * Narrowing은 Union 타입에서 더욱 구체적인 타입으로
 * 논리적으로 유추 할 수 있게 되는걸 의미한다.
 */

// let numberOrString: number | string = 'Code Factory';
// numberOrString;

// const decimal = 12.3278;
// console.log(decimal.toFixed(2));

// numberOrString.toFixed();

/**
 * Narrowing 종류
 * 
 * 1) Assignment Narrowing (할당 내로잉)
 * 2) typeof Narrowing (타입 내로잉)
 * 3) Truthiness Narrowing (참거짓 내로잉)
 * 4) Equality Narrowing (동등 내로잉)
 * 5) in operator narrowing (in 연산자 내로잉)
 * 6) instanceof narrowing (instanceof 내로잉)
 * 7) discrimated union narrowing (차별된 유니언 내로잉)
 * 8) exhaustiveness checking (완전성 검사)
 */

// (1) Assignment Narrowing
// 특정 값을 할당해서 내로잉
let numbOrString: number | string = '아이유';

numbOrString.toString();

// (2) typeof narrowing
numbOrString = Math.random() > 0.5 ? 1123 : '아이유'; // (number or string) type

if (typeof numbOrString === 'string') {
  numbOrString; // string
} else {
  numbOrString; // number
}

// (3) Truthiness Narrowing 
let nullOrString: null | string[] = Math.random() > 0.5 ? null : ['아이유', '레드벨벳']; // (null or string[]) type 

if (nullOrString) {
  nullOrString; // string[]
} else {
  nullOrString; // null
}

// (4) Equality Narrowing
let numbOrString2: number | string = Math.random() > 0.5 ?
  1123 : '아이유'; // (number or string) type
let stringOrBool2: string | boolean = Math.random() > 0.5 ?
  '아이브' : true; // (string or boolean) type

// (number or string) type === (string or boolean) type => (string) type
if (numbOrString2 === stringOrBool2) {
  numbOrString2; // number
  stringOrBool2; // string
} else {
  numbOrString2; // string
  stringOrBool2; // boolean
}

let numberOrStringOrNull: number | string | null = Math.random() > 0.5 ?
  1123 : Math.random() > 0.5 ? '안유진' : null; // (number or string or null) type

// (number or string or null) type === (number or string) type => (number or string) type
if (typeof numberOrStringOrNull === 'number') {
  numberOrStringOrNull; // number
} else {
  numberOrStringOrNull; // string or null
}

// (5) in operator narrowing 
interface Human {
  name: string;
  age: number;
}

interface Dog {
  name: string;
  type: string;
}

let human: Human = {
  name: '안유진',
  age: 23,
}

let dog: Dog = {
  name: '오리',
  type: 'Yorkshire Terrier',
}

let humanOrDog: Human | Dog = Math.random() > 0.5 ?
  human : dog;

// 'type' in humanOrDog => Dog
if ('type' in humanOrDog) {
  humanOrDog; // Dog
} else {
  humanOrDog; // Human
}

// (6) instanceof narrowing
let dateOrString: Date | string = Math.random() > 0.5 ?
  new Date() : '코드팩토리';

// instanceof 연산자로 Date 타입인지 확인
if (dateOrString instanceof Date) {
  dateOrString; // Date
} else {
  dateOrString; // string
}

// (7) Discriminated Union Narrowing 
interface Animal {
  type: 'dog' | 'human';
  height?: number;
  // 강아지의 종
  breed?: string;
}

let animal: Animal = Math.random() > 0.5 ?
  {
    type: 'human',
    height: 177,
  } : {
    type: 'dog',
    breed: 'Yorkshire Terrier',
  }; // (Human or Dog) type

// animal.type === 'human' => Human
if (animal.type === 'human') {
  animal.height; // number or undefined
} else {
  animal.breed; // string or undefined
  animal.height; // number or undefined
}

interface Human2 {
  type: 'human';
  height: number;
}

interface Dog2 {
  type: 'dog',
  breed: string;
}

interface Fish2 {
  type: 'fish';
  length: number;
}

type HumanOrDog2 = Human2 | Dog2 | Fish2;

let humanOrDog2: HumanOrDog2 = Math.random() > 0.5 ?
  {
    type: 'human',
    height: 177,
  } : Math.random() > 0.5 ? {
    type: 'dog',
    breed: 'Yorkshire Terrier',
  } : {
    type: 'fish',
    length: 12,
  };

// humanOrDog2.type === 'human' => Human2
if (humanOrDog2.type === 'human') {
  humanOrDog2; // Human2 type
} else {
  humanOrDog2; // (Dog2 or Fish2) type
}

// (8) Exhuastiveness Checking (완전성 검사)
switch (humanOrDog2.type) {
  case 'human':
    humanOrDog2; // Human2 type
    break;
  case 'dog':
    humanOrDog2; // Dog2 type
    break;
  case 'fish':
    humanOrDog2; // Fish2 type
    break;
  default:
    humanOrDog2; // never type

    const _check: never = humanOrDog2; // never type check
    break;
}