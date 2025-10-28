import React from "react";
import "./Aboutus.css";
import Logo from "../../assats/logo.png";
import { Link } from "react-router-dom";

const Aboutus = () => {
  return (
    
    <div style={{ marginTop: "80px" }}>
     
      <div className="header">
        <div className="logo">
          <img src={Logo} alt="Logo" />
        </div>
        <div className="home">
        <Link to="/">HOME</Link>
        </div>
      </div>
      <div className="container">
        <div className="about-txt">Rome Relax Repeat</div>
        <div className="about-txt2">
          Explore different cities. Get many options all at one place
        </div>
        <img
          src="https://www.holidify.com/res/webflow/about-us/images/photo-1578894381163-e72c17f2d45f.jpeg"
          alt="Background Image"
        />
      </div>
      <div className="blank">
        
      </div>
      <div className="para">
        <h2>Travel planning has always been messy and difficult</h2>
        <div className="about-para">Planning every single trip needs answers to a number of questions. Holidify is attempting to collect all the information that you will ever need to plan your trip - from when, where and how, to more hidden gems in every destination, Holidify is the one-stop solution to all your travel planning needs.</div>
      </div>

      <div className="box1">
        <div className="box-img animated2">
          <img src="https://www.holidify.com/res/webflow/about-us/images/photo-1517439270744-8d9287c2f8f8.jpg"></img>
        </div>
        <div className="box-text">
          <h1>Exhaustive, Reliable Content</h1>
          <p className="animated">
          Our travel guides are editorially curated, so you can trust that they will lead you to the right path. We have invested extensive resources over the last 8 years to build exhaustive, in-depth content for all destinations - to find answers to all your questions.
          </p>
        </div>
      </div>
     
       <div className="box1">
       <div className="box-text">
          <h1>Goes Around the Globe</h1>
          <p className="animated">
          We started with a focus on India - and are proud to be building a global company out of India - but our ambitions are global. Soon enough, you will be able to research your trip to any destination around the world on Holidify.
          </p>
        </div>
        <div className="box-img animated2">
          <img src="https://www.holidify.com/res/webflow/about-us/images/photo-1469854523086-cc02fe5d8800-1.jpg"></img>
        </div>
       
      </div>

      <div className="box1">
        <div className="box-img animated2">
          <img src="https://www.holidify.com/images/cmsuploads/compressed/30214916668eed51a4c7ao_20220914193628.jpg"></img>
        </div>
        <div className="box-text">
          <h1>Bootstrapped Success</h1>
          <p className="animated">
          Every company has its own share of lows and highs, but Holidify has had an absolute roller-coaster ride over the years. From being bootstrapped for a long time, to barely surviving, making a dream comeback, and now surviving the COVID-19 pandemic, Holidify is a bold statement that fundraising isn't the the way to run a startup.
          </p>
        </div>
      </div>

    </div>
  );
};

export default Aboutus;
