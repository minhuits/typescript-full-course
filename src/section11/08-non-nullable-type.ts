/**
 * Non Nullable type: null이 될 수 없는 값들만 추출함 
 */
type NonNull = NonNullable<string | number | boolean | null | undefined | object>; // null, undefined 제외