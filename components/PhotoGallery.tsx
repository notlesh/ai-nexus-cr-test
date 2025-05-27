interface PhotoGalleryProps {
  images: string[];
}

const PhotoGallery: React.FC<PhotoGalleryProps> = ({ images }) => {
  return (
    <div>
      {images.map((image, index) => (
        <img key={index} src={image} alt={`Gallery Image ${index + 1}`} />
      ))}
    </div>
  );
};

export default PhotoGallery;