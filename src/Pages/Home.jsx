import React from 'react'
import homeImage from '../Images/pageOne.jpeg'
import { IoMdArrowDropdown } from "react-icons/io";
import image from '../Images/homeImage.png'

function Home() {
    return (
        <div className='w-[100vw] h-[98vh] overflow-none relative flex justify-center items'>
            <img src={homeImage} className='w-full h-full absolute top-0 left-0 z-10' />
            <div className='h-full w-[90%] bg-red-00 z-20 flex  items-center flex flex-col'>
                <header className='h-[80px] mt-20 w-[90%] rounded-full bg-gradient-to-t from-blue-900 to-bg-white flex items-center justify-around pl-20 border-white ' >
                    <ul className='flex gap-5 text-white font-medium text-lg pr-2'>
                        <li>
                            Home
                        </li>
                        
                        <li className='flex items-center'>
                            <span>Services</span>
                            <span className='pt-1 pl-1'>
                            <IoMdArrowDropdown />
                            </span>
                        </li>
                        
                        <li className='flex items-center'>
                            <span>Industries</span>
                            <span className='pt-1 pl-1'>
                            <IoMdArrowDropdown />
                            </span>
                        </li>
                        
                        <li className='flex items-center'>
                            <span>AI</span>
                            <span className='pt-1 pl-1'>
                            <IoMdArrowDropdown />
                            </span>
                        </li>
                        
                        <li>
                            Portfolio
                        </li>
                        
                        <li className='flex items-center'>
                            <span>Insights</span>
                            <span className='pt-1 pl-1'>
                            <IoMdArrowDropdown />
                            </span>
                        </li>
                        <li>
                            Pricing
                        </li>

                    </ul>

                    <button className='font-medium px-10 flex justify-center items-center font-base bg-gradient-to-r from-blue-900 via-blue-700 to-blue-500 p-4 rounded-[2px] text-white clip-polygon'>
                        Contact Us
                    </button>
                </header>

                <section className='flex w-[90%] mt-[70px] flex-wrap-reverse justify-between overflow-hidden'>
                    <div className='text-white text-left flex flex-col gap-4 w-[500px] bg-[#0000]'>
                        <div className='font-sans text-5xl text-left h-auto overflow-hidden'>Blockchain <br/> Development Services</div>
                        <div className='text-2xl text-left text-[#0BB7D3] font-medium'>Empowering Digital Freedom</div>
                        <div className='text-left text-xl leading-7'>
                            Enable end-to-end traceability of data and transactions with InvoBlox's top-tier blockchain solutions . Integrate game-changing decentralized ledgers with your mobile and web apps.</div>
                        <div className='text-left mt-2'>
                            <button className='px-10 py-4 flex items-center justify-center font-medium text-lg bg-[#0BB7D3] rounded-full '>Get a free Quote</button>
                        </div>
                    </div>
                    <div className='p-5 w-auto flex justify-center items-center'>
                        <img src={image} className='w-[300px]'/>
                    </div>
                </section>

            </div>
        </div>
    )
}

export default Home
