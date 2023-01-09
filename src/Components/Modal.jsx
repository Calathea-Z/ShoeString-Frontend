import '../Styles/modal.css';
import { MdCancel } from 'react-icons/md'
import {FaPencilAlt} from 'react-icons/fa';

const Modal= ({toggleModal}) => {


  return (
    <div>
      <div className='modal'>
        <div className='modal-header'>   
        </div>
        <div className='modal-body'> 
        </div>
        <div className='modal-footer'>
          <span className='modal-close-btn' onClick={() => toggleModal(false) } >
            &times;
          </span>
        </div>
      </div>
    </div>
  )
}
export default Modal
