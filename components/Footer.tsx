

import { 
    FaPinterestP 
} from "react-icons/fa";
import { 
    SiGumroad, 
    SiDeviantart, 
    SiBuymeacoffee, 
    SiSketchfab 
} from "react-icons/si";
import { 
    AiOutlineGithub, 
    AiOutlineDribbble, 
    AiOutlineLinkedin, 
    AiOutlineCodepen,
    AiOutlineTwitter, 
    AiOutlineInstagram,
    AiOutlineBehance, 
    AiOutlineMedium,
} from "react-icons/ai";

import Image from 'next/image'

export const Footer = () => {
    return(
        <>
           {/* <footer className="bottom-0 right-0 left-0"> */}
           <div className="fixed bottom-0 w-full -z-69 ">
            {/* <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
            <ul className="mx-auto p-4 flex flex-col text-center md:flex-row md:justify-between">
                <li><a href="/">Home</a></li>
                <li><a href="/">About</a></li>
                <li><a href="/">Code</a></li>
                <li><a href="/">Pixels</a></li>
                <li><a href="/">Text</a></li>
                <li><a href="/">Contact</a></li>
            </ul>
            </div> */}
            
            <hr className='w-full h-0.9 mx-auto mt-9 bg-black border-1'></hr>
            <div className='mx-auto p-4 flex flex-col text-center md:flex-row md:justify-between bg-white dark:bg-black bg-opacity-20 dark:bg-opacity-30 backdrop-blur-sm rounded drop-shadow-sm'>
                <div className='text-neutral-900 dark:text-neutral-200'>© 2023 Kenani </div>
                <div className='flex flex-row items-center justify-center space-x-2 mb-0'>
                    <div className='text-neutral-900 dark:text-neutral-200'>Follow me:</div>
                <a href='https://github.com/ken-kay'
                    rel='noreferrer noopener'
                    target='_blank'
                    aria-label='GitHub'
                >
                    <AiOutlineGithub
                    className='hover:translate-y-1 transition-transform cursor-pointer text-neutral-600 dark:text-neutral-100'
                    size={20}
                    />
                </a>
                
                <a href='https://www.linkedin.com/in/kenani-kenani/'
                    rel='noreferrer noopener'
                    target='_blank'
                    aria-label='LinkedIn'
                >
                    <AiOutlineLinkedin
                    className='hover:translate-y-1 transition-transform cursor-pointer text-neutral-600 dark:text-neutral-100'
                    size={20}
                    />
                </a>

                <a href='https://dribbble.com/_kenani'
                    rel='noreferrer noopener'
                    target='_blank'
                    aria-label='Dribbble'
                >
                    <AiOutlineDribbble
                    className='hover:translate-y-1 transition-transform cursor-pointer text-neutral-600 dark:text-neutral-100'
                    size={20}
                    />
                </a>

                <a href='https://www.behance.net/kenani_'
                    rel='noreferrer noopener'
                    target='_blank'
                    aria-label='Behance'
                >
                    <AiOutlineBehance
                    className='hover:translate-y-1 transition-transform cursor-pointer text-neutral-600 dark:text-neutral-100'
                    size={20}
                    />
                </a>

                

                <a href='https://codepen.io/kenani'
                    rel='noreferrer noopener'
                    target='_blank'
                    aria-label='CodePen'
                >
                    <AiOutlineCodepen
                    className='hover:translate-y-1 transition-transform cursor-pointer text-neutral-600 dark:text-neutral-100'
                    size={20}
                    />
                </a>

                <a href='https://www.buymeacoffee.com/kenani'
                    rel='noreferrer noopener'
                    target='_blank'
                    aria-label='Buy Me a Coffee'
                >
                    <SiBuymeacoffee
                    className='hover:translate-y-1 transition-transform cursor-pointer text-neutral-600 dark:text-neutral-100'
                    size={20}
                    />
                </a>


                {/*  
                <a href='https://kenani.gumroad.com/'
                    rel='noreferrer noopener'
                    target='_blank'
                    aria-label='LinkedIn'
                >
                    <SiGumroad
                    className='hover:translate-y-1 transition-transform cursor-pointer text-neutral-600 dark:text-neutral-100'
                    size={20}
                    />
                </a>
                
                <a href='https://www.pinterest.ca/kenanikay/'
                    rel='noreferrer noopener'
                    target='_blank'
                    aria-label='Pinterest'
                >
                    <FaPinterestP
                    className='hover:translate-y-1 transition-transform cursor-pointer text-neutral-600 dark:text-neutral-100'
                    size={20}
                    />
                </a>

                <a href='https://www.deviantart.com/k9squared'
                    rel='noreferrer noopener'
                    target='_blank'
                    aria-label='LinkedIn'
                >
                    <SiDeviantart
                    className='hover:translate-y-1 transition-transform cursor-pointer text-neutral-600 dark:text-neutral-100'
                    size={20}
                    />
                </a>

                <a href='https://medium.com/@ken_kay'
                    rel='noreferrer noopener'
                    target='_blank'
                    aria-label='LinkedIn'
                >
                    <AiOutlineMedium
                    className='hover:translate-y-1 transition-transform cursor-pointer text-neutral-600 dark:text-neutral-100'
                    size={20}
                    />
                </a>

                <a href='https://sketchfab.com/ken_kay'
                    rel='noreferrer noopener'
                    target='_blank'
                    aria-label='LinkedIn'
                >
                    <SiSketchfab
                    className='hover:translate-y-1 transition-transform cursor-pointer text-neutral-600 dark:text-neutral-100'
                    size={20}
                    />
                </a>

                <a href='https://twitter.com/Kenani_Kay'
                    rel='noreferrer noopener'
                    target='_blank'
                    aria-label='LinkedIn'
                >
                    <AiOutlineTwitter
                    className='hover:translate-y-1 transition-transform cursor-pointer text-neutral-600 dark:text-neutral-100'
                    size={20}
                    />
                </a>
                */}

                
                

                </div>
            </div>

        </div> 
        </>
        
    )
}

export default Footer