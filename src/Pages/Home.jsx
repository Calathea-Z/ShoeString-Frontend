import { Link } from "react-router-dom"

const Home = (props) => {
    return (
        <section>
            <h4>the aptly named</h4>
            <h2>Shoe String Auth Component here</h2>
            <p>Sign in to post</p>
            <Link to="/auth">LOGIN | REGISTER</Link>
        </section>
    )
}

export default Home
