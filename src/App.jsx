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
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
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
      {/* Bootstrap Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <Link className="navbar-brand" to="/home">
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
                <Link className="nav-link" to="/home">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/veg">
                  Veg
                </Link>
              </li>
             
              <li className="nav-item">
                <Link className="nav-link" to="/nonveg">
                  Non-Veg
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/fruits">
                  Fruits
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/milk">
                  Milk
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/cart">
                  Cart <span className="badge bg-danger">{totalItems}</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/order">
                  Order
                </Link>
              </li>
              <li><Link to="/about" className="nav-link">
  <i className="bi bi-info-circle"></i> About Us
</Link>
</li>
              <li className="nav-item">
                <Link className="nav-link" to="/contactus">
                  Contact Us
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
                <Link to="/login" className="btn btn-primary">
                  Sign In
                </Link>
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="container mt-4">
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
