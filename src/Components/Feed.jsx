import '../Styles/feed.css';
import './PostCard';
import PostCard from './PostCard';
import { useState, useEffect } from 'react';

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
    }, []);

//-----------------------------------------------------------
  return ( 
  <>
    <div className='feed-full'>
      {post.allPosts?.map((post) => {
        return(
          <>
            <PostCard key={post.id} username={post.username} body={post.body} likes={post.likes} img={post.img} location={post.location}/>
          </>
        )
      })}
    </div> 
  </>
  )
}

export default Feed;
