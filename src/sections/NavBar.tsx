//assets
import gericht from '../assets/gericht.png'
//Link
import { Link } from 'react-scroll'
//styles
import {styles} from '../style'
//constants
import { navBarButtons, navBarItems } from '../constants';
//icons
import { AiOutlineMenu , AiOutlineClose } from "react-icons/ai";
//Hooks
import { useState } from 'react';

const NavBar = () => {
    
    const [isToggle , setIsToggle ] = useState(false)

    return ( 
        <section className="fixed z-40 w-full h-fit bg-primary py-3 flex flex-col">

            <div className='flex justify-around items-center'>
                {/* LOGO */}
                <div className="w-[20%] xs:w-[15%] ">
                    <img src={gericht} alt="gericht" />
                </div>
                {/* NAV BUTTONS */}
                <div className='hidden lg:flex items-center justify-between w-[30%]'>
                    {navBarItems.map((item)=>(
                        <Link 
                        key={item.id}
                        to={item.name}
                        activeClass={styles.activeNav}
                        smooth={true}
                        spy={true}
                        className={styles.navClass}>
                        <p>{item.title}</p>
                        </Link>
                    ))}
                </div>

                {/* LOG IN */}
                <div className='hidden sm:flex items-center justify-end w-fit divide-x'>
                    {navBarButtons.map((btn)=>(
                        <button className={styles.navBtn}>{btn}</button>
                    ))}
                </div>

                {/* TOGGLE_BUTTON */}
                {!isToggle && <AiOutlineMenu onClick={()=>setIsToggle(true)} className='lg:hidden text-white w-[20px] h-[20px] xs:w-[25px] xs:h-[25px] sm:w-[30px] sm:h-[30px] transition-all'/>}
                {isToggle && <AiOutlineClose onClick={()=>setIsToggle(false)} className='lg:hidden text-white w-[20px] h-[20px] xs:w-[25px] xs:h-[25px] sm:w-[30px] sm:h-[30px] transition-all'/>}
            </div>

            {/* NAV_FOR_MOBILES */}
           {isToggle &&  <div className='h-[250px] flex flex-col justify-center items-center space-y-4 xs:space-y-5 slide-left transition-all'>
                {navBarItems.map((item)=>(
                    <Link 
                        key={item.id}
                        to={item.name}
                        activeClass={styles.activeNav}
                        smooth={true}
                        spy={true}
                        className={styles.navClass}>
                        {item.title}
                    </Link>
                ))}
                <span className='flex divide-x pb-2 sm:hidden'>
                    {navBarButtons.map((btn)=>(
                        <button className={styles.navBtn}>{btn}</button>
                    ))}
                </span>
            </div>}
            
        </section>
     );
}

export default NavBar;