import { NavLink, Outlet } from "react-router-dom";
import UseAdmin from "../Hooks/UseAdmin";
import UseCart from "../Hooks/UseCart";
import { FaAd,  FaCalendar, FaEnvelope, FaHome, FaList, FaSearch, FaShoppingCart, FaUsers, FaUtensils } from "react-icons/fa";
import { MdOutlineRateReview } from "react-icons/md";


const Dashboard = () => {

    const [cart] = UseCart();


    const [isAdmin] =UseAdmin();


    return (
        <div className="flex">
        {/* dashboard side bar */}
        <div className="w-64 min-h-screen bg-green-800 text-white">
          <ul className="menu p-4">
            {
              isAdmin ? <>
              <li>
              <NavLink to="/dashboard/adminHome">
                <FaHome></FaHome>Admin Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/manageItems">
                <FaList></FaList>
                Manage Items
              </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/addItems">
                <FaUtensils></FaUtensils>
                Add items
              </NavLink>
            </li>
            <li>
              {/* <NavLink to="/dashboard/bookings">
                <FaBook/>
                Manage Bookings
              </NavLink> */}
              <NavLink to="/dashboard/users">
                <FaUsers/>
                All Users
              </NavLink>
            </li>
              </>
              :
              <>
              <li>
              <NavLink to="/dashboard/userHome">
                <FaHome></FaHome>User Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/cart">
                <FaShoppingCart></FaShoppingCart>My Cart:({cart.length})
              </NavLink>
            </li>
            {/* <li>
              <NavLink to="/dashboard/reservation">
                <FaCalendar></FaCalendar>Reservation
              </NavLink>
            </li> */}
            <li>
              <NavLink to="/dashboard/paymentHistory">
                <FaCalendar></FaCalendar>Payment History
              </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/review">
              <MdOutlineRateReview />Add Review
              </NavLink>
              {/* <NavLink to="/dashboard/bookings">
                <FaList/>My Bookings 
              </NavLink> */}
            </li>
              </>
            }
            {/* shared nav links */}
            <div className="divider"></div>
            <li>
              <NavLink to="/">
                <FaHome></FaHome>Home
              </NavLink>
            </li>
            
            <li>
              <NavLink to="/order/Vegetables">
                <FaSearch></FaSearch>Product
              </NavLink>
            </li>
            <li>
              <NavLink to="/about">
                <FaEnvelope/>Contact
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="flex-1 p-8">
          <Outlet />
        </div>
      </div>
    );
};

export default Dashboard; 