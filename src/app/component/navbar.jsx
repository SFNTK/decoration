import React from 'react';
import './navbar.css';

import { useRouter } from 'next/navigation'

const Navbar = (props) => {
    const router = useRouter()
    return (
        <div id='nav'>
            <img src='./logo.png'/>
            <ul id='list'>
                        <li><a href='/'>Home</a></li>
                <li><a href='#categoriapara'>Categories</a></li>
                <li> <a href="#numbers">About</a></li>
                <li><a href="#finalgall">Gallery</a> </li>
              
            </ul>
            <div id='contact'>
               <a href="#contactsection">Contact Us</a> 
            </div>
            <img src='./burger-bar.png' id='brgr' onClick={()=>{
                props.setopen(true)
                
            }}/>
          
        </div>
    );
}

export default Navbar;
