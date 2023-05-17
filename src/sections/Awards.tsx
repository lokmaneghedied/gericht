//assets
import bite from '../assets/bite.png'
import award1 from '../assets/award_1.png'
import award2 from '../assets/award_2.png'
import award3 from '../assets/award_3.png'
import award5 from '../assets/award_5.png'
import vitchakorn from '../assets/vitchakorn.png'
import vector from '../assets/vector.svg'
//component
import { Award } from '../components/Award'
//styles
import { styles } from '../style'
const Awards = () => {
    return ( 
        <section id="awards" className="bg-site relative h-full lg:h-screen w-full flex flex-col md:flex-row justify-start md:justify-end lg:justify-around items-center py-6 space-y-6 md:space-y-0 md:space-x-6 lg:space-x-0 lg:py-0 lg:pt-12">
            <img className='absolute top-2 lg:top-16 left-2 w-[10%] hidden md:block' src={bite} alt="" loading='lazy' />
            {/* TITLE + AWARD */}
            <div className='w-[90%] md:w-[45%] flex flex-col space-y-6'>
                {/* TITLE */}
                <span className='flex space-x-6 xs:space-x-10'>
                    <img className='w-[20%] xs:w-[15%] md:hidden' src={bite} alt=""  loading='lazy'/>
                    <span className='flex flex-col justify-center items-start'>
                        <h2 className={styles.white_subTitle}>Awards & Recognition</h2>
                        <img src={vector} alt=""  loading='lazy'/>
                        <h1 className={styles.headline}>Our Laurels</h1>
                    </span>
                </span>
                {/* AWARDS */}
                <span className='xs:w-[85%] sm:w-full h-full flex flex-col xs:self-center sm:grid sm:grid-cols-2 gap-4 '>
                    <Award img={award1} title='Rising Star' description='Lorem ipsum dolor sit amet consectetur adipisicing. '  />
                    <Award img={award2} title='Bib Gourmond' description='Lorem ipsum dolor sit amet consectetur adipisicing. '  />
                    <Award img={award3} title='Outstanding Chef' description='Lorem ipsum dolor sit amet consectetur adipisicing. '  />
                    <Award img={award5} title='Rising Star' description='Lorem ipsum dolor sit amet consectetur adipisicing. '  />
                </span>
            </div>
            {/* IMGAE */}
            <img className='xs:w-[75%] sm:w-[55%] md:w-[40%]' src={vitchakorn} alt="" loading='lazy'/>
        </section>
     );
}
 
export default Awards;