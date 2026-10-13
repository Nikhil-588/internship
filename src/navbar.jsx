import { useState } from 'react';
import {Link} from 'react-router-dom'
function Navbar(){
    const [menuOpen,setMenuOpen]=useState(false);
    return(
        <nav>
        
               <img src="/image1.png" alt="Internship Logo" className="logo" />

            <h3>INTERNSHIP</h3>
            <button
  className="menu-toggle"
  onClick={() => setMenuOpen(!menuOpen)}
  aria-label="Toggle menu"
>
  ☰
</button>
<div className={`navbar ${menuOpen ? "active" : ""}`}>               
     <div className="dropdown">
                 
                     <a href="#">Internship Type ▼</a>
                    <div className="dropdown-menu">
                     <a href="#">Technical</a>
                     <a href="#">Marketing</a>
                     <a href="#">Business</a>
                    </div>
                </div>
                
                <div className="dropdown">
                 
                    <a href="/">Resources ▼</a>
                    <div className="dropdown-menu">
                    <a href="#">Blog</a>
                    <a href="#">FAQ</a>
                    <a href="#">Help Center</a>
                    </div>
                    
                 
                    
                </div>
                <div className="dropdown">
                 
                    <a href="/">About US ▼</a>
                    <div className="dropdown-menu">
                    <a href="#">Our Team</a>
                    <a href="#">Carrers</a>
                    <a href="#">Help Center</a>
                    </div>
                    
                 
                    
                </div>
            
            <a href="/">Home</a>
            <a
                href="#about"
                onClick={(e) => {
                e.preventDefault();
                document.getElementById("about")?.scrollIntoView({
                behavior: "smooth"
                });
                }}
                >
                    About
                </a>
            <Link to="/internship">Internship</Link>
            <a href="/contact">Contact</a>
            <a href="/login">Login</a>
           
            
            </div>
        </nav>
        
    );
}
export default Navbar;