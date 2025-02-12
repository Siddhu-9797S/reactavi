import React, { useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const categories = [
    { name: "Fresh Vegetables", icon: "bi-carrot text-success", img: "veghome.png", link: "/veg", desc: "Buy farm-fresh vegetables at the best prices.", btnClass: "btn-success", borderColor: "#28a745" },
    { name: "Milk & Dairy", icon: "bi-cup-straw text-warning", img: "Milkitem.png", link: "/milk", desc: "High-quality dairy products for your daily needs.", btnClass: "btn-warning", borderColor: "#ffc107" },
    { name: "Non-Veg Items", icon: "bi-egg-fried text-danger", img: "nonvegh.png", link: "/nonveg", desc: "Fresh meat, chicken, and seafood available.", btnClass: "btn-danger", borderColor: "#dc3545" },
    { name: "Fresh Fruits", icon: "bi-basket2-fill text-danger", img: "fruits.png", link: "/fruits", desc: "Fresh and organic fruits available.", btnClass: "btn-danger", borderColor: "#e83e8c" }
  ];

  const filteredCategories = categories.filter(category =>
    category.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container text-center mt-5">

      {/* Header Section */}
      <div
        className="p-5 mb-4 shadow-lg rounded text-white position-relative"
        style={{
          background: "linear-gradient(135deg, #28a745, #20c997)",
          border: "4px solid #ffc107",
          textAlign: "center",
        }}
      >
        <h1 className="display-4 fw-bold text-warning">
          <i className="bi bi-shop me-2"></i> Welcome to Grocery Store
        </h1>
        <p className="lead text-light">
          <i className="bi bi-bag-heart-fill text-danger me-2"></i>
          Fresh groceries delivered to your doorstep!
        </p>
      </div>

      {/* Search Bar */}
      <div className="mb-4">
        <input
          type="text"
          className="form-control w-50 mx-auto p-3 border-3 rounded-pill shadow"
          style={{
            borderColor: "#28a745",
            backgroundColor: "#f8f9fa",
            color: "#343a40",
            fontSize: "1.1rem",
          }}
          placeholder="🔍 Search for items..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onFocus={(e) => (e.target.style.borderColor = "#ffc107")}
          onBlur={(e) => (e.target.style.borderColor = "#28a745")}
        />
      </div>

      {/* Categories Section */}
      <div className="row mt-4">
        {filteredCategories.map((category, index) => (
          <div key={index} className="col-md-4">
            <div
              className="card shadow-lg border-3 rounded-4 overflow-hidden position-relative"
              style={{
                borderColor: category.borderColor,
                backgroundColor: "#ffffff",
                transition: "transform 0.3s ease-in-out",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
              onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
            >
              {/* Category Image */}
              <img
                src={category.img}
                className="card-img-top"
                alt={category.name}
                style={{
                  borderBottom: `4px solid ${category.borderColor}`,
                  filter: "brightness(0.9)",
                }}
              />

              {/* Card Body */}
              <div className="card-body text-center">
                <h5 className="card-title fw-bold" style={{ color: category.borderColor }}>
                  <i className={`bi ${category.icon} me-2`}></i> {category.name}
                </h5>
                <p className="card-text text-muted">{category.desc}</p>
                <Link to={category.link} className={`btn ${category.btnClass} w-100 rounded-pill shadow`}>
                  <i className="bi bi-cart"></i> Shop Now
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <div className="mt-5 d-flex justify-content-center gap-4">
        <Link
          to="/cart"
          className="btn btn-dark btn-lg px-4 py-2 shadow-lg border border-warning rounded-pill"
          style={{
            borderWidth: "3px",
            borderColor: "#ffc107",
            transition: "all 0.3s ease-in-out",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#444")}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#000")}
        >
          <i className="bi bi-cart-check-fill me-2"></i> Go to Cart
        </Link>

        <Link
          to="/order"
          className="btn btn-primary btn-lg px-4 py-2 shadow-lg border border-danger rounded-pill"
          style={{
            borderWidth: "3px",
            borderColor: "#ff4757",
            transition: "all 0.3s ease-in-out",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#0056b3")}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#007bff")}
        >
          <i className="bi bi-receipt-cutoff me-2"></i> View Orders
        </Link>
      </div>

    </div>
  );
};

export default Home;




// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css";

// const Home = () => {
//   const [searchTerm, setSearchTerm] = useState("");

//   return (
//     <div className="container text-center mt-5">
//       {/* Banner Image */}
//       <div className="mb-4">
      
//       </div>
      
//       {/* Header Section */}
//       <div className="p-4 mb-4 bg-light shadow rounded">
//         <h1 className="display-4 text-primary fw-bold">
//           <i className="bi bi-shop"></i> Welcome to Grocery Store
//         </h1>
//         <p className="lead text-muted">
//           <i className="bi bi-bag-heart-fill text-danger"></i> Fresh groceries delivered to your doorstep!
//         </p>
//       </div>


//       {/* Categories Section */}
//       <div className="row mt-4">
//         {/* Vegetables Card */}
//         <div className="col-md-4">
//           <div className="card shadow-lg border-0">
//             <img src="veghome.png" className="card-img-top" alt="Vegetables" />
//             <div className="card-body">
//               <h5 className="card-title">
//                 <i className="bi bi-carrot text-success"></i> Fresh Vegetables
//               </h5>
//               <p className="card-text text-muted">Buy farm-fresh vegetables at the best prices.</p>
//               <Link to="/veg" className="btn btn-success w-100">
//                 <i className="bi bi-cart"></i> Shop Now
//               </Link>
//             </div>
//           </div>
//         </div>

//         {/* Milk & Dairy Card */}
//         <div className="col-md-4">
//           <div className="card shadow-lg border-0">
//             <img src="Milkitem.png" className="card-img-top" alt="Milk & Dairy" />
//             <div className="card-body">
//               <h5 className="card-title">
//                 <i className="bi bi-cup-straw text-warning"></i> Milk & Dairy
//               </h5>
//               <p className="card-text text-muted">High-quality dairy products for your daily needs.</p>
//               <Link to="/milk" className="btn btn-warning w-100">
//                 <i className="bi bi-cart"></i> Shop Now
//               </Link>
//             </div>
//           </div>
//         </div>

//         {/* Non-Veg Items Card */}
//         <div className="col-md-4">
//           <div className="card shadow-lg border-0">
//             <img src="nonvegh.png" alt="Non-Veg" />
//             <div className="card-body">
//               <h5 className="card-title">
//                 <i className="bi bi-egg-fried text-danger"></i> Non-Veg Items
//               </h5>
//               <p className="card-text text-muted">Fresh meat, chicken, and seafood available.</p>
//               <Link to="/nonveg" className="btn btn-danger w-100">
//                 <i className="bi bi-cart"></i> Shop Now
//               </Link>
//             </div>
//           </div>
//         </div>
//       </div>
//       {/* Fruits Card */}
// <div className="col-md-4">
//   <div className="card shadow-lg border-0">
//     <img src="fruits.png" className="card-img-top" alt="Fruits" />
//     <div className="card-body">
//       <h5 className="card-title">
//         <i className="bi bi-basket2-fill text-danger"></i> Fresh Fruits
//       </h5>
//       <p className="card-text text-muted">Fresh and organic fruits available.</p>
//       <Link to="/fruits" className="btn btn-danger w-100">
//         <i className="bi bi-cart"></i> Shop Now
//       </Link>
//     </div>
//   </div>
// </div>

//       {/* Navigation Buttons */}
//       <div className="mt-4">
//         <Link to="/cart" className="btn btn-dark btn-lg me-3 shadow">
//           <i className="bi bi-cart-check-fill"></i> Go to Cart
//         </Link>
//         <Link to="/order" className="btn btn-primary btn-lg shadow">
//           <i className="bi bi-receipt-cutoff"></i> View Orders
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default Home;
