import React from "react";
import { products, featuredIds } from "./products";

const NewCollection = ({ addToCart }) => {
  const featured = products.filter((p) => featuredIds.includes(p.id));

  return (
    <section
      className="py-5"
      id="new-collection"
      style={{ backgroundColor: "#1a1a1a" }}
    >
      <div className="container">
        <h2 className="text-center text-warning mb-4">New Collection</h2>
        <p className="text-center text-light mb-5 fs-5">
          <em>
            Unveil the Future — Our Latest Timepieces, Crafted for Elegance and
            Precision.
          </em>
        </p>
        <div className="row g-4">
          {featured.map((product) => (
            <div className="col-12 col-sm-6 col-lg-4" key={product.id}>
              <div className="card bg-dark text-white border-0 product-card">
                <img
                  src={product.img}
                  className="card-img-top"
                  alt={product.name}
                />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{product.name}</h5>
                  <p className="card-text mb-4">
                    ₹{product.price.toLocaleString()} <span className="text-warning">(20% OFF!)</span>
                  </p>
                  <div className="mt-auto">
                    <button
                      className="btn btn-primary w-100"
                      onClick={() => addToCart(product.name, product.price, product.img)}
                    >
                      Buy Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewCollection;
