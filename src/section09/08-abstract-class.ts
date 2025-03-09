/**
 * Abstract class
 * 
 * 1. 인스턴스화 할 수 필요가 없는데 공유되는 값들을 프로퍼티 또는 메소들을 정의하고 싶을 때 사용한다.
 * 2. 다른 클래스에서 상속받을 때 사용한다.
 * 
 */
abstract class ModelWithId {
  id: number;

  constructor(id: number) {
    this.id = id;
  }
}

// const modelWithId = new ModelWithId(123);

class Product extends ModelWithId { }

const product = new Product(1);
product.id;

abstract class ModelWithAbstractMethod {
  abstract shout(name: string): string;
}

class Person extends ModelWithAbstractMethod {
  shout(name: string): string {
    return '소리질러~';
  }
}

