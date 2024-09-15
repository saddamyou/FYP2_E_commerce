import { Link, NavLink } from "react-router-dom";
import UseAuth from "../../Hooks/UseAuth";
import logo from "../../assets/Organic Farm Logo.jpg"
import UseCart from "../../Hooks/UseCart";
import { FaShoppingCart } from "react-icons/fa";



const Navbar = () => {
    const { user, logOut } = UseAuth();
    const [cart]  = UseCart();




    const navLinks = (
        <>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <Link to="/product">Our Product</Link>
          </li>
          <li>
            <Link to="/order/Vegetables">Order Products</Link>
          </li>
          {/* <li>
            <Link to="/contactUs">Contact Us</Link>
          </li> */}
          <li>
            <Link to="/about">About Us</Link>
          </li>

          {
            
            user &&  <li><Link to="/dashboard/userHome">Dashboard</Link></li>
            
        }


          { user&& <li><Link to="/dashboard/cart">
            <button className="btn">
            <FaShoppingCart  />
                <div className="badge badge-secondary">+{cart.length}</div>
            </button>
            </Link></li>}
    
        </>
      );


    return (
        <div className="navbar fixed z-10 bg-opacity-30 max-w-screen-xl bg-black text-white">
        <div className="w-20 rounded-full">
          {" "}
          <img src={logo} alt="logo" />
         
        </div>
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-green-800 rounded-box w-52"
            >
              {navLinks}
            </ul>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navLinks}</ul>
        </div>
        <div className="navbar-end">
            {user?.email ? 
              <div className="dropdown dropdown-end absolute">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                  <div className="w-10 rounded-full ">
                    <img src={user.photoURL} alt={user.displayName} />
                  </div>
                </label>
              
             
              <button onClick={logOut}  className="btn btn-sm  btn-ghost relative bottom-3">Logout</button>
              
              </div>
             : 
             (
                <Link to='/login'>
                <button className="btn btn-sm  btn-ghost">Login</button>
            </Link>
            )
            }
          </div>
      </div>
    );
};

export default Navbar;