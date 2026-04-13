import ToolsCard from "./partials/toolsCard";
import './familiarTools.css'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";


gsap.registerPlugin(ScrollTrigger);

export default function FamiliarTools(){


    useGSAP(()=>{


        let config_timeline = {        
                scrollTrigger: {    
                trigger: '.judul-tools',
                start: 'top 60%', // when the top of the trigger hits the top of the viewport
                end: '', // end after scrolling 500px beyond the start
                //markers: true,
                toggleActions: "play reverse play reverse"
            }
        }

        let tinggi = document.getElementById("familiarTools").getBoundingClientRect().height;

        config_timeline.scrollTrigger.end = "+=" + tinggi;  

    //    let tl = gsap.timeline(config_timeline);



        let elementTools = document.querySelectorAll(".toolsCard")


        /*
        elementTools.forEach(element => {
            tl.to(element, {duration: 0.2, opacity: 1})
        });

        
*/

        for(let i = 0; i < elementTools.length; i+=8){

            let time_line = gsap.timeline(config_timeline);


            if(elementTools.length - i != elementTools.length % 8 ){

                for(let j = i; j < i + 8; j++){

                    time_line.to(elementTools[j], {duration: 0.2, opacity: 1})

                }

            }else{

                for(let j = i; j < i + (elementTools.length % 8); j++){

                    time_line.to(elementTools[j], {duration: 0.2, opacity: 1})

                }
                
            }

            
            
        }
        

    })

    return(
        <div className="container">
            <h1 className="text-center p-5 judul-tools">Tools That I'm Familiar With</h1>

            <div className="container-fluid d-flex flex-wrap justify-content-center gap-2 p-1">

                <ToolsCard gambar="javascript" nama="Javascript"/>
                <ToolsCard gambar="php" nama="PHP"/>
                <ToolsCard gambar="python" nama="Python"/>
                <ToolsCard gambar="vbnet" nama="VB.NET"/>
                <ToolsCard gambar="html5" nama="HTML5"/>
                <ToolsCard gambar="css3" nama="CSS3"/>
                <ToolsCard gambar="java" nama="Java"/>
                <ToolsCard gambar="c++" nama="C++"/>


                <ToolsCard gambar="androidstudio" nama="Android Studio"/>
                <ToolsCard gambar="arduino" nama="Arduino"/>
                <ToolsCard gambar="bootstrap" nama="Bootsrap"/>
                <ToolsCard gambar="django" nama="Django"/>
                <ToolsCard gambar="nodejs" nama="NodeJS"/>
                <ToolsCard gambar="expressjs" nama="ExpressJs"/>
                <ToolsCard gambar="laravel" nama="Laravel"/>
                <ToolsCard gambar="react" nama="ReactJs"/>

                <ToolsCard gambar="git" nama="Git"/>
                <ToolsCard gambar="github" nama="GitHub"/>


                <ToolsCard gambar="mariadb" nama="MariaDB"/>
                <ToolsCard gambar="sqlite" nama="Sqlite"/>
                <ToolsCard gambar="mssql" nama="Microsoft SQL Server"/>

                <ToolsCard gambar="jupyternotebook" nama="Jupyter Notebook"/>
                <ToolsCard gambar="matplotlib" nama="Matplotlib"/>
                <ToolsCard gambar="numpy" nama="Numpy"/>
                <ToolsCard gambar="pandas" nama="Pandas"/>
                <ToolsCard gambar="qiskit" nama="Qiskit"/>

                <ToolsCard gambar="ubuntu" nama="Ubuntu"/>
                <ToolsCard gambar="docker" nama="Docker"/>
                <ToolsCard gambar="mikrotik" nama="Mikrotik"/>
                <ToolsCard gambar="nginx" nama="Nginx"/>

            </div>

    
        </div> 
    
    );


}