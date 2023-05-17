//assets
import watter from '../assets/watter.png'
import vector from '../assets/vector.svg'
//styles
import { styles } from '../style';

const FindUs = () => {
    return ( 
        <section id='findUs' className="bg-site w-full h-full lg:h-screen flex flex-col sm:flex-row justify-start sm:justify-around items-center py-6 space-y-6 sm:space-y-0 lg:py-0">
            {/* TEXT */}
            <div className='w-[80%] sm:w-[50%] lg:w-[40%] h-full flex flex-col justify-start items-start sm:justify-center space-y-4'>
                {/* TITLE */}
                <span className='flex flex-col justify-start items-start space-y-2'>
                    <h2 className={styles.white_subTitle}>Contact</h2>
                    <img src={vector} alt="" />
                    <h1 className={styles.headline}>Find Us</h1>
                </span>
                {/* ADDRESS */}
                <p className={styles.details}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem ipsa, tempora minima adipisci sequi error dol</p>
                {/* OPENING_HOURS */}
                <span className='flex flex-col space-y-2'>
                    <h2 className={styles.gold_subTitle}>Opening Hours</h2>
                    <h2 className={styles.details}>Mon-Fri: 10:00am - 02:00am</h2>
                    <h2 className={styles.details}>Sat-Sun: 10:00am - 03:00am</h2>
                </span>
                {/* BUTTON_VISIT_US */}
                <button className={styles.goldBtn}>Visit Us</button>
            </div>
            {/* IMAGE */}
            <img className='w-[70%] xs:w-[50%] sm:w-[30%]' src={watter} alt="" loading='lazy'/>
        </section>
     );
}
 
export default FindUs;