/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";


const NewsCard = ({ news }) => {
    // console.log(news);

    const { title,  image_url, details, _id
    } = news;

    return (
        <div>
            <div className="relative flex px-3 mb-8 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                <div className="p-6">
                    <h4 className="block font-sans text-2xl font-bold leading-snug tracking-normal text-[#403F3F] antialiased">
                        {title}
                    </h4>
                </div>
                <div className="flex justify-center">
                    <img className="w-full"
                        src={image_url}
                        alt="ui/ux review check"
                    />
                </div>
                <div className="p-6">



                    {
                        details.length > 220 ? 
                        <p>{details.slice(0,220)} <Link 
                        to={`/news/${_id}`}
                        className="font-bold text-green-500">Read More...</Link></p> :
                        <p>{details}</p>
                    }


                    {/* <p className="mt-3 block font-sans text-xl font-normal leading-relaxed text-gray-700 antialiased">
                       {details}
                    </p> */}
                </div>

            </div>
        </div>
    );
};

export default NewsCard;