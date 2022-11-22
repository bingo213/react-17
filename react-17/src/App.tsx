import React, { useEffect, useMemo, useState } from 'react';
import './App.css';
import { PostProps } from './components/Post';
import { PostList } from './components/PostList';

function App() {
  const [searchValue, setSearchValue] = useState('');
  const [postList, setPostList] = useState<PostProps[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setSearchValue(value);
  };

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/photos')
      .then(response => response.json())
      .then(res => {
        setPostList(res);
      });
  }, []);

  const postListComp = useMemo(
    () => <PostList postList={postList} searchValue={searchValue} />,
    [searchValue, postList]
  );

  return (
    <div className="App">
      <input
        className="SearchBar"
        value={searchValue}
        onChange={handleChange}
      />
      {postListComp}
    </div>
  );
}

export default App;
