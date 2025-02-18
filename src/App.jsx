import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Home from "./Home";
import Nonveg from "./Nonveg";
import Cart from "./Cart";
import Milk from "./Milk";
import Order from "./Order";
import Contactus from "./Contactus";
import Notfound from "./Notfound";
import { Logout } from "./Store";
import Login from "./Login";
import About from "./About";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Veg from "./Veg";
import Fruits from "./Fruits";

function App() {
  const cart = useSelector((state) => state.cart);
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const { isAuthenticated, user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  return (
    <BrowserRouter>
      {/* Navbar with modern styling */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-lg" style={{ borderBottom: "4px solid #f39c12" }}>
        <div className="container">
          <Link className="navbar-brand fw-bold text-warning" to="/home">
            Grocery Store
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <Link className="nav-link text-white" to="/home">
                  <i className="fa-solid fa-house text-warning"></i> Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/veg">
                  <i className="fa-solid fa-leaf text-success"></i> Veg
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/nonveg">
                  <i className="fa-solid fa-drumstick-bite text-danger"></i> Non-Veg
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/fruits">
                  <i className="fa-solid fa-apple-whole text-danger"></i> Fruits
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/milk">
                  <i className="fa-solid fa-cow text-primary"></i> Milk
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/cart">
                  <i className="fa-solid fa-cart-shopping text-warning"></i> Cart <span className="badge bg-danger text-white">{totalItems}</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/order">
                  <i className="fa-brands fa-first-order text-info"></i> Order
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/about">
                  <i className="fa-regular fa-address-card text-light"></i> About Us
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/contactus">
                  <i className="fa-solid fa-phone text-success"></i> Contact Us
                </Link>
              </li>
            </ul>
            {/* Authentication Section */}
            <div className="d-flex">
              {isAuthenticated ? (
                <>
                  <span className="navbar-text text-white me-2">
                    Welcome, {user?.name}!
                  </span>
                  <button
                    className="btn btn-danger"
                    onClick={() => dispatch(Logout())}
                  >
                    Logout
                  </button>
                </>
              ) : (
                <Link to="/login" className="btn btn-warning text-dark">
                  Sign In
                </Link>
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="container mt-4 p-4 shadow-lg rounded bg-dark text-white" style={{ border: "3px solid #f39c12" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/veg" element={<Veg />} />
          <Route path="/nonveg" element={<Nonveg />} />
          <Route path="/fruits" element={<Fruits />} />
          <Route path="/milk" element={<Milk />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<Order />} />
          <Route path="/about" element={<About />} />
          <Route path="/contactus" element={<Contactus />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<Notfound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
