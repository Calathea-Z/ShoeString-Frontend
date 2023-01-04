import '../Styles/navbar.css';
import {VscSettingsGear} from 'react-icons/vsc';
import {GiRopeCoil} from 'react-icons/gi';
import {HiSearch} from 'react-icons/hi';



const NavTop = () => {
  return (
    <nav className='full-top'>
      <div className='nav-comp'>
        <a href='#'><GiRopeCoil/></a>
      </div>
      <div className='search-bar'>
        <div id='search-icon'>
          <HiSearch/>
        </div>
        <input type='text' placeholder="Search"/>
      </div>
      <div className='nav-comp'>
        <a href='#settings'><VscSettingsGear/></a>
      </div>
    </nav>
  )
}

export default NavTop
