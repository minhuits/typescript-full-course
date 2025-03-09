/**
 * Export
 */

// 1. export default 
// export default class IdolModel {
//   name: string;
//   age: number;

//   constructor(name: string, age: number) {
//     this.name = name;
//     this.age = age;
//   }
// }
class IdolModel {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

const number = 12;

// export default number;

// export interface ICat {
//   name: string;
//   breed: string;
// }

interface ICat {
  name: string;
  breed: string;
}

// 3. 다중 export
export default {
  IdolModel,
  number,
}