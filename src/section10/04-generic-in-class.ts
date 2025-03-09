/**
 * Class에서 Generic 사용하기
 */
class Pagination<Data, Message> {
  data: Data[] = [];
  message?: Message;
  lastFetchedAt?: Date;
} // class에서 Generic 사용하기: class 이름 뒤에 <T>를 붙여서 사용

const pgData = new Pagination<number, string>();
pgData.data; // type: number[]
pgData.message; // type: string | undefined
pgData.lastFetchedAt; // type: Date | undefined

class Pagination2<Data, Message> {
  data: Data[] = [];
  message?: Message;
  lastFetchedAt?: Date;

  constructor(data: Data[], message?: Message, lastFetchedAt?: Date) {
    this.data = data;
    this.message = message;
    this.lastFetchedAt = lastFetchedAt;
  }
}

const pagination2 = new Pagination2<number, string>([123, 456]); // message, lastFetchedAt는 optional이므로 생략 가능

pagination2.data;
pagination2.message;
pagination2.lastFetchedAt;

class DefaultGeneric<T = boolean> {
  data: T[] = [];
} // class에서 Generic 사용 시 default 값을 지정할 수 있음

const defaultGeneric = new DefaultGeneric(); // T가 boolean으로 지정됨
defaultGeneric.data; // type: boolean[]