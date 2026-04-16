export default function Section({children, bgColor, id, paddingTop = 0, paddingBottom = 0}){

return(

<div id={id} className="min-vh-100" style={{ backgroundColor : `${bgColor}`, paddingTop: `${paddingTop}`, paddingBottom: `${paddingBottom}`, maxWidth: "100vw"}}>
    
    {children}

</div>


);

}
    