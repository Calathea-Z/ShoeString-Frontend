import NavTop from "./Components/NavTop"
import Feed from "./Components/Feed"
import NavBottom from "./Components/NavBottom"
import Settings from "./Components/Settings"
import Search from "./Components/Search"
import CreatePost from "./Components/CreatePost"
import Profile from "./Components/Profile"
import NotFound from "./Pages/NotFound"
import { Route, Routes } from "react-router-dom"
// import { RecoilRoot } from "recoil"
import "./Styles/app.css"
import Auth from "./Pages/Auth"
import Home from "./Pages/Home"
import Map from "./Components/Map"
import { UserContext } from "./data"
import { useState } from "react"

function App() {
    // grab UserContext, make it available across whole app
    const { Provider: UserInfo } = UserContext
    console.log(UserInfo)
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const [currentUser, setCurrentUser] = useState(null)

    // const [openModal, setOpenModal] = useState(false);

    // const handleModal = () => {
    // setOpenModal(true);
    // console.log("HIT ME")
    // }


return (
    <div className='app'>
      <UserInfo
        value={{
        isAuthenticated,
        setAuth: setIsAuthenticated,
        user: currentUser,
        setUser: setCurrentUser,
       }}>
      <NavTop />
      <Routes>
        <Route path= "/" element={ <Feed /> } />
        <Route path= '/settings' element={ <Settings />} />
        <Route path= '/search' element={ <Search />} />
        <Route path= '/createPost' element={ <CreatePost/>} />
        <Route path= '/profile' element={ <Profile />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      {/* {openModal && <Modal onClickProp={handleModal} />} */}
      <NavBottom />
      </UserInfo>
    </div>
  );
}

export default App
