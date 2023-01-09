import { useState } from 'react'
import '../Styles/imageUpload.css';

function ImageUpload() {

    const [image, setImage] = useState(null);
    const [progressBar, setProgressBar] = useState(0);
    const [body, setBody] = useState("");

    const handleChange = (e) => {
        if (e.target.files[0]) {
            setImage(e.target.files[0]);
        }
    };

    const handleUpload = () => {
        const upload = storage.ref(`images/${image.name}`).put(image);
    }

  return (
    <div>
      
    </div>
  )
}

export default ImageUpload
