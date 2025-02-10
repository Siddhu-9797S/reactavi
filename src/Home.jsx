import React, { useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="container text-center mt-5">
      {/* Banner Image */}
      <div className="mb-4">
        <img
          src="ger.png"
          className="img-fluid rounded shadow"
        />
      </div>
      
      {/* Header Section */}
      <div className="p-4 mb-4 bg-light shadow rounded">
        <h1 className="display-4 text-primary fw-bold">
          <i className="bi bi-shop"></i> Welcome to Grocery Store
        </h1>
        <p className="lead text-muted">
          <i className="bi bi-bag-heart-fill text-danger"></i> Fresh groceries delivered to your doorstep!
        </p>
      </div>


      {/* Categories Section */}
      <div className="row mt-4">
        {/* Vegetables Card */}
        <div className="col-md-4">
          <div className="card shadow-lg border-0">
            <img src="data:image/jpeg;base64,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" className="card-img-top" alt="Vegetables" />
            <div className="card-body">
              <h5 className="card-title">
                <i className="bi bi-carrot text-success"></i> Fresh Vegetables
              </h5>
              <p className="card-text text-muted">Buy farm-fresh vegetables at the best prices.</p>
              <Link to="/veg" className="btn btn-success w-100">
                <i className="bi bi-cart"></i> Shop Now
              </Link>
            </div>
          </div>
        </div>

        {/* Milk & Dairy Card */}
        <div className="col-md-4">
          <div className="card shadow-lg border-0">
            <img src="https://media.istockphoto.com/id/1222018207/photo/pouring-milk-into-a-drinking-glass.jpg?s=612x612&w=0&k=20&c=eD4YHoSjKIYSPDgnM2OgWD_HVH2IcmjZSRq7IjUnH6M=" className="card-img-top" alt="Milk & Dairy" />
            <div className="card-body">
              <h5 className="card-title">
                <i className="bi bi-cup-straw text-warning"></i> Milk & Dairy
              </h5>
              <p className="card-text text-muted">High-quality dairy products for your daily needs.</p>
              <Link to="/milk" className="btn btn-warning w-100">
                <i className="bi bi-cart"></i> Shop Now
              </Link>
            </div>
          </div>
        </div>

        {/* Non-Veg Items Card */}
        <div className="col-md-4">
          <div className="card shadow-lg border-0">
            <img src="nonvegh.png" alt="Non-Veg" />
            <div className="card-body">
              <h5 className="card-title">
                <i className="bi bi-egg-fried text-danger"></i> Non-Veg Items
              </h5>
              <p className="card-text text-muted">Fresh meat, chicken, and seafood available.</p>
              <Link to="/nonveg" className="btn btn-danger w-100">
                <i className="bi bi-cart"></i> Shop Now
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="mt-4">
        <Link to="/cart" className="btn btn-dark btn-lg me-3 shadow">
          <i className="bi bi-cart-check-fill"></i> Go to Cart
        </Link>
        <Link to="/order" className="btn btn-primary btn-lg shadow">
          <i className="bi bi-receipt-cutoff"></i> View Orders
        </Link>
      </div>
    </div>
  );
};

export default Home;
