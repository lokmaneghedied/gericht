//assets
import vector from '../assets/vector.svg'
import gallery1 from '../assets/gallery01.png'
import gallery2 from '../assets/gallery02.png'
import gallery3 from '../assets/gallery03.png'
import gallery4 from '../assets/gallery04.png'
//styles
import { styles } from '../style'
//icons
import { FiInstagram } from "react-icons/fi";
//carousel
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";




const Galleries = () => {

    return ( 
        <section className="bg-primary h-full lg:h-screen w-full flex flex-col lg:flex-row justify-start lg:justify-around items-center py-6 lg:py-0 space-y-6 lg:space-y-0">

            <div className="w-[90%] lg:w-[40%] lg:h-fit h-full flex flex-col justify-start items-start space-y-4 lg:space-y-6">
                <span className=' flex flex-col justify-start items-start space-y-2'>
                    <h2 className={styles.white_subTitle}>Instagram</h2>
                    <img src={vector} alt="" />
                    <h1 className={styles.headline}>Photo Gallery</h1>
                </span>
                <p className={styles.details}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi, optio sed adipisci non inventore labore cum dolores magnam consequatur! At veritatis delectus aperiam rerum exercitationem accusantium dolores reprehenderit inventore ipsum!</p>
                <button className={styles.goldBtn}>View More</button>
            </div>

            <div className='w-[90%] sm:w-[50%] lg:w-[40%] lg:h-fit'>
                <Carousel 
                    centerMode={true}
                    showThumbs={false}
                    dynamicHeight={true}
                    emulateTouch={false}
                    autoPlay={false}
                    >
                    <div className='group relative overflow-hidden'>
                        <div className="group-hover:bg-black/50 w-full h-full absolute z-40 transition-all duration-500"></div>
                        <img src={gallery1} className='h-[400px] lg:h-[450px] pr-5 transition-all duration-500'/>
                        <span className="absolute -bottom-full left-[35%] xs:left-[45%] group-hover:bottom-[45%] transition-all duration-500 z-40">
                            <FiInstagram  className='text-white w-[40px] h-[40px] cursor-pointer'/>
                        </span>
                    </div>
                    <div className='group relative overflow-hidden'>
                        <div className="group-hover:bg-black/50 w-full h-full absolute z-40 transition-all duration-500"></div>
                        <img src={gallery2} className='h-[400px] lg:h-[450px] pr-5 transition-all duration-500'/>
                        <span className="absolute -bottom-full left-[35%] xs:left-[45%] group-hover:bottom-[45%] transition-all duration-500 z-40">
                            <FiInstagram  className='text-white w-[40px] h-[40px] cursor-pointer'/>
                        </span>
                    </div>
                    <div className='group relative overflow-hidden'>
                        <div className="group-hover:bg-black/50 w-full h-full absolute z-40 transition-all duration-500"></div>
                        <img src={gallery3} className='h-[400px] lg:h-[450px] pr-5 transition-all duration-500'/>
                        <span className="absolute -bottom-full left-[35%] xs:left-[45%] group-hover:bottom-[45%] transition-all duration-500 z-40">
                            <FiInstagram  className='text-white w-[40px] h-[40px] cursor-pointer'/>
                        </span>
                    </div>
                    <div className='group relative overflow-hidden'>
                        <div className="group-hover:bg-black/50 w-full h-full absolute z-40 transition-all duration-500"></div>
                        <img src={gallery4} className='h-[400px] lg:h-[450px] pr-5 transition-all duration-500'/>
                        <span className="absolute -bottom-full left-[35%] xs:left-[45%] group-hover:bottom-[45%] transition-all duration-500 z-40">
                            <FiInstagram  className='text-white w-[40px] h-[40px] cursor-pointer'/>
                        </span>
                    </div>
                </Carousel>
            </div>
        </section>
            
     );
}
 
export default Galleries;



