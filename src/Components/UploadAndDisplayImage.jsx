import { useState } from 'react'
import '../Styles/uploadAndDisplayImage.css'

function UploadAndDisplayImage() {

const [selectedImage, setSelectedImage] = useState(null);

return (
    <>
        <div className='upload-image-container'>
            {selectedImage && (
            <>
            <div>
            <img className='photo-box' alt="not found" width={"250px"} src={URL.    createObjectURL(selectedImage)} />
            <br />
            </div>
            <button onClick={()=>setSelectedImage(null)}>Remove</button>
            </>
            )}
        </div>
        <div>
            <input
            type="file"
            name="myImage"
            onChange={(e) => {
                console.log(e.target.files[0]);
                setSelectedImage(e.target.files[0]);
                }}
            />
        </div>
      </>
    );
  };
  

export default UploadAndDisplayImage
