import React from 'react'
import './Schemes.css'
import Scholarships from './Scholarships';
function Schemes() {
  return (
    <div>
      <div className='container'>
        <h1>Schemes</h1>
        <div className='container1'>
      <p>Government Schemes in India are launched by the government to address the social and economic welfare of the citizens of this nation.These schemes play a crucial role in solving many socio-economic problems that beset Indian society; thus, their awareness is a must for any concerned citizen.</p>
      <p>Indian Government, at all levels, announces Welfare Schemes for a cross section of the society from time to time. These schemes could be either Central, State specific or a joint collaboration between the Centre and the States. In this section, we have attempted to provide you an easy and single point access to information about several welfare schemes of the Government and their various aspects including eligible beneficiaries, types of benefits, scheme details etc.The Ministries of the Government of India have come up with various government programs called schemes or plans (Yojana) from time to time. These schemes could be formed either by the central government, state government-specific, or joint collaboration between the center and the states.</p>
      
      <h2>List of Schemes in India</h2>
      <div className='flex'>
          <ol >
            <li><a style={{textDecoration: 'none'}}  href="https://www.startupindia.gov.in/" target="_blank">START-UP INDIA</a></li>
            <li ><a style={{textDecoration: 'none'}} href="https://www.akshayapatra.org/indias-mid-day-meal-scheme" target="_blank">Midday Meal Scheme</a></li>
            <li><a style={{textDecoration: 'none'}} href="http://www.mod.gov.in/gallery/agnipath-scheme" target="_blank">Agnipath Scheme</a></li>
            <li><a style={{textDecoration: 'none'}} href="https://svamitva.nic.in/svamitva/index.html" target="_blank">Svamitva Yojana</a></li>
            <li><a style={{textDecoration: 'none'}} href="https://panchayat.gov.in/garib-kalyan-rojgar-abhiyaan" target="_blank">Garib Kalyan Rojgar Abhiyaan</a></li>
            <li><a style={{textDecoration: 'none'}} href="https://dof.gov.in/pmmsy" target="_blank">Pradhan Mantri Matsya Sampada Yojana</a></li>
            <li><a style={{textDecoration: 'none'}} href="https://jaljeevanmission.gov.in/" target="_blank">Jal Jeevan Mission</a></li>
            <li><a style={{textDecoration: 'none'}} href="https://pmkusum.mnre.gov.in/landing.html" target="_blank">PM Kisan Urja Suraksha Evam Utthan Mahabhiyana</a></li>
            <li><a style={{textDecoration: 'none'}} href="https://maandhan.in/" target="_blank">PM Shram Yogi Mandhan</a></li>
            <li><a style={{textDecoration: 'none'}} href="https://mera.pmjay.gov.in/search/login" target="_blank">Ayushman Bharat Yojana</a></li>
          </ol>
          <img src='https://www.edudwar.com/wp-content/uploads/2022/02/Government-Schemes-in-India.jpg'></img>
          <img src='https://s3-ap-south-1.amazonaws.com/adda247jobs-wp-assets-adda247/articles/wp-content/uploads/2023/03/16132809/Government-Schemes-List.jpg'></img>
          </div>
          </div>
      </div>
    </div>
  )
}

export default Schemes;