// File Path: src/components/ProductList.js

import React, { useState, useEffect } from "react";
import {
  collection,
  getDocs,
  doc,
  updateDoc,
  increment,
} from "firebase/firestore";
import { db } from "../firebase.js"; // Corrected path to Firebase.js

const ProductList = ({ addToCart }) => {
  // 1. State to hold products fetched from Firestore
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true); // Optional: for loading state

  // 2. Fetch products from Firestore when component mounts
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const productsCollectionRef = collection(db, "products"); // Assumes your collection is named 'products'
        const data = await getDocs(productsCollectionRef);
        
        const fetchedProducts = data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id, // Keep the unique document ID
        }));

        setProducts(fetchedProducts);
      } catch (err) {
        console.error("Error fetching products:", err);
      } finally {
        setLoading(false); // Stop loading once done
      }
    };

    fetchProducts();
  }, []); // The empty array [] means this effect runs only once

  // 3. Function to handle purchase and decrease stock
  const handleBuyNow = async (product) => {
    // Prevent buying if out of stock
    if (product.stock <= 0) {
      alert("Sorry, this item is out of stock!");
      return;
    }

    // Call your existing addToCart function
    addToCart(product.name, product.price, product.imageUrl); // Use imageUrl from Firestore

    // Decrease stock in Firestore
    const productDocRef = doc(db, "products", product.id);
    try {
      // Use the atomic 'increment' operation to safely decrease stock
      await updateDoc(productDocRef, {
        stock: increment(-1),
      });

      // Update the state locally for an instant UI change
      setProducts((prevProducts) =>
        prevProducts.map((p) =>
          p.id === product.id ? { ...p, stock: p.stock - 1 } : p
        )
      );
    } catch (err) {
      console.error("Error updating stock:", err);
      alert("Could not complete the purchase. Please try again.");
    }
  };

  // Optional: Display a loading message
  if (loading) {
    return <h2 className="text-center mt-5">Loading Products...</h2>;
  }

  return (
    <section className="py-5" id="products">
      <div className="container">
        <h2 className="text-center text-warning fw-bold mb-4">Our Watches</h2>
        <div className="row g-4">
          {products.map((product) => (
            <div className="col-md-4" key={product.id}>
              <div className="card bg-dark text-white h-100">
                <img
                  // 4. Use 'imageUrl' from Firestore (make sure your field name matches)
                  src={product.imageUrl}
                  className="card-img-top"
                  alt={product.name}
                  style={{ height: '300px', objectFit: 'cover' }} // Added for uniform image sizes
                />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{product.name}</h5>
                  <p className="card-text">₹{product.price.toLocaleString()}</p>

                  {/* 5. Display Stock Availability */}
                  <p className={`card-text ${product.stock > 5 ? 'text-success' : 'text-danger'}`}>
                    {product.stock > 0 ? `${product.stock} left in stock` : "Out of Stock"}
                  </p>

                  <button
                    className="btn btn-primary mt-auto" // mt-auto pushes button to the bottom
                    // 6. Call the new handleBuyNow function
                    onClick={() => handleBuyNow(product)}
                    // 7. Disable button if out of stock
                    disabled={product.stock === 0}
                  >
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductList;