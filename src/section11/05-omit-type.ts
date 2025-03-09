/**
 * Omit Type
 */
interface Post {
  title: string;
  content: string;
  createdAt: Date;
}

type OmitPostType = Omit<Post, 'createdAt'>;

function createPost(post: OmitPostType): Post {
  return {
    ...post,
    createdAt: new Date(),
  };
} // pick의 반대 개념. 필요없는 속성을 골라서 제외시킨다.

createPost({
  title: '요즘 개발자 취업 어떤가요?',
  content: '나이 30 넘어서도 해볼만한가요?',
});