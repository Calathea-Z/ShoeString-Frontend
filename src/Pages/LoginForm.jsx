import { useNavigate } from "react-router-dom"
import { useState } from "react"
import "../Styles/LoginForm.css"

const LoginForm = ({ signIn }) => {
    const initialState = { username: "", password: "" }
    const [input, setInput] = useState(initialState)
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        const createdUserToken = await signIn(input)

        if (createdUserToken) {
            navigate("/")
        } else {
            navigate("/auth")
        }
        setInput(initialState)
    }

    const handleChange = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value })
    }

    return (
        <>
            <div className="LoginForm">
                <h1>Login</h1>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="username">
                        <input id="username" name="username" placeholder="username" value={input.username} onChange={handleChange} />
                    </label>
                    <label htmlFor="password">
                        <input id="password" name="password" placeholder="password" value={input.password} onChange={handleChange} />
                    </label>
                    <input type="submit" value="Login" />
                </form>
            </div>
        </>
    )
}
export default LoginForm
