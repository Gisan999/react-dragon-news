import {FaGoogle, FaGithub, FaFacebook, FaTwitter, FaInstagram} from 'react-icons/fa'
import qZone1 from '../../../assets/qZone1.png'
import qZone2 from '../../../assets/qZone2.png'
import qZone3 from '../../../assets/qZone3.png'

const RightSideNav = () => {
    return (
        <div>
          
          <div className="px-4 space-y-3">
            <h2 className="text-3xl md:text-xl lg:text-3xl font-bold mb-5">Login With</h2>
            <button className="btn btn-info btn-outline w-full">
                <FaGoogle></FaGoogle>
                Login with Google</button>
           
            <button className="btn  btn-outline w-full">
               <FaGithub></FaGithub>
                Login with github</button>
          </div>
          <div className="p-4">
            <h2 className="text-3xl md:text-xl lg:text-3xl font-bold pb-4">Find Us On</h2>
           <a className='p-4 flex gap-3 items-center border rounded-t-lg' href=""><FaFacebook></FaFacebook>
           <span className='font-medium'>Facebook</span>
           </a>
           <a className='p-4 flex gap-3 items-center border ' href=""><FaTwitter></FaTwitter>
           <span className='font-medium'>Twitter</span>
           </a>
           <a className='p-4 flex gap-3 items-center border rounded-b-lg' href=""><FaInstagram></FaInstagram>
           <span className='font-medium'>Instagram</span>
           </a>
          </div>

         <div className='px-4'>
         <div className="p-2 bg-gray-100 space-y-3">
            <h2 className="text-3xl md:text-xl lg:text-3xl font-bold pt-2 pl-2">Q-Zone</h2>
            <img className='w-full' src={qZone1} alt="" />
            <img className='w-full' src={qZone2} alt="" />
            <img className='w-full' src={qZone3} alt="" />
          </div>
         </div>

        </div>
    );
};

export default RightSideNav;