import { useState } from "react";
import { useParams } from "react-router-dom";
import UseProduct from "../../../Hooks/UseProduct";
import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover";
import orderCoverImg from "../../../assets/productBG/Untitled.jpg";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import OrderTab from "../OrderTab/OrderTab";


const Order = () => {
    const categories = ["Vegetables", "Fruits", "Dairy and Eggs", "Grains", "Meat and Fish"];
    const { category } = useParams();
    const initialIndex = categories.indexOf(category);
    const [tabIndex, setTabIndex] = useState(initialIndex);
    const [product] = UseProduct();

    const Vegetables = product.filter((item) => item.category === "Vegetables");
  const Fruits = product.filter((item) => item.category === "Fruits");
  const DairyAndEggs = product.filter((item) => item.category === "Dairy and Eggs");
  const Grains = product.filter((item) => item.category === "Grains");
  const MeatAndFish = product.filter((item) => item.category === "Meat and Fish");



    return (
        <div>
            <Helmet>
        <title>Organic | Order Product</title>
      </Helmet>
      <Cover img={orderCoverImg} title="Order Food"></Cover>
      <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList>
          <Tab>Vegetables</Tab>
          <Tab>Fruits</Tab>
          <Tab>Dairy and Eggs</Tab>
          <Tab>Grains</Tab>
          <Tab>Meat and Fish</Tab>
        </TabList>
        <TabPanel>
          <OrderTab items={Vegetables}></OrderTab>
        </TabPanel>
        <TabPanel>
          <OrderTab items={Fruits}></OrderTab>
        </TabPanel>
        <TabPanel>
          <OrderTab items={DairyAndEggs}></OrderTab>
        </TabPanel>
        <TabPanel>
          <OrderTab items={Grains}></OrderTab>
        </TabPanel>
        <TabPanel>
          <OrderTab items={MeatAndFish}></OrderTab>
        </TabPanel>
      </Tabs>
            
        </div>
    );
};

export default Order;