import { Post, PostProps } from './Post';

export interface PostListProps {
  postList: PostProps[];
  searchValue: string;
}

export const PostList = ({ postList, searchValue }: PostListProps) => {
  return (
    <div className="PostList">
      {postList
        .filter(p => p.title.includes(searchValue))
        .map(post => (
          <Post {...post} />
        ))}
    </div>
  );
};
