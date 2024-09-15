import { useQuery } from "@tanstack/react-query";
import UseAxiosPublic from "./UseAxiosPublic";


const UseProduct = () => {

    const axiosPublic = UseAxiosPublic();



    const {data:product=[],isPending:loading,refetch} = useQuery({
        queryKey:['product'],
        queryFn:async()=>{
            const res = await axiosPublic.get('/product');
            return res.data;
        }
    })






    return [product, loading,refetch]
};

export default UseProduct;