
import React from "react";
import { CButton } from "@coreui/react";
import { Link } from "react-router-dom";
const Landing = () => {
    return ( 
        <>
          <h2>Landing</h2>
        
          
          <Link to="/login">
                      <CButton color="primary" className="mt-3" active tabIndex={-1}>
                      Login
                      </CButton>
                    </Link>
        </>
      
       
     );
}
 
export default Landing;