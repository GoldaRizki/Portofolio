import { useGSAP } from '@gsap/react';
import './contacts.css'
import gsap from 'gsap';
import ScrollTrigger from "gsap/ScrollTrigger";
import { useRef } from 'react';
import Kontak from './partials/kontak';

gsap.registerPlugin(ScrollTrigger);

export default function Contacts(){

    let judulKontak = useRef(null)

    useGSAP(()=>{

        gsap.to(judulKontak.current, {
            scale: 0.8,
            y: 0,
            ease: "none",
            scrollTrigger: {
                trigger: judulKontak.current,
                start: "top 60%",
                end: "bottom 30%",
                scrub: true,
                //markers: true
            }
        })

    })


return (
    <div className="container">

        <h1 ref={judulKontak} className="judul-kontak">CONTACTS</h1>

        <Kontak nama="Linkedin" link="https://www.linkedin.com/in/golda-rizki-abadi-850400342/" logo="linkedin"/>    
    
        <Kontak nama="Instagram" link="https://www.instagram.com/goldarizki_/" logo="instagram"/>    

        <Kontak nama="Github" link="https://github.com/GoldaRizki" logo="github"/>    

        <Kontak nama="a.goldarizki@gmail.com" link="mailto:a.goldarizki@gmail.com" logo="email"/>    


    </div>
);



}