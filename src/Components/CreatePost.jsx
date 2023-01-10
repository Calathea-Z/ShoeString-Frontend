import '../Styles/createPost.css'
import { useState, useEffect } from 'react';
import {BsFillChatSquareTextFill} from 'react-icons/bs'
import UploadWidget from '../Components/UploadWidget'



const CreatePost = ({userName, body, imageURL, _id, user, }) => {
//Set up state for all posts and creating posts.
    const [post, setPost] = useState({});
    const [newForm, setNewForm,] = useState({
      body: " ",
      tags: " ",
    });

    //Set up state for grabbing images from cloudinary.

    const [image, setImage] = useState("")
    const [URL, setURL] = useState("");

//Handle upload of new images to cloudinary.
  const uploadImage =  () => {
    const data = new FormData()
    data.append("file", image)
    data.append("cloudinary", "tutorial")
    data.append("cloud_name", "breellz")

    const CLOUDINARY_URL= 'cloudinary://981766245453231:gT8MRNYJfYyooEdH21sTdLFE5AA@dcqoiu7bp'

    const requestOptions = {
      method: "POST",
      body: data
    }
      fetch(`${CLOUDINARY_URL}/image/upload`, requestOptions)
    .then(resp => resp.json())
    .then(data => {
      console.log("IT ME")
      setURL(data.URL)
      console.log(data);
    })
    .catch(err => console.log(`Error in image upload ${err}`))
    }

//Grab data from all posts in mongoDB
  const getPosts = async () => {
    try {
      const response = await fetch('https://shoe-string.herokuapp.com/posts');
      const allPosts = await response.json()
      setPost(allPosts);
      console.log(allPosts);
    }catch (err){
      console.error(`Error in Try Block of getPosts function: ${err}`);
    }
  }

//Handle change of state in input forms.

  const handleChange = (e) => {
    console.log(newForm);
    const userInput = {...newForm}
    userInput[e.target.name] = e.target.value;
    console.log(userInput)
    setNewForm(userInput)
    const userPhoto = [e.target.files[0]]
    console.log(userPhoto)
    setImage(userPhoto)
    
  }

 
  // Handle submit of new data to the database.
  const handleSubmit = async (e) => {

    e.preventDefault();
    const currentState = {...newForm };
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

//Create post form. User can add image, comment, and tags.     
    <>
    <div className='post'>
      <div className='post-header'>
        <h1>Create new post</h1>
        <h3>{userName}</h3>
      </div>
      <div className='post-body-form'>
        <form onSubmit={handleSubmit}>
          <label htmlFor='body'>
            <div className='post-comment-add'>
              <div className='post-icon-non-feed'>
                <BsFillChatSquareTextFill/>
              </div>
              <textarea type='text' id='body' name='body' placeholder='Add a comment...' className = 'post-individual-comment' value={newForm.body} onChange={handleChange} />
              </div>
          </label>
          <label htmlFor='tags'>
            <div className='post-comment-add'>
              <div className='post-icon-non-feed'><h4>Tags</h4></div>
              <textarea type='text' id='tags' name='tags' placeholder='Add a #tag' className = 'post-individual-comment' value={newForm.tags} onChange={handleChange} />
            </div>
          </label>
        </form>
      </div>
    <UploadWidget/>
    </div>
    </>
  )
}


export default CreatePost