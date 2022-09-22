import { React, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import changeProduct from "../../redux/action/productAction";
import productReducer from "../../redux/reducer/productReducer";

import "./home.css";
import changeAddCart from './../../redux/action/addToCart';

function Home() {
  const dispatch = useDispatch();
  const products = useSelector((p) => p.products);
  useEffect(() => {
    dispatch(changeProduct("https://fakestoreapi.com/products"));
  }, []);

  const addToCart = (p) => {
    dispatch(changeAddCart(p));
  }

  return (
    <div className="home row gx-0 ms-5">
      {products.map((item) => {
        return (
            <div
              key={item.id}
              className="card col-4 p-3 m-3 myshadow align-item-center"
              style={{ width: "18rem", height: "38rem" }}
            >
              <img
                height={300}
                src={item.image}
                className="card-img-top scale"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">{item.title}</h5>
                <div className="row">
                  <div className="col-7"><p className="card-title">{item.category}</p></div>
                  <div className="col-2"></div>
                  <div className="col-3"><h5 className="card-title text-warning ">{item.rating.count}</h5></div>
                </div>
                
                <h2 className="text-success">{item.price}{" "}$</h2>

                <div className="row">
                  <div className="foot">
                    <Link to={`/detailes/${item.id}`} className="btn btn-info col-6 rounded-0">
                      details
                    </Link>
                    <Link onClick={() => addToCart(item)} className="btn btn-danger col-6 rounded-0">
                      Add to Card
                    </Link>
                  </div>
                </div>
              </div>
            </div>
        );
      })}
    </div>
  );
}

export default Home;
