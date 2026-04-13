import Pengalaman from "./partials/pengalaman";
import "./experience.css"
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Experience(){

    let title = useRef();

    useGSAP(()=>{

        gsap.to(title.current, {
            y: 0,
            scale: 0.8,
            scrollTrigger: {
                trigger: '.title-experience',
                start: 'top 50%', // when the top of the trigger hits the top of the viewport
                end: "bottom top", // end after scrolling 500px beyond the start
                scrub: true, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
                onUpdate: () => ScrollTrigger.refresh(),
                //markers: true,
            }
        })


    });


    return(
        <div className="container-fluid py-5">

            <h1 ref={title} className="text-center title-experience mb-5">EXPERIENCE</h1>

            <Pengalaman
            file_gambar="goldastudio"
            pengalaman="IT SUPPORT"
            lokasi="Golda Studio"
            durasi="January 2020 - Present"
            deskripsi="My work in this bussiness is mostly in the scope of IT. 
            Such as doing preventive maintenance, managing network configuration, 
            developing application for internal affairs, and also repairing when a problem arise.
            As I worked in my own family bussiness, I also contribute in making bussiness decision by 
            analyzing the company's database using python with jupyter notebook, 
            and then make a decision from it. "
            
            />

            <Pengalaman
            file_gambar="phapros"
            pengalaman="FULL STACK DEVELOPER"
            lokasi="PT. Phapros (tbk)"
            durasi="August 2023 - November 2023"
            deskripsi="In this company, I was assigned to create an automation system for scheduling their preventive maintenance as the company 
            itself has a lot of machine to be maintained. Eventhough my position was an intern, they gave me a real job to be done. That is reforming their old scheduling system and creating 
            a new system that perform better towards their use case. I made that using Laravel 8 and it still functioning until present."
            
            />

            <Pengalaman
            file_gambar="kompetenid"
            pengalaman="EDUCATOR"
            lokasi="Kompeten.id"
            durasi="September 2024 - Present"
            deskripsi="Educating and teaching primary schools kids about robotics, electronics, programming, and computational thinking. 
            In this job, I earn a lot experience such as communication and public speaking as I have to simplified my explanation 
            in to something that kids more familiar without leaving the philosophy."
            
            />
            


        </div>
    );


}