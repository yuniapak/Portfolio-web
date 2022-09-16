import {NavLink} from 'react-router-dom'
import {useState} from 'react'
const Nav =()=>{
    const [isHovering, setIsHovering] = useState(false)
    const handleMouseOver = () =>{
        setIsHovering(true);
    };
    const handleMouseOut = () =>{
        setIsHovering(false);
    };
    
    return(
        <div className = 'links'>
            <NavLink to ='/about' onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>About</NavLink>
            <NavLink to='/portfolio' onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>Portfolio</NavLink>
            <NavLink to= '/contact' onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} >Contact</NavLink>
            {isHovering &&(
            <div className = 'line'></div>
            )}
        </div>
    )
    
}



export default Nav