"use client"
import React, { useEffect, useRef, useState } from 'react';
import "./finalgal.css"
const Finalgallery = () => {
    const imagesarray=[
        {key:1,image:"./Luxury-open-living-room-ideas-before-and-after.jpg"},
        {key:2,image:"./modern.jpg"},
        {key:3,image:"./featured-image-interior-design.webp"},
        {key:4,image:"./bg.jpg"},
        {key:5,image:"./contem.jpg"},
        {key:6,image:"./minimalist.jpg"},
        {key:7,image:"./classic.jpg"},
        {key:8,image:"./gallery.jpg"}
    ]
    const galleryref=useRef();
    const imageful2=useRef();
    const imageful=useRef();
    const[contentimage,setcontentimage]=useState(<div></div>)
    useEffect(()=>{
        const dataimg=imagesarray.map(data=>{
            return <span onClick={()=>{
                imageful2.current.src=data.image;
                imageful.current.style.display="flex";
                galleryref.current.style.animationPlayState = 'paused';
            }} style={{ "--i": data.key }}>
            <img src={data.image} alt="" />
          </span>
        })
        setcontentimage(dataimg)
    },[])
    return (
       <div id='finalgall'>
         <div class="gallery" ref={galleryref} 
         onMouseEnter={()=>{
            galleryref.current.style.animationPlayState = 'paused';

         }}
         onMouseLeave={(e)=>{
            galleryref.current.style.animationPlayState = 'running';

         }}>
        {contentimage}
      
      </div>
      <div id='imagefull'ref={imageful} onClick={()=>{
          imageful.current.style.display="none";
          galleryref.current.style.animationPlayState = 'running';
      }} >
        <img id='imagefull2' ref={imageful2}/>
      </div>
       </div>
    );
}

export default Finalgallery;
