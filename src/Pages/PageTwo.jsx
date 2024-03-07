import React from 'react'
import pageTwo from '../Images/pageTwo.jpeg'
import Services from '../Components/Services'
import services_icon from '../Images/services_icon.png'
import { IoIosArrowBack } from "react-icons/io";
import { MdArrowForwardIos } from "react-icons/md";

function PageTwo() {

  const services = [
    {
      name: "Smart Contract development",
      icon: services_icon,
      select: true,
    },
    {
      name: "Smart Contract development",
      icon: services_icon,
      select: false,
    },
    {
      name: "Smart Contract development",
      icon: services_icon,
      select: false,
    },
    {
      name: "Smart Contract development",
      icon: services_icon,
      select: false,
    },
    {
      name: "Smart Contract development",
      icon: services_icon,
      select: false,
    },
    {
      name: "Smart Contract development",
      icon: services_icon,
      select: false,
    },
    {
      name: "Smart Contract development",
      icon: services_icon,
      select: false,
    },
    {
      name: "Smart Contract development",
      icon: services_icon,
      select: false,
    },
    {
      name: "Smart Contract development",
      icon: services_icon,
      select: false,
    },
    {
      name: "Smart Contract development",
      icon: services_icon,
      select: false,
    },
  ]

  return (
    <div className='w-[100vw] flex justify-center items-center h-autp overflow-none relative pt-5 pb-5'>
      <img src={pageTwo} className='w-full h-full absolute top-0 left-0 z-10' />

      <div className='w-[90%] h-full z-20 bg-red-00 flex flex-col'>

        <div className='text-left mt-5 text-3xl overflow-hidden text-[#27C0E9] py-2 font-sans'>
          Our Blockchain Development Services
        </div>

        <div className='w-full bg-green-00 h-full flex gap-5 mt-0 flex flex-row flex-wrap-reverse items-end overflow-hidden'>
          <div className='w-[600px] bg-green-00 gap-2  flex flex-wrap h-full px-5 py-5 overflow-hidden'>
            {services.map(data =>
              <Services data={data} />
            )}
          </div>
          <div className=' h-[400px] w-[500px] pl-5 bg-[#002951] ml-10 flex flex-col gap-2 flex'>
            <div className='mt-10'><img src={services_icon} className='w-[70px]'/></div>
            <div className='font-sans text-left text-white font-medium text-2xl py-2'>Smart Contract development</div>
            <div className='text-white text-left text-xl'>
              Design smart contract logic scenarios, architecture, and audits for public, private, and hybrid blockchains. Our smart contract development services are legally compliant and automate transactions by eliminating middlemen and reducing processing fees.</div>
            <div className='flex w-full items-left gap-2 justify-end pr-2 mt-5'>
              <div className='w-[40px] h-[40px] rounded-full border-gray-400 border-[2px] flex justify-center items-center'><IoIosArrowBack color='white'/></div>
              <div className='w-[40px] h-[40px] rounded-full border-gray-400 border-[2px] flex justify-center items-center'><MdArrowForwardIos color='white'/></div>
              {/* <div>Icon</div> */}
            </div>
          </div>
        </div>

      </div>

    </div>
  )
}

export default PageTwo
