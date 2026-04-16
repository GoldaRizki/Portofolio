export default function Footer(){


    let date = new Date();
    let tahun = date.getFullYear();


    return (

        <div className="d-flex flex-wrap justify-content-center align-items-center gap-5" style={{ minHeight: "80px" }}>
        
            <span>Made with &#10084; by Golda</span>
            <span>&copy; {tahun} Golda.</span>
        
        </div>

    )

}