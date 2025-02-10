import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "./Store";
import "bootstrap/dist/css/bootstrap.min.css";

function Milk() {
    let milkItems = useSelector((state) => state.products.milk);
    let dispatch = useDispatch();

    return (
        <div className="container mt-4">
            <h2 className="text-center mb-4">Welcome To Milk Items</h2>
            <div className="row">
                {milkItems.map((item, index) => (
                    <div className="col-md-4" key={index}>
                        <div className="card mb-4 shadow-sm">
                            <img src={item.image} className="card-img-top" alt={item.name} style={{ height: "200px", objectFit: "cover" }} />
                            <div className="card-body text-center">
                                <h5 className="card-title">{item.name}</h5>
                                <p className="card-text">${item.price}</p>
                                <button className="btn btn-primary" onClick={() => dispatch(addToCart(item))}>
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

export default Milk;
