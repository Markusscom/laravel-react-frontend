import { useEffect, useState } from 'react';
import api from '../services/api';

export interface Post {
  id: number;
  title: string;
  content: string;
  created_at?: string;
  updated_at?: string;
}

export default function PostList() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    api.get<Post[]>('/posts')
      .then(res => setPosts(res.data))
      .catch(err => console.error('Neizdevās ielādēt ierakstus', err))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <div>Ielādē...</div>;

  return (
    <div>
      <h1>Ieraksti</h1>
      {posts.map(post => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.content}</p>
        </div>
      ))}
    </div>
  );
}
