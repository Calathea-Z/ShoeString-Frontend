import '../Styles/createPost.css'
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


function CreatePost() {

  //Set up state for posts
  const [post, setPost] = useState([]);
  // This needs to be updated with all the things the user could add with post.
  const [newForm, setNewForm,] = useState({
    username: '',
    title: '',
    comment:'',
    location:'',
    img: '',
    body: '',
  });

  //Set variable for URL (will change to whatever the backend address is for this call)
  const BE_URL = "http://localhost:4000/posts";

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

  const handleChange = (e) => {
    console.log(newForm);
    const userInput = { ...newForm }
    userInput[e.target.name] = e.target.value;
    setNewForm(userInput)
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const currentState = { ...newForm };
    try {
      const requestOptions = {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(currentState),
      }
      const response = await fetch(BE_URL, requestOptions);
      const createdPost = await response.json();
      console.log(createdPost);
      setPost([...post, createdPost])
      setNewForm({
        comment: '',
      })
    }catch (err) {
      console.error(err)
    }
  }


  return (
    <div className='create-post'>
        <div className='post-individual-full'>

<div className='post-individual-header'>
  <p>{username}</p>

{/* ------This link will eventually lead to a specific users profile / history */}
  <Link to='profile/:id'>
    <motion.img whileHover={{scale:1.3}} transition={{duration:.8}} className='profile-photo' src={userphoto} alt='Profile Photo'/>
  </Link>
</div>
<div className='post-body'>

 </div> 
  <div className='post-individual-middle'>
      <div>
        <a href='#locationtag' className='location-button'><FiMapPin/>{' '}{location}</a>
      </div>
  </div>
  {/* This is where we would set the state for comments if we get to that point */}
  <form className='post-comment-add' >
    <div className='post-icon'><BsFillChatSquareTextFill/></div>
    <input type='text' placeholder='Add a comment...' className = 'post-individual-comment' />
    <motion.button whileHover={{scale:1.1}} transition={{duration:.8}} className='post-button'>Post</motion.button>   
  </form>
</div>
    </div>
  )
}

export default CreatePost