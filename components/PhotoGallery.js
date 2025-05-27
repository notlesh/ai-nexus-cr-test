function PhotoGallery(props) {
  return (
    <div>
      <h2>{props.title}</h2>
      <div>
        {props.photos.map(photo => (
          <img key={photo.id} src={photo.url} alt={props.title} />
        ))}
      </div>
    </div>
  );
}

export default PhotoGallery;
