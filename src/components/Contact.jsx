import React from "react";

const Contact = () => (
  <section className="py-5 contact-section text-white" id="contact">
    <div className="container">
      <h2 className="text-center mb-4 text-warning">Get in Touch</h2>
      <p className="text-center mb-5 text-warning">
        Have a question or need help with a product? We’re here to assist you.
      </p>
      <hr className="text-warning mb-5" style={{ opacity: 0.3 }} />
      <div className="row justify-content-center">
        <div className="col-md-8">
          <form
            className="p-4 border rounded-4 shadow-lg"
            style={{ backgroundColor: "#1a1a1a" }}
          >
            <div className="mb-3">
              <label htmlFor="name" className="form-label text-warning">
                Name
              </label>
              <input
                type="text"
                className="form-control bg-dark text-white border-warning"
                id="name"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label text-warning">
                Email
              </label>
              <input
                type="email"
                className="form-control bg-dark text-white border-warning"
                id="email"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label text-warning">
                Message
              </label>
              <textarea
                className="form-control bg-dark text-white border-warning"
                id="message"
                rows="4"
                required
              ></textarea>
            </div>
            <div className="text-center mt-4">
              <button
                type="submit"
                className="btn btn-lg btn-warning text-dark fw-bold px-5 py-2"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
);

export default Contact;
