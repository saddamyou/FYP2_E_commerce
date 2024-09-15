import { useLoaderData, useLocation, useNavigate } from "react-router-dom";
import UseAuth from "../../Hooks/UseAuth";
import Swal from "sweetalert2";
import useAxiosSecure from "../../Hooks/UseAxiosSecure";
import UseCart from "../../Hooks/UseCart";
import { useState } from "react";

const Details = () => {
  const { user } = UseAuth();
  const addToCart = useLoaderData();
  const { _id, title, description, category, price, image, unit_name } =
    addToCart;
  const navigate = useNavigate();
  const location = useLocation();
  const axiosSecure = useAxiosSecure();
  const [, refetch] = UseCart();
  const [quantity, setQuantity] = useState(1);
  const [error, setError] = useState(null);
  const totalPrice = price * quantity;

  const currentDate = new Date();

  const handleAddToCart = () => {
    if (!quantity || isNaN(quantity) || quantity <= 0) {
      setError("Please enter a valid quantity.");
      return;
    }

    // console.log(food,user.email);
    if (user && user.email) {
      //  send cart item to the database

      const cartItem = {
        productId: _id,
        email: user.email,
        title,
        image,
        category,
        quantity: quantity * 1,
        totalPrice,
        currentDate,

        unit_name
      };
      axiosSecure
        .post("/carts", cartItem)
        .then((res) => {
          console.log(res.data);
          if (res.data.insertedId) {
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: `${title} has been added to the cart`,
              showConfirmButton: false,
              timer: 1500,
            });
            //refetch cart to update the cart items count
            refetch();
            setQuantity("");
            navigate("/dashboard/cart");
          }
        })
        .catch((error) => {
          // Handle error
          if (error.response.status === 400) {
            // Set the error state to display the error message
            setError(error.response.data.error);
            console.log(error.response.data.error);
          } else {
            console.error("Error adding to cart:", error.message);
          }
        });
    } else {
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
        }
      });
    }
  };

  return (
    <div className="m-5 pt-24 min-h-[calc(100vh-40px)]">
      <div className="card lg:card-side bg-base-100 shadow-xl">
        <figure className="flex-1">
          <img src={image} alt="Album" />
        </figure>
        <div className=" flex-1 space-y-10 text-center m-4">
          <h2 className="card-title border border-black shadow-xl">
            Product:{" "}
            <span className="font-serif text-orange-500"> {title}</span>
          </h2>
          <p className="border border-black">
            Category: <span className="font-bold">{category}</span>
          </p>
          <p className="border border-black">
            {" "}
            <span className="font-mono">{description}</span>{" "}
          </p>
          <p className="border border-black">
            {" "}
            <span className="text-orange-600 font-bold">
              {user?.email}
            </span>{" "}
          </p>
          <p className="border border-black">
            {" "}
            <span className="font-bold text-blue-700">
              {user?.displayName}
            </span>{" "}
          </p>
          <p className="border border-black">
            Price: <span className="font-bold text-blue-700">{price}</span> $
          </p>

          <input
            type="text"
            name="quantity"
            placeholder="Enter Order Quantity"
            value={quantity} 
            onChange={(e) => setQuantity(e.target.value)}
            className="input input-bordered w-full"
          />
          <p>
            Total Price:{" "}
            <span className="font-bold text-green-700">${totalPrice}</span>
          </p>
          <div className="card-actions mt-10">
            <button onClick={handleAddToCart} className="btn btn-primary">
              Add To Cart
            </button>
          </div>
          {error && (
            <div className="text-red-600 mt-2">
              <p>{error}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Details;
