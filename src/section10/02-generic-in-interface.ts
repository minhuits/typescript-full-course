/**
 * Generic in Interface
 */
interface Cache<T> {
  data: T[];
  lastUpdate: Date;
}

const cache1: Cache<string> = {
  data: ['data1', 'data2'],
  lastUpdate: new Date(),
}

console.log(cache1.data); // [ 'data1', 'data2' ]
console.log(cache1.lastUpdate); // 2021-08-29T14:00:00.000Z


// const cach2: Cache<number> = {
//     data: [123, 456],
//     lastUpdate: new Date(),
// }

interface DefaultGeneric<T = string> {
  data: T[];
} // Default Generic: 타입이 없으면 string으로 설정

// const cache3: DefaultGeneric = {
//     data: [123, 456],
// }