/**
 * Type and Interface
 * 
 * 타입은 쉽게 말해서 TS의 타입에 이름을 지어주는 역할을 한다.
 */

type NewStringType = string;

type NewNullType = null;
type NewNumberType = number;

// union type
type MaleORFemale = 'male' | 'female';

// "moduleDetection": "force",
const stringValue: NewStringType = 'String';

// Object Type
type IdolObjectType = {
  name: string;
  year: number;
};

const yuJin1: IdolObjectType = { name: '안유진', year: 2002 };

/**
 * Interface
 */

interface IdolInterfaceType {
  name: string;
  year: number;
}

const yuJin2: IdolInterfaceType = { name: '안유진', year: 2002 };

interface IdolInterfaceType2 {
  name: NewStringType;
  year: NewNumberType;
}

const yuJin3: IdolInterfaceType2 = { name: '안유진', year: 2002 };

// Optional
interface IdolOptional {
  name: string;
  year?: number;
}

const yuJin4: IdolOptional = { name: '안유진', year: 2002 };
const yuJin5: IdolOptional = { name: '안유진' };

/**
 * interface와 Type의 차이점:
 * 인터페이스는 기본적으로 객체 형테로 들어간다. (함수도 일반 객체도 선언할 수 있다)
 * 그러나 type처럼 primitive를 나열할 수 없다. 즉 type처럼 선언할 수 없다.
 */