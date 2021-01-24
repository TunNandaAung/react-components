import React, { useState, useRef } from "react";

const ImagePicker = (props) => {
  const inputRef = useRef();
  const [imagePreview, setImagePreview] = useState(null);

  const onChange = () => {
    const reader = new FileReader();

    reader.onload = (e) => {
      setImagePreview(e.target.result);
    };

    reader.readAsDataURL(inputRef.current.files[0]);
  };

  return (
    <div>
      {imagePreview && (
        <img
          src={imagePreview}
          alt="Photo Preview"
          className="my-4 rounded-lg"
        />
      )}
      <div className="flex justify-between">
        <button
          type="button"
          className="shadow bg-blue-600 hover:bg-blue-700 focus:shadow-outline focus:outline-none text-white py-2 px-4 rounded-lg"
          onClick={() => inputRef.current.click()}
        >
          Select a photo
        </button>
        {imagePreview && (
          <button
            type="button"
            className="shadow bg-blue-600 hover:bg-blue-700 focus:shadow-outline focus:outline-none text-white py-2 px-4 rounded-lg"
            onClick={() => setImagePreview(null)}
          >
            Remove
          </button>
        )}
      </div>

      <input
        className="hidden"
        type="file"
        ref={inputRef}
        name={props.name}
        accept="image/*"
        onChange={onChange}
      />
    </div>
  );
};

export default ImagePicker;
