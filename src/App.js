import { useMemo, useState } from "react";
import PostList from "./components/PostList";
import PostFilter from "./components/PostFilter";
import PostForm from "./components/PostForm";

function App() {
  const [posts, setPosts] = useState([
    {'id': 1, 'title': 'Post 1 title', 'body': 'Text 1121'},
    {'id': 2, 'title': 'VR 2', 'body': 'Text gbg'},
    {'id': 3, 'title': 'GEMS 2', 'body': 'Text ewers'},
    {'id': 4, 'title': 'Zapis', 'body': 'Zapis text'}
  ]);

  const [filter, setFilter] = useState({sort: '', query: ''});

  const sortedPosts = useMemo(() => {
    if (filter.sort) {
      return [...posts].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]));
    }
    return posts;
  }, [filter.sort, posts]);
  
  const sortedAndSearchedPosts = useMemo(() => {
    return sortedPosts.filter(post => 
      post.title.toLowerCase().includes(filter.query.toLowerCase())
    );
  }, [filter.query, sortedPosts]);

  
  const createPost = (create) => {
    setPosts(create);
  }

  return (
    <div className="App">
      <PostForm create={createPost} />

      <PostFilter
        filter={filter}
        setFilter={setFilter}
      />
      {
        sortedAndSearchedPosts.length
          ?
          <PostList posts={sortedAndSearchedPosts} />
          :
          <h1 style={{textAlign: 'center'}}>Записи не найдены!</h1>
      }
    </div>
  );
}

export default App;
