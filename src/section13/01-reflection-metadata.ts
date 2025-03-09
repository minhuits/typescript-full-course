/**
 * Reflection Metadata
 * 
 * 1. 주요 메서드
 * Reflect.apply(): 함수를 호출합니다.
 * Reflect.construct(): 함수를 생성자로 호출합니다.
 * Reflect.defineProperty(): 속성을 정의합니다.
 * Reflect.deleteProperty(): 속성을 삭제합니다.
 * Reflect.get(): 속성의 값을 반환합니다.
 * Reflect.getOwnPropertyDescriptor(): 속성 설명자를 반환합니다.
 * Reflect.getPrototypeOf(): 객체의 프로토타입을 반환합니다.
 * Reflect.has(): 객체에 속성이 있는지 확인합니다.
 * Reflect.isExtensible(): 객체가 확장 가능한지 확인합니다.
 * Reflect.ownKeys(): 객체의 고유 키를 반환합니다.
 * Reflect.preventExtensions(): 객체의 확장을 방지합니다.
 * Reflect.set(): 속성에 값을 할당합니다.
 * Reflect.setPrototypeOf(): 객체의 프로토타입을 설정합니다.
 * 
 * 2. 많이 사용하는 메소드
 * Reflect.defineMetadata(): 메타데이터를 정의합니다.
 * Reflect.getMetadata(): 메타데이터를 가져옵니다.
 * Reflect.hasMetadata(): 메타데이터가 있는지 확인합니다.
 * Reflect.getMetadataKeys(): 메타데이터 키를 가져옵니다.
 * Reflect.getOwnMetadataKeys(): 객체 자신의 메타데이터 키를 가져옵니다.
 */

import "reflect-metadata";

const iu = {
    name: '아이유',
    age: 32,
    nationality: 'korean',
}

console.log(iu);

/**
 * 파라미터의 정의
 * 
 * 1) 메타데이터의 키
 * 2) 메타데이터 키에 저장할 값
 * 3) 메타데이터를 저장할 객체
 * 4) 메타데이터를 저장할 객체의 프로퍼티 (선택)
 * 
 * 4번은 필수가 아니다.
 * 
 * 메타데이터가 무엇인가? - 데이터에 대한 데이터
 */
Reflect.defineMetadata('test-meta', 123, iu);
console.log(iu);
console.log(Reflect.getMetadata('test-meta', iu));

Reflect.defineMetadata('test-meta', 456, iu);
console.log(Reflect.getMetadata('test-meta', iu));

Reflect.defineMetadata('meta2', 789, iu);
console.log(Reflect.getMetadata('meta2', iu));
console.log(Reflect.getMetadata('test-meta', iu));

Reflect.defineMetadata('meta2', { name: '코드팩토리' }, iu);
console.log(Reflect.getMetadata('meta2', iu));

/**
 * 프로퍼티에 저장하기
 */
Reflect.defineMetadata('object-meta', 999, iu, 'name');
console.log(Reflect.getMetadata('object-meta', iu, 'name'));
console.log(Reflect.getMetadata('meta2', iu));

// Reflect.deleteMetadata('object-meta', iu, 'name'); // 삭제
console.log(Reflect.getMetadata('object-meta', iu, 'name'));
console.log(Reflect.hasMetadata('object-meta', iu, 'name'));

console.log(Reflect.getMetadataKeys(iu));
console.log(Reflect.getMetadataKeys(iu, 'name'));

Reflect.defineMetadata('prototype-data', '프로토타입 메타예요!', Object.getPrototypeOf(iu));
console.log(Reflect.getMetadataKeys(iu));
console.log(Reflect.getOwnMetadataKeys(iu));
