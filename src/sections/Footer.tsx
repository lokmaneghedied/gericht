//assets
import vector from '../assets/vector.svg'
//icons
import { TfiFacebook , TfiTwitter } from "react-icons/tfi";
import { FiInstagram } from "react-icons/fi";

//styles
import { styles } from "../style";

const Footer = () => {
    return ( 
        <section className="bg-site flex flex-col justify-center items-center py-6 sm:py-10 space-y-6 lg:space-y-10">

            <div className='w-full flex flex-col sm:flex-row justify-center sm:justify-around items-center space-y-4 sm:space-y-0'>
                {/* CONTACT_US */}
                <div className="w-[90%] sm:w-[30%] flex flex-col justify-center items-start sm:items-center space-y-2">
                    <h1 className={styles.white_subTitle}>Contact Us</h1>
                    <p className={styles.details}>Lorem ipsum dolor, sit amet </p>
                    <p className={styles.details}>+11 111 111</p>
                    <p className={styles.details}>+11 111 111</p>
                </div>
                {/* GERICHT */}
                <div className="w-[90%] sm:w-[30%] flex flex-col justify-center items-start sm:items-center space-y-2">
                    <h1 className={styles.headline}>GERICHT</h1>
                    <p className='text-white text-sm text-center'>"The best way to find your self is to lose your self in the service of others."</p>
                    <img src={vector} alt="" />
                    <span className='flex space-x-2 lg:space-x-4'>
                        <TfiFacebook  className='text-white lg:w-[25px] lg:h-[25px] hover:scale-110 transition-all cursor-pointer'/>
                        <TfiTwitter  className='text-white lg:w-[25px] lg:h-[25px] hover:scale-110 transition-all cursor-pointer'/>
                        <FiInstagram  className='text-white lg:w-[25px] lg:h-[25px] hover:scale-110 transition-all cursor-pointer'/>
                    </span>
                </div>
                {/* WORKING_HOURS */}
                <div className='w-[90%] sm:w-[30%] flex flex-col justify-center items-start sm:items-center space-y-2'>
                    <h1 className={styles.white_subTitle}>Working Hours</h1>
                    <p className={styles.details}>Monday-Friday 08:00am-12:00am</p>
                    <p className={styles.details}>Saturday-Sunday 07:00am-11:00pm</p>
                </div>
            </div>

            <div className='text-gray text-sm'>
                2023-Lokmane GHEDIED
            </div>
        </section>
     );
}
 
export default Footer;