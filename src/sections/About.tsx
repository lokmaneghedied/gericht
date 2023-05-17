//assets
import G_dark from '../assets/G_dark.png'
import knife from '../assets/knife.png'
import vector from '../assets/vector.svg'
//styles
import { styles } from '../style';
//


const About = () => {
    return ( 
        <section id="aboutUs" className="h-full lg:h-screen w-full py-14 flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-3 md:space-x-0">

            {/* ABOUT */}
            <div className='flex flex-col justify-center items-start sm:items-end w-[90%] h-fit sm:w-[30%] sm:h-full space-y-2 sm:space-y-4 '>
                <h1 className={styles.headline}>About Us</h1>
                <img  className='sm:rotate-180' src={vector} alt="vector"/>
                <p className={`sm:text-right ${styles.details}`}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem facere voluptatum dolore fugit fugiat ut, minus velit illum nemo, explicabo quibusdam libero incidunt dolorem? Rem cum numquam voluptatem! Ex, rerum?</p>
                <button className={styles.goldBtn}>Know More</button>
            </div>

            {/* KNIFE + G */}
            <div className='w-[90%] h-[250px] xs:h-[300px] sm:h-[350px] sm:w-[25%] lg:h-[80%] flex justify-center items-center z-10 relative '>
                <img className='h-[100%] z-10 absolute' src={knife} alt=""/>
                <img className='h-[50%] z-0 absolute' src={G_dark} alt=""/>
            </div>

            {/* HISTORY */}
            <div className='flex flex-col justify-center items-start w-[90%] h-fit sm:w-[30%] sm:h-full space-y-2 sm:space-y-4 '>
                <h1 className={styles.headline}>Our History</h1>
                <img src={vector} alt="vector"/>
                <p className={styles.details}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem facere voluptatum dolore fugit fugiat ut, minus velit illum nemo, explicabo quibusdam libero incidunt dolorem? Rem cum numquam voluptatem! Ex, rerum?</p>
                <button className={styles.goldBtn}>Know More</button>
            </div>

        </section>
     );
}
 
export default About;