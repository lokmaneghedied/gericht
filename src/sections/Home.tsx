//assets
import vector from '../assets/vector.svg'
import home from '../assets/home.png'
import { styles } from '../style';

const Home = () => {
    return ( 
        <section id="home" className="bg-primary h-full lg:h-screen flex flex-col lg:flex-row justify-center  lg:justify-around items-center space-y-6 lg:space-y-0 pt-[60px] px-3 lg:p-0">
            {/* TEXT */}
            <div className='w-full sm:w-[90%] lg:w-[40%] h-[50%] lg:h-full flex justify-end items-center relative'>
                {/* VERTICAL TEXT */}
                <span className='flex space-x-4 -rotate-90 absolute -left-8 text-white text-xs sm:text-sm sm:-left-4'>
                    <p>#Bar</p>
                    <p>#Gericht</p>
                </span>
                {/* TITLE + DESCRIPTION */}
                <span className="flex flex-col justify-center items-start w-[85%] h-full space-y-2 sm:space-y-4">
                    <h2 className='cormorant text-white font-bold text-2xl sm:text-3xl xl:text-4xl'>Chase the new Flavour</h2>
                    <img src={vector} alt="" />
                    <h1 className='cormorant text-gold font-extrabold text-5xl sm:text-6xl xl:text-[70px] tracking-wider'>The key to Fine dining</h1>
                    <p className='text-gray text-xs sm:text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, nam exercitationem! Facere numquam in minima eum velit odit voluptatum neque, quaerat ea, nostrum sint, temporibus odio rerum libero nisi non.</p>
                    <button className={styles.goldBtn}>Explore Menu</button>
                </span>
            </div>
            {/* IMAGE */}
            <div className='w-[60%] xs:w-[50%] sm:w-[40%] lg:w-[30%]'>
                <img className='-rotate-90 lg:rotate-0' src={home} alt=""/>
            </div>
        </section>
     );
}
 
export default Home;

