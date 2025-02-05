import React from 'react'
import Leftsidebar from '../components/Leftsidebar'
import Rightchatspace from '../components/Rightchatspace'

const Chat = () => {
  return (
    <div className='flex justify-center align-flex-center'> 
      <Leftsidebar />
      <Rightchatspace />
    </div>
  )
}

export default Chat