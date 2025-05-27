function BlogPost(props) {
  return (
    <div>
      <h1>{props.title}</h1>
      <img src={props.photo} alt={props.title} />
      <p>{props.content}</p>
      <ul>
        {props.comments.map(comment => (
          <li key={comment.id}>{comment.text}</li>
        ))}
      </ul>
    </div>
  );
}

export default BlogPost;
