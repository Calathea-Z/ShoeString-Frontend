import '../Styles/createPost.css'
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


function CreatePost() {

  //Set up state for posts
  const [post, setPost] = useState([]);
  // This needs to be updated with all the things the user could add with post.
  const [newForm, setNewForm,] = useState({
    comment:''
  });

  //Set variable for URL (will change to whatever the backend address is for this call)
  const BE_URL = "http://localhost:4000/posts";

  const getPosts = async () => {
    try {
      //Get data from BE
      const response = await fetch(BE_URL);
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
        <h1>Here is where the user will share their mind. Fun! </h1>
    </div>
  )
}

export default CreatePost