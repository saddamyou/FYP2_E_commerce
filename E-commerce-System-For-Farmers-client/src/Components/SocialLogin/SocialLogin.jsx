
import UseAuth from '../../Hooks/UseAuth';
import UseAxiosPublic from '../../Hooks/UseAxiosPublic';
import { useNavigate } from 'react-router-dom';
import { FaGoogle } from "react-icons/fa";

const SocialLogin = () => {

    const {googleSignIn} = UseAuth();

    const axiosPublic = UseAxiosPublic()
    const navigate = useNavigate();

    const handleGoogleSignIn = ()=>{
        googleSignIn()
        .then(result=>{
            console.log(result.user);
            const createdAt = result.user?.metadata?.creationTime;
            const userInfo = {
                email:result.user?.email,
                name:result.user?.displayName,
                role: 'user',
                status: 'Verified',
                createdAt
            }
            axiosPublic.post('/users',userInfo)
            .then(res=>{
                console.log(res.data)
                navigate('/')
            })

        })
        
    }



    return (
        <div className="p-8">
        <div className="divider"></div>
      <div>
        <button onClick={handleGoogleSignIn} className="btn">
         <FaGoogle className="mr-2"></FaGoogle>
          Google
        </button>
      </div>
    </div>
    );
};

export default SocialLogin;