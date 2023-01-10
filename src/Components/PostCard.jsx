import '../Styles/postCard.css';
import { motion } from 'framer-motion';
import {ImHeart} from 'react-icons/im'
import {FiMapPin} from 'react-icons/fi'
import {BsFillChatSquareTextFill} from 'react-icons/bs'
import {useState, useEffect } from 'react';


function PostCard({username, userphoto, _id, img, location, body, tags, likes}) {
  
  const [post, setPost] = useState([]);
  const [newEditForm, setNewEditForm] = useState("");


  // const handleChange = (e) => {
  //   const userInput = {newEditForm}
  //   userInput[e.target.name] = e.target.value;
  //   console.log(userInput)
  //   setNewEditForm(userInput)
  // }

  const handleChange = (e) => {
    setNewEditForm({ newEditForm, [e.target.name]: e.target.value })
  }


  const editPost = async (e) => {
        e.preventDefault()
        console.log("i Form", newEditForm)
        try {
            const requestOptions = {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(newEditForm)
            }
            const response = await fetch(`https://shoe-string.herokuapp.com/posts/${_id}`, requestOptions)
            const editedPost = await response.json()
            setPost(editedPost)
            // setNewEditForm(editedPost)
            console.log("This is your edited post :", editedPost)
        } catch (err) {
            console.log(err)
        }
    }

    const getPost = async () => {
      try{
        const response = await fetch('https://shoe-string.herokuapp.com/posts')
        const foundPost = await response.json()

        setPost(foundPost)
      }catch (err) {
          console.error(err)
      }
    }

    const deletePost = async () => {
      try {
        const requestOptions = {
          method: "DELETE"
        }
        const response = await fetch(`https://shoe-string.herokuapp.com/posts/${_id}`, requestOptions)
        const deletedPost = await response.json()
        console.log("This post was deleted :", deletedPost)
      }catch (err){
      console.error(err)
    }
  }
  
    useEffect(() => {
      getPost();
    },[])

  return (
    <div className='post-individual-full'>
      <div className='post-individual-header'>
        <div className='mini-profile-image'>
          <img id='mini-profile' src={'https://cps-static.rovicorp.com/2/Open/Getty/Trey%20Anastasio/_derived_jpg_q90_250x250_m0/56790670.jpg?partner=allrovi.com'}/>
        </div>
        <div>
          <p>{username}</p>
        </div>
      </div>
      <div className='post-body'>
        <img className='post-photo' src={img} alt='Photo of location'/>
       </div> 
        <div className='post-individual-middle'>
          <div className='flex-box'>
            <div>
              <a href='' className='location-button'><FiMapPin/>{' '}{location}</a>
            </div>
            <div>
              <h6>{tags}</h6>
            </div>
            
          </div>
          <div className='likes'>
            <p>Likes{' '}<span>{likes}</span></p>
            <button className='post-button'><ImHeart/></button>
          </div>
        </div>
        <div className='feed-comment-format'>
        <div id='comment-username'>{username}{" "}</div>
        <div id='post-comments-feed'>{body}</div>
        </div>
        <form className='post-comment-add' onSubmit={editPost} >
          <div className='post-icon'><BsFillChatSquareTextFill/>
          </div>
          <input type='text'
            placeholder='Edit post here....'
            name='body' 
            id='body'
            value={newEditForm.body} 
            onChange={handleChange} 
            className = 'post-individual-comment'
          />
          <div className='update-post-buttons'>
            <button className='post-button' onClick={editPost}  >Update</button> 
            <button className='post-button' onClick={deletePost} >Delete</button>
            <h1> I AM A CHANGE</h1>
          </div>   
        </form>
    </div>
  )
}

export default PostCard
 