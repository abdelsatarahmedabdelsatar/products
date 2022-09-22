import  axios  from 'axios';
import React from 'react'
import { useEffect, useState } from 'react';
import { Link, useParams } from "react-router-dom";


const Detailes = () => {

    const [product, setProduct] = useState({});
    const parms = useParams();
    useEffect(() => {
        axios.get(`https://fakestoreapi.com/products/${parms.id}`)
        .then(res => {
            setProduct(res.data)
        })
 
    }, []);
    return(
        <>
        <div className='row gx-0'>
            <div className='col-2'>

            </div>
           <div className='col-6'>
           <div
              key={product.id}
              className="card myshadow p-4"
              style={{ width: "58rem", height: "32rem",marginTop:'110px' }}
            >
                <div className='row'>
                    <div className='col-5'>
                    <img
                height={400}
                src={product.image}
                className="card-img-top"
                alt="..."
              />
                    </div>
                    <div className='col-7 p-3'>
                    <h3 className="card-title">{product.title}</h3>
                    <p style={{color:'#777'}}>{product.description}</p>
                    <h5>Category : <span style={{color:'#777'}}>{product.category}</span></h5>
                    <h2 style={{color:'green'}}>{product.price}{" "}$</h2>
                    </div>
                </div>
              
               
                <div className="row">
                  <div className="foot">
                    
                    <Link to={`/`} className="btn btn-warning col-3 rounded-0">
                      back Home
                    </Link>
                    <Link  className="btn btn-danger col-2 rounded-0">
                      Add to Card
                    </Link>
                </div>
              </div>
            </div>
           </div>
           <div className='col-3'>

</div>
            </div>
        </>
    );
}

export default Detailes;