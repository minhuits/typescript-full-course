/**
 * Namespace
 */
namespace Home {
  class Idol {
    name: string;
    age: number;

    constructor(name: string, age: number) {
      this.name = name;
      this.age = age;
    }
  }

  export const yuJin = new Idol(
    '안유진',
    23,
  ); // 접근 가능
  console.log("Home User:", yuJin.age, yuJin.name);
}

namespace Post {
  class User {
    email: string;
    name: string;

    constructor(email: string, name: string) {
      this.email = email;
      this.name = name;
    }
  }

  const admin = new User('admin@codefactory.ai', Home.yuJin.name);

  console.log("Post>User:", admin.email, admin.name);
} // 접근 가능한 객체 만들기 (admin user)

namespace Comment {
  const name = 'comment';

  namespace Detail {
    const page = 'detail';

    console.log("Comment:", name);
    console.log("Detail:", page);
  }

  console.log('----------');
  console.log("Comment: " + name);
  // console.log(page);
} // namespace 중첩 (Comment > Detail)