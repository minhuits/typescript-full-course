/**
 * Pick Type
 */
interface Post {
  title: string;
  content: string;
  createdAt: Date;
}

type PickPostType = Pick<Post, 'title' | 'content'>;

function createPost(post: PickPostType): Post {
  return {
    ...post,
    createdAt: new Date(),
  };
} // pick 타입은 특정 타입에서 필요한 속성만 골라서 사용이 가능하다.

createPost({
  title: '요즘 개발자 취업 어떤가요?',
  content: '나이 30 넘어서도 해볼만한가요?',
});