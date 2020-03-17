import React from 'react';
import './App.css';
import CommentDetail from "./CommentDetail";

function App() {
  return (
    <div className="ui container comments">
      <CommentDetail author="Sam"/>
        <CommentDetail author="John"/>
        <CommentDetail author="James"/>
    </div>
  );
}

export default App;
