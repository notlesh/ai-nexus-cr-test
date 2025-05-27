mport React, { useState, useEffect } from 'react';
import BlogPost from '../components/BlogPost';
import PhotoGallery from '../components/PhotoGallery';
import Comment from '../components/Comment';
import CommentForm from '../components/CommentForm';

const Home: React.FC = () => {
  const [blogPosts, setBlogPosts] = useState<any[]>([]);
  const [photoGalleries, setPhotoGalleries] = useState<any[]>([]);
  const [comments, setComments] = useState<any[]>([]);

  useEffect(() => {
    // Fetch data from Strapi using GraphQL
    const fetchBlogPosts = async () => {
      // Replace with your actual GraphQL query
      const response = await fetch('/api/graphql', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          query: `
            query {
              blogPosts {
                data {
                  id
                  attributes {
                    title
                    content
                    photos {
                      data {
                        attributes {
                          url
                          alternativeText
                        }
                      }
                    }
                  }
                }
              }
            }
          `,
        }),
      });

      const data = await response.json();
      setBlogPosts(data.data.blogPosts.data);
    };

    const fetchPhotoGalleries = async () => {
      // Replace with your actual GraphQL query
      const response = await fetch('/api/graphql', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          query: `
            query {
              photoGalleries {
                data {
                  id
                  attributes {
                    title
                    description
                    photos {
                      data {
                        attributes {
                          url
                          alternativeText
                        }
                      }
                    }
                  }
                }
              }
            }
          `,
        }),
      });

      const data = await response.json();
      setPhotoGalleries(data.data.photoGalleries.data);
    };

    fetchBlogPosts();
    fetchPhotoGalleries();
  }, []);

  const handleCommentSubmit = (name: string, email: string, comment: string) => {
    // Implement comment submission logic here
    console.log('Comment submitted', name, email, comment);
    // Update the comments state
    setComments([...comments, { name, comment }]);
  };

  return (
    <div className="container">
      <h1>My Travel Blog</h1>
      {blogPosts.map((post) => (
        <BlogPost
          key={post.id}
          title={post.attributes.title}
          content={post.attributes.content}
          photos={post.attributes.photos.data.map((photo: any) => photo.attributes)}
        />
      ))}
      {photoGalleries.map((gallery) => (
        <PhotoGallery
          key={gallery.id}
          title={gallery.attributes.title}
          description={gallery.attributes.description}
          photos={gallery.attributes.photos.data.map((photo: any) => photo.attributes)}
        />
      ))}
      <h2>Comments</h2>
      {comments.map((comment, index) => (
        <Comment key={index} name={comment.name} comment={comment.comment} />
      ))}
      <CommentForm onSubmit={handleCommentSubmit} />
    </div>
  );
};

export default Home;
