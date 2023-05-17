interface Props{
    img : string 
    title: string
    description :string
}

import React from 'react'
import { styles } from '../style'

export const Award = ( {img , title , description } : Props ) => {
  return (
    <div className='flex items-center md:items-start space-x-3'>
        <img className='w-[10%] sm:w-[20%] h-fit' src={img} alt="" />
        <span className='flex flex-col justify-start items-start'>
            <h1 className={styles.gold_subTitle}>{title}</h1>
            <p className={styles.details}>{description}</p>
        </span>
    </div>
  )
}
