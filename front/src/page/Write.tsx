// src/pages/Write.tsx
import WriteForm from '../components/WriteForm';
import { Post } from '../types';
import { useNavigate } from 'react-router-dom';

const Write = () => {
  const navigate = useNavigate();
  const handleSubmit = (post: Omit<Post, 'id' | 'createdAt' | 'updatedAt'>) => {
    const newPost: Post = {
      ...post,
      id: Date.now(),
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    const existingPosts = JSON.parse(localStorage.getItem('posts') || '[]');
    localStorage.setItem('posts', JSON.stringify([...existingPosts, newPost]));
    navigate('/board');
  };

  return (
    <div>
      <h1>Write a Post</h1>
      <WriteForm onSubmit={handleSubmit} />
    </div>
  );
};

export default Write;
