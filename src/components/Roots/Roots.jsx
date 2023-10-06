import { Outlet } from "react-router-dom";


const Roots = () => {
    return (
        <div className="container mx-auto font-poppins">
            <Outlet></Outlet>
        </div>
    );
};

export default Roots;