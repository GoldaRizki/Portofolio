import ToolsCard from "./partials/toolsCard";
import './familiarTools.css'
import { useEffect } from 'react';
import { gsap } from "gsap";


export default function FamiliarTools(){


    useEffect(()=>{


        let elementTools = document.querySelectorAll(".toolsCard")

        let tl = gsap.timeline({        
            scrollTrigger: {
            trigger: '.judul-tools',
            start: 'top 30%', // when the top of the trigger hits the top of the viewport
            end: '+=700 150px', // end after scrolling 500px beyond the start
            markers: true,
            toggleActions: "play reverse restart reverse"
        }
    });

        tl.to(elementTools, {duration: 2, opacity: 1})
        

    }, [])

    return(
        <div className="container">
            <h1 className="text-center p-5 judul-tools">Tools That I'm Familiar With</h1>

            <div className="container-fluid d-flex flex-wrap justify-content-center gap-2 p-3">

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
                <ToolsCard gambar="react" nama="React"/>

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

            <div className="container end-of-tools"></div>
        </div> 
    
    );


}