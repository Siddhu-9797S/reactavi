import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { addToCart } from "./Store";
import "bootstrap/dist/css/bootstrap.min.css";

function Milk() {
    let milkItems = useSelector((state) => state.products.milk);
    let dispatch = useDispatch();

    // Search State
    const [searchTerm, setSearchTerm] = useState("");

    // Filtered Items Based on Search
    const filteredItems = milkItems.filter(item =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Array of colors for different card backgrounds
    const cardColors = [
        "#E0F7FA", "#B2EBF2", "#80DEEA", "#4DD0E1", "#26C6DA",
        "#00BCD4", "#0097A7", "#00838F", "#006064"
    ];

    return (
        <div
            className="container-fluid min-vh-100 py-5"
            style={{ background: "linear-gradient(to right, #E0F7FA, #B2EBF2)" }}
        >
            {/* Header Section */}
            <div
                className="p-4 mb-4 text-white text-center shadow-lg rounded"
                style={{
                    background: "linear-gradient(135deg, #4DD0E1, #00BCD4)",
                    border: "4px solid #FFD700",
                }}
            >
                <h2 className="fw-bold">
                    🥛 Welcome to Milk Items 🐄
                </h2>
                <p className="lead">
                    Fresh dairy products, directly from the farm! 🌿
                </p>
            </div>

            {/* Search Bar */}
            <div className="mb-4 text-center">
                <input
                    type="text"
                    className="form-control w-50 mx-auto p-3 border-3 rounded-pill shadow"
                    style={{
                        borderColor: "#00BCD4",
                        backgroundColor: "#f8f9fa",
                        color: "#343a40",
                        fontSize: "1.1rem",
                    }}
                    placeholder="🔍 Search for milk products..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    onFocus={(e) => (e.target.style.borderColor = "#FFD700")}
                    onBlur={(e) => (e.target.style.borderColor = "#00BCD4")}
                />
            </div>

            <div className="container">
                <div className="row">
                    {filteredItems.length > 0 ? (
                        filteredItems.map((item, index) => (
                            <div className="col-md-4 mb-4" key={index}>
                                <div
                                    className="card shadow-lg border-3 rounded-4 overflow-hidden position-relative"
                                    style={{
                                        backgroundColor: cardColors[index % cardColors.length],
                                        transition: "transform 0.3s ease-in-out, box-shadow 0.3s",
                                        border: "4px solid #FFD700",
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.transform = "scale(1.05)";
                                        e.currentTarget.style.boxShadow = "0px 10px 20px rgba(0, 0, 0, 0.2)";
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.transform = "scale(1)";
                                        e.currentTarget.style.boxShadow = "0px 4px 10px rgba(0, 0, 0, 0.1)";
                                    }}
                                >
                                    {/* Product Image */}
                                    <img
                                        src={item.image}
                                        className="card-img-top"
                                        alt={item.name}
                                        style={{
                                            height: "200px",
                                            objectFit: "cover",
                                            borderBottom: "4px solid #FFD700",
                                        }}
                                    />

                                    {/* Card Body */}
                                    <div className="card-body text-center">
                                        <h5 className="card-title fw-bold text-dark">{item.name}</h5>
                                        <p className="card-text fw-bold text-white">${item.price}</p>
                                        <button
                                            className="btn btn-warning rounded-pill shadow px-4 py-2"
                                            onClick={() => dispatch(addToCart(item))}
                                        >
                                            <i className="bi bi-cart-plus-fill me-2"></i> Add to Cart
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="text-center mt-4">
                            <h4 className="text-danger">No matching milk items found! ❌</h4>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Milk;
