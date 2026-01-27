import { useState } from "react";
import axios from "axios";
import "./glass.css";

function ImageUpload() {
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState("");
  const [uploadedImage, setUploadedImage] = useState("");

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
    setPreview(URL.createObjectURL(file));
  };

  const handleUpload = async () => {
    const formData = new FormData();
    formData.append("image", image);

    const res = await axios.post(
      "http://localhost:5000/api/upload",
      formData
    );

    setUploadedImage(res.data.imageUrl);
  };

  return (
    <div className="glass-card">
      <h1>Upload your image</h1>

      <input type="file" onChange={handleImageChange} />

      {preview && <img src={preview} alt="preview" />}

      <button onClick={handleUpload}>Upload</button>
        <h2>Uploaded Images</h2>
      {uploadedImage && <img src={uploadedImage} alt="uploaded" />}
    </div>
  );
}

export default ImageUpload;
