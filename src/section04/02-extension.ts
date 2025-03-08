/**
 * Extension 
 */
interface IName {
  name: string;
}

// 상속
interface IIdol extends IName {
  age: number;
}

const idol: IIdol = {
  name: '안유진',
  age: 23,
}

type TName = {
  name: string;
}

type TIdol = TName & {
  age: number
};

const idol2: TIdol = {
  name: '아이유',
  age: 29,
}

// type TName를 상속받는 IIdol2 인터페이스
interface IIdol2 extends TName {
  age: number;
}

const idol3: IIdol2 = {
  name: '제니',
  age: 29,
}

type TIdol2 = IName & {
  age: number;
}

const idol4: TIdol2 = {
  name: '지수',
  age: 31,
}

/**
* extending multiple
*/

// DogName, DogAge, DogBreed를 상속받는 Dog 타입
type DogName = {
  name: string;
}

type DogAge = {
  age: number;
}

type DogBreed = {
  breed: string;
}

type Dog = DogName & DogAge & DogBreed;

const dog: Dog = {
  name: '코드팩토리',
  age: 32,
  breed: 'Poodl',
}

// CatName, CatAge를 상속받는 Cat 인터페이스
interface CatName {
  name: string;
}
interface CatAge {
  age: number;
}

interface Cat extends CatName, CatAge {
  breed: string;
}

const cat: Cat = {
  name: '오리',
  age: 7,
  breed: '코리안 냥냥이',
}

/**
* Overrding
*/
type THeight = {
  height: number;
}

type TRectangle = THeight & {
  height: string;
  width: number;
}

// Error: 블록 범위 변수 'rectangle'을(를) 다시 선언할 수 없습니다.ts(2451)
// const rectangle: TRectangle = {
//     height:,
//     width: 100,
// }

type TWidth = {
  width: number | string;
}
type TRectangle2 = TWidth & { // TWidth (width: number) 를 상속받는 TRectangle2 타입
  width: number;
  height: number;
}

const rectangle: TRectangle2 = {
  height: 100,
  width: 200,
}

interface IHeight {
  height: number;
}

// Error: 'height' 속성의 형식이 호환되지 않습니다.
// 'string' 형식은 'number' 형식에 할당할 수 없습니다.ts(2430)
// interface IRectangle extends IHeight {
//   height: string;
//   width: number;
// }

interface IWidth {
  width: number | string;
}

interface IRectangle extends IWidth {
  width: number;
  height: number;
}