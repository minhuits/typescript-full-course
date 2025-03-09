/**
 * Infer Keyword
 * 
 * 추론한다
 * 
 * (Inferring Type in Conditional Type)
 * 
 * Infer Keyword는 Conditional Type에서만 사용 가능한 키워드다.
 * 
 * 그러니 extends 키워드를 사용했을때 extend 한 대상에서 타입을 한번 더 추론하는 역할을 한다.
 */

// 1) 가장 많이 사용하는 예제
//
// Flattening -> Array를 벗겨낼 때
// string[] -> string
// string[][] -> string[]
type Flatten<Type> = Type extends Array<infer ElementType> ? ElementType : Type;
type Flatten2<Type> = Type extends (infer ElementType)[] ? ElementType[][][] : Type;

type StringType = Flatten<string[]>; // string
type NumberType = Flatten<number[]>; // number
type BooleanType = Flatten<boolean[][]>; // boolean[]

type StringArray = Flatten2<string[]>; // string[][]][]
type NumberArray = Flatten2<number[]>; // number[][][]
type BooleanArray = Flatten2<boolean>; // boolean

// 2) Return Type 추론
type InferReturnType<Type> = Type extends (...args:any[]) => infer ReturnType ? ReturnType : Type;

type NumberArray2 = InferReturnType<number[]>; // number[]
type StringFunc = InferReturnType<()=> string>; // string
type NumberFunc = InferReturnType<()=> number>; // number