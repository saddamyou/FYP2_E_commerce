import { Helmet } from "react-helmet-async";
import Banner from "./Banner/Banner";
import Category from "./Category/Category";
import Featured from "./Featured/Featured";
import About from "./About/About";
import Testimonials from "./Testimonials/Testimonials";



const Home = () => {
    return (
        <div>
             <Helmet>
                <title>E-commerce for farmers | Home</title>
            </Helmet>
            <Banner/>
            <Category/>
            <Featured/>
           <About/>
           <Testimonials/>
           
           
        </div>
    );
};

export default Home;