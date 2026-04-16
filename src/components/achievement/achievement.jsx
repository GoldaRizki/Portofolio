
import { useRef } from "react";
import "./achievement.css"
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger)

export default function Achievement(){

    let judul = useRef(null);
    let kontainerVideo = useRef(null);
    let kontainerDeskripsi = useRef();

    useGSAP(()=>{



        let ubahTulisan = () => {

            let lebar = document.documentElement.clientWidth;


            if(lebar > 502){
                judul.current.innerHTML = "ACHIEVEMENT"
            }else{
                judul.current.innerHTML = "<span>ACHIEVE-</span><span>MENT</span>"
            }

        }

        window.addEventListener("resize", ubahTulisan)
        //window.addEventListener("load", ubahTulisan)
        ubahTulisan();

        let timeline = gsap.timeline({
            scrollTrigger: {
                trigger: "#main-achievement-container",
                start: "top bottom",
                end: "10% 40%",
                scrub: 0.1,
                onLeave: () => ScrollTrigger.refresh(),
                onEnterBack: () => ScrollTrigger.refresh(),
                //markers: true

            }
        })


        timeline.to(judul.current, {
            y: 0,
            ease: "none",
            });

        


        //Set Ukuran Container Video

        let lebar = document.documentElement.clientWidth;


        if(lebar >= 768){

            timeline.to(kontainerVideo.current, {
            flexBasis: "30%",
            ease: "none",
            transformOrigin: "top left",
            });


        }else{

            timeline.to(kontainerVideo.current, {
            flexBasis: "80%",
            ease: "none",
            transformOrigin: "bottom center",
            });



            gsap.to(kontainerDeskripsi.current, {
                flexBasis: "100%",

            })

        }
            
        


        



    })
    

    return (

        <div id="main-achievement-container" className="container-md">


            <h1 ref={judul} className="judul-achievement">

                ACHIEVEMENT

            </h1>


            <div className="d-flex flex-wrap justify-content-center achievement-container">

                <div ref={kontainerVideo} className="kontainer-video-kreativesia">

                    <video id="video-kreativesia" autoPlay muted loop>
                        <source src="/assets/achievement/kreativesia.mp4" type="video/mp4" />
                        Oh, sayang sekali. Browser Kamu tidak support video.
                    </video>

                </div>

                <div ref={kontainerDeskripsi} className="kontainer-deskripsi">

                    <h1>Silver Medalist</h1>
                    <h3 className="text-secondary">Kreativesia National Competition 2024</h3>

                    <p style={{ fontSize: "19px" }}>
                        I was annointed to join the competition and became representative of Central Java Province. I worked together with my partner
                         &mdash;    
                          <a href="https://www.linkedin.com/in/dhiki-sujatmiko-0b69b8333/" target="_blank" className="text-decoration-none d-inline-flex align-items-center gap-1">
                             <span>Dhiki Sujatmiko</span>
                             <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5"/>
                                <path fillRule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0z"/>
                              </svg>
                          </a>
                          &mdash; 
                        creating a turret gun that can be controlled using stick controller and equipped with camera. We named it CTGS &mdash; which stands for Controlled Turret Gun System.
                        The idea of this project came from many casualties in the conflict zone such as Papua. Soldiers that guard their base sometime become vurnerable target as they have to expose their body towards area they guard &mdash; which easier for enemy to spot.
                        By using our turret gun, soldier can guard their area behind cover while controlling the turret gun using controller and looking around trough camera.
                        This can be useful when their base is under attack by insurgent as the soldier can hide in a cover without exposing their body.

                    </p>

                    <a href="https://www.disbudparekraf.jatengprov.go.id/post/299/Jateng-Raih-Juara-Umum-pada-Pekan-Kreativitas-Pemuda-Indonesia-Kreativesia-2024" target="_blank" style={{ fontSize: "19px" }} className="d-inline-flex align-items-center gap-1">
                        <span>Click here for more </span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5"/>
                            <path fillRule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0z"/>
                        </svg>
                    </a>

                </div>


        

            </div>


        </div>

    );


}