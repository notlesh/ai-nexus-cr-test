mport React from 'react';

interface PhotoGalleryProps {
  title: string;
  photos: any[]; // Adjust type as needed
  description?: string;
}

const PhotoGallery: React.FC<PhotoGalleryProps> = ({ title, photos, description }) => {
  return (
    <div className="photo-gallery">
      <h2>{title}</h2>
      {description && <p>{description}</p>}
      <div className="gallery">
        {photos && photos.map((photo, index) => (
          <img key={index} src={photo.url} alt={photo.alternativeText} />
        ))}
      </div>
    </div>
  );
};

export default PhotoGallery;
