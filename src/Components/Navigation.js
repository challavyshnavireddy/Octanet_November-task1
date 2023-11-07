import React from 'react'
import './Navigation.css'
import { NavLink } from "react-router-dom";
import Dropdown from 'react-bootstrap/Dropdown';
import { Link } from 'react-router-dom';

import logo from '../Images/logo.jpg'

export const Navigation = () => {
  // const investor=()=>{
  //   <InvestorRegistration/>
  // }
  // const student=()=>{
  //   <StudentRegistration/>
  // }
  // const entrepreneur=()=>{
  //   <EntrepreneurRegistration/>
 
   

  return (
    <div>
   <div  className="m">
   
      <nav className="navbar navbar-expand-md ">
      <img className='imgg' src={logo} />
          <NavLink className="nav-link  m-4"  to="/">
            HOME
          </NavLink>
          <div className='text-center'>
          <div className=' text-success tt'>YONO - EGOVERNANCE</div>
          <div className='text-black'> <p>(You Only Need One)</p> </div>
          </div>
 
         
            {/* <li className="nav-item mt-1">
                <NavLink className="nav-link " to="/OnlineRegistration">OnlineRegistration
                 &nbsp;
*/}
                 {/* </NavLink>
               </li>  */} 
              
              
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
    
             <ul className="navbar-nav  ms-auto  ">
             <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Online Registration
      </Dropdown.Toggle>

      <Dropdown.Menu className='text-center r'>
        <div>
        <Link to="/InvestorRegistration">Investor</Link>
        </div>
        <div>
        <Link to="/EntrepreneurRegistration">Entrepreneur</Link>
        </div>
        <div>
        <Link to="/StudentRegistration">Students</Link>
        </div>
      </Dropdown.Menu>
    </Dropdown>
              <li className="nav-item ">
                <NavLink className="nav-link mt-1 "  to="/FinancialSupport">FinancialSupport
                 &nbsp;
                 
                </NavLink>
              </li>
              <li className="nav-item ">
                <NavLink className="nav-link mt-1 "   to="/GirevanceRedressal" >GirevanceRedressal
                 &nbsp;
                 
                </NavLink>
              </li>
              {/* <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button> */}
            </ul>
          </div>
      
      </nav>
    </div>


    </div>
  )
}
