import { useParams } from "react-router-dom";
import Header from "../shared/Header/Header";
import Navbar from "../shared/Navbar/Navbar";
import RightSideNav from "../shared/RightSideNav/RightSideNav";


const News = () => {

    const {id} = useParams();
    console.log(id);

    return (
        <div>
          <div className="mt-12">
            <Header></Header>
          </div>
          <div>
            <Navbar></Navbar>
          </div>

          <div className="mt-14 grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="md:col-span-3">
                <h2>News Details :  {id}</h2>
            </div>
            <div>
            <RightSideNav></RightSideNav>
            </div>
          </div>
        </div>
    );
};

export default News;