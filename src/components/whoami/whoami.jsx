import { useEffect } from 'react';
import '/src/components/whoami/whoami.css'
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Baris from './partials/baris';
import Profesi from './partials/profesi';

gsap.registerPlugin(ScrollTrigger);


export default function WhoAmI(){



    useEffect(()=>{

        let urutan = gsap.timeline(
            {
                scrollTrigger: {
                trigger: '.siapa-saya',
                start: 'top 50%', // when the top of the trigger hits the top of the viewport
                end: '+=100', // end after scrolling 500px beyond the start
                //scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
                toggleActions: "play resume restart reverse"
                }
            }
        )


        urutan.to(".siapa-saya", {fontSize: 72, duration: 0.3})
              .to(".gambar-profesi", {height: 500, width: 300, duration: 1.5})
              .to(".scroll-stick", {height: innerHeight, duration: 2})
        


    },[])


return(



<div className="min-vh-100 container-fluid p-5">


    <div className="row">

        <div className="col-11">

        <h1 className="siapa-saya text-center">WHO AM I?</h1>

            <div className="row my-5">

                <Baris>
                    <Profesi gambar="/src/assets/svg/web-programming.svg" nama="PROGRAMMER"/>
                    <Profesi gambar="/src/assets/svg/it-support.svg" nama={"IT\u00A0SUPPORT"}/>
                </Baris>
                <Baris>
                    <Profesi gambar="/src/assets/svg/embedded-system-developer.svg" nama={"EMBEDDED SYSTEM DEVELOPER"}/>
                    <Profesi gambar="/src/assets/svg/data-analyst.svg" nama={"DATA\u00A0ANALYST"}/>
                </Baris>    

            </div>

        </div>

        <div className="col-1">
            <div className="scroll-stick"></div>
        </div>


    </div>
    
</div>



);



}