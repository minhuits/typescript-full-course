/**
 * Overloading
 */

// 파라미터를 1개를 받거나 3개를 받는 함수 (오버로딩)
function stringOrStrings(members: string): string; // 1개를 받는 함수

function stringOrStrings(member1: string, member2: string, member3: string): string; // 3개를 받는 함수

// Error: 오버로드에 2 인수가 필요하지 않지만, 1 또는 3 인수가 필요한 오버로드가 있습니다.ts(2394)
// function stringOrStrings(): string; 

/**
 * 만약에 하나의 파라미터만 입력받는다면
 * 아이돌 멤버들을 하나의 스트링으로 입력받는다.
 * 예) '안유진, 장원영, 레이'
 * 
 * 만약에 세개의 파라미터를 받는다면
 * 각각 아이돌을 각각의 파라미터의 값으로 입력한다.
 * 예) '안유진', '장원영', '레이'
 */
function stringOrStrings(memberOrMembers: string, member2?: string, member3?: string): string {
    if (member2 && member3) {
        // 3개의 파라미터를 받았을 때
        return `아이브: ${memberOrMembers}, ${member2}, ${member3}`;
    } else {
        // 1개의 파라미터를 받았을 때
        return `아이브: ${memberOrMembers}`;
    }
}

console.log(stringOrStrings('안유진, 장원영, 레이')); // 아이브: 안유진, 장원영, 레이
console.log(stringOrStrings('안유진', '장원영', '레이')); // 아이브: 안유진, 장원영, 레이

// Error: 오버로드에 2 인수가 필요하지 않지만, 1 또는 3 인수가 필요한 오버로드가 있습니다.ts(2575)
// console.log(stringOrStrings('안유진', '장원영')); 