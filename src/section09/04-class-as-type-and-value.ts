/**
 * Class as Type and Value
 */
class Dog {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  bark() {
    return `${this.name}가 짖습니다`;
  }
}

let ori = new Dog('오리');
console.log(ori.bark());

// ori = '오리';

// 클래스는 객체이기 때문에 클래스를 변수에 할당할 수 있습니다.
ori = {
  name: '별이',
  bark() {
    return `${this.name}가 짖습니다.`;
  }
} 
// 이렇게 할당하면 ori는 
// Dog 클래스의 인스턴스가 아니라 객체가 됩니다.

console.log(ori);