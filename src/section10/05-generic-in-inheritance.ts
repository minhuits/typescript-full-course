/**
 * Generic in Inheritance
 */
class BaseCache<T> {
  data: T[] = [];
}

class StringCache extends BaseCache<string> { }

const stringCache = new StringCache();
stringCache.data; // string[]

class GenericChild<T, Message> extends BaseCache<T> {
  message?: Message;

  constructor(message?: Message) {
    super();
    this.message = message;
  }
} // GenericChild<T, Message>는 BaseCache<T>를 상속받는다.

const genericChild = new GenericChild<string, string>('error'); // GenericChild<string, string>는 BaseCache<string>을 상속받는다.
genericChild.data; // string[]
genericChild.message; // string

/**
* 제너릭의 inheritance
*/
interface BaseGeneric {
  name: string;
}

class Idol<T extends BaseGeneric> {
  information: T; // 필수 속성

  constructor(information: T) {
    this.information = information;
  }
} // Idol<T>는 BaseGeneric을 상속받는다. 

const yuJin = new Idol({
  name: '안유진', // 필수 속성
  // age: 23,
});

/**
* keyof 함께 사용하기
*/
const testObj = {
  a: 1,
  b: 2,
  c: 3,
}

function objectParser<T, K extends keyof T>(obj: T, key: K) {
  return obj[key];
} // objectParser<T, K>는 T와 K를 받아들이고, K는 T의 key로 제한한다.

const val = objectParser(testObj, 'c');

/**
* Ternary
* 1=== 2 ? true : false
*/
class Idol2 {
  type?: string;
}

class FemaleIdol extends Idol2 {
  type: 'Female Idol' = 'Female Idol';
}

class MaleIdol extends Idol2 {
  type: 'Male Idol' = 'Male Idol';
}

type SpecificIdol<T extends Idol2> = T extends MaleIdol ? MaleIdol : FemaleIdol;
// T가 MaleIdol 타입이면 MaleIdol, 아니면 FemaleIdol 타입을 반환한다.

const idol2: SpecificIdol<MaleIdol> = new MaleIdol(); // MaleIdol
const idol3: SpecificIdol<FemaleIdol> = new FemaleIdol(); // FemaleIdol