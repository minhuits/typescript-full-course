/**
 * Generic in Promise
 */
const afterTwoSeconds = function () {
  return new Promise((resolve) => {
      setTimeout(() => {
          resolve('done');
      }, 2000)
  })
}

const runner = async function () {
  const res = await afterTwoSeconds(); // unknown
  console.log(res);
}

runner();

const afterOneSecond = function(): Promise<string>{
  return new Promise((resolve) => {
      setTimeout(() => {
          resolve('done');
      }, 1000)
  })
} // 명시적 선언 방법

const runner2 = async function () {
  const res = await afterOneSecond(); // string
  console.log(res);
}

runner2();

const runner3 = async function(){
  return 'string return';
} // 타입 추론

runner3();