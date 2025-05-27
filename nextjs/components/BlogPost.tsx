mport React from 'react';

interface BlogPostProps {
  title: string;
  content: string;
  photos: any[]; // Adjust type as needed
}

const BlogPost: React.FC<BlogPostProps> = ({ title, content, photos }) => {
  return (
    <div className="blog-post">
      <h2>{title}</h2>
      {photos && photos.map((photo, index) => (
        <img key={index} src={photo.url} alt={photo.alternativeText} />
      ))}
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
};

export default BlogPost;
