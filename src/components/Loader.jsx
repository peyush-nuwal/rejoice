
import { useGSAP } from '@gsap/react';
import React, { useRef } from 'react'
import gsap from 'gsap';
import { Timeline } from 'gsap/gsap-core';


const Loader = () => {
  

const container = useRef();
const t1 =useRef(gsap.timeline())
const loaderText= `Tomorrow's Brands, Today.`
useGSAP(()=>{
  t1.current.from('.text1',{
      y:150,
      opacity:0,
      duration:0.9,
      stagger:0.3
     })
     t1.current.to('.text1',{
      y:-150,
      opacity:0,
      duration:0.9,
      stagger:0.3,
      delay:0.5
     })

     t1.current.to(container.current,{
       height:0,
       duration:0.8,
       delay:0.1,
       opacity:0,
       ease: "expo.inOut",
     })
},[])



  return (
    <div ref={container} className='w-full h-full absolute top-0 left-0 bg-black flexCenter z-[999999]'>
    <div className='flex justify-center items-center overflow-hidden '>
         {loaderText.split(" ").map((word,idx)=>(
            <span   className='text1 text-2xl md:text-3xl font-medium mr-2 text-white' key={idx}>{word}</span>
         ))}
         <sup className='-ml-2 text1 '>Tm</sup>
    </div>
</div>
  )
}

export default Loader