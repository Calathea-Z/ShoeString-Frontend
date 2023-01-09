import '../Styles/createPost.css'
import { useState, useEffect } from 'react';
import {BsFillChatSquareTextFill} from 'react-icons/bs'
import { motion } from 'framer-motion';



const CreatePost = ({userName, body, imageURL, _id, user, }) => {

  //Set up state for posts
  const [post, setPost] = useState({});
  const [newForm, setNewForm,] = useState({
    username: " ",
    title: " ",
    location:[],
    tags: "",
    body: " ",
  });
  const [newImage, setNewImage] = useState(null);

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
    setNewImage(e.target.files[0])
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
    <div className='post'>
      <div className='post-header'>
        <h1>Create new post</h1>
        <h3>{userName}</h3>
      </div>
      <form>
        <div className='post-comment-add'>
          <div className='post-icon'><BsFillChatSquareTextFill/></div>
          <textarea type='text' placeholder='Add a comment...' className = 'post-individual-comment' />
        </div>
        <button onClick={handleSubmit}>Submit</button>
        </form>
    </div>

    </>
  )
}

export default CreatePost