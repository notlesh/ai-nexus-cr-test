mport React, { useState } from 'react';

interface CommentFormProps {
  onSubmit: (name: string, email: string, comment: string) => void;
}

const CommentForm: React.FC<CommentFormProps> = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [comment, setComment] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(name, email, comment);
    setName('');
    setEmail('');
    setComment('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      </div>
      <div>
        <label htmlFor="comment">Comment:</label>
        <textarea id="comment" value={comment} onChange={(e) => setComment(e.target.value)} required />
      </div>
      <button type="submit">Submit Comment</button>
    </form>
  );
};

export default CommentForm;
