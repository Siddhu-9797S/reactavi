import { useDispatch, useSelector } from "react-redux";
import { clearCart, decrement, increment, purchaseItems, remove } from "./Store";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Cart() {
    let cart = useSelector(state => state.cart);
    let dispatch = useDispatch();

    let cartItems = cart.map((item, index) => (
        <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
            <span>{item.name} - ${item.price}</span>
            <div>
                <button className="btn btn-sm btn-success me-1" onClick={() => dispatch(increment(item))}>+</button>
                <button className="btn btn-sm btn-warning me-1" onClick={() => dispatch(decrement(item))}>-</button>
                Quantity: {item.quantity}
                <button className="btn btn-sm btn-danger ms-2" onClick={() => dispatch(remove(item))}>Remove</button>
            </div>
        </li>
    ));

    const totalprice = cart.reduce((sum, item) => sum + item.quantity * item.price, 0);
    
    const [discountpercentage, setdiscountpercentage] = useState(0);
    const discountamount = (totalprice * discountpercentage) / 100;
    const finalamount = totalprice - discountamount;

    let [showdiscount, setshowdiscount] = useState(false);
    let [showcoupon, setshowcoupon] = useState(false);
    let [couponcode, setcouponcode] = useState('');
    let [couponcodediscountper, setcouponcodediscountper] = useState(0);

    let handlingcouponper = () => {
        switch (couponcode.toUpperCase()) {
            case 'RATAN10': setcouponcodediscountper(10); setshowcoupon(true); break;
            case 'RATAN20': setcouponcodediscountper(20); setshowcoupon(true); break;
            case 'RATAN30': setcouponcodediscountper(30); setshowcoupon(true); break;
            case 'RATAN40': setcouponcodediscountper(40); setshowcoupon(true); break;
            default: alert("Invalid Coupon Code"); setcouponcodediscountper(0);
        }
    };

    let couponDiscountAmount = (totalprice * couponcodediscountper) / 100;

    let handlepurchaseDetails = () => {
        let purchaseDetails = {
            date: new Date().toLocaleDateString(),
            items: [...cart],
            totalprice: totalprice
        };
        dispatch(clearCart());
        dispatch(purchaseItems(purchaseDetails));
    };

    return (
        <div className="container mt-4">
            {cart.length > 0 ? (
                <div>
                    <h2 className="mb-3">Shopping Cart</h2>
                    
                    <ul className="list-group mb-3">{cartItems}</ul>

                    {/* Discount Buttons */}
                    <h5>Apply Discount</h5>
                    <div className="mb-3">
                        <button className="btn btn-outline-success me-2" onClick={() => (setdiscountpercentage(10), setshowdiscount(true))}>10%</button>
                        <button className="btn btn-outline-primary me-2" onClick={() => (setdiscountpercentage(20), setshowdiscount(true))}>20%</button>
                        <button className="btn btn-outline-warning me-2" onClick={() => (setdiscountpercentage(30), setshowdiscount(true))}>30%</button>
                        <button className="btn btn-outline-danger" onClick={() => (setdiscountpercentage(40), setshowdiscount(true))}>40%</button>
                    </div>

                    {showdiscount && (
                        <div className="alert alert-info">
                            <strong>Discount Applied!</strong>
                            <p>Discount Amount: ${discountamount.toFixed(2)}</p>
                        </div>
                    )}

                    {/* Price Summary Table */}
                    <table className="table table-bordered">
                        <tbody>
                            <tr>
                                <td>Total Price</td>
                                <td>${totalprice.toFixed(2)}</td>
                            </tr>
                            <tr>
                                <td>Discount Amount</td>
                                <td>${discountamount.toFixed(2)}</td>
                            </tr>
                            <tr>
                                <td>Coupon Discount</td>
                                <td>${couponDiscountAmount.toFixed(2)}</td>
                            </tr>
                            <tr>
                                <td><strong>Final Amount</strong></td>
                                <td><strong>${(finalamount - couponDiscountAmount).toFixed(2)}</strong></td>
                            </tr>
                        </tbody>
                    </table>

                    {/* Coupon Code Section */}
                    <div className="input-group mb-3">
                        <input
                            type="text"
                            className="form-control"
                            value={couponcode}
                            onChange={(e) => setcouponcode(e.target.value)}
                            placeholder="Enter coupon code"
                        />
                        <button className="btn btn-warning" onClick={handlingcouponper}>Apply Coupon</button>
                    </div>

                    {showcoupon && (
                        <div className="alert alert-success">
                            <p>Coupon Code Applied: <strong>{couponcode}</strong></p>
                            <p>Coupon Discount: ${couponDiscountAmount.toFixed(2)}</p>
                        </div>
                    )}

                    {/* Complete Purchase Button */}
                    <button className="btn btn-lg btn-success w-100" onClick={handlepurchaseDetails}>
                        Complete Purchase
                    </button>
                </div>
            ) : (
                <div className="alert alert-warning text-center">
                    <h4>Your cart is empty</h4>
                </div>
            )}
        </div>
    );
}

export default Cart;
