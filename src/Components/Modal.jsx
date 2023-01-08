import '../Styles/modal.css';
import { MdCancel } from 'react-icons/md'
import {FaPencilAlt} from 'react-icons/fa';

function Modal() {


  return (
    <div className='modal-background'>
        <div className='modal-container'>
            <div className='modal-header'>
                <h1>Create A Post</h1>    
            </div>
            <div className='modal-body'>
                <p>Testing</p>
            </div>
            <div className='modal-footer'>
                <div>
                <button><FaPencilAlt className='nav-comp' /></button>
                </div>
                <div>
                <button>< MdCancel className='nav-comp'/></button>
                </div>
             </div>
        </div>
    </div>
  )
}
export default Modal
