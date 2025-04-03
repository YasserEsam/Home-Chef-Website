import LandingCard from '@/components/ui/LandingCard'
import { getRandomMeal } from '@/lib/api';
import React from 'react'

const page = async () => {



  const RandomMeal = async () => {
    const randomMeal = await getRandomMeal();
    return randomMeal;
  }

 const randomMeal = await RandomMeal();



  return (
    <main className='bg-white py-6 px-12'>
      <div className='container mx-auto'>
        <LandingCard meal={randomMeal} />
      </div>
    </main>
  )
}

export default page