import '/src/components/whoami/whoami.css'
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Profesi from './partials/profesi';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);


export default function WhoAmI(){


    useGSAP(()=>{


        //console.log("tingginya adalah :" + tinggi)

        let config_timeline = {   
                scrollTrigger: {
                trigger: '#profesiSaya',
                start: '10% 60%', // when the top of the trigger hits the top of the viewport
                end: "45% top", // end after scrolling 500px beyond the start
                scrub: 0.1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
                //onUpdate: () => ScrollTrigger.refresh(),
                //markers: true,
                toggleActions: "play resume resume reverse"
        
                }
                
            }

    

        let urutan = gsap.timeline(config_timeline)
            
        urutan.to(".siapa-saya", {
            translateY: 0
        });
        
        let container_profesi = document.querySelectorAll(".container-profesi");
        
        container_profesi.forEach(element => {
            urutan.to(element, {opacity: 1, scale: 1.1, duration: 0.1}).to(element, {scale: 1, duration: 0.1})
        });
        
              
   

    })


return(



<div className="min-vh-100 container-fluid p-5">

    <div  className="container-xxxl">

        <h1 className="siapa-saya text-center">WHO AM&nbsp;I?</h1>

            <div className="my-5 d-flex flex-wrap justify-content-center gap-1">

                    <Profesi gambar="/assets/svg/profesi/web-programming.svg" nama="PROGRAMMER"/>
                    <Profesi gambar="/assets/svg/profesi/it-support.svg" nama={"IT\u00A0SUPPORT"}/>
            
                    <Profesi gambar="/assets/svg/profesi/embedded-system-developer.svg" nama={"EMBEDDED SYSTEM DEVELOPER"}/>
                    <Profesi gambar="/assets/svg/profesi/data-analyst.svg" nama={"DATA\u00A0ANALYST"}/>
            
                    <Profesi gambar="/assets/svg/profesi/photographer.svg" nama={"PHOTOGRAPHER"}/>
                    <Profesi gambar="/assets/svg/profesi/educator.svg" nama={"EDUCATOR"}/>
            

            </div>

    </div>

</div>



);



}