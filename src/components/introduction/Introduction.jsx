

import { useEffect } from 'react';
import '/src/components/introduction/introduction.css'

export default function Introduction(){


useEffect(()=>{

        const observer = new IntersectionObserver((entries)=>{

            entries.forEach((entry) => {
                if(entry.isIntersecting){
                    entry.target.classList.add('tampil')
                    console.log(entry.target)
                }else{
                    entry.target.classList.remove('tampil')
                }
            })
            

        }, {});


        const textIntro = document.querySelectorAll(".intro-nama")
        textIntro.forEach(element => {
            observer.observe(element)
        });


}, [])

    return(

            <div className="d-flex justify-content-center align-items-center min-vh-100">
            <div className="row">

                <div className="col-md-5">

                    <img className="img-fluid my-5" src="/fotoku.png" alt="Fotoku"></img>

                </div>
                <div className="col-md-1"></div>
                <div className="col-md-6 d-flex align-items-center">

                    <div className="container my-5">

                    <h1 className='intro-nama' style={{color : '#005461', fontSize: 72}}>HELLO!</h1>
                    <h1 className='intro-nama' style={{color : '#005461', fontSize: 72}}>MY NAME&nbsp;IS</h1>
                    <h1 className='intro-nama' style={{color : '#F96E5B', fontSize: 72}}>GOLDA</h1>

                    </div>

                </div>


            </div>

            </div>

        
    );


}