/**
 * readonly 프로퍼티: 
 * 객체 생성 시점에만 값을 할당할 수 있고, 
 * 이후에는 값을 변경할 수 없는 프로퍼티
 */
class Idol {
  readonly name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

const yuJin = new Idol('안유진', 23);

yuJin.age = 32;
// yuJin.name = '코드팩토리';