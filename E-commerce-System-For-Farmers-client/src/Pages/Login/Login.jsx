import { Link, useLocation, useNavigate } from "react-router-dom";
import UseAuth from "../../Hooks/UseAuth";
import Swal from "sweetalert2";
import SocialLogin from "../../Components/SocialLogin/SocialLogin";
import { Helmet } from "react-helmet-async";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";



const Login = () => {

  const [showPassword,setShowPassword] = useState(false)
  const [error,setError] = useState('')




    const { signIn } = UseAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";
  console.log(location.state);

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    signIn(email, password).then((result) => {
      const user = result.user;
      console.log(user);
      setError('');
      Swal.fire({
        title: "User Login Successful.",
        showClass: {
          popup: "animate__animated animate__fadeInDown",
        },
        hideClass: {
          popup: "animate__animated animate__fadeOutUp",
        },
      });
      navigate(from, { replace: true });
    }).catch(error => {
      console.log(error);
      setError(error.message)
     
    });
  };



    return (
        <>
        <Helmet>
          <title>Farm fresh | Login</title>
        </Helmet>
        <div className="hero min-h-screen bg-base-200">
          <div className="hero-content flex-col md:flex-row-reverse">
            <div className="text-center md:w-1/2 lg:text-left">
              <h1 className="text-5xl font-bold">Login now!</h1>
              <p className="py-6">
                Welcome to Organic Farm Fresh Products .
              </p>
            </div>
            <div className="card md:w-1/2 max-w-sm shadow-2xl bg-base-100">
              <form onSubmit={handleLogin} className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="email"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control ">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
               <div className="relative">
               <input
                    type={showPassword ? "text":"password"}
                    name="password"
                    placeholder="password"
                    className="input input-bordered"
                  />
                  <span className="absolute top-1/3 right-3" onClick={()=>setShowPassword(!showPassword)}>
                    {
                      showPassword ? <FaEyeSlash/> : <FaEye/>
                    }
                  </span>
               </div>
                  <label className="label">
                    <a href="#" className="label-text-alt link link-hover">
                      Forgot password?
                    </a>
                  </label>
                </div>
                {/* <div className="form-control">
                  <label className="label">
                    <LoadCanvasTemplate />
                  </label>
                  <input
                    onBlur={handleValidateCaptcha}
                    type="text"
                    name="captcha"
                    placeholder="type the captcha above"
                    className="input input-bordered"
                  />
                </div> */}
                <div className="form-control mt-6">
                  {/* TODO: apply disabled for re captcha */}
                  <input
                    disabled={false}
                    className="btn btn-primary"
                    type="submit"
                    value="Login"
                  />
                </div>
              </form>
              {
                error && <p className="text-red-800 font-medium">{error}</p>
              }
              <p className="px-6">
                <small>
                  New Here? <Link className="text-blue-500" to="/signup">Create an account</Link>{" "}
                </small>
              </p>
          <SocialLogin/>
            </div>
          </div>
        </div>
      </>
    );
};

export default Login;