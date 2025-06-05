import Guest from '@/components/Guest';
import { currentUser } from '@clerk/nextjs/server';
import React from 'react'

const HomePage = async() => {
  const user = await currentUser();
  
    // Check for current logged in clerk user
  
    if (!user) {
      return <Guest />;
    }
  return (
    <div className='text-red-400'>HomePage</div>
  )
}

export default HomePage