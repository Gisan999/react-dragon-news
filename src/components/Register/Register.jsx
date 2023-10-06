import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import Navbar from "../shared/Navbar/Navbar";

const Register = () => {
    const { createUser } = useContext(AuthContext);

    const handleRegister = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);

        const name = form.get('name');
        const email = form.get('email');
        const password = form.get('password');
        console.log(name, email, password);
        createUser(email, password)
            .then(result => {
                console.log(result);
            })
            .catch(error => {
                console.error(error);
            })
    }

    return (
        <div>
            <Navbar></Navbar>
            <div className="flex justify-center px-3 md:px-0 ">
                <div className="card flex-shrink-0 w-full max-w-xl shadow-2xl rounded-sm bg-base-100">

                    <form onSubmit={handleRegister} className="card-body">
                        <h3 className="text-3xl font-semibold text-center text-[#403F3F] py-5">Register your account</h3>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-xl font-semibold text-[#403F3F]">Your Name</span>
                            </label>
                            <input type="text"
                                name="name"
                                placeholder="Enter your name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-xl font-semibold text-[#403F3F]">Photo URL</span>
                            </label>
                            <input type="text"
                                name="photo"
                                placeholder="Enter your Photo URL" className="input input-bordered" />
                        </div>
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
                              <input type="checkbox" name="check" id="" />
                              <span className="text-start pr-[270px]">Accept Term & Conditions</span>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn text-white bg-[#403F3F]">Register</button>

                            <h2 className="text-[#403F3F] font-semibold text-center mt-5 mb-3">Already Have An Account ? <Link to="/login" className="text-green-500">Login</Link></h2>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;