/**
 * Class Decorator
 * 
 * 선언할 때 한 번만 실행된다.
 */
@Test
@Frozen
@LogTestVoid()
@LogTest('PROD')
@ChangeClass
class Idol {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

function Test(constructor: Function) {
  console.log(constructor);
}

function Frozen(constructor: Function) {
  Object.freeze(constructor);
  Object.freeze(constructor.prototype); 
}

const yuJin = new Idol('안유진', 23);

console.log(Object.isFrozen(Object.getPrototypeOf(yuJin))); 

// decorator factory
function LogTestVoid() {
  return function (constructor: Function) {
    console.log(`[Void] ${constructor}가 실행됐습니다.`);
  }
}
function LogTest(env: string) {
  return function (constructor: Function) {
    console.log(`[${env}] ${constructor}가 실행됐습니다.`);
  }
}

console.log('-----------------------');

const wonYoung = new Idol('장원영', 22);
console.log(wonYoung);

function ChangeClass<T extends { new(...args: any[]): {} }>(constructor: T) {
  return class extends constructor {
    groupName = '아이브';

    constructor(...params: any[]) {
      super(...params);

      console.log('constructor instantiated');
    }
  }
} // 응용: class 덮어쓰기