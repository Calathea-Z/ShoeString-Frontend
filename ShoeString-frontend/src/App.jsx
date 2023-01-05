import NavTop from './Components/NavTop';
import Feed from './Components/Feed';
import NavBottom from './Components/NavBottom';
import { Route, Routes } from 'react-router-dom';
import './Styles/app.css';

function App() {
  return (
    <div className='app'>
      <NavTop/> 

      <Routes>
        <Route path= "/" element={ <Feed/> } />
      </Routes>
      
      <NavBottom/>
    </div>
  );
}

export default App;
