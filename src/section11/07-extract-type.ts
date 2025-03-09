/**
 * Extract Type (exclude의 반대)
 */

type stringOnly = Extract<string | boolean | number, string>; // string만 추출

type functionOnly = Extract<string | (() => void), Function>; // 함수만 추출