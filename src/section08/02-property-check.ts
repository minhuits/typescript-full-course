/**
 * Property Check
 * 
 * 초과 속성 검사
 */
type TName = {
  name: string;
}

type TAge = {
  age: number;
}

const iu = {
  name: '아이유',
  age: 30,
}


/**
 * 우리가 이미 선언되어 있는 객체 변수를 다른 변수에다가 옮겨 넣을 때는
 * 객체의 type을 본다.
 * 
 */
const testName: TName = iu; // OK: Narrowing (TNmae)
const testAge: TAge = iu;  // OK: Narrowing (TAge)