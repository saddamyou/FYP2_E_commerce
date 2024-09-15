import { useForm } from "react-hook-form";



import Swal from "sweetalert2";

import useAxiosSecure from "../../../Hooks/UseAxiosSecure";
import SectionTitle from "../../../Components/SectionTitle";




const Review = () => {


    const { register, handleSubmit, reset } = useForm();
   
    const axiosSecure = useAxiosSecure();
    const onSubmit = async (data) => {
      console.log(data);
      
 
      
        //now send the product item data to the server with the image url
        const reviewDetails = {
          name: data.name,
          rating: parseInt(data.Rating),
        details: data.details
         
        };
  
        const productRes = await axiosSecure.post("/reviews", reviewDetails);
        console.log(productRes.data);
        if (productRes.data.insertedId) {
          // show success popup
          reset();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${data.name} your review is submitted`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      
     
    };
    return (
        <div>
        <SectionTitle
          heading="add Review"
          subHeading="Feedback"
        ></SectionTitle>
        <div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control w-full my-6">
              <label className="label">
                <span className="label-text"> Name*</span>
              </label>
              <input
                type="text"
                placeholder="Name"
                {...register("name", { required: true })}
                required
                className="input input-bordered w-full"
              />
            </div>
            <div className="flex gap-6">
              {/* Rating */}
              <div className="form-control w-full my-6">
                <label className="label">
                  <span className="label-text">Rating*</span>
                </label>
                <select
                  
                 
                  {...register("Rating", { required: true })}
                  className="select select-bordered w-full"
                >
                  <option disabled value="default">
                    Select a Rating
                  </option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </select>
              </div>
             
            
            </div>
            {/* Product details */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Details</span>
              </label>
              <textarea
                {...register("details", { required: true })}
                className="textarea textarea-bordered h-24"
                placeholder="details"
              ></textarea>
            </div>
           
            <button className="btn btn-outline mt-5">
             Submit 
            </button>
          </form>
        </div>
      </div>
    );
};

export default Review;