interface BlogPostProps {
  title: string;
  content: string;
}

const BlogPost: React.FC<BlogPostProps> = ({ title, content }) => {
  return (
    <div>
      <h2>{title}</h2>
      <p>{content}</p>
    </div>
  );
};

export default BlogPost;