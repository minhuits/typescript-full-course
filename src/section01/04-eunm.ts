/**
 * Enum
 */

/**
 * API 요청을 한다.
 * 
 * DONE = 요청 완료 상태
 * ERROR = 에러 상태
 * LOADING = 로딩 상태
 * INITTIAL = 초기 상태
 */
function runWork() {
  let state = 'INITTIAL';

  try {
    // 작업을 한다.
    state = 'LOADING';

    state = 'DONE';
  } catch (error) {
    state = 'ERROR';
  } finally {
    return state;
  }
}

// 문제점: 휴먼 에러 발생할 가능성이 높다.
console.log(runWork() === 'DONNE');

let initState = 'INITTIAL';
let loadingState = 'LOADING';
let errorState = 'ERROR';
let doneState = 'DONE';

function runWork2() {
  let state = initState;

  try {
    // 작업을 한다.
    state = loadingState;

    state = doneState;
  } catch (error) {
    state = errorState;
  } finally {
    return state;
  }
}

console.log(runWork2() === doneState);

// Enum 선언
enum State {
  INITTIAL = 'INITTIAL',
  LOADING = 'LOADING',
  ERROR = 'ERROR',
  DONE =  'DONE',
}


function runWork3() {
  let state = State.INITTIAL;
  
  try {
    // 작업을 한다.
    state = State.LOADING;
    
    state = State.DONE;
  } catch (error) {
    state = State.ERROR;
  } finally {
    return state;
  }
}

console.log(runWork3() === State.DONE);
console.log(runWork3()); // DONE