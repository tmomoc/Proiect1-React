import React, { useState } from 'react';
import PostItem from './PostItem';

function PostList(props) {
  const { posts } = props;
  const [viewPostList, setViewPostList] = useState(false);

  // Funcția care comută vizibilitatea listei de postări
  const toggleViewPostList = () => {
    setViewPostList(!viewPostList);
  };

  return (
    <div>
      {/* Butonul care comută afișarea listei */}
      <button onClick={toggleViewPostList}>
        {viewPostList ? 'Ascunde Lista Postări' : 'Afișează Lista Postări'}
      </button>

      {/* Afișarea condiționată a listei de postări */}
      {viewPostList && (
        <div>
          <h1>Lista postări:</h1>
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
