import React from 'react';
import ArticleList from './ArticleList';

const App = () => {
  const data = {
    name: 'Underreacted',
    image: '...',
    about: 'A blog about learning React',
    posts: [
      { id: 1, title: 'Components 101', date: 'December 15, 2020', preview: '...', minutes: 5 },
      { id: 2, title: 'React Data Flow', date: 'December 11, 2020', preview: '...', minutes: 15 },
      { id: 3, title: 'Function vs Class Components', preview: '...', minutes: 47 }
    ]
  };

  return (
    <div>
      <h1>{data.name}</h1>
      <ArticleList posts={data.posts} />
    </div>
  );
};

export default App;
