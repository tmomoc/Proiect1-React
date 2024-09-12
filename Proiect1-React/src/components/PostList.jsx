import React, { useState } from 'react';
import PostItem from './PostItem';
import './Button.css'

function PostList(props) {
  const { posts } = props;
  const [viewPostList, setViewPostList] = useState(false);

  const toggleViewPostList = () => {
    setViewPostList(!viewPostList);
  };

  return (
    <div>
      <button onClick={toggleViewPostList} className='post-hide-list'>
        {viewPostList ? 'Hide post list' : 'View post list'}
      </button>

      {viewPostList && (
        <div>
          <h1>Post List:</h1>
          {
            posts.map((post, index) => (
              <PostItem
                key={index} 
                id={post.id}
                title={post.title}
                body={post.body}
              />
            ))
          }
        </div>
      )}
    </div>
  );
}

export default PostList;
