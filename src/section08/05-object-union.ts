/**
 * Object Union
 */

//  유추된 객체 타입 유니언
const dogOrCat = Math.random() > 0.5 ?
    // 강아지
    {
        name: '별이',
        age: 12,
    } :
    // 고양이
    {
        name: '오리',
        breed: '코리안 길냥이',
    }

dogOrCat.name; // string
dogOrCat.age;  // number or undefined
dogOrCat.breed; // string or undefined


// 명시적으로 타입을 지정한 객체 타입 유니언
interface Dog {
    name: string;
    age: number;
}

interface Cat {
    name: string;
    breed: string;
}

type DogOrCat = Dog | Cat;

const dogOrCat2: DogOrCat = Math.random() > 0.5 ?
    // 강아지
    {
        name: '별이',
        age: 12,
    } :
    // 고양이
    {
        name: '오리',
        breed: '코리안 길냥이',
    }

dogOrCat2.name; // string
// dogOrCat2.age; // error
// dogOrCat2.breed; // error


// Narrowing: in Keyword
if ('age' in dogOrCat2) {
    dogOrCat2; // Dog
    dogOrCat2.age; // number
    dogOrCat2.name; // string
} else {
    dogOrCat2; // Cat
    dogOrCat2.name; // string
    dogOrCat2.breed; // string
}