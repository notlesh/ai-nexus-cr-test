import BlogPost from '../components/BlogPost';
import PhotoGallery from '../components/PhotoGallery';

function HomePage(props) {
  return (
    <div>
      <h1>Welcome to my Travel Blog</h1>
      {props.blogPosts.map(post => (
        <BlogPost key={post.id} {...post} />
      ))}
      {props.photoGalleries.map(gallery => (
        <PhotoGallery key={gallery.id} {...gallery} />
      ))}
    </div>
  );
}

export async function getStaticProps() {
  // Fetch data from Strapi here
  const blogPosts = [
    {
      id: 1,
      title: 'My First Trip',
      content: 'This was an amazing experience!',
      photo: 'https://example.com/image1.jpg',
      comments: [{ id: 1, text: 'Great post!' }],
    },
  ];
  const photoGalleries = [
    {
      id: 1,
      title: 'My Photo Gallery',
      photos: [
        { id: 1, url: 'https://example.com/image2.jpg' },
        { id: 2, url: 'https://example.com/image3.jpg' },
      ],
    },
  ];

  return {
    props: { blogPosts, photoGalleries },
  };
}

export default HomePage;
