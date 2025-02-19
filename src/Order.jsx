import { useSelector } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";

function Order() {
  const purchaseHistory = useSelector((state) => state.purchase);

  return (
    <div className="container mt-5 p-4 bg-light border border-dark rounded">
      <h2 className="text-center text-primary bg-warning p-3 rounded shadow">
        <i className="bi bi-cart-check"></i> Purchase History
      </h2>

      {purchaseHistory.length === 0 ? (
        <p className="text-center text-muted bg-white p-3 rounded border">No Purchase History Yet</p>
      ) : (
        <div className="row">
          {purchaseHistory.map((purchase, index) => (
            <div className="col-md-6 mb-4" key={index}>
              <div className="card shadow-lg p-4 border border-primary bg-light">
                <div className="card-body">
                  <h5 className="text-success bg-info p-2 rounded">
                    <i className="bi bi-receipt"></i> Order #{index + 1}
                  </h5>
                  <p className="mb-1"><strong>Date:</strong> {purchase.date}</p>
                  <p className="mb-1"><strong>Time:</strong> {new Date().toLocaleTimeString()}</p>
                  <p className="mb-3 bg-secondary text-white p-2 rounded"><strong>Total Amount:</strong> ${purchase.totalprice.toFixed(2)}</p>

                  <h6 className="mt-3 bg-warning p-2 rounded"><i className="bi bi-basket"></i> Items Purchased:</h6>
                  <ul className="list-group">
                    {purchase.items.map((item, idx) => (
                      <li className="list-group-item d-flex justify-content-between align-items-center bg-light border border-dark" key={`${index}-${idx}`}>
                        <span>{item.name}</span>
                        <span className="badge bg-primary rounded-pill">
                          ${item.price.toFixed(2)} x {item.quantity}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* Display the Order Placed Time */}
                  <div className="mt-3 text-muted small bg-danger text-white p-2 rounded">
                    <i className="bi bi-clock-history"></i> Order placed at: <strong>{purchase.timestamp}</strong>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Order;