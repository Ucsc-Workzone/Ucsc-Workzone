import React from "react";
import Annoucement from "src/components/Member/Annoucement";
import CalendarView from "src/components/Member/Calender";

import styles from '../../styles/memberHome.css'
import { CButton } from "@coreui/react";



const MemberHome = () => {

  const MemberContainer={
    display:"flex",
    justifyContent:"space-evenly",
    // backgroundColor:"black",
    width:"100%",
    flexWrap:"wrap"
  
    
  }
  const TodoConatiner={
    display:"flex",
    // justifyContent:"center",
    padding:"10px",
    backgroundColor:"white",
    width:"45%",
  }
  const CalenderContainer={
    display:"flex",
    // justifyContent:"center",
 paddingLeft:"100px",
    // backgroundColor:"red",
    width:"45%",
    flexDirection:"column"
  }
  
    return ( 
  <div  style={MemberContainer}>

<div style={TodoConatiner}>
<div>
<CButton color="primary">Report Your Duty</CButton>
</div>
</div>

<div style={CalenderContainer}>
<div>
  <CalendarView />
  </div>
  <div>
    <Annoucement />
  </div>
</div>
  </div>
       
     );
}
 
export default MemberHome;