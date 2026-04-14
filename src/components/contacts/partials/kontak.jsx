export default function Kontak({nama, logo, link}){
 
 
 return (
    <a href={link} target="_blank" className='text-decoration-none isi-kontak-font d-flex justify-content-center align-items-center'>
                <div className="row isi-kontak d-flex justify-content-center align-items-center">

                    <div className='col-3'>

                        <div className='d-flex justify-content-end' style={{ width: "100%", height: "auto"}}>

                                <img src={"src/assets/sosmed/" + logo + ".svg"} alt="" style={{ width: "70%", height: "auto"}} />

                        </div>
    
                    </div>


                    <div className='col-9'>

                        {nama}

                    </div>

                </div>
    </a>
 );

}