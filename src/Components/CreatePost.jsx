import '../Styles/createPost.css'
import { useState, useEffect } from 'react';
import {BsFillChatSquareTextFill} from 'react-icons/bs'
import { motion } from 'framer-motion';
import UploadAndDisplayImage from './UploadAndDisplayImage';


function CreatePost() {

  //Set up state for posts
  const [post, setPost] = useState([]);
  // This needs to be updated with all the things the user could add with post.
  const [newForm, setNewForm,] = useState({
    username: '',
    location:'',
    body: '',
    img: '',
  });

  //Set variable for URL (will change to whatever the backend address is for this call)
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
    e.preventDefault()
    const currentState = { ...newForm };
    try {
      const requestOptions = {
        mode: 'no-cors',
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(currentState),
      }
      const response = await fetch('https://shoe-string.herokuapp.com/posts', requestOptions)
      const createdPost = await response.json
      console.log(createdPost)
      setPost([...post, createdPost])
      setNewForm({
        username: '',
        location:'',
        body: '',
      })
    }catch (err) {
      console.error(err)
    }
  }


  return (
    <>
    <div className='create-post'>
      <div className='create-card-top'>
        <h1>Create new post</h1>
      </div>
      <div className='photo-box'>
        <UploadAndDisplayImage /> 
      </div>
      <form className='post-comment-add-' onSubmit={handleSubmit} >
        <div className= 'big-input-form'>
          <label className= 'flex-box' htmlFor='username'>
            <div className='flex-box'>
              <p>Username:</p>
            </div>
            <input className = 'post-individual-comment' type='text' required id='username' name='username' value={newForm.username} onChange={handleChange} />
          </label>
          <label className= 'flex-box' htmlFor='location'>
            <div className='flex-box'>
              <p>Location:</p>
            </div>
            <input className = 'post-individual-comment' type='text' required id='location' name='location' value={newForm.location} onChange={handleChange} />
          </label>
          <label className='post-comment-add' htmlFor='body'>
            <div className='post-icon'>
              <BsFillChatSquareTextFill/>
            </div>
            <input className = 'big-comment-box' type='text' placeholder='Share your thoughts..' required id='body' name='body' value={newForm.body} onChange={handleChange}  />
          </label>
        <motion.button type='submit' className='post-button' whileHover={{scale:1.1}} transition={{duration:.8}}
        >Post</motion.button>  
        </div> 
      </form>  
    </div>  
    </>
  )
}

export default CreatePost