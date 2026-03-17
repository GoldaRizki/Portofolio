

import { gsap } from "gsap";
    
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

import { useEffect } from 'react';
import '/src/components/introduction/introduction.css'

export default function Introduction(){


useEffect(()=>{


    let urutan = gsap.timeline({

        scrollTrigger: {
            trigger: '.intro-nama-1',
            start: 'top 50%', // when the top of the trigger hits the top of the viewport
            end: '+=800', // end after scrolling 500px beyond the start
            toggleActions: "play reverse restart reverse"
        }


    });
    
    urutan.to(".intro-nama-1", {opacity: 1, marginLeft: 0, duration: 0.2})
          .to(".intro-nama-2", {opacity: 1, marginLeft: 0, duration: 0.5})
          .to(".intro-nama-3", {opacity: 1, marginLeft: 0, duration: 0.5})
          .to(".bg-intro-nama-3", { duration: 0.1, opacity: 1, x: -50, y: -40})


}, [])

    return(

            <div className="d-flex justify-content-center align-items-center pembungkus-intro">
            <div className="row pt-5">

                <div className="col-lg-5">

                    <img className="img-fluid mb-5" src="/fotoku.png" alt="Fotoku"></img>

                </div>
                <div className="col-lg-1"></div>
                <div className="col-lg-6 d-flex align-items-center">

                    <div className="container mb-5">

                    <h1 className='intro-nama-1' style={{color : '#005461', fontSize: 72}}>HELLO!</h1>
                    <h1 className='intro-nama-2' style={{color : '#005461', fontSize: 72}}>MY NAME&nbsp;IS</h1>
                    <div className="container px-0 d-flex position-relative">
                        <span className='intro-nama-3 h1' style={{color : '#F96E5B', fontSize: 72, zIndex: 10}}>GOLDA</span>
                        <div className="bg-intro-nama-3 position-absolute"></div>

                    </div>
                    </div>

                </div>


            </div>

            </div>

        
    );


}