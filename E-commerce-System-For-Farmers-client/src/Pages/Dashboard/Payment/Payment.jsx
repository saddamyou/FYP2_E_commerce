import { Elements } from "@stripe/react-stripe-js";
import SectionTitle from "../../../Components/SectionTitle";
import CheckoutForm from "./CheckoutForm";
import { loadStripe } from "@stripe/stripe-js";



const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_Pk);

const Payment = () => {
    return (
        <div>
           <SectionTitle heading="Payment" subHeading="Please Pay to eat">
            </SectionTitle> 
            <div>
            <Elements stripe={stripePromise}>
      <CheckoutForm />
    </Elements>
            </div>
        </div>
    );
};

export default Payment;