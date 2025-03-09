/**
 * Generic 함수에서 사용하기
 */

function whatValue(value: any) {
  return value;
}

const value = whatValue('test');


function genericWhatValue<T>(value: T): T {
  return value;
} // T는 타입 변수 (Type Variable) 라고 부름 (어떤 타입이든 가능) 

const genericResult1 = genericWhatValue<number>(123); // number 타입 (명시적으로 타입을 지정)

let genericResult2 = genericWhatValue('123') // string 타입 (타입 추론)

function multipleGenerics<X, Y, Z>(x: X, y: Y, z: Z) {
  return {
    x,
    y,
    z,
  }
} // 여러 개의 타입 변수를 사용할 수 있음

const multipleGenericResult = multipleGenerics<number, boolean, string>(
  123,
  true,
  '123',
); // 명시적으로 타입을 지정

const multipleGenericResult2 = multipleGenerics(
  123,
  true,
  '123',
); // 타입 추론

function getTuple<X, Y>(val1: X, val2: Y) {
  return [val1, val2] as const;
} // as const를 사용하면 tuple 타입으로 반환

const tuple = getTuple(true, 100); // [boolean, number]

class Idol {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

class Car {
  brand: string;
  codeName: string;

  constructor(brand: string, codeName: string) {
    this.brand = brand;
    this.codeName = codeName;
  }
}

function instantiator<T extends { new(...args: any[]): {} }>(
  constructor: T, ...args: any[]
) {
  return new constructor(...args);
} // T는 제네릭 타입 변수로서, new 연산자를 사용할 수 있는 타입만 가능.

console.log(instantiator(Idol, '아이유', 23)); // Idol { name: '아이유', age: 23 }
console.log(instantiator(Car, 'BMW', 1111)); // Car { brand: 'BMW', codeName: 1111 }