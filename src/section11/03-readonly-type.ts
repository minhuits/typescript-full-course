/**
 * Readonly Type
 */
interface Cat {
  name: string;
  age: number;
}

const nyaong: Cat = {
  name: '냐옹이',
  age: 8
};

nyaong.name = '코드팩토리';

const bori: Readonly<Cat> = {
  name: '보리',
  age: 7,
} // 읽기 전용 속성이 된다. 

// bori.name = '아이유'; 
// 즉, 속성의 값을 변경할 수 없게 된다.

Object.freeze(bori);