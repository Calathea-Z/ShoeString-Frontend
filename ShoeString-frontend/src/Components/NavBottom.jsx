import '../Styles/navBottom.css'
import {GiSteeltoeBoots} from 'react-icons/gi';
import {FaPencilAlt} from 'react-icons/fa';
import {HiUserCircle} from 'react-icons/hi';

function NavBottom() {
  return (
    <nav className='full-bottom'>
      <div className='nav-comp'>
        <a href='#'><GiSteeltoeBoots /></a>
      </div>
      <div className='nav-comp'>
        <a href='#post'><FaPencilAlt /></a>
      </div>
      <div className='nav-comp'>
        <a href='#profile'><HiUserCircle /></a>
      </div>
    </nav>
  )
}

export default NavBottom
