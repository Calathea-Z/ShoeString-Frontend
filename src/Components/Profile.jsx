import "../Styles/profile.css"
import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import QueryResults from "./QueryResults"
import Query from "./Query"

function Profile() {
    const [query, setQuery] = useState([])
    let userIdMatch = null

    const handleChange = (e) => {
        const input = { ...query }
        input[e.target.name] = e.target.value
        // console.log(input)
        setQuery(input)
        // console.log(query)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        findUserIdMatchForQuery(query)
    }
    const findUserIdMatchForQuery = async (queryTerm) => {
        try {
            let allUsers = await fetch("https://shoe-string.herokuapp.com/users")
            const foundUsers = await allUsers.json()
            console.log(`${foundUsers.allUsers.length} users found`)
            console.log(`query is ${queryTerm.name}`)
            for (let i = 0; i < foundUsers.allUsers.length; i++) {
                if (foundUsers.allUsers[i].username === queryTerm.name) {
                    userIdMatch = foundUsers.allUsers[i]._id
                    console.log(`found userIdMatch: ${userIdMatch}`)
                } else {
                    userIdMatch = null
                    console.log(`no match found: ${userIdMatch}`)
                }
            } return userIdMatch
        } catch (err) {
            console.error(err)
        }
    }
    console.log(`userIdMatch outside func ${userIdMatch}`)

    useEffect(() => {}, [userIdMatch])
    return (
        <div className="profile">
            <Query handleChange={handleChange} handleSubmit={handleSubmit} findUserIdMatchForQuery={findUserIdMatchForQuery} />
            <QueryResults query={query.name} />
            <h1>userIdMatch is {userIdMatch}</h1>
        </div>
    )
=======
  return (
    <div className='profile'>
    </div>
  )
}

export default Profile
