export const Navbar = () => {
    return(
        <header>
             <ul className="menu flex">
                <li className="menu_list">
                    <span className="front"></span>
                        <a href="#" className="side">home</a>
                </li>
                <li className="menu_list relative">
                    <span className="front"></span>
                        <a href="#" className="side">about</a>
                </li>
                <li className="menu_list">
                    <span className="front"></span>
                        <a href="#" className="side">projects</a>
                </li>
                <li className="menu_list">
                    <span className="front"></span>
                        <a href="#" className="side">contact</a>
                </li>
            </ul>
        </header>

    )
        
    
}
export default Navbar