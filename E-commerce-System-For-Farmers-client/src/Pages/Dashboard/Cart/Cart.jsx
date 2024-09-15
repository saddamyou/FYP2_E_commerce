import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/UseAxiosSecure";
import UseCart from "../../../Hooks/UseCart";
import { FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";


const Cart = () => {

    const [cart,refetch] = UseCart();
  const totalPrice = cart.reduce((total, item) => total + item.totalPrice, 0);
  const totalPriceDecimal = totalPrice.toFixed(2);
  const axiosSecure = useAxiosSecure()





  const handleDelete = id =>{
    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) {
        

        axiosSecure.delete(`/carts/${id}`)
        .then(res=>{
            console.log(res)
            if (res.data.deletedCount > 0) {
                  Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success"
          });
            }
            refetch()
        })


        }
      });

  }



    return (
        <div>
         <div className="flex justify-evenly mb-8">
        <h2 className="text-4xl">Items: {cart.length}</h2>
        {/* <h2 className="text-4xl">Total Price:{totalPrice} </h2> */}
        <h2 className="text-4xl">Total Price:{totalPriceDecimal} </h2>
       {cart.length?<Link to="/dashboard/payment"> <button className="btn btn-primary">Pay</button></Link>:<button disabled className="btn btn-primary">Pay</button>
       }
      </div>
      <div className="overflow-x-auto">
        <table className="table w-full ">
          {/* head */}
          <thead>
            <tr>
              <th>
               #
              </th>
              <th>image</th>
              <th>Name</th>
              <th>Price</th>
              <th>Unit</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {
                cart?.map((item,ind)=> <tr key={item._id}>
                    <th>
                      # {ind+1}
                    </th>
                    <td>
                      <div className="flex items-center gap-3">
                        <div className="avatar">
                          <div className="mask mask-squircle w-12 h-12">
                            <img
                              src={item.image}
                              alt="Avatar Tailwind CSS Component"
                            />
                          </div>
                        </div>
                        {/* <div>
                          <div className="font-bold">{item.name}</div>
                          <div className="text-sm opacity-50">United States</div>
                        </div> */}
                      </div>
                    </td>
                    <td>
                    {item.title}
                     
                    </td>
                    <td>${item.totalPrice}</td>
                    <td>{item.quantity} {item.unit_name}</td>
                    <th>
                      <button
                      onClick={()=>handleDelete(item._id)}
                       className="btn btn-ghost btn-xs">< FaTrashAlt className="text-red-600"/>
                       </button>
                    </th>
                  </tr>)
            }
            
         
          </tbody>
        
        </table>
      </div>   
        </div>
    );
};

export default Cart;