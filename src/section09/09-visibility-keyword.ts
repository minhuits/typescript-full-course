/**
 * Visibility Keyword
 * 
 * 1) public (기본값) - 어디서든 접근이 가능하다
 * 2) protected - 현재 클래스 및 하위 (자식) 클래스에서 접근 가능하다.
 * 3) private - 현재 클래스 내부에서만 접근 가능하다.
 * 4) # - JS에서 private 키워드를 사용할 수 있다.
 */
class PropertyTestParent {
  public publicProperty = 'public property'; // 어디서든 접근 가능
  protected protectedProperty = 'protected property'; // 현재 클래스 및 하위 (자식) 클래스에서 접근 가능
  private privateProperty = 'private property'; // 현재 클래스 내부에서만 접근 가능
  #jsPrivateProperty = 'js private property'; // 현재 클래스 내부에서만 접근 가능

  test() {
    this.publicProperty;
    this.protectedProperty;
    this.privateProperty;
    this.#jsPrivateProperty
  }
}

class PropertyTestChild extends PropertyTestParent {
  test() {
    this.publicProperty;
    this.protectedProperty;
    // this.privateProperty; // Error: private(ts)
    // this.#jsPrivateProperty // Error: private(js)
  }
}

const instance = new PropertyTestChild();

instance.publicProperty;