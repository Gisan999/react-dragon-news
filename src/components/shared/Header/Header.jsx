import logo from '../../../assets/logo.png'
import moment from 'moment';

const Header = () => {
    return (
        <div className=' text-center justify-center space-y-5 mt-8'>
         <div className='flex justify-center'>
         <img src={logo} alt="" />
         </div>
          <h2 className='text-xl text-gray-500'>Journalism Without Fear or Favour</h2>
          <h4 className='text-xl font-medium text-gray-500'>{moment().format("dddd, MMMM D, YYYY")}</h4>
        </div>
    );
};

export default Header;