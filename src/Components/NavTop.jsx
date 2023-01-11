import "../Styles/navTop.css"
import { GiSteeltoeBoots } from "react-icons/gi"
import { Link, Navigate } from "react-router-dom"
import { HiUserCircle } from "react-icons/hi"
import { motion } from "framer-motion"

const NavTop = () => {
    return (
        <nav className="full-top">
            <div className="top-header">
                <div className="top-header-wrapper">
                    <motion.div whileHover={{ scale: 1.2 }} transition={{ duration: 0.2 }} className="logo">
                        <div className="boots">
                            <Link to="/">
                                <GiSteeltoeBoots />
                            </Link>
                        </div>
                        <h3 id="app-name">ShoeString</h3>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.2 }} transition={{ duration: 0.2 }} className="profile-icon">
                        <div>
                            <Link to="/auth">
                                <HiUserCircle />
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </div>
        </nav>
    )
}

export default NavTop
