import '../Styles/feed.css';
import './PostCard';
import PostCard from './PostCard';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Feed() {

//---Everything here is for getting real posts when ready

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
<h1 className='feed-full'>
      {post.foundPosts?.map((post) => {
        return(
           <>
          <PostCard username={post.username} body={post.body} likes={post.likes} img={post.img} location={post.location}/>
          </>
        )
      })}
    </h1> 

 
    </>
  )
}

export default Feed;
