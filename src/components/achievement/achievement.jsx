
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
        window.addEventListener("load", ubahTulisan)


        let timeline = gsap.timeline({
            scrollTrigger: {
                trigger: "#main-achievement-container",
                start: "top bottom",
                end: "10% 40%",
                scrub: true,
                onUpdate: () => ScrollTrigger.refresh(),
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
                        <source src="src/assets/achievement/kreativesia.mp4" type="video/mp4" />
                        Oh, sayang sekali. Browser Kamu tidak support video.
                    </video>

                </div>

                <div ref={kontainerDeskripsi} className="kontainer-deskripsi">

                    <h1>Silver Medalist</h1>
                    <h3 className="text-secondary">Kreativesia National Competition 2024</h3>

                    <p style={{ fontSize: "17px" }}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid quos cupiditate maxime blanditiis libero necessitatibus, voluptas doloribus sequi odit quas eligendi, fugit mollitia unde nihil perspiciatis. Atque autem expedita placeat sed voluptates facilis omnis quas neque. Autem rem laboriosam in magnam dolores ipsam a quod voluptatibus nobis eveniet, quibusdam provident reiciendis incidunt vitae. Quasi, reprehenderit? Aut voluptatum accusantium dolore voluptatem ipsa repellat repellendus natus hic nesciunt quod sequi, vero est provident animi perferendis iure eos eligendi ducimus, eveniet doloremque expedita. Commodi atque dolorum officiis deserunt porro reiciendis quis ad, ex, nam eum sed vel libero mollitia vitae repellendus itaque. Debitis?
                    </p>

                </div>


        

            </div>


        </div>

    );


}