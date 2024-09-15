import SectionTitle from "../../../Components/SectionTitle";
import featuredImg from '../../../assets/featere.jpg';
import './Featured.css';


const Featured = () => {
    return (
        <div className="featured-item bg-fixed text-white pt-8 my-20">
            <SectionTitle subHeading="check it out" heading="Featured Item" ></SectionTitle>
            <div className="md:flex justify-center items-center bg-slate-500 bg-opacity-60 pb-20 pt-12 px-36">
                <div>
                    <img src={featuredImg} alt="" />
                </div>
                <div className="md:ml-10">
                    <p>Aug 20, 2023</p>
                    <p className="uppercase sm:w-full">Where can i get some?</p>
                    <p >Discover the essence of freshness with our feature product - organically grown vegetables. Handpicked from sustainable farms, these nutrient-rich gems are cultivated with care for a healthy and flavorful culinary experience.</p>
                    {/* <button className="btn btn-outline border-0 border-b-4 mt-4">Order Now</button> */}
                </div>
            </div>
        </div>
    );
};

export default Featured;