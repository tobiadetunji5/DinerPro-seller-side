import ClientBody from '@/components/client/ClientBody';
import ClientDetails from '@/components/client/ClientDetails';
import React from 'react'

const ViewDetails = () => {
  return (
    <section className='border border-zinc-400 rounded-md mx-8 flex flex-col justify-around h-[99%] overflow-auto'>
    <div>
      <ClientDetails/>
    </div>
    
      <div>
      <ClientBody />
      </div>
    </section>
  )
}

export default ViewDetails