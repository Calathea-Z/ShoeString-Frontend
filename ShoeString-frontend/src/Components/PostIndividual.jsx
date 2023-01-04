import '../Styles/postIndividual.css';

function PostIndividual({id_, username, userphoto, img, comment}) {
  return (
    <div className='post-individual-full'>
      <div className='post-individual-header'>
        <p>{username}</p>
        <img className='profile-photo' src={userphoto} alt=''/>
      </div>
      <div className='post-individual-photo'>
        <img className='post-photo' src={img} alt=''/>
      </div>
      <div className='post-individual-comment'>
        <h6>{comment}</h6>
      </div>
    </div>
  )
}

export default PostIndividual
 