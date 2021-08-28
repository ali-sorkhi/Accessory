import React from 'react';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import i1 from "../images/1.jpg";
import i2 from "../images/2.jpg";
import i3 from "../images/3.jpg";

const SlideShow = () => {

  return (
    <div>
      <div className="slide-container">
        <Fade>
          <div className="each-fade">
            <div>
              <img className="h-screen" src={i1} />
            </div>
          </div>
          <div className="each-fade">
            <div>
              <img className="h-screen"  src={i2} />
            </div>
          </div>
          <div className="each-fade">
            <div>
              <img  className="h-screen" src={i3} />
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default SlideShow;
