//assets
import { useRef, useState } from 'react';
import meal from '../assets/meal.mp4'
//icons
import { BsPlay , BsPause} from "react-icons/bs";



const Video = () => {

  const [playVid , setPlayVid] = useState(false)
  const refVid : any = useRef()

  const handleVid = () => {
    setPlayVid(!playVid)

    if(playVid){
      refVid.current.pause()
    }else{
      refVid.current.play()
    }
  }

  return (
    <section className="h-full w-full lg:h-screen relative flex justify-stretch">
      <div onClick={handleVid} className='absolute left-[40%] top-1/3 xs:left-[45%] xs:top-[45%] border border-gold rounded-full p-3 sm:p-4 lg:p-5 cursor-pointer z-20'>
          {playVid ? 
            <BsPause className='text-white w-[30px] h-[30px] sm:w-[40px] sm:h-[40px] lg:w-[60px] lg:h-[60px]'/> 
            : <BsPlay className='text-white w-[30px] h-[30px] sm:w-[40px] sm:h-[40px] lg:w-[60px] lg:h-[60px]'/>}
      </div>
      <video 
        src={meal} 
        typeof ="video/mp4"
        ref={refVid}
        loop
        muted
        controls={false}
        className='h-fit w-full'
        />
    </section>
  )
}

export default Video