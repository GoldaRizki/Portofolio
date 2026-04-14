export default function Profesi({gambar, nama}){

    return(
    
    
    <div className="container-profesi d-flex flex-wrap justify-content-center">
        <div className="container-gambar-profesi">
            <img src={ gambar } className="gambar-profesi" alt={ nama }/>
        </div>

        <p className="text-profesi"> { nama } </p>
    </div>
    

    );
}