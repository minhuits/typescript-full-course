/**
 * Multi Dimension Array
 */


/**
 * (1) 1개
 * [1,2,3]
 * 
 * (2) 2개
 * [
 *  [1,2,3],
 *  [1,2,3]
 * ]
 * 
 * (3) 3개
 * [
 *  [
 *    [1,2,3]
 *  ]
 * ]
 */
const numb2DArr: number[][] = [
  [1, 2, 3],
  [4, 5, 6]
]

const str2DArr = [
  ['1', '2', '3'],
  ['4', '5', '6'],
]

const strAndNumbArr: (number | string)[][] = [
  [1, '2', 3],
  ['4', 5, '6'],
]

let strArrOrNumbArr: string[][] | number[][] = [
  [1, 2, 3],
  [4, 5, 6],
]

strArrOrNumbArr = [
  ['1', '2', '3'],
]

for(let arr of numb2DArr){ // arr: number[]
  for(let item of arr){ // arr: number, item: number
    console.log(item); // 1, 2, 3, 4, 5, 6
  }
}