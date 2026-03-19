export default function Profesi({gambar, nama}){

    return(
    
    
    <div className="gambar-profesi mx-auto">
        <img src={ gambar } className="figure-img img-fluid w-100" alt={ nama }/>
        <p className="text-center" style={{ color: "#09637E" }}> { nama } </p>
    </div>
    

    );
}