import "bootstrap/dist/css/bootstrap.min.css";
import { useSelector } from "react-redux";
import './navbar.css'
import { Link } from 'react-router-dom';
function Navbar() {

  const carts = useSelector(c => c.carts.products)
  return (
    <>
      <nav className="navbar navbar-expand shadow text-primary bg-info fixed-top">
        <div className="container-fluid ">
          <div className="collapse navbar-collapse text-align-center" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item me-4">
                <Link to={"/"} className="nav-link fs-4">
                Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/cart"} className="nav-link fs-4">  
                Cart
                </Link>
              </li>
            </ul>
           <h3>Cart</h3><sup style={{color:'black'}}>{carts.length}</sup>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
