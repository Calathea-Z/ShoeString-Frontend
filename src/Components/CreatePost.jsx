import '../Styles/createPost.css'
import { useState, useEffect } from 'react';
import {BsFillChatSquareTextFill} from 'react-icons/bs'
import { motion } from 'framer-motion';



const CreatePost = ({userName, body, imageURL, _id, user, }) => {

  //Set up state for posts
  const [post, setPost] = useState([]);
  const [newForm, setNewForm,] = useState({
    username: " ",
    title: " ",
    location:[],
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
      setPost([...post, createdPost])
      setNewForm({
        username: " ",
        title:" ",
        location: [],
        tags: " ",
        body: " ",
      }).then(() => {
        console.log('new post added');
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
    <div className='post'>
      <div className='post-header'>
        <h1>Create new post</h1>
        <h3>{userName}</h3>
      </div>
      <img className='post-image' src={imageURL} alt=''/>
      <h4 className='post-text'>
        <strong>{userName}</strong> {body}
      </h4>
    </div>
    </>
  )
}

export default CreatePost