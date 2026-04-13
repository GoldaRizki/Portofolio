export default function Section({children, bgColor, id, paddingTop = 0, paddingBottom = 0}){

return(

<div id={id} className="min-vh-100" style={{ backgroundColor : `${bgColor}`, boxSizing: "border-box", paddingTop: `${paddingTop}`, paddingBottom: `${paddingBottom}`}}>
    
    {children}

</div>


);

}
    