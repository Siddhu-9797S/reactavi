import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { addToCart } from "./Store";
import "bootstrap/dist/css/bootstrap.min.css";

function Veg() {
    let vegItems = useSelector(state => state.products.veg);
    let dispatch = useDispatch();

    // Search State
    const [searchTerm, setSearchTerm] = useState("");

    // Pagination State
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 6;

    // Filtered Items Based on Search
    const filteredItems = vegItems.filter(item =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Calculate Pagination Indexes
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = filteredItems.slice(indexOfFirstItem, indexOfLastItem);

    // Calculate Total Pages
    const totalPages = Math.ceil(filteredItems.length / itemsPerPage);

    // Handlers for Pagination
    const goToPage = (pageNumber) => {
        if (pageNumber >= 1 && pageNumber <= totalPages) {
            setCurrentPage(pageNumber);
        }
    };

    return (
        <div 
            className="container-fluid min-vh-100 py-5"
            style={{ background: "linear-gradient(to right, #d4edda, #c3e6cb)" }}
        >
            {/* Header Section */}
            <div
                className="p-4 mb-4 text-white text-center shadow-lg rounded"
                style={{
                    background: "linear-gradient(135deg, #28a745, #20c997)",
                    border: "4px solid #ffc107",
                }}
            >
                <h2 className="fw-bold">
                    <i className="bi bi-basket2-fill me-2"></i> Welcome To Veg Items
                </h2>
                <p className="lead">
                    Fresh vegetables at the best prices, delivered to your home!
                </p>
            </div>

            {/* Search Bar */}
            <div className="mb-4">
                <input
                    type="text"
                    className="form-control w-50 mx-auto p-3 border-3 rounded-pill shadow"
                    style={{
                        borderColor: "#28a745",
                        backgroundColor: "#ffffff",
                        color: "#343a40",
                        fontSize: "1.1rem",
                    }}
                    placeholder="🔍 Search for vegetables..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    onFocus={(e) => (e.target.style.borderColor = "#ffc107")}
                    onBlur={(e) => (e.target.style.borderColor = "#28a745")}
                />
            </div>

            {/* Product Grid */}
            <div className="row">
                {currentItems.length > 0 ? (
                    currentItems.map((item, index) => (
                        <div key={index} className="col-md-4 mb-4">
                            <div
                                className="card shadow-lg border-3 rounded-4 overflow-hidden position-relative"
                                style={{
                                    borderColor: "#28a745",
                                    backgroundColor: "#ffffff",
                                    transition: "transform 0.3s ease-in-out, box-shadow 0.3s",
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
                                    alt={item.name}
                                    className="card-img-top"
                                    style={{
                                        height: "200px",
                                        objectFit: "cover",
                                        borderBottom: "4px solid #28a745",
                                        filter: "brightness(0.95)",
                                    }}
                                />

                                {/* Card Body */}
                                <div className="card-body text-center">
                                    <h5 className="card-title fw-bold text-success">
                                        {item.name}
                                    </h5>
                                    <p className="card-text text-dark fw-bold">${item.price}</p>
                                    <button
                                        className="btn btn-warning rounded-pill shadow"
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
                        <h4 className="text-danger">No matching items found!</h4>
                    </div>
                )}
            </div>

            {/* Pagination Controls */}
            {totalPages > 1 && (
                <div className="d-flex justify-content-center mt-4">
                    <nav>
                        <ul className="pagination pagination-lg">
                            {/* Previous Button */}
                            <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
                                <button
                                    className="page-link"
                                    onClick={() => goToPage(currentPage - 1)}
                                    disabled={currentPage === 1}
                                    style={{
                                        color: "#fff",
                                        backgroundColor: "#28a745",
                                        borderColor: "#28a745",
                                    }}
                                >
                                    <i className="bi bi-arrow-left"></i> Previous
                                </button>
                            </li>

                            {/* Page Numbers */}
                            {Array.from({ length: totalPages }, (_, i) => (
                                <li key={i} className={`page-item ${currentPage === i + 1 ? "active" : ""}`}>
                                    <button
                                        className="page-link"
                                        onClick={() => goToPage(i + 1)}
                                        style={{
                                            backgroundColor: currentPage === i + 1 ? "#ffc107" : "#28a745",
                                            borderColor: "#ffc107",
                                            color: currentPage === i + 1 ? "#343a40" : "#fff",
                                        }}
                                    >
                                        {i + 1}
                                    </button>
                                </li>
                            ))}

                            {/* Next Button */}
                            <li className={`page-item ${currentPage === totalPages ? "disabled" : ""}`}>
                                <button
                                    className="page-link"
                                    onClick={() => goToPage(currentPage + 1)}
                                    disabled={currentPage === totalPages}
                                    style={{
                                        color: "#fff",
                                        backgroundColor: "#28a745",
                                        borderColor: "#28a745",
                                    }}
                                >
                                    Next <i className="bi bi-arrow-right"></i>
                                </button>
                            </li>
                        </ul>
                    </nav>
                </div>
            )}
        </div>
    );
}

export default Veg;
