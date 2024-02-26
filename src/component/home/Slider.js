import "react-slideshow-image/dist/styles.css";
import React from "react";
import { Slide } from "react-slideshow-image";
import "./slider.css";
import "react-slideshow-image/dist/styles.css";

const Slider = () => {
  const images = [
    "https://media.gettyimages.com/id/1357411237/photo/male-doctor-sliding-his-patient-into-the-cat-scanner.jpg?s=1024x1024&w=gi&k=20&c=EB_NUvZqtMP4dONgfsNC5g5YeZJ2j8P6O_P6ZIGgf8A=",

    "https://img.freepik.com/free-photo/doctor-with-face-mask-against-covid19-discussing-with-nurse-hospital-waiting-area-disabled-senior-woman-wheelchair-waiting-examination-assistant-working-reception-computer_482257-6055.jpg?size=626&ext=jpg&ga=GA1.1.1292048124.1708920798&semt=sph",
    "https://t4.ftcdn.net/jpg/01/78/07/33/240_F_178073396_Y8OeTWQbysuxwkmfHAnqX0CHA4WCwCyL.jpg",
    "https://img.freepik.com/free-psd/interior-view-operating-room-generative-ai_587448-1892.jpg?size=626&ext=jpg&ga=GA1.1.1292048124.1708920798&semt=sph",
    "https://t3.ftcdn.net/jpg/01/69/61/52/240_F_169615294_hmlk8fSngBor9QclFFxSRsqVS7D7gxSD.jpg",
    "https://img.freepik.com/free-psd/interior-modern-medical-office-with-doctor39s-workplace-generative-ai_587448-2001.jpg?size=626&ext=jpg&ga=GA1.1.1292048124.1708920798&semt=sph",
  ];

  const slideProperties = {
    duration: 2000,
    autoplay: true,
    transitionDuration: 900,
  };

  return (
    <Slide {...slideProperties}>
      {images.map((image, index) => (
        <div key={index} className="each-slide-effect">
          <div
            className="imgs"
            style={{ backgroundImage: `url(${image})` }}
          ></div>
        </div>
      ))}
    </Slide>
  );
};

export default Slider;
