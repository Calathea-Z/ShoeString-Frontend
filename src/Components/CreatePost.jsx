import "../Styles/createPost.css"
import { useState } from "react"
import { BsFillChatSquareTextFill } from "react-icons/bs"
// import UploadWidget from '../Components/UploadWidget'

const CreatePost = () => {
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
    <div className="post">
      <div className="post-header">
        <h1>Create new post</h1>
      </div>
      <div className="post-body-form">
        <form onSubmit={handleSubmit}>
          <label htmlFor="body">
            <div className="post-comment-add">
              <div className="post-icon-non-feed">
                <BsFillChatSquareTextFill />
              </div>
              <textarea type="text" id="body" name="body" placeholder="Add a comment..." className="post-individual-comment" value={newForm.body} onChange={handleChange}
               />
            </div>
          </label>
          <label htmlFor="latitude">
            <div className="post-comment-add">
              <div className="post-icon-non-feed">
                <h4>Latitude</h4>
              </div>
              <textarea type="text" id="latitude" name="latitude" placeholder="latitude" className="post-individual-comment" value={newForm.latitude} onChange={handleChange}
              />
            </div>
          </label>
          <label htmlFor="longitude">
            <div className="post-comment-add">
              <div className="post-icon-non-feed">
                <h4>Longitude</h4>
              </div>
              <textarea type="text" id="longitude" name="longitude" placeholder="longitude" className="post-individual-comment" value={newForm.longitude} onChange={handleChange}
              />
            </div>
          </label>
          <label htmlFor="tags">
            <div className="post-comment-add">
              <div className="post-icon-non-feed">
                <h4>Tags</h4>
              </div>
              <textarea type="text" id="tags" name="tags" placeholder="Add a #tag" className="post-individual-comment" value={newForm.tags} onChange={handleChange}
              />
            </div>
          </label>
          <div>
            <h1>ImageUpload</h1>
            <input type="file" onChange={(e) => setImage(e.target.files[0])} />
            <button onClick={(e) => uploadImage(e)}>Upload Image </button>
          </div>
          <button onClick={() => handleSubmit()} type="submit">
            Submit Post
          </button>
        </form>
      </div>
    </div>
   </>
    )
}

export default CreatePost
