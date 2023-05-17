//assets
import vector from '../assets/vector.svg'
import rectangle from '../assets/rectangle.png'
import menu from '../assets/menu.png'
//styles
import { styles } from '../style';
//constants
import { menuItems } from '../constants';
const Menu = () => {
    return ( 
        <section className="bg-primary w-full h-full lg:h-screen flex flex-col justify-center items-center space-y-4 ">
            
            {/* TITLE */}
            <div className="w-[80%] h-fit space-y-2 flex flex-col justify-center items-center">
                <h2 className={styles.white_subTitle}>Menu that fits you platte</h2>
                <img src={vector} alt="" />
                <h1 className={styles.headline}>Today’s Special</h1>
            </div>

            {/* MENU */}
            <div className='w-[80%] md:w-[95%] lg:w-[80%] h-fit space-y-3 md:space-y-0 flex flex-col md:flex-row justify-start md:justify-between items-center md:items-stretch'>
                {/* WINE & BEER */}
                <div className='w-full flex flex-col justify-start md:justify-between items-center space-y-2 md:h-auto md:w-[35%]'>
                    <h1 className={styles.subHeading}>WINE & BEER</h1>
                    {menuItems.wine.map((wine)=>(
                        <div key={wine.id} className='flex justify-between items-center w-full space-y-2'>
                            <span className='flex flex-col space-y-0 w-[50%]'>
                                <p className={styles.gold_subTitle}>{wine.item}</p>
                                <p className={styles.details}>{wine.details}</p>
                            </span>
                            <img className='w-[20%]' src={rectangle} alt="" />
                            <p className={styles.white_subTitle}>{wine.price}</p>
                        </div>
                    ))}
                </div>

                {/* IMAGE */}
                <img className='h-[300px] md:self-center lg:w-[25%] lg:h-auto' src={menu} alt=""  />

                {/* COCKTAILS */}
                <div className='w-full flex flex-col justify-start md:justify-between items-center space-y-2 md:h-full md:w-[35%]'>
                    <h1 className={styles.subHeading}>COCKTAILS</h1>
                    {menuItems.cocktails.map((cocktail)=>(
                        <div key={cocktail.id} className='flex justify-between items-center w-full space-y-2'>
                            <span className='flex flex-col space-y-0 w-[50%]'>
                                <p className={styles.gold_subTitle}>{cocktail.item}</p>
                                <p className={styles.details}>{cocktail.details}</p>
                            </span>
                            <img className='w-[20%]' src={rectangle} alt="" />
                            <p className={styles.white_subTitle}>{cocktail.price}</p>
                        </div>
                    ))}
                </div>
            </div>

            
            {/* BUTTON */}
            <button className={styles.goldBtn}>View More</button>
        </section>
     );
}
 
export default Menu;