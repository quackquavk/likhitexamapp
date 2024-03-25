'use client'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Card = (destination , imageLink , headText) => {
  return (
    <div className='flex flex-col hover:shadow-md rounded-md' >
      <p className='text-[16px] font-semibold'>{headText}</p>
      <Image src={ `${imageLink} ` } height={100} width={100} alt='image' />
    </div>
  )
}

export default Card
