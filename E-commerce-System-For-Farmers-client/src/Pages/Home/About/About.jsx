import SectionTitle from "../../../Components/SectionTitle";
import about from "../../../assets/about.jpg";

const About = () => {
    return (

      <>
        <SectionTitle
        subHeading={"24 HOUR"}
        heading={"About Our Work"}
       >

       </SectionTitle>
        <div className="hero min-h-screen bg-green-200 m-5">
        <div className="hero-content flex-col lg:flex-row">
          
          <div className="lg:w-1/2 space-y-5 p-4">
              <h3 className="text-3xl text-orange-500 font-bold">About Farm Product</h3>
            <h1 className="text-5xl font-bold">Organic Farming Product: Cultivating Healthier, Sustainable Harvests</h1>
            <p className="py-6">
            Organic farming promotes sustainable practices, producing crops free from synthetic chemicals for a healthier and environmentally conscious choice.
            </p>
           
           
          </div>
          <div className="lg:w-1/2 ">
          <img
            src={about}
            className="w-3/4 rounded-lg shadow-2xl"
          />
          
          </div>
        </div>
      </div>
      </>
    );
};

export default About;