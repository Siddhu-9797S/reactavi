import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "./Store";
import "bootstrap/dist/css/bootstrap.min.css";

function Veg() {
    let vegItems = useSelector(state => state.products.veg);
    let dispatch = useDispatch();

    return (
        <div className="container mt-4">
            <h2 className="text-center mb-4">Welcome To Veg Items</h2>
            <div className="row">
                {vegItems.map((item, index) => (
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
        </div>
    );
}

export default Veg;
