import { useEffect, useState } from "react";

const UploadImage = ({setDataImg}) => {
  const [images, setImages] = useState([]);

  const handleChange = (e) => {
    const myImg = e.target.files[0];
    setDataImg(myImg);
    setImages((images) => [URL.createObjectURL(myImg)]);
    return URL.revokeObjectURL(myImg)
  }

  const deleteImage = (blob) => {
    setImages(images.filter(x => x !== blob));
  };

  useEffect(() => {
    console.log('images:..',images);
    //setDataImg(images)
  }, [images]);

  return (
    <div className=" p-3">
      <label className="fs-5">Elige tu imagen:</label>
      <input className="ms-auto me-auto d-block my-3" type="file" onChange={handleChange} />

      {images.map((row, index) =>
        <div className="d-flex flex-column align-items-center" key={index}>
          <img style={{width:'20vw'}} className="mb-3 rounded" src={row} alt={row} />
          <button className="btn btn-secondary" onClick={() => deleteImage(row)}>borrar</button>
        </div>
      )}
    </div>
  );
};

export default UploadImage;
