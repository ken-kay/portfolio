'use client'
import Image from 'next/image'

export const Hero_Code = () =>{
    return(
        <>
            <div className="top-0 w-full">
                    {/* h-screen pl-20*/}
                    <div className="flex h-1/2 w-full justify-center items-center">
                        <Image
                            src={'/assets/hero/1.png'}
                            width={1024}
                            height={1024}
                            alt="Picture"
                            // className='text-center items-center content-center'
                        />
                                                
                    </div>
                    <div>
                        <h1 className="text-center mx-auto">I am a lot of things...</h1>
                    </div>
                    
                </div>
        </>
        
        
    )
}

export default Hero_Code