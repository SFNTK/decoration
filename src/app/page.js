'use client'


import { useEffect, useRef, useState } from "react";
import Gellery from "./component/gellery";
import Bigimage from "./component/bigimage";
import Testicaro from "./component/testicaro";
import Faq from "./component/faq";
import Navbar from "./component/navbar";
import Hero from "./component/hero";
import Categoriepara from "./component/categoriepara";
import Categorieimages from "./component/categorieimages";
import Numbers from "./component/numbers";
import Gallerypara from "./component/gallerypara";
import Footer from "./component/footer";
import Finalgallery from "./component/finalgallery";
import Contact from "./component/Contact";
import { useRouter } from 'next/navigation'

export default function Home() {
  const router = useRouter()
  const [isopen,setopen]=useState(false)
  const menuphone=useRef();
  useEffect(() => {
    //Runs only on the first render
    if(isopen){
      menuphone.current.style.transform = "scaleY(1)";


    }else{
      menuphone.current.style.transform = "scaleY(0)";
    }

  }, [isopen]);
  return (
    <>
      <div id="frstview">
      <div id='phonemenu' ref={menuphone}>
        <img src="./close.png" id="close" onClick={()=>{
          setopen(false)
        }}/>
        <ul>
    
          <li onClick={()=>{
            router.push('/#numbers')
            setopen(false)
          }}>About</li>
          <li onClick={()=>{
              router.push('/#categoriapara')
              setopen(false)
          }}>Categories</li>
          <li  onClick={()=>{
              router.push('/#finalgall')
              setopen(false)
          }}>Gallery</li>
          <li  onClick={()=>{
              router.push('/#contactsection')
              setopen(false)
          }}>Contact</li>
        </ul>
      </div>
        <Navbar setopen={setopen} isopen={isopen}/>
        <Hero/>
        <Categoriepara/>
        <Categorieimages/>
        <Numbers/>
        <Gallerypara/>
        <Gellery/>
        <Bigimage router={router}/>
      
  
        <Contact/>
        <Finalgallery/>
        <Footer/>
      
      </div>

    </>
  );
}
