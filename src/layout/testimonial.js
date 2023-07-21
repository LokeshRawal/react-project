import React from 'react';
import user from "../assets/images/user.jpg";
import testimonial1 from "../assets/images/testimonial-1.jpg";
import testimonial2 from "../assets/images/testimonial-2.jpg";
import testimonial4 from "../assets/images/testimonial-4.jpg";

const Testimonial = () => {
  return (
    <div className="testimonial wow fadeIn" data-wow-delay="0.1s" style={{ visibility: 'visible', animationDelay: '0.1s', animationName: 'fadeIn' }}>
      <div className="container">
        <h1 className="testimonial-title">Testimonial</h1>
        <div className="row">
          <div className="col-12">
            <div className="testimonial-slider-nav slick-initialized slick-slider">
              <div className="slick-list draggable">
                <div className="slick-track" style={{ opacity: 1, width: '1032px', transform: 'translate3d(-344px, 0px, 0px)' }}>
                  <div className="slider-nav slick-slide slick-cloned" data-slick-index="-4" aria-hidden="true" tabIndex="-1" style={{ width: '86px', position: 'relative', height: '160px' }}>
                    <img src={testimonial1} alt="Testimonial" />
                  </div>
                  {/* Add the rest of the slider nav items */}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="testimonial-slider slick-initialized slick-slider">
              <div className="slick-list draggable">
                <div className="slick-track" style={{ opacity: 1, width: '6570px', transform: 'translate3d(-1460px, 0px, 0px)' }}>
                  <div className="slider-item slick-slide slick-cloned" data-slick-index="-1" aria-hidden="true" tabIndex="-1" style={{ width: '730px' }}>
                    <h3>Customer Name</h3>
                    <h4>Message From Chairman</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non vulputate. Aliquam metus tortor, auctor id gravida condimentum, viverra quis sem. Curabitur non nisl nec nisi scelerisque maximus.</p>
                  </div>
                  {/* Add the rest of the testimonial slider items */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
