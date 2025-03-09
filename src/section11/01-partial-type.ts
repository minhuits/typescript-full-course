/**
 * Partial Type
 */
interface Idol {
  name: string;
  age: number;
  groupName: string;
}

const yuJin: Idol = {
  name: '안유진',
  age: 23,
  groupName: '아이브',
}

function updateIdol(original: Idol, updates: Partial<Idol>): Idol {
  return {
    ...original,
    ...updates,
  }
} // 데이터를 부분적으로 수정할 수 있다

console.log(yuJin);
console.log(updateIdol(yuJin, {
  age: 27,
}));
console.log(updateIdol(yuJin, {
  name: '코드팩토리',
  groupName: '주식회사 코드팩토리',
}));