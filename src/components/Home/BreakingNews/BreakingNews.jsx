import Marquee from "react-fast-marquee";

const BreakingNews = () => {
    return (
        <div>
            <div className="flex bg-gray-200 p-5 my-8">
                <div><button className="btn font-medium text-xl bg-red-700 py-2 text-white px-5 items-center">Letest</button></div>
                <div className="items-center pt-2 text-xl font-semibold text-[#403F3F]"><Marquee pauseOnHover={true} speed={70}>
                Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...
                Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...
                <br />
                
             
                </Marquee></div>
            </div>
        </div>
    );
};

export default BreakingNews;