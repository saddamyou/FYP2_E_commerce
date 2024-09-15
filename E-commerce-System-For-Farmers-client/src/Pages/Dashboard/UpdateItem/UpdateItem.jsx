import { useForm } from "react-hook-form";
import { useLoaderData } from "react-router-dom";

import Swal from "sweetalert2";
import UseAxiosPublic from "../../../Hooks/UseAxiosPublic";
import useAxiosSecure from "../../../Hooks/UseAxiosSecure";
import { FaUtensils } from "react-icons/fa";
import SectionTitle from "../../../Components/SectionTitle";

const UpdateItem = () => {
  const item = useLoaderData();

  const {
    title,

    category,
    description,
    price,
    _id,
    inventory,
   
  } = item;

  const { register, handleSubmit, reset } = useForm();

  const axiosPublic = UseAxiosPublic();
  const axiosSecure = useAxiosSecure();

  const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
  const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

  const onSubmit = async (data) => {
    console.log(data);
    // image upload to imgbb and then get an url
    const imageFile = { image: data.image[0] };
    const res = await axiosPublic.post(image_hosting_api, imageFile, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });
    if (res.data.success) {
      //now send the menu item data to the server with the image url
      const productItem = {
        title: data.title,
        category: data.category,
        price: parseFloat(data.price),

        description: data.description,
        inventory: parseInt(data.inventory),
        image: res.data.data.display_url,
      };
      //
      const productRes = await axiosSecure.patch(
        `/product/${_id}`,
        productItem);
      console.log(productRes.data);
      if (productRes.data.modifiedCount > 0) {
        // show success popup
        //   reset();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${data.title} is updated to the product`,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    }
    console.log("with image url", res.data);
  };

  // console.log(item)
  return (
    <div>
      <SectionTitle
        heading="Update an item"
        subHeading="What's new"
      ></SectionTitle>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control w-full my-6">
            <label className="label">
              <span className="label-text">Product name*</span>
            </label>
            <input
              type="text"
              defaultValue={title}
              placeholder="Product name"
              {...register("title", { required: true })}
              required
              className="input input-bordered w-full"
            />
          </div>
          <div className="flex gap-6">
            {/* category */}
            <div className="form-control w-full my-6">
              <label className="label">
                <span className="label-text">Category*</span>
              </label>
              <select
                defaultValue={category}
                {...register("category", { required: true })}
                className="select select-bordered w-full"
              >
                <option disabled value="default">
                  Select a category
                </option>
                <option value="Vegetables">Vegetables</option>
                <option value="Fruits">Fruits</option>
                <option value="Dairy and Eggs">Dairy and Eggs</option>
                <option value="Grains">Grains</option>
                <option value="Meat and Fish">Meat and Fish</option>
              </select>
            </div>
            {/* price */}
            <div className="form-control w-full my-6">
              <label className="label">
                <span className="label-text">Price*</span>
              </label>
              <input
                type="number"
                defaultValue={price}
                placeholder="Price"
                
                {...register("price", { required: true })}
                className="input input-bordered w-full"
              />
            </div>
            {/* inventory */}
            <div className="form-control w-full my-6">
              <label className="label">
                <span className="label-text">Inventory *</span>
              </label>
              <input
                type="number"
                defaultValue={inventory}
                placeholder="Inventory"
                {...register("inventory", { required: true })}
                className="input input-bordered w-full"
              />
            </div>
          </div>
          {/* Product details */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Product description</span>
            </label>
            <textarea
            defaultValue={description}
              {...register("description")}
              className="textarea textarea-bordered h-24"
              placeholder="description details"
            ></textarea>
          </div>
          <div className="form-control w-full my-6">
            <input
              {...register("image", { required: true })}
              type="file"
              className="file-input w-full max-w-xs"
            />
          </div>
          <button className="btn">
            Update Items <FaUtensils className="ml-4" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateItem;
