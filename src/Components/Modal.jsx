import { MdClose } from 'react-icons/md';
import { useState } from "react"
import { BsFillChatSquareTextFill } from "react-icons/bs"
import '../Styles/modal.css';

const Modal= ({setIsOpen}) => {

  const [image, setImage] = useState(" ")
  const [newForm, setNewForm] = useState({
      body: " ",
      tags: " ",
      img: " ",
  })

  //Grab data from all posts in mongoDB

  const handleChange = (e) => {
      console.log(newForm)
      const userInput = { ...newForm }
      userInput[e.target.name] = e.target.value
      console.log(userInput)
      setNewForm(userInput)
  }

  const uploadImage = async (e) => {
      e.preventDefault()
      const data = new FormData()
      data.append("file", image)
      data.append("upload_preset", "shoe_string")
      data.append("cloud_name", "dcqoiu7bp")

      fetch("https://api.cloudinary.com/v1_1/dcqoiu7bp/image/upload", {
          method: "POST",
          body: data,
      })
          .then((res) => res.json())
          .then((data) => {
              console.log(data)
              const imgUrl = { ...newForm, img: data.url }
              setNewForm(imgUrl)
              console.log(newForm)
          })
          .catch((err) => {
              console.log(err)
          })
  }

  const handleSubmit = async (e) => {
      e.preventDefault()
      try {
          const currentState = { ...newForm, location: [newForm.latitude, newForm.longitude] }
          console.log(`This is currentState at top of handleSubmit: ${currentState}`)

          const requestOptions = {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(currentState),
          }
          const response = await fetch("https://shoe-string.herokuapp.com/posts", requestOptions)

          const createdPost = await response.json()
          console.log(" I am created post", createdPost)
          setNewForm({
              tags: " ",
              body: " ",
              img: " ",
          })
      } catch (err) {
          console.error(`Error in Try Block of handleSubmit function: ${err}`)
      }
  }

  

return (
  <>
  <div className='darker-background' onClick={() => setIsOpen(false)}>
    <div className='center-it'>
      <div className='modal'>
        <div className='modal-header'>
          <h5 className='modal-title'>Create A Post</h5>
        </div>
        <button className='close-button' onClick={() => setIsOpen(false)}><MdClose className='close'/>
        </button> 
        <div className='modal-body'>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui minus dolore beatae explicabo, fugit necessitatibus voluptatem. Ipsum ab at cupiditate quos fugiat fugit magni totam delectus, eaque, illo mollitia qui.
        </div>
        <div className='modal-buttons'>
          <div className='modal-buttons-container'>
            <button className='delete-button' onClick={() => setIsOpen(false)}>
              Delete
            </button>
            <button className='cancel-button' onClick={() => setIsOpen(false)}>
              Cancel 
            </button>
          </div>
        </div>
      </div>
    </div>
  </div> 
  </>
  )
}

export default Modal
