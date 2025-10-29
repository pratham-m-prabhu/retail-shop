import React from "react";

const About = () => (
  <section className="py-5" id="about" style={{ backgroundColor: "#1a1a1a" }}>
    <div className="container">
      <div className="row align-items-center">
        <div className="col-lg-6 mb-4 mb-lg-0">
          <img
            src="https://images.pexels.com/photos/380782/pexels-photo-380782.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Crafted Timepieces"
            className="img-fluid rounded shadow"
            style={{ maxHeight: "530px", width: "800px", objectFit: "cover" }}
          />
        </div>
        <div className="col-lg-6">
          <h2 className="text-warning fw-bold mb-4">About MyWatches</h2>
          <p
            className="text-light"
            style={{ fontSize: "1.1rem", lineHeight: "1.8" }}
          >
            At <strong>MyWatches</strong>, we believe that a watch is more than
            just a timepiece—it's a statement of style, personality, and
            timeless elegance. With years of expertise in watchmaking, our brand
            blends tradition with innovation to create watches that reflect your
            identity.
          </p>
          <p
            className="text-light"
            style={{ fontSize: "1.1rem", lineHeight: "1.8" }}
          >
            Whether you prefer a classic leather strap or a modern
            stainless-steel dial, our collection has been meticulously curated
            to suit all tastes.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default About;
