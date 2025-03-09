/**
 * Exclude Type
 */

type NoString = Exclude<string | boolean | number, string>; // string 제외

type NoFunction = Exclude<string | (() => void), Function>; // 함수 제외