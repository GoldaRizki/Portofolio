export default function Pengalaman({file_gambar, pengalaman, lokasi, durasi, deskripsi}){


    return(
        <div className="container-md rounded p-5 box-pengalaman" style={{ backgroundColor : "#EBF4F6"}}>
                <div className="row w-100">

                    <div className="col-lg-4">

                        <div style={{ width: "100%", height: "300px" }} className="d-flex align-items-center">
                            <img src={"/src/assets/experience/" + file_gambar + ".png"} alt={lokasi} className="img-fluid" />
                        </div>

                    </div>

                    <div className="col-lg-8">
                        <h1>{pengalaman}</h1>
                        <span style={{ fontSize: "20px", padding: "5px", fontFamily: "sans-serif"}}><b>{lokasi}</b></span>
                        <span style={{ fontSize: "20px", padding: "5px"}}>&#8226;</span>
                        <span style={{ fontSize: "20px", padding: "5px 10px", fontStyle: "italic", fontFamily: "monospace"}}>{durasi}</span>
                        <p style={{ padding: "10px", fontSize: "17px"}}>
                            {deskripsi}
                        </p>

                    </div>

                </div>
        </div>
    );


}