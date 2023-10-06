import Image from 'next/image'
// import { IconName } from "react-icons/fa";
import { 
    AiOutlineHome, 
    AiOutlineQuestionCircle,
    AiOutlineCode 
    } from "react-icons/ai";
import { 
    PiPaintBrushDuotone,
    PiChatCircleText
    } from "react-icons/pi";
import { 
    SiTaichigraphics
    } from "react-icons/si";
// import { 
    
//     } from "react-icons/gi";
import { 
    IoText
    } from "react-icons/io5";
import { 
    RiContactsLine 
    } from "react-icons/ri";


export const Navbar = () => {
    return(
        <>
        <header className="fixed top-0 left-0 z-69">
             <ul className="menu flex">
                <li className="menu_list">
                    <span className="front">
                        <Image 
                            src={'/icons/favicon-32x32.png'} 
                            alt=''
                            width={690}
                            height={690}
                            className='rounded-xl shadow-xl hover:opacity-70' 
                            />
                    </span>
                        <a href="/" className="side">home</a>
                </li>
                <li className="menu_list relative">
                    <span className="front">
                        <RiContactsLine />
                    </span>
                        <a href="/about" className="side">about</a>
                </li>
                <li className="menu_list">
                    <span className="front">
                        <AiOutlineCode />
                    </span>
                        <a href="/code" className="side">code</a>
                </li>
                <li className="menu_list">
                    <span className="front">
                        <SiTaichigraphics/>
                    </span>
                        <a href="/pixels" className="side">pixels</a>
                </li>
                <li className="menu_list">
                    <span className="front">
                        <IoText />
                    </span>
                        <a href="/text" className="side">text</a>
                </li>
                <li className="menu_list">
                    <span className="front">
                        <PiChatCircleText />
                    </span>
                        <a href="/contact" className="side">contact</a>
                </li>
            </ul>
        </header>
        </>
        

    )
        
    
}
export default Navbar