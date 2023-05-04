//styles
import { styles } from "../style";
//assets
import vector from '../assets/vector.svg'
import dots from '../assets/“.png'
import signature from '../assets/signature.png'
import chief from '../assets/chief.png'

const Chief = () => {
    return ( 
        <section id="chief" className="bg-site h-full lg:h-screen w-full flex flex-col md:flex-row-reverse justify-center md:justify-around items-center space-y-4 md:space-y-0 py-12 lg:py-0">
            {/* DESCRIPTION */}
            <div className='w-[90%] md:w-[40%] h-fit flex flex-col justify-start items-start space-y-4'>
                <span className="lex flex-col justify-start items-start space-y-2">
                    <p className={styles.white_subTitle}>Chef's Word</p>
                    <img src={vector} alt="" />
                    <h1 className={styles.headline}>What We Believe In</h1>
                </span>
                <span className="flex relative">
                    <img className="w-[10px] h-[10px] absolute" src={dots} alt="" />
                    <p className={`indent-[20px] ${styles.details}`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet ipsum, pariatur itaque similique ullam consequatur explicabo adipisci recusandae voluptate enim, porro officia sit dolore ipsam libero? Harum est illo eos.</p>
                </span>
                <span>
                    <h1 className={styles.gold_subTitle}>Kevin Luo</h1>
                    <p className={styles.details}>Chef & founder</p>
                </span>
                <img className="w-1/3" src={signature} alt="" />
            </div>
            {/* IMAGE */}
            <img className="w-[80%] xs:w-[60%] sm:w-[40%] md:w-[30%]" src={chief} alt="" />
        </section>
     );
}
 
export default Chief;