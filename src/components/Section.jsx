export default function Section({children, bgColor, id}){

return(

<div id={id} className="min-vh-100" style={{ backgroundColor : `${bgColor}`, boxSizing: "border-box"}}>
    
    {children}

</div>


);

}
