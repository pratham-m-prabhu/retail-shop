import React from 'react';

const Hero = () => (
  <header className="hero text-white position-relative overflow-hidden">
    <video autoPlay muted loop playsInline className="bg-video">
      <source
        src="https://cdn.pixabay.com/video/2020/11/07/55760-503981016_large.mp4?width=1280&hash=b29c278e31d82bcaa3fe2db1472d5183b4a3d2cf"
        type="video/mp4"
      />
      Your browser does not support the video tag.
    </video>
    <div className="hero-content position-relative z-2 text-center">
      <h1>Discover Timeless Elegance</h1>
      <p>Explore our premium range of watches for every style</p>
      <a href="#products" className="btn btn-lg mt-4">Shop Now</a>
    </div>
  </header>
);

export default Hero;
