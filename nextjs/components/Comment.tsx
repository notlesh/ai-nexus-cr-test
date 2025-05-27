mport React from 'react';

interface CommentProps {
  name: string;
  comment: string;
}

const Comment: React.FC<CommentProps> = ({ name, comment }) => {
  return (
    <div className="comment">
      <h3>{name}</h3>
      <p>{comment}</p>
    </div>
  );
};

export default Comment;
