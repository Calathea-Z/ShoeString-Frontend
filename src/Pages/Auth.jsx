import { setUserToken, clearUserToken } from "../utils/authToken"
import { useContext } from "react"
import { UserContext } from "../data"
import RegisterForm from "./RegisterForm"
import LoginForm from "./LoginForm"
import "../Styles/Auth.css"

const Auth = (props) => {
    const { setAuth, setUser } = useContext(UserContext)

    const registerUser = async (data) => {
        try {
            const configs = {
                method: "POST",
                body: JSON.stringify(data),
                headers: {
                    "Content-Type": "application/json",
                },
            }

            const newUser = await fetch("http://localhost:4000/auth/register", configs)

            const parsedUser = await newUser.json()
            // console.log(parsedUser)

            // sets local storage
            setUserToken(parsedUser.token)
            // put the returned user object in state
            setUser(parsedUser.user)
            // adds a boolean cast of the responses isAuthenticated prop
            setAuth(parsedUser.isLoggedIn)
            return parsedUser
        } catch (err) {
            console.log(err)
            clearUserToken()
            setAuth(false)
        }
    }
    const loginUser = async (data) => {
        try {
            const configs = {
                method: "POST",
                body: JSON.stringify(data),
                headers: {
                    "Content-Type": "application/json",
                },
            }

            const response = await fetch("http://localhost:4000/auth/login", configs)

            const currentUser = await response.json()
            //console.log(currentUser)

            if (currentUser.token) {
                // sets local storage
                setUserToken(currentUser.token)
                // put the returned user object in state
                setUser(currentUser.user)
                setAuth(currentUser.isLoggedIn)

                return currentUser
            } else {
                throw new Error(`Server Error: ${currentUser.statusText}`)
            }
        } catch (err) {
            console.log(err)
            clearUserToken()
            setAuth(false)
        }
    }

    return (
        <div className="Auth">
            <RegisterForm signUp={registerUser} />
            <LoginForm signIn={loginUser} />
        </div>
    )
}

export default Auth
