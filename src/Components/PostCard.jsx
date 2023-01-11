import "../Styles/postCard.css"
import { motion } from "framer-motion"
import { ImHeart } from "react-icons/im"
import { FiMapPin } from "react-icons/fi"
import { CgProfile } from "react-icons/cg"
import { BsFillChatSquareTextFill } from "react-icons/bs"
import { useState, useEffect } from "react"
import { getUserToken } from "../utils/authToken"

function PostCard({ username, _id, img, location, body, tags, likes }) {
    const [post, setPost] = useState([])
    const [newEditForm, setNewEditForm] = useState("")
    const token = getUserToken()
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
                body: JSON.stringify(newEditForm),
            }
            const response = await fetch(`https://shoe-string.herokuapp.com/posts/${_id}`, requestOptions)
            const editedPost = await response.json()
            setPost(editedPost)
            console.log("This is your edited post :", editedPost)
        } catch (err) {
            console.log(err)
        }
    }

    const getPost = async () => {
        try {
            const response = await fetch("https://shoe-string.herokuapp.com/posts")
            const foundPost = await response.json()

            setPost(foundPost)
        } catch (err) {
            console.error(err)
        }
    }

    const deletePost = async () => {
        try {
            const requestOptions = {
                method: "DELETE",
            }
            const response = await fetch(`https://shoe-string.herokuapp.com/posts/${_id}`, requestOptions)
            const deletedPost = await response.json()
            console.log("This post was deleted :", deletedPost)
        } catch (err) {
            console.error(err)
        }
    }

    useEffect(() => {
        getPost()
    }, [])

    return (
        <div className="post-individual-full">
            <div className="post-individual-header">
                <div className="mini-profile-image">
                    <CgProfile />
                </div>
                <div>
                    <p>{username}</p>
                </div>
            </div>
            <div className="post-body">
                <img className="post-photo" src={img} alt="Photo of location" />
            </div>
            <div className="post-individual-middle">
                <div>
                    <a href="" className="location-button">
                        <FiMapPin /> {location[0]},  {location[1]}
                    </a>
                </div>
                <motion.div className="flex-box" whileHover={{ scale: 1.1 }} transition={{ duration: 0.8 }}>
                    {likes}
                    {"  "}likes
                    <button id="likes">
                        <ImHeart />
                    </button>
                </motion.div>
            </div>
            <div className="feed-comment-format">
                <div id="comment-username">{username}</div>
                <div id="post-comments-feed">{body}</div>
            </div>

            <form className="post-comment-add" onSubmit={editPost}>
                <div className="post-icon">
                    <BsFillChatSquareTextFill />
                </div>
                <input type="text" placeholder="Edit post here...." name="body" id="body" value={newEditForm.body} onChange={handleChange} className="post-individual-comment" />
                {token ? (
                    <div className="update-post-buttons">
                        <button className="post-button" onClick={editPost}>
                            Update
                        </button>
                        <button className="post-button" onClick={deletePost}>
                            Delete
                        </button>
                    </div>
                ) : null}
            </form>
        </div>
    )
}

export default PostCard
