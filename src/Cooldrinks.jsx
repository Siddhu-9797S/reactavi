import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { addToCart } from "./Store";
import "bootstrap/dist/css/bootstrap.min.css";

function CoolDrinks() {
    const coolDrinkItems = useSelector(state => state.products?.cooldrinks || []);
    const dispatch = useDispatch();

    // Pagination State
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 6; // Number of items per page

    // Calculate Pagination Indexes
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = coolDrinkItems.slice(indexOfFirstItem, indexOfLastItem);

    // Calculate Total Pages
    const totalPages = Math.ceil(coolDrinkItems.length / itemsPerPage);

    // Handlers for Pagination
    const goToPage = (pageNumber) => {
        if (pageNumber >= 1 && pageNumber <= totalPages) {
            setCurrentPage(pageNumber);
        }
    };

    return (
        <div className="container mt-4">
            <h2 className="text-center mb-4">Welcome To Cool Drinks Page</h2>

            {/* Product Grid */}
            <div className="row">
                {currentItems.map((item, index) => (
                    <div key={index} className="col-md-4 mb-3">
                        <div className="card shadow-sm">
                            <img 
                                src={item.image} 
                                alt={item.name} 
                                className="card-img-top"
                                style={{ height: "200px", objectFit: "cover" }}
                            />
                            <div className="card-body text-center">
                                <h5 className="card-title">{item.name}</h5>
                                <p className="card-text text-success fw-bold">${item.price}</p>
                                <button 
                                    className="btn btn-primary"
                                    onClick={() => dispatch(addToCart(item))}
                                >
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Pagination Controls */}
            <div className="d-flex justify-content-center mt-4">
                <nav>
                    <ul className="pagination">
                        {/* Previous Button */}
                        <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
                            <button 
                                className="page-link"
                                onClick={() => goToPage(currentPage - 1)}
                                disabled={currentPage === 1}
                            >
                                Previous
                            </button>
                        </li>

                        {/* Page Numbers */}
                        {Array.from({ length: totalPages }, (_, i) => (
                            <li key={i} className={`page-item ${currentPage === i + 1 ? "active" : ""}`}>
                                <button 
                                    className="page-link"
                                    onClick={() => goToPage(i + 1)}
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
                            >
                                Next
                            </button>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
}

export default CoolDrinks;
