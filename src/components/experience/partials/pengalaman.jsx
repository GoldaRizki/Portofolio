

import React, { useRef } from 'react'
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
//import ScrambleTextPlugin from "gsap-trial/ScrambleTextPlugin";
import { useGSAP } from "@gsap/react";
import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin"; 


gsap.registerPlugin(ScrambleTextPlugin) 
gsap.registerPlugin(ScrollTrigger)

export default function Pengalaman({file_gambar, pengalaman, lokasi, durasi, deskripsi}){

  const textRef = useRef(null);


    let config_scramble_text = {
        text: "",
        chars: "0_1_", // Custom scramble characters
        
      }

    config_scramble_text.text = pengalaman



    useGSAP(() => {
    // All GSAP code goes inside this function


    let kursor = gsap.timeline({repeat: -1});
    
    kursor.to(".kursor-pengalaman", {
      opacity: 0,
      duration: 0.2,
      ease: "none",
      delay: 0.1
  })
  .to(".kursor-pengalaman", {
      opacity: 1,
      duration: 0.2,
      ease: "none",
      delay: 0.1
  });


    let scrollTriggerConfig = {
        trigger: '.title-experience',
        start: 'top 40%', // when the top of the trigger hits the top of the viewport
        end: "", // end after scrolling 500px beyond the start
        //scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
        //markers: true,
        toggleActions: "restart restart restart restart"
      }

      let tinggi = document.getElementById("experience").getBoundingClientRect().height;
      scrollTriggerConfig.end = "+=" + tinggi;
      console.log(tinggi)
      
    let tulisan = gsap.timeline({
      scrollTrigger: scrollTriggerConfig
    });
    
    tulisan.to(textRef.current, {
      duration: 3,
      scrambleText: config_scramble_text,
      ease: "power2.inOut"
    }).add(kursor);



  });




    return(
        <div className="container-md rounded p-5 box-pengalaman" style={{ backgroundColor : "#EBF4F6"}}>
                <div className="row w-100">

                    <div className="col-lg-4">

                        <div style={{ width: "100%", height: "300px" }} className="d-flex align-items-center">
                            <img src={"/src/assets/experience/" + file_gambar + ".png"} alt={lokasi} className="img-fluid" />
                        </div>

                    </div>

                    <div className="col-lg-8">
                        <h1> <span ref={textRef} ></span><span className='kursor-pengalaman'>_</span></h1>
                        <span style={{ fontSize: "20px", padding: "5px", fontFamily: "sans-serif"}}><b>{lokasi}</b></span>
                        <span style={{ fontSize: "20px", padding: "5px"}}>&#8226;</span>
                        <span style={{ fontSize: "20px", padding: "5px 10px", fontStyle: "italic", fontFamily: "monospace"}}>{durasi}</span>
                            <div className="text-wrap">
                                <p style={{ padding: "10px", fontSize: "17px"}}>
                                        {deskripsi}
                                </p>
                            </div>
                    

                    </div>

                </div>
        </div>
    );


}