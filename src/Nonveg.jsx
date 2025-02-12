import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "./Store";
import "bootstrap/dist/css/bootstrap.min.css";

function Nonveg() {
    let nonvegItems = useSelector((state) => state.products.nonveg);
    let dispatch = useDispatch();

    // Array of colors for different card backgrounds
    const cardColors = [
        "#FFB6C1", "#FFA07A", "#FF6347", "#E9967A", "#FF4500",
        "#DC143C", "#CD5C5C", "#B22222", "#8B0000"
    ];

    return (
        <div
            className="container-fluid min-vh-100 py-5"
            style={{ background: "linear-gradient(to right, #8B0000, #FF4500)" }}
        >
            {/* Header Section */}
            <div
                className="p-4 mb-4 text-white text-center shadow-lg rounded"
                style={{
                    background: "linear-gradient(135deg, #B22222, #FF4500)",
                    border: "4px solid #FFD700",
                }}
            >
                <h2 className="fw-bold">
                    🍗 Welcome to NonVeg Page 🍖
                </h2>
                <p className="lead">
                    Enjoy fresh, premium quality non-veg items! 🔥
                </p>
            </div>

            <div className="container">
                <div className="row">
                    {nonvegItems.map((item, index) => (
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
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Nonveg;
