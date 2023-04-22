import React, { useState } from "react";
import "./HomePage.css";
// import { images } from "./CarauselData";
import City from "../../images/pdpu1.jpg";
import Salvador from "../../images/pdpu2.jpg";
import Ubc from "../../images/pdpu3.jpg";

// import backIcon from "../Images/back_icon.png";
// import ArrowForwardIosIcon from "../Images/back_icon.png";

function Carousel() {
  const [currImg, setCurrImg] = useState(0);
  const images = [
    { title: "PDEU",
      subtitle: "PDEU", 
      img: City },
    {
      title: "PDPU",
      subtitle: "PDPU",
      img: Salvador,
    },
    {
      title: "PDPU",
      subtitle: "PDPU",
      img: Ubc,
    },
  ];

  return (
    <>
    <div className="carousel">
      <div
        className="carouselInner"
        style={{ backgroundImage: `url(${images[currImg].img})` }}
      >
        <div
          className="left"
          onClick={() => {
            currImg > 0 && setCurrImg(currImg - 1);
          }}
        >
          <i class="fa-solid fa-backward-step" alt = "hello" style={{border: "3px solid black",padding: 5,fontSize: 30 }}></i>
        </div>
        <div className="center">
          {/* <h1>{images[currImg].title}</h1>
          <p>{images[currImg].subtitle}</p> */}
        </div>
        <div
          className="right"
          onClick={() => {
            currImg < images.length - 1 && setCurrImg(currImg + 1);
          }}
        >
          <i class="fa-solid fa-forward-step" alt = "hello" style={{border: "3px solid black",padding: 5,fontSize: 30 }}></i>
        </div>
      </div>
    </div>
    <div>
      <section class="course">
        <h1>Achievements</h1>

        <div class="row" data-aos="zoom-in-up">
          <div class="course-colomn">
            <h3>NAAC Accreditation </h3>
            <p> Accredited by the National Assessment and Accreditation Council (NAAC) with an 'A++' grade & CGPA of 3.52 out of 4.00</p>
          </div>
          <div class="course-colomn">
            <h3>Centre of Excellence</h3>
            <p>
            Recognized as a "Centre of Excellence in Oil, Gas, and Energy" by the Government of Gujarat.
            </p>
          </div>
          <div class="course-colomn">
            <h3>Green Campus</h3>
            <p>
            Recognized as a "Green Campus" by the Gujarat Pollution Control Board for its sustainable practices and initiatives
            </p>
          </div>
        </div>
      </section>
      <section class="footer">
        <h4>About Us</h4>

        <div class="icons">
          <a href="https://www.facebook.com">
            <i class="fab fa-facebook"></i>
          </a>
          <a href="https://www.instagram.com/invites/contact/?i=17s1o7wfms500&utm_content=i08g8yn">
            <i class="fab fa-instagram"></i>
          </a>
          <a href="https://www.twitter.com">
            <i class="fab fa-twitter"></i>
          </a>
          <a href="https://www.linkedin.com/in/chaitanya-sheth-9156891ba/ ">
            <i class="fab fa-linkedin"></i>
          </a>
        </div>

        <p>
          Made By <i class="far fa-heart"></i> G5-team
        </p>
        {/* <p>
          <i class="fa fa-copyright"></i> copyright 2023 || All rights reserved
        </p> */}
      </section>
    </div>
    </>
  );
}

export default Carousel;
