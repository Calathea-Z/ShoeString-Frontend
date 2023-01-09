import '../Styles/createPost.css'
import { useState, useEffect } from 'react';
import {BsFillChatSquareTextFill} from 'react-icons/bs'
import { motion } from 'framer-motion';



const CreatePost = (props) => {

  //Set up state for posts
  const [post, setPost] = useState([]);
  const [newForm, setNewForm,] = useState({
    username: " ",
    location:(0),
    tags: " ",
    body: " ",
  });

  const getPosts = async () => {
    try {
      const response = await fetch('https://shoe-string.herokuapp.com/posts');
      const allPosts = await response.json()
      setPost(allPosts);
      // console.log(allPosts);
    }catch (err){
      console.error(`Error in Try Block of getPosts function: ${err}`);
    }
  }

  const handleChange = (e) => {

    console.log(newForm);
    const userInput = {...newForm}
    userInput[e.target.name] = e.target.value;
    console.log(userInput)
    setNewForm(userInput)
  }

const handleSubmit = async (e) => {
    e.preventDefault();
    const currentState = { ...newForm };
    console.log(`This is currentState at top of handleSubmit: ${currentState}`)
    try {
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json"},
        body: JSON.stringify(currentState)
      }
      const response = await fetch("https://shoe-string.herokuapp.com/posts", 
      requestOptions)
      const createdPost = await response.json()
      .then(console.log(response.json()))
      console.log(" I am created post", createdPost)
      setPost([post, createdPost])
      setNewForm({
        username: " ",
        location: (0),
        tags: " ",
        body: " ",
      })
      }catch (err) {
      console.error(`Error in Try Block of handleSubmit function: ${err}`)
      }
  }

  useEffect(() => {
    getPosts()
}, [])


  return (
    <>
    <div className='create-post'>
      <div className='create-card-top'>
        <h1>Create new post</h1>
      </div>
      <form className='post-comment-add-' onSubmit={handleSubmit} >
        <div className= 'big-input-form'>
          <label className= 'flex-box' htmlFor='username'>
            <div className='flex-box'>
              <p>Username:</p>
            </div>
            <input className = 'post-individual-comment' placeholder='...' type='text' required id='username' name='username' value={newForm.username} onChange={handleChange} />
          </label>
          <label className= 'flex-box' htmlFor='location'>
            <div className='flex-box'>
              <p>Location:</p>
            </div>
            <input className = 'post-individual-comment' type='text'  id='location' name='location' value={newForm.location} onChange={handleChange} />
          </label>
          <label className= 'flex-box' htmlFor='tags'>
            <div className='flex-box'>
              <p>Tags:</p>
            </div>
            <input className = 'post-individual-comment' type='text'  id='tags' name='tags' value={newForm.tags} onChange={handleChange} />
          </label>
          <label className='post-comment-add' htmlFor='title'>
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