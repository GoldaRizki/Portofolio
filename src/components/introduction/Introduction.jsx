

import { gsap } from "gsap";
    
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin"; 

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrambleTextPlugin) 

import '/src/components/introduction/introduction.css'
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

export default function Introduction(){


    let kontainer = useRef(); 
    let teks_scroll = useRef();

    useGSAP(()=>{



    let urutan = gsap.timeline({

        scrollTrigger: {
            trigger: kontainer.current,
            start: 'top 50%', // when the top of the trigger hits the top of the viewport
            end: 'bottom top', // end after scrolling 500px beyond the start
            //markers: true,
            toggleActions: "play reverse restart reverse"
        }


    });

    urutan.to(".bg-intro-nama-2", {
        width: "100%",
        delay: 0.5,
        duration: 0.5
    }).to(teks_scroll.current, {
        duration: 3,
        scrambleText:{
            text: "Scroll Down For More &#128071;",
            chars: " "
        }
    })
    

    })

    return(


        <div ref={kontainer} className="container-fluid min-vh-100">

            <div className="row align-items-center min-vh-100">

                <div className="col-lg-6">

                    <div className="container-nama">

                        <h1 className="intro-nama-1">HELLO!</h1>
                        <h1 className="intro-nama-1">MY NAME&nbsp;IS</h1>
                        
                        <div className="container-nama-saya d-flex">
                            <span className="intro-nama-2">GOLDA</span>
                            <div className="bg-intro-nama-2"></div>
                        </div>

                        <p ref={teks_scroll} className="text-scroll-down"> </p>

                    </div>

                </div>


                <div className="col-lg-6">
                
                    <div className="container-fotoku d-flex justify-content-center">
                        <div className="animasi-foto-1"></div>
                        <img src="/assets/introduction/fotoku.webp" alt="fotoku" className="fotoku" />
                    </div>

                </div>


            </div>
        </div>

        
    );


}