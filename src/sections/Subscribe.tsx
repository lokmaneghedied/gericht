//assets
import vector from '../assets/vector.svg'
//styles
import { styles } from '../style';

const Subscribe = () => {
    return ( 
        <section className="bg-site w-full h-full flex flex-col justify-start items-center py-4">

            <div className='bg-primary flex flex-col justify-center items-center w-[90%] lg:w-[80%] space-y-4 p-4'>

                <span className="flex flex-col justify-start items-start">
                    <h2 className={styles.white_subTitle}>Newsletter</h2>
                    <img src={vector} alt="" loading='lazy'/>
                </span>

                <span className='text-center'>
                    <h1 className={styles.headline}>Subscribe To Our Newsletter</h1>
                </span>

                <span>
                    <p className={styles.white_subTitle}>And never miss latest Updates!</p>
                </span>

                <span className='flex space-x-3'>
                    <input className='p-2 border border-gold rounded-sm w-full bg-primary placeholder:text-gold placeholder:text-sm text-white outline-none transition-all' type="text" placeholder='Email Address' />
                    <button className={styles.goldBtn}>Subscribe</button>
                </span>
            </div>

        </section>
     );
}
 
export default Subscribe;