/**
 * Required Type
 */
interface Dog {
  name: string;
  age?: number;
  country?: string;
}

const requiredDog: Required<Dog> = {
  name: '모찌',
  age: 7,
  country: '한국'
} // Generic에 넣은 type의 모든 프로퍼티들이 다 필수가 되도록 만든다.