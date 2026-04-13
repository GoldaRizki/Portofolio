import "./lifeMotto.css"
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
//import ScrambleTextPlugin from "gsap-trial/ScrambleTextPlugin";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
//import ScrollSmoother from "gsap/ScrollSmoother";

gsap.registerPlugin(ScrollTrigger);


export default function LifeMotto(){

    let judul = useRef(null);

    let gambarParallax1 = useRef(null);
    let containerGambar1 = useRef(null);
    
    let gambarParallax2 = useRef(null);
    let containerGambar2 = useRef(null);

    useGSAP(() => {

        /*
        let smoother = ScrollSmoother.create({
                wrapper: "#lifeMottoParralaxWrapper",
                content: "#lifeMottoWrapper",
                smooth: 3,
                effects: true,
                scrollTrigger: {
                    trigger: '#lifeMotto',
                    start: 'top 30%', // when the top of the trigger hits the top of the viewport
                    end: "", // end after scrolling 500px beyond the start
                    scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
                    markers: true,
                    //toggleActions: "play restart resume restart"
                }
        });
        */

        //smoother.effects("#gambarDinoAjur", {speed : "auto"});


        gsap.to(judul.current, {
            scale: 0.8,
            y: 0,
            ease: "none",
            transformOrigin: "bottom left",
            scrollTrigger: {
                trigger: judul.current,
                start: "top 60%",
                end: "bottom 40%",
                onUpdate: ScrollTrigger.refresh(),
                scrub: true,
                //markers: true

            }
            });

        
        gsap.to(gambarParallax1.current, {
            y: 50,
            ease: "none",
            scrollTrigger: {
                trigger: containerGambar1.current,
                start: "top bottom",
                end: "bottom top",
                scrub: true,
                //markers: true

            }
            });


            gsap.to(gambarParallax2.current, {
            y: 200,
            ease: "none",
            scrollTrigger: {
                trigger: containerGambar2.current,
                start: "top bottom",
                end: "bottom top",
                scrub: true,
                //markers: true

            }
            });



    });




    return(

        <div className="container-md">

            <div ref={judul} className="judul-motto d-flex flex-column justify-content-end">

                LIFE MOTTO

            </div>

            <div className="row" style={{ padding: "0 30px" }}>
                <div className="col-6">

                    <div ref={containerGambar1} className="wadahGambar">
                        <img ref={gambarParallax1} className="gambar-parallax-motto" src="\src\assets\motto\gbr1.jpg" alt="dino ajur" />

                    </div>
                </div>

                <div className="col-6">
                    <span className="kata-mutiara">
                        Being Normal Will Only Take You from A&nbsp;to&nbsp;B. But Being Insane Will Take You Anywhere
                    </span>
                </div>

            </div>
            
            <div className="row p-5">
                <div className="col-6">

                    


                </div>

                <div className="col-6">

                        <div ref={containerGambar2} className="wadahGambar">
                        <img ref={gambarParallax2} className="gambar-parallax-motto" src="\src\assets\motto\gbr2.webp" alt="dino ajur" />

                    </div>
                </div>

            </div>

        </div>

    );



}