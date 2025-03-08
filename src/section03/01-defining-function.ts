/**
 * Defining Function
 */

// ERROR: 'name' 매개 변수에는 암시적으로 'any' 형식이 포함됩니다.ts(7006)
// function printName(name){ 
//     console.log(name);
// }

function printName(name: string) {
  console.log(name); // string
}

function returnTwoCouples(person1: string, person2: string) {
  return `${person1}과 ${person2}는 사귀고 있습니다.`
}

console.log(returnTwoCouples('아이유', '코드팩토리'));

// Error: 'number' 형식의 인수는 'string' 형식의 매개 변수에 할당될 수 없습니다.ts(2345)
// returnTwoCouples(0, 1); 


// Error: 2개의 인수가 필요한데 1개를 가져왔습니다.ts(2554)
// returnTwoCouples('아이유'); 

// Error: 2개의 인수가 필요한데 3개를 가져왔습니다.ts(2554)
// returnTwoCouples('아이유', '코드팩토리', '레드벨벳'); 

/**
* Optional Parameter
*/
function mulitplyOrReturn(x: number, y?: number) { // y?: number | undefined
  if (y) {
      return x * y;
  } else {
      return x;
  }
}

console.log(mulitplyOrReturn(10, 20)); // 200
console.log(mulitplyOrReturn(10)); // 10

function multiplyOrReturn2(x: number, y: number = 20) {
  return x * y;
}

console.log(multiplyOrReturn2(10));
console.log(multiplyOrReturn2(10, 30));

/**
* 나머지 매개변수
*/
function getInfiniteParameters(...args: string[]) {
  return args.map((x) => `너무좋아 ${x}`);
}

console.log(getInfiniteParameters('아이유', '아이브', '블랙핑크'))

// ERROR: 'number' 형식의 인수는 'string' 형식의 매개 변수에 할당될 수 없습니다.ts(2345)
// console.log(getInfiniteParameters(1, 2, 3)) 

/**
* Return Type
*/

// number 타입을 반환하는 함수
function addTwoNumbers(x: number, y: number) {
  return x + y;
}

addTwoNumbers(10, 20);

// 10 또는 '랜덤'을 반환하는 함수
function randomNumber() {
  return Math.random() > 0.5 ?
      10 : '랜덤';
}

randomNumber(); // 10 또는 '랜덤'

function subtractTwoNumbers(x: number, y: number): number{
  // return '이게 반환이 되나?';
  return x - y;
}

const subtracTwoNumbersArrow = (x: number, y: number) : number => {
  return x - y;
}

/**
* 특수 반환 타입
* 
* void / never
*/

// void: 반환값이 없는 함수
function doNotReturn(): void{
  console.log('저는 반환을 하지 않습니다.');
}

doNotReturn();

// never: 함수가 항상 예외를 던지거나 무한 루프에 빠지는 경우
function neverEndingLoop() : never{
  while(true){
    // 무한 루프
  }
}

function throwErro2() : never{
  throw Error(); // Error를 던지는 경우
}