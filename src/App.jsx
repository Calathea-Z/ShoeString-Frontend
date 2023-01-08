import NavTop from './Components/NavTop';
import Feed from './Components/Feed';
import NavBottom from './Components/NavBottom';
import Settings from './Components/Settings';
import Search from './Components/Search';
import CreatePost from './Components/CreatePost';
import Profile from './Components/Profile';
import NotFound from './Pages/NotFound';
import Modal from './Components/Modal';
import { Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import './Styles/app.css';

function App() {

  const [openModal, setOpenModal] = useState(false);

  const handleModal = () => {
    setOpenModal(true);
    console.log("HIT ME")
  }


return (
    <div className='app'>
      
      <NavTop/>
      <Routes>
        <Route path= "/" element={ <Feed /> } />
        <Route path= '/settings' element={ <Settings />} />
        <Route path= '/search' element={ <Search />} />
        <Route path= '/createPost' element={ <CreatePost/>} />
        <Route path= '/profile' element={ <Profile />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      {openModal && <Modal onClickProp={handleModal} />}
      <NavBottom />
    </div>
  );
}

export default App;
