import React from "react";

const CartModal = ({ items, removeFromCart }) => {
  console.log("Cart Items:", items);
  const total = items.reduce((sum, item) => sum + item.price, 0);

  return (
    <div
      className="modal fade"
      id="cartModal"
      tabIndex="-1"
      aria-labelledby="cartModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content bg-dark text-white rounded-4 shadow-lg border border-warning">
          <div className="modal-header border-bottom border-secondary">
            <h5 className="modal-title text-warning" id="cartModalLabel">
              🛒 Your Cart
            </h5>
            <button
              type="button"
              className="btn-close btn-close-white"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>

          <div className="modal-body">
            {items.length === 0 ? (
              <p className="text-center ">Your cart is empty.</p>
            ) : (
              <ul className="list-group list-group-flush">
                {items.map((item, index) => (
                  <li
                    key={index}
                    className="list-group-item bg-dark text-white border-secondary"
                  >
                    <div className="d-flex align-items-center">
                      <img
                        src={item.img}
                        alt={item.name}
                        style={{
                          width: "60px",
                          height: "60px",
                          objectFit: "cover",
                          borderRadius: "8px",
                          marginRight: "15px",
                          border: "1px solid #ffc107",
                        }}
                      />

                      <div className="flex-grow-1">
                        <div className="fw-semibold">{item.name}</div>
                        <div className=" small">
                          ₹{item.price.toLocaleString()}
                        </div>
                      </div>

                      <button
                        className="btn btn-sm btn-outline-danger ms-3"
                        onClick={() => removeFromCart(index)}
                      >
                        Remove
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            )}

            <hr className="border-warning mt-3" />
            <h5 className="text-end">
              Total:{" "}
              <span className="text-warning">₹{total.toLocaleString()}</span>
            </h5>
          </div>

          <div className="modal-footer border-top border-secondary">
            <button
              type="button"
              className="btn btn-outline-warning"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <button
              type="button"
              className="btn btn-warning text-dark fw-bold"
              disabled={items.length === 0}
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartModal;
