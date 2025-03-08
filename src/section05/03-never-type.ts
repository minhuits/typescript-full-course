/**
 * Never Type: 일어날 수 없는 일을 나타내는 타입
 */
// (1) 함수에서 에러를 던질때
function throwError() : never{
  throw Error();
}

// (2) 무한 룹
function infiniteLoop(): never{
  while(true){

  }
}

// (3) 존재 할 수 없는 인터섹션
type StringAndNumber = string & number;

// Error: Type '10' is not assignable to type 'never'.
// let neverType: never = 10; 

// Error: Type 'undefined' is not assignable to type 'never'.
// let neverType: never = undefined; 

// Error: Type 'null' is not assignable to type 'never'.
// let neverType: never = null; 