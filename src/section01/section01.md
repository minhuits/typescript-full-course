# MacOS 환경 설정

## Intall

```sh
subo npm install typescript --global
```

## Version

```sh
tsc --version
```

# JS의 문제점

> Dynamically Typed

## 예제: 01-problem-with-js.js

```js
// 문제:
// 주석이 없으면 변수의 타입을 알 수 없다.
// 타입이 변경되면 주석을 수정해야 한다.
function add(ver1, ver2) {
  return var1 + ver2;
}

console.log(add(1, 2));
console.log(add(1, "2"));
console.log(add("1", "2"));

// 문제 1, 2 해결법: Typeof runtime에 체크를 할 수 있다.
function addTypeSafe(num1, num2) {
  if (typeof num1 === "number" && num2 === "number") {
    return num1 + num2;
  } else {
    throw Error("숫자만 파라미터에 넣어주세요");
  }
}

// 문제: 실행 전에는 알 수 없다.
console.log(addTypeSafe(1, 2));
console.log(addTypeSafe(1, "2"));
```

# TS의 장점

> 명시적으로 알려줄 수 있다.

## 예제: 01-problem-with-js.ts

```ts
function add(num1: number, num2: number) {
  return num1 + num2;
}

console.log(add(1, 2));

// Error:
// Argument of type 'String' is not assignable to
// parameter of type 'number'.
//
// console.log(add(1, "2"));
```

# 예제 파일

| File                                |               Link               |
| :---------------------------------- | :------------------------------: |
| 01 Typescript 기본 타입             |       [Link](02-basics.ts)       |
| 02 Type과 Interface 기본기          | [Link](03-type-and-interface.ts) |
| 03 Enum                             |        [Link](04-eunm.ts)        |
| 04 Type Inference (타입추론) 기본기 |   [Link](05-type-inference.ts)   |
| 05 Casting (캐스팅)                 |      [Link](06-casting.ts)       |
