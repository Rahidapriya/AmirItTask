import React from 'react';
import about from '../../assets/about.png'
// import './aboutus.js'
// import './about.css'

const AboutUs = () => {
    return (
        <div>
            <div className="hero  w-8/12 mx-auto next-section">
  <div className="flex flex-col lg:gap-10  lg:flex-row-reverse">
    <img src={about} className="max-w-sm rounded-lg " />
    <div>
        <h3>We are megaone company</h3>
      <h1 className="text-5xl font-bold">We are making</h1>
      {/* <div className="rotating-text">
  <p>
    <span className="word w-1">awesome.</span>
    <span className="word w-2">beautiful.</span>
    <span className="word w-3">creative.</span>
    <span className="word w-4">fabulous.</span>
    <span className="word w-5">interesting.</span>
  </p>
</div> */}
        <h1>better for everyone</h1>
      <p className="py-6">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum.</p>
      <button className="btn btn-primary">Learn More</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default AboutUs;


