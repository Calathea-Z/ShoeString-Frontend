import '../Styles/postIndividual.css';
import {ImHeart} from 'react-icons/im'
import {FiMapPin} from 'react-icons/fi'
import {BsFillChatSquareTextFill} from 'react-icons/bs'

function PostIndividual({id_, username, userphoto, img, location, comment, likes}) {
  return (
    <div className='post-individual-full'>

      <div className='post-individual-header'>
        <p>{username}</p>
        <img className='profile-photo' src={userphoto} alt={username}/>
      </div>

      <div className='post-body'>
        <img className='post-photo' src={img} alt='Photo of location'/>
       </div> 
        <div className='post-individual-middle'>
            <div>
              <a href='#locationtag' className='location-button'><FiMapPin/>{' '}{location}</a>
            </div>
            <div>
              <button className='post-button'><ImHeart/></button>
              <button className='post-button'><BsFillChatSquareTextFill/></button>
            </div>
        </div>
        <div className='post-individual-likes'>
          if{likes.length}{
            <p>Liked by {likes} fellow travelers</p>
          }   
        </div>
        <div className='post-individual-comment'>
        <p><span>{username}</span>{' '}{comment}</p>
        </div>
    </div>
  )
}

export default PostIndividual
 