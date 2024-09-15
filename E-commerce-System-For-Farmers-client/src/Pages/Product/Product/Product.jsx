import { Helmet } from "react-helmet-async";
import UseProduct from "../../../Hooks/UseProduct";
import Cover from "../../Shared/Cover";
import productImg from '../../../assets/productBG/banner.jpg'
import unitedImg from '../../../assets/productBG/Untitled.jpg'
import meatAndFishImg from '../../../assets/productBG/meat and fish.jpg'
import SectionTitle from "../../../Components/SectionTitle";
import ProductCategory from "../ProductCategory/ProductCategory";



const Product = () => {

    const [product] = UseProduct();
    const Vegetables = product.filter(item => item.category === 'Vegetables');
    const DairyAndEggs = product.filter(item => item.category === 'Dairy and Eggs');
    const Fruits = product.filter(item => item.category === 'Fruits');
    const MeatAndFish = product.filter(item => item.category === 'Meat and Fish');
    const Grains = product.filter(item => item.category === 'Grains');



    return (
        <div>
             <Helmet>
                <title>Organic | Product</title>
            </Helmet>
            <Cover img={productImg} title="our menu"></Cover>
            <SectionTitle subHeading="Don't Miss" heading="Today's Offer"></SectionTitle>
            <ProductCategory items={ Vegetables} title="Vegetables" img={unitedImg}></ProductCategory>
            <ProductCategory items={ DairyAndEggs} title="Dairy and Eggs" img={meatAndFishImg}></ProductCategory>
            <ProductCategory items={ Fruits} title="Fruits" img={meatAndFishImg}></ProductCategory>
            <ProductCategory items={ MeatAndFish} title="Meat and Fish" img={meatAndFishImg}></ProductCategory>
            <ProductCategory items={ Grains} title="Grains" img={meatAndFishImg}></ProductCategory>
            
        </div>
    );
};

export default Product;