import React from "react";
import "./ImageLinkFrom.css"

const ImageLinkFrom = ({ onInputChange, onButtonSubmit }) => {
  return (
    <div>
      <p className="white f3">
        {"Wanna see where is the face? Enter the URL of an image."}
      </p>
      <div className="inputs">
        <div className="row inputAndButton pa4 shadow-5 br3" >
          <input className="f4 pa2 w-75 center" type={"text"} onChange={onInputChange}/>
          <button
            className="w-25 f4 grow link ph3 pv2 dib white bg-light-purple"
            onClick={onButtonSubmit}>
            Detect!
          </button>
        </div>
      </div>
    </div>
  );

}

export default ImageLinkFrom;