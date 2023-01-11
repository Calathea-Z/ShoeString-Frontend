import '../Styles/feed.css';
import './PostCard';
import PostCard from './PostCard';
import React, { useState, useEffect } from 'react';

function Feed() {

    const [post, setPost] = useState({});

    const getPosts = async () => {
      try {
        //Get data from BE
        const response = await fetch('https://shoe-string.herokuapp.com/posts');
        const allPosts = await response.json();
        setPost(allPosts);
      }catch (err){
        console.log(err);
      }
    }
    useEffect(() => {
        getPosts()
    }, [post]);

  return ( 
  <>
    <div className='feed-full'>
      {post.allPosts?.map((post) => {
        return(
          <div>
            <PostCard key={post.id} username={post.username} _id={post._id} body={post.body} likes={post.likes} img={post.img} location={post.location}/>
          </div>
        )
      })}
    </div> 
  </>
  )
}

export default Feed;
