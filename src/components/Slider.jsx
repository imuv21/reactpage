import React, { useState, useEffect, useRef } from 'react';
import '../App.css';
import innut from '../assets/Illustration.png';

const Slider = () => {
  const colors = [
    {
      id: 11
    },
    {
      id: 22
    },
    {
      id: 33
    },
  ];
  const delay = 2500;
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef(null);

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(() => {
      setIndex((prevIndex) =>
        prevIndex === colors.length - 1 ? 0 : prevIndex + 1
      );
    }, delay);

    return () => {
      resetTimeout();
    };
  }, [index]);

  return (
    <div className="slideshow" style={{marginTop: '70px'}}>
      <div className="slideshowSlider" style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }} >
        {colors.map((item) => (
          <div className="slide" key={item.id} style={{ backgroundColor: 'var(--bgClr-2)' }} >
            <div className="slideflex">
              <div className="sfone">
                <div className="big-heading">Lessons and insights <br /><span style={{ color: 'var(--themeClr)' }}>from 8 years</span></div>
                <div className="discription" style={{whiteSpace: "wrap"}}>Where to grow your business as a photographer: site or social media?</div>
                <a className='button'>Register</a>
              </div>
              <div className="sftwo">
                <img src={innut} alt="" />
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="slideshowDots">
        {colors.map((_, idx) => (
          <div
            key={idx}
            className={`slideshowDot${index === idx ? " active" : ""}`}
            onClick={() => {
              setIndex(idx);
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
