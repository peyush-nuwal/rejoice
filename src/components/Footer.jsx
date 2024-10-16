import React, { useEffect } from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import gsap from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";


const Footer = () => {

    gsap.registerPlugin(ScrollTrigger);
    useEffect(() => {
        
        gsap.from('.footer-first div',{
            y:-200,
            opacity:0,
            ease: "power2.inOut",  
            scrollTrigger:{
                trigger:'.footer',
               
                start:'top 90%',
                end:'top 40% ',
                scrub:true,
            }
        })
        gsap.from('.footer-sec-left',{
            x:-200,
            opacity:0,
            ease: "power2.inOut",  
            scrollTrigger:{
                trigger:'.footer',
               
                start:'40% 90%',
                end:'70% 60% ',
                scrub:true,
            }
        })
        gsap.from('.footer-sec-right',{
            x:200,
            opacity:0,
            ease: "power2.inOut",  
            scrollTrigger:{
                trigger:'.footer',
                              
                start:'40% 90%',
                end:'70% 60% ',
                scrub:true,
            }
        })

        gsap.from(".footer-span", {
            y: "-100%",
            duration:0.8,
            stagger: 0.1,
            scrollTrigger:{
                trigger:'.footer',
                
                start:'70% 90%',
                end:'top 0% ',
                toggleActions: "play none none reverse",  
               
            }
          });
    }, [])
    
  return (
    <div className="footer w-full h-[100vh] md:h-screen bg-black px-4  md:px-10 py-10 overflow-hidden  mt-[10vw]">
      <div className="footer-first w-full h-[60%] md:h-auto flex flex-col   
        md:flex-row justify-between overflow-hidden ">
        <div className="">
          <h1 className="text-offwhite text-3xl font-Rejoice font-medium">
            Relax. we've got you.
          </h1>
          <button className="mt-2 px-4 p-3 text-lg  text-offwhite rounded-full border-2 hover:bg-offwhite hover:text-black ">
            Take a seat
          </button>
        </div>

        <div className=" h-4/6 md:h-full  md:w-1/4  flex flex-col md:flex-row justify-between">
          <ul className="text-offwhite flex flex-col">
            <li className="underline-hover-effect text-offwhite text-lg w-fit ">
              Home
            </li>
            <li className="underline-hover-effect text-offwhite text-lg w-fit ">
              Work
            </li>
            <li className="underline-hover-effect text-offwhite text-lg w-fit ">
              About
            </li>
            <li className="underline-hover-effect text-offwhite text-lg w-fit ">
              Services & Models
            </li>
            <li className="underline-hover-effect text-offwhite text-lg w-fit ">
              Contact
            </li>
          </ul>
          <ul className="text-offwhite flex flex-col">
            <li className="underline-hover-effect text-offwhite text-lg w-fit flex ">
              X <IoIosArrowRoundForward className="text-2xl text-offwhite -rotate-45" />
            </li>
            <li className="underline-hover-effect text-offwhite text-lg w-fit flex ">
              Instagram <IoIosArrowRoundForward className="text-2xl text-offwhite -rotate-45" />
            </li>
            <li className="underline-hover-effect text-offwhite text-lg w-fit flex ">
              Linkedin <IoIosArrowRoundForward className="text-2xl text-offwhite -rotate-45" />
            </li>
           
          </ul>
        </div>
      </div>
      <div className="h-[22%] flex justify-between items-center">
        <div className="footer-sec-left">
        <h5 className="md:text-xl leading-tight font-medium text-offwhite">San Diego—California</h5>
        <h5 className="md:text-xl leading-tight font-medium text-offwhite">Paris—France</h5>
        </div>

        <div className="footer-sec-right  md:w-2/6 flex flex-col md:flex-row md:justify-between items-end md:items-start ">
        <h5 className="md:text-xl leading-tight font-medium text-offwhite ">biz@rejoice.com</h5>
        <h5 className="md:text-xl leading-tight font-medium text-offwhite">Created by Peyush nuwal</h5>
        </div>
    </div>
      <div className="w-full h-1/2  mt-5">
      <h1 className="  overflow-hidden text-center    h-[26vw]  ">
            {"rejouice".split("").map((letter, idx) => (
              <span
                className="footer-span inline-block text-[26vw] font-medium font-Rejoice text-offwhite leading-[25vw]"
                key={idx}
              >
                {letter}
              </span>
            ))}
          </h1>
      </div>
    </div>
  );
};

export default Footer;
