import type { Post } from '$/api/@types';
import { useAtom } from 'jotai';
import type { ChangeEvent, FormEvent } from 'react';
import { useEffect, useState } from 'react';
import { BasicHeader } from 'src/pages/@components/BasicHeader/BasicHeader';
import { apiClient } from 'src/utils/apiClient';
import { returnNull } from 'src/utils/returnNull';
import { userAtom } from '../atoms/user';
import styles from './index.module.css';

const Home = () => {
  const [user] = useAtom(userAtom);
  const [posts, setPosts] = useState<Post[]>();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const inputTitle = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const inputContent = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
  };

  const fetchPosts = async () => {
    const posts = await apiClient.api.public.posts.$get().catch(returnNull);

    if (posts !== null) setPosts(posts);
  };

  const createPost = async (e: FormEvent) => {
    e.preventDefault();
    if (!title || !content || !user) return;

    const newPost = await apiClient.api.private.posts
      .$post({ body: { title, content, published: true, authorId: user.id } })
      .catch(returnNull);
    if (newPost) {
      setPosts((prevPosts) => [...(prevPosts ?? []), newPost]);
    }
    setTitle('');
    setContent('');
  };

  useEffect(() => {
    fetchPosts();
  }, [user?.id]);

  if (!posts) return <div>Loading...</div>;

  return (
    <>
      <BasicHeader user={user} />
      <div className={styles.container}>
        <div>
          {user && (
            <div>
              <input type="text" placeholder="Title" value={title} onChange={inputTitle} />
              <textarea placeholder="Content" value={content} onChange={inputContent} />
              <button onClick={createPost}>Create Post</button>
            </div>
          )}
          {posts.map((post) => (
            <div key={post.id}>
              <h2>{post.title}</h2>
              <p>{post.content}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
