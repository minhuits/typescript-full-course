/**
 * Intersection <==> Union
 */
interface Human{
  name: string;
  age: number;
}

interface Contacts{
  phone: string;
  address: string;
}

type HumanAndContacts = Human & Contacts;

let humanAndContacts: HumanAndContacts = {
  name: '코드팩토리',
  age: 32,
  phone: '01012341234',
  address: '서울시' 
};

// primitive 값을 intersection으로 묶으면 never 타입이 된다.
type NumberAndString = number & string; // type NumberAndString = never

// let numberAndString: NumberAndString = never;