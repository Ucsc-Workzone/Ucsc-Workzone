import React from "react";



const Annoucement = () => {

    const AnnoucementContainer={
        // display:"flex",
        backgroundColor:"white",
        padding:"20px",
        textAlign:"center",
        borderRadius:"10px"

    }
    return (  
       <div style={AnnoucementContainer} >
        <h3>Site Annoucements</h3>
        <ul>
            <li>this is a sample annoucement</li>
            <li>this is a sample annoucement</li>
            <li>this is a sample annoucement</li>
            <li>this is a sample annoucement</li>
            <li>this is a sample annoucement</li>
            <li>this is a sample annoucement</li>
            <li>this is a sample annoucement</li>
            <li>this is a sample annoucement</li>
           
        </ul>
       </div>
    );
}
 
export default Annoucement;