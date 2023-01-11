import { MdClose } from 'react-icons/md';
import { useState, useEffect } from "react"
import { BsFillChatSquareTextFill } from "react-icons/bs"
import '../Styles/modal.css';


const Modal= ({setIsOpen}) => {

  const [image, setImage] = useState(" ")
  const [newForm, setNewForm] = useState({
      username: " ",
      body: " ",
      tags: " ",
      img: " ",
  })

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
              username: " ",
              tags: " ",
              body: " ",
              img: " ",
          })
          setIsOpen(false);
      } catch (err) {
          console.error(`Error in Try Block of handleSubmit function: ${err}`)
      }
  }

  // const cancelClick = useEffect((e) => {
  //   e && e.stopImmediatePropagation();
  // },[])

return (
<>
  <div className='stopclose'>
  <div className='darker-background' >
    <div className='center-it'>
      <div className='modal'>
        <div className='modal-header'>
          <h5 className='modal-title'>Create A Post</h5>
        </div>
        <button className='close-button' onClick={() => setIsOpen(false)}><MdClose className='close'/>
        </button> 
        <div className='modal-body'>
        <form onSubmit={handleSubmit}>
          <label htmlFor="username">
            <div>
              <div>
                UserName:
              </div>
              <textarea type="text" id="username" name="username" placeholder="Add a comment..." value={newForm.username} onChange={handleChange} required
              />
            </div>
          </label>
          <label htmlFor="body">
            <div>
              <div>
                <BsFillChatSquareTextFill />
              </div>
              <textarea type="text" id="body" name="body" placeholder="Add a comment..."  value={newForm.body} onChange={handleChange} required
               />
            </div>
          </label>
          <label htmlFor="latitude">
            <div>
              <div>
                <h4>Latitude</h4>
              </div>
              <textarea type="text" id="latitude" name="latitude" value={newForm.latitude} onChange={handleChange}
              />
            </div>
          </label>
          <label htmlFor="longitude">
            <div>
              <div>
                <h4>Longitude</h4>
              </div>
              <textarea type="text" id="longitude" name="longitude" value={newForm.longitude} onChange={handleChange}
              />
            </div>
          </label>
          <label htmlFor="tags">
            <div>
              <div>
                <h4>Tags</h4>
              </div>
              <textarea type="text" id="tags" name="tags" placeholder="Add a #tag" value={newForm.tags} onChange={handleChange}
              />
            </div>
          </label>
          <div>
            <h1>ImageUpload</h1>
            <input type="file" onChange={(e) => setImage(e.target.files[0])}/>
          </div>
          {/* <div>
            <img id='preview' src={newForm.img}/>
          </div> */}

          <div>
            <div className='modal-buttons-container'>
              <button className='delete-button' onClick={(e) => uploadImage(e)}>
                Upload Photo
              </button>
              <button className='cancel-button' onClick={() => handleSubmit()} type='submit'>
              Add Post
              </button>
            </div>
          </div>
        </form>
        </div>
      </div>
    </div>
  </div>
  </div> 
</>
)
}

export default Modal
