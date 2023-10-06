import { useTheme } from 'next-themes'

import { RiMoonFill, RiSunLine } from 'react-icons/ri'

export const Mode = () => {
    const { systemTheme, theme, setTheme } = useTheme()
    const currentTheme = theme 
        === 'system' ? systemTheme : theme

    return(
        <>
        <div className="fixed top-0 right-0">
            {currentTheme === 'dark' ? (
                <button type='button' aria-label='light mode' onClick={()=>setTheme('light')}
                    className='hover:bg-pinky p-2 rounded-xl'>
                        <RiSunLine size={30} color='pinky'/>
                </button>
            ) : (
                <button type='button' aria-label='dark mode' onClick={()=>setTheme('dark')}
                    className='hover:bg-pinky p-2 rounded-xl'>
                        <RiMoonFill size={30}/>
                </button>
                    
                )}
        </div>
        </>
        

    )
}

export default Mode