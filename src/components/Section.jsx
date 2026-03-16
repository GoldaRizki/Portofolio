export default function Section({children, bgColor}){

return(

<div className="container-fluid min-vh-100" style={{ backgroundColor : `${bgColor}`, boxSizing: "border-box"}}>
    
    {children}

</div>


);

}
