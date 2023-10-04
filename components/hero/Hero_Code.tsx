// "use client"
// import React from 'react'
import Image from 'next/image'

export const Hero_Code = () =>{
    return(
        <div>
            <div className="container top-0">
                <Image
                    src={'/assets/hero/1.png'}
                    width={500}
                    height={500}
                    alt="Picture of the author"
                />
                <h1>I am a lot of things...</h1>
            </div>
        </div>
        
        
    )
}

export default Hero_Code