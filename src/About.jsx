import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const About = () => {
  return (
    <div className="container mt-5">
      <h1 className="text-center text-primary">
        <i className="bi bi-info-circle-fill"></i> About Us
      </h1>
      <p className="text-center text-muted">Learn more about our mission, values, and services.</p>

      <div className="row mt-4">
        {/* About Image */}
        <div className="col-md-6">
          <img 
            src="https://source.unsplash.com/500x300/?grocery,store" 
            className="img-fluid rounded shadow"
            alt="Grocery Store"
          />
        </div>

        {/* About Text */}
        <div className="col-md-6">
          <h3 className="text-success">
            <i className="bi bi-shop"></i> Who We Are
          </h3>
          <p className="text-muted">
            Grocery Store is your one-stop shop for fresh produce, dairy products, and non-veg items. 
            We provide high-quality groceries at the best prices, ensuring that our customers get 
            the best shopping experience right from their homes.
          </p>

          <h3 className="text-danger">
            <i className="bi bi-heart-fill"></i> Our Mission
          </h3>
          <p className="text-muted">
            We aim to make grocery shopping convenient, affordable, and hassle-free. 
            With a wide variety of products and fast delivery, we bring freshness to your doorstep.
          </p>
        </div>
      </div>

      {/* Features Section */}
      <div className="row text-center mt-5">
        <div className="col-md-4">
          <div className="card shadow p-3">
            <i className="bi bi-truck text-primary display-4"></i>
            <h5 className="mt-3">Fast Delivery</h5>
            <p className="text-muted">We ensure timely delivery of fresh groceries to your home.</p>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card shadow p-3">
            <i className="bi bi-tags text-success display-4"></i>
            <h5 className="mt-3">Best Prices</h5>
            <p className="text-muted">Get the best deals on all grocery items every day.</p>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card shadow p-3">
            <i className="bi bi-award text-warning display-4"></i>
            <h5 className="mt-3">Premium Quality</h5>
            <p className="text-muted">Only the freshest and best-quality products are available.</p>
          </div>
        </div>
      </div>

      {/* Call-to-Action */}
      <div className="text-center mt-4">
        <Link to="/contact" className="btn btn-primary">
          <i className="bi bi-envelope"></i> Contact Us
        </Link>
      </div>
    </div>
  );
};

export default About;
