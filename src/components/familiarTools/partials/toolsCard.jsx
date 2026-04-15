    
    export default function ToolsCard({gambar, nama}){  

        return(
            <div className="card toolsCard">
                    <img className="p-3" src={"/assets/svg/tools/" + gambar + ".svg"} alt={nama} height="100" width="150"/>
                    <div className="card-caption">
                        <h6 className="text-center text-tools-card">{nama}</h6>
                    </div>
            </div>
        );


    }