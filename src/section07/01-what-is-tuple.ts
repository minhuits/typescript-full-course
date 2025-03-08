/**
 * Tuple
 */
let iveTopMembers: string[] = ['안유진', '장원영', '레이'];

let numberAndStringTuple: [number, string] = [
  23,
  '코드팩토리',
]

numberAndStringTuple.push('아이유');
console.log(numberAndStringTuple);

// 튜플을 더 명확하게 사용하기 위해 'readonly'를 사용하면 된다.
let unmodifiableTuple: readonly [number, string] = [
  23,
  '코드팩토리',
]

// unmodifiableTuple.push(); // Error

/**
 * Tuple 유추하기
 */
let actresses = ['김고은', '박소담', '전여빈'];

let actressesTuple = ['김고은', '박소담', '전여빈'] as const; // Tuple로 유추
const actressesTupleConst = ['김고은', '박소담', '전여빈'] as const; // Tuple로 유추

// 스프레드(Spread) 연산자 사용
let stringArray: string[] = [
  ...actressesTuple,
  ...actressesTupleConst,
]

/**
 * Named Tuple: Tuple에 이름 붙이기
 */
const namedTuple: [name: string, age: number] = [
  '코드팩토리',
  32,
]

/**
 * Assigning Tuple to Tuple: Tuple 간의 할당
 * 
 * Tuple은 같은 타입끼리만 할당이 가능하다.
 */
const tuple1: [string, string] = ['아이유', '유애나'];
const tuple2: [number, number] = [1, 2];

// let tuple3: [boolean, boolean] = tuple1; // Error
// let tuple4: [number, number, number] = tuple2; // Error

let tuple5: [number, number] = tuple2;

/**
 * Tuple과 Array의 관계
 * 
 * Tuple에서 Array로 할당하는 것은 가능하지만, 
 * Array에서 Tuple로 할당하는 것은 불가능하다.
 */
let ive: [string, string] = [
  '장원영',
  '안유진',
]

let stringArr: string[] = ive;

// let ive2: [string, string] = stringArr; // Error

/**
 * Multi Dimesional Tuple 
 */
const tuple2D: [string, number][] = [
  ['코드팩토리', 32],
  ['아이유', 31],
  ['김고은', 30],
]