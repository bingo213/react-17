export interface PostProps {
  thumbnailUrl: string;
  title: string;
}

export const Post = ({ thumbnailUrl, title }: PostProps) => {
  return (
    <div className="Post">
      <img src={thumbnailUrl} alt={title} /> <p>{title}</p>
    </div>
  );
};
