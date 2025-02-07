import React from 'react'

const Leftsidebar = () => {
  return (
    <div className='w-1/5 bg-[#171717]'>
      <nav className='flex justify-between items-center p-4'>
        <button className='cursor-pointer'><img src="src/assets/image/toggle-side-bar-icon.svg" alt="toggle side bar" /></button>


        <div className='flex justify-center items-center gap-3'>
        <button className='cursor-pointer'><img src="src/assets/image/search.svg" alt="search" /></button>
        <button className='cursor-pointer'><img src="src/assets/image/newchat.svg" alt="" /></button>
        </div>
      </nav>

      <div className='flex flex-col mb-10 gap-4 p-4 h-90-vh overflow-y-scroll custom-scrollbar'>
        <button className='flex align-center gap-2 text-white cursor-pointer'><img src="src/assets/image/chatgpt.svg" alt="" />ChatGPT</button>
        <button className='flex align-center gap-2 text-white cursor-pointer '><img className='size-7 rounded-full'src="src/assets/image/dalle.png" alt="" />image generator</button>
        <button className='flex align-center gap-2 text-white cursor-pointer'><img src="src/assets/image/exploregpt.svg" alt="" />Explore GPTs</button>
        

        

        
       
      </div>

     <div className='flex items-center gap-1 p-4 absolute bottom-4 text-white cursor-pointer'>
      <img src="src/assets/image/upgradeplan.svg" alt="" />
      Upgrade Plan
     

     </div>


    </div>
  )
}

export default Leftsidebar