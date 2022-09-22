import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useSelector, useDispatch } from "react-redux";
import "./cart.css";
import changeDeleleCart from "./../../redux/action/deleteFromCart";
function Cart() {
  const carts = useSelector((c) => c.carts.products);
  const dispatch = useDispatch();
  const [checkout, setCheckout] = useState(0);

  const handleCheckout = () => {
    var sum = 0;
    carts.map((t) => {
      sum += parseFloat(t.price);
    });
    setCheckout(sum);
  };

  useEffect(() => {
    handleCheckout();
  }, [carts]);

  const deleteFromCart = (i) => {
    dispatch(changeDeleleCart(i));
  };
  return (
    <>
      <div className="row cont gx-0">
        <div className="col-1"></div>
        <div className="col-10">
          <div className="container">
            <table className="table table-info">
              <thead>
                <tr>
                  <th>Image</th>
                  <th>Name</th>
                  <th>Quantity</th>
                  <th>Price</th>
                  <th>delete</th>
                </tr>
              </thead>
              <tbody>
                {carts.map((cart, i) => {
                  return (
                    <tr key={i}>
                      <td style={{ width: "120px" }}>
                        <img
                          className="rounded-circle shadow border"
                          width={70}
                          height={70}
                          src={cart.image}
                          alt="Cart_Image"
                        />
                      </td>
                      <td style={{ width: "580px" }}>
                        <h5> {cart.title}</h5>
                      </td>
                      <td>
                        <div className="row">
                          {/* <div className="col-1">
                            <button className="btn btn-sm btn-success">
                              +
                            </button>
                          </div> */}
                          <div className="col-2">
                            <input
                              type="number"
                              defaultValue={cart.quantity}
                              style={{ width: "40px" }}
                            />
                          </div>
                          {/* <div className="col-1">
                            <button className="btn btn-sm btn-warning">
                              -
                            </button>
                          </div> */}
                        </div>
                      </td>
                      <td>{cart.price}{" $"}</td>
                      <td>
                        <button
                          onClick={() => deleteFromCart(i)}
                          className="btn btn-sm btn-danger"
                        >
                          delete
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
            <h1
              style={{
                fontFamily:
                  "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif",
              }}
            >
              {"Total price : "}
              <span className="text-success">{checkout}{" $"}</span>
            </h1>
          </div>
        </div>
        <div className="col-1"></div>
      </div>
    </>
  );
}

export default Cart;
