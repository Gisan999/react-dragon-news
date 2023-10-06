import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const Login = () => {
    const {logIn} = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    console.log('location in the login page',location);

    const handleLogin = e => {
        e.preventDefault();
        // console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get( 'password');
        console.log(email, password);
        logIn(email, password)
        .then(result => {
            console.log(result);

            navigate(location?.state ? location.state : '/')

        })
        .catch(error => {
            console.error(error)
        })

    } 

    return (
        <div>
            <br />
            <Navbar></Navbar>

            <div className="flex justify-center px-3 md:px-0 ">
                <div className="card flex-shrink-0 w-full max-w-xl shadow-2xl rounded-sm bg-base-100">

                    <form onSubmit={handleLogin} className="card-body">
                        <h3 className="text-3xl font-semibold text-center text-[#403F3F] py-5">Login your account</h3>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-xl font-semibold text-[#403F3F]">Email address</span>
                            </label>
                            <input type="email" 
                            name="email"
                            placeholder="Enter your email address" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-xl font-semibold text-[#403F3F]">Password</span>
                            </label>
                            <input type="password" 
                            name="password"
                            placeholder="Enter your password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover text-blue-500 font-medium">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn text-white bg-[#403F3F]">Login</button>

                            <h2 className="text-[#403F3F] font-semibold text-center mt-5 mb-3">Don`t Have An Account ? <Link to="/register" className="text-red-500">Register</Link></h2>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;