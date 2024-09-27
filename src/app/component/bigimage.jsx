import React from 'react';
import './bigimage.css';


const Bigimage = (props) => {
    return (
        <div id='bigimage'>
            <img src='./Luxury-open-living-room-ideas-before-and-after.jpg' id='bgbig'/>
       <p id='contentp'>Turning Houses into Homes, One Design at a Time</p>
           <div id='bigimagediv1'>
            <p>With every project we undertake, we are committed to turning houses into homes, one design at a time.</p>
            <div >
                <div  onClick={()=>{
              props.router.push('/#contactsection')
          }}>Get in touch</div>
                <div onClick={()=>{
              props.router.push('/#contactsection')
          }}>Call us </div>
            </div>
           </div>
          
           <div id='overl'></div>
        </div>
    );
}

export default Bigimage;
