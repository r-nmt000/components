import React from 'react';
import './App.css';
import CommentDetail from "./CommentDetail";
import faker from 'faker';

function App() {
  return (
    <div className="ui container comments">
      <CommentDetail author="Sam" created_at="2020/03/19" content="content1" avatar={faker.image.avatar()}/>
        <CommentDetail author="John" created_at="2020/03/11" content="content2" avatar={faker.image.avatar()}/>
        <CommentDetail author="James" created_at="2020/02/01" content="content3" avatar={faker.image.avatar()}/>
    </div>
  );
}

export default App;
