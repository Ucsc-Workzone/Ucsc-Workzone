import React from "react";
import Widgets from "../widgets/Widgets";

import {CRow,CCol,CCard,CCardBody,CButton,CCardText,CCardTitle} from "@coreui/react";
const Leave = () => {
    const LeaveCon={
display:"flex",
justifyContetnt:"space-between",
flexDirection:"column",
Width:"100%",
// backgroundColor:"red"
    }

    const LeaveCard={
        display:"flex",
        flexDirection:"row",
        flexWrap:"wrap",
        justifyContetnt:"center",
         Width:"100%",
        alignItems:"center",
        // backgroundColor:"red"
    }

    const LeaveHis={
        display:"flex",
        justifyContetnt:"center",
        
        Width:"100%",
        backgroundColor:"green"
    }
    const Card={
        width:"30%",
        marginTop:"0px",
        height:"150px",
        backgroundColor:"white",
        margin:"100px",
        textAlign:"center",
        borderRadius:"10px",
        padding:"20px"
    }
    return ( 
<div style={LeaveCon}>
    <div style={LeaveCard}>
    <div style={Card}>
       <h4>No of Leaves 2022</h4>
       <h5>10</h5>
    </div>
   
 <div style={Card}>
 <h4>No of Leaves January</h4>
 <h5>10</h5>
 </div>
 
  
    </div>
    <div style={LeaveHis}>
        hello
    </div>
</div>

     );
}
 
export default Leave;