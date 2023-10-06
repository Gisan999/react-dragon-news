import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import no1 from '../../../assets/no1.png'
import no2 from '../../../assets/no2.png'
import no3 from '../../../assets/no3.png'
import moment from 'moment';
import { AiOutlineCalendar } from "react-icons/ai";



const LeftSideNav = () => {
    const [categories, setCategories] = useState([]);

    useEffect(()=>{
        fetch('categories.json')
        .then(res => res.json())
        .then(data => setCategories(data))
    },[])


    return (
        <div className="px-4">
           
           <h2 className="text-3xl md:text-xl lg:text-3xl  font-bold mb-5">All Category</h2>
           <button className="btn bg-gray-100 w-full text-xl md:text-sm lg:text-xl font-semibold ">National News</button>
          <div className="space-y-7 justify-center ">
          {
                categories?.map(category => <Link
                    className="block ml-28 md:ml-6 lg:ml-20 mt-6 text-xl md:text-sm lg:text-xl  font-semibold"
                    key={category.id}
                    to={`/category/${category.id}`}
                    >{category.name}</Link>)
            }
          </div>

          <div className="p-4">
          <div className="space-y-5">
            <img className="w-full" src={no1} alt="" />
            <p className="text-xl font-semibold">Bayern Slams Authorities Over Flight Delay to Club World Cup</p>
          
            <div className="flex">
           <span className="font-medium mr-5">Sports</span>
            <span className="font-medium text-gray-400 flex gap-3 items-center"><AiOutlineCalendar></AiOutlineCalendar> {moment().format('ll')}</span>
           </div>
            <img className="w-full" src={no2} alt="" />
            <p className="text-xl font-semibold">Bayern Slams Authorities Over Flight Delay to Club World Cup</p>
           
            <div className="flex ">
           <span className="font-medium mr-5">Sports</span>
            <span className="font-medium text-gray-400 flex gap-3 items-center"><AiOutlineCalendar></AiOutlineCalendar> {moment().format('ll')}</span>
           </div>
            <img className="w-full" src={no3} alt="" />
            <p className="text-xl font-semibold">Bayern Slams Authorities Over Flight Delay to Club World Cup</p>

           <div className="flex">
           <span className="font-medium mr-5">Sports</span>
            <span className="font-medium text-gray-400 flex gap-3 items-center"><AiOutlineCalendar></AiOutlineCalendar> {moment().format('ll')}</span>
           </div>

          </div>
          </div>
        </div>
    );
};

export default LeftSideNav;