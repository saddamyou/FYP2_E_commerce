import { Link, useLocation, useNavigate } from "react-router-dom";
import UseAuth from "../../Hooks/UseAuth";

import Swal from "sweetalert2";

const ProductCard = ({ item }) => {
  const { user } = UseAuth();
  const { title, image, price, description, _id, inventory, unit_name } = item;
  const navigate = useNavigate();
  const location = useLocation();

  const handleGoToLogin = () => {
    if (!user) {
      Swal.fire({
        title: "You are not logged In?",
        text: "Please login to add to the cart!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, login!",
      }).then((result) => {
        if (result.isConfirmed) {
          //TODO: send the user to the login page
          navigate("/login", { state: { from: location } });
          // navigate('/login')
        }
      });
    }
  };
  return (
    <div className="card  bg-base-100 shadow-xl">
      <figure>
        <img
          className="w-full h-[260px] rounded hover:scale-110 transition-all duration-300"
          src={image}
          alt="Shoes"
        />
      </figure>
      <p className="absolute right-0 mr-4 mt-4 px-4 bg-slate-900 text-white">
        ${price}
      </p>
      <div className="card-body flex flex-col items-center">
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>
        {/* <p>Price: <span className="font-bold text-red-500">{price}rm</span></p> */}
        <div className="flex w-full justify-end">
          <p>
            Unit:{" "}
            <span className="font-bold text-green-600">
              {inventory} {unit_name}
            </span>
          </p>
          {inventory ? (
            <span className="text-green-600">
              {" "}
              <p>Available</p>
            </span>
          ) : (
            <span className="text-red-600 underline font-serif">
              {" "}
              <p>Out Of Stock</p>
            </span>
          )}
        </div>
        {inventory ? (
          <div className="card-actions justify-end">
            <Link to={`/orderedProduct/${_id}`}>
              <div className="card-actions ">
                <button onClick={handleGoToLogin} className="btn btn-primary">
                  Order Now
                </button>
              </div>
            </Link>
          </div>
        ) : (
          <p className="font-bold ">Please wait until Restock</p>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
