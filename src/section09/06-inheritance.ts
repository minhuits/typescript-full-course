/**
 * Inheritance
 */
class Parent {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  dance() {
    console.log(`parent: ${this.name}이 춤을 춥니다.`);
  }
}

class Child extends Parent {
  age: number;

  constructor(name: string, age: number) {
    super(name);

    this.age = age;
  }

  sing() {
    console.log(`child : ${this.name}이 노래를 부릅니다.`);
  }
}

const codefactory = new Parent('코드팩토리');
const ahri = new Child('아리', 12);

codefactory.dance();
// codefactory.sing();

ahri.dance();
ahri.sing();

let person: Parent;
person = codefactory; // 부모 클래스의 인스턴스를 자식 클래스의 타입으로 할당할 수 있다.
person = ahri; // 자식 클래스의 인스턴스를 부모 클래스의 타입으로 할당할 수 있다.

let person2: Child;
person2 = ahri; 
// person2 = codefactory; // 자식 클래스의 인스턴스를 부모 클래스의 타입으로 할당할 수 없다.

/**
* optional 프로퍼티를 유의하자
*/
class Parent2 {
  name: string;

  constructor(name: string) {
    this.name = name;
  }
}

class Child2 extends Parent2 {
  age?: number;

  constructor(name: string, age?: number) {
    super(name);
    this.age = age;
  }
}

const cf2 = new Parent2('코드팩토리');
const ahri2 = new Child2('아리', 20);

let child: Child2;
child = ahri2;
child = cf2; 