"use client"
import { SignIn } from '@clerk/nextjs'
import React from 'react'
import { Vortex } from "@/components/ui/vortex";



const SignInPage = () => {
  return (
    <main className='auth-page'>
      <div className="w-full h-full fixed inset-0 flex items-center justify-center overflow-hidden">
        <Vortex
          backgroundColor="black"
          rangeY={800}
          particleCount={500}
          baseHue={120}
          className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full"
        >
          <SignIn />
        </Vortex>
      </div>
      
    </main>
  )
}

export default SignInPage