import { useEffect } from 'react';
import '/src/components/whoami/whoami.css'
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Baris from './partials/baris';
import Profesi from './partials/profesi';

gsap.registerPlugin(ScrollTrigger);


export default function WhoAmI(){



    useEffect(()=>{

        let tinggi = document.getElementById("profesiSaya").getBoundingClientRect().height;

        //console.log("tingginya adalah :" + tinggi)

        let config_timeline = {   
                scrollTrigger: {
                trigger: '.siapa-saya',
                start: 'top 40%', // when the top of the trigger hits the top of the viewport
                end: "", // end after scrolling 500px beyond the start
                //scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
                //markers: true,
                toggleActions: "play reverse restart reverse"
        
                }
                
            }

        config_timeline.scrollTrigger.end = "+=" + tinggi 

        let urutan = gsap.timeline(config_timeline)


        urutan.to(".siapa-saya", {fontSize: 72, duration: 0.3})
              .to(".gambar-profesi", {boxShadow:"10px 10px #000000" , duration: 0.5, ease: "elastic.out(1,0.3),"})
              
        
        gsap.to(".scroll-stick", {scrollTrigger: config_timeline.scrollTrigger, height: innerHeight, duration: 1})

    },[])


return(



<div className="min-vh-100 container-fluid p-5">


    <div className="row">

        <div className="col-11">

        <h1 className="siapa-saya text-center">WHO AM&nbsp;I?</h1>

            <div className="row my-5">

                <Baris>
                    <Profesi gambar="/src/assets/svg/profesi/web-programming.svg" nama="PROGRAMMER"/>
                    <Profesi gambar="/src/assets/svg/profesi/it-support.svg" nama={"IT\u00A0SUPPORT"}/>
                </Baris>
                <Baris>
                    <Profesi gambar="/src/assets/svg/profesi/embedded-system-developer.svg" nama={"EMBEDDED SYSTEM DEVELOPER"}/>
                    <Profesi gambar="/src/assets/svg/profesi/data-analyst.svg" nama={"DATA\u00A0ANALYST"}/>
                </Baris>    
                <Baris>
                    <Profesi gambar="/src/assets/svg/profesi/photographer.svg" nama={"PHOTOGRAPHER"}/>
                    <Profesi gambar="/src/assets/svg/profesi/educator.svg" nama={"EDUCATOR"}/>
                </Baris>

            </div>

            <span className='siapa-saya-end'></span>


        </div>

        <div className="col-1">
            <div className="scroll-stick"></div>
        </div>


    </div>
    
</div>



);



}