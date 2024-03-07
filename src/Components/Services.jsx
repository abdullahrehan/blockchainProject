import React from 'react'
import services_icon from '../Images/services_icon.png'
function Services({data}) {
  return (
    <div className={`w-[250px] h-[90px] ${data.select ? "bg-gradient-to-r from-[#002951] to-transparent" : null } flex border-[#4C8FBC] border-l-[2px]`}>
      <div className='w-[20%] h-full bg-red-00 flex justify-center items-center'>
            <img src={data.icon}/>
      </div>
      <div className='w-[80%] h-full bg-red-00 flex justify-center text-white items-center font-medium text-lg text-left pl-2'>
            {data.name}
      </div>
    </div>
  )
}

export default Services
