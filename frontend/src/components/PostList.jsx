import { useEffect, useState } from 'react';
import api from '../services/api';

const PostList = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.get('/posts')
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
};

export default PostList;
