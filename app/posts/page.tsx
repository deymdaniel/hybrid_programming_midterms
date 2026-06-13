interface Post {
  id: number;
  title: string;
  body: string;
  views: number;
}

export default async function PostsPage() {
  const res = await fetch('https://dummyjson.com/posts?limit=5', {
  });
  const data = await res.json();
  const posts: Post[] = data.posts;

  return (
    <div>
      <h1>Global Activity Feed (ISR)</h1>
      <p>This page serves cached snapshots instantly. Background cache triggers refresh windows every 30 seconds.</p>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
        {posts.map(post => (
          <div key={post.id} style={{ border: '1px solid #777', padding: '10px' }}>
            <h4>{post.title}</h4>
            <p>{post.body}</p>
            <small style={{ color: '#555' }}>👀 Views: {post.views}</small>
          </div>
        ))}
      </div>
    </div>
  );
}