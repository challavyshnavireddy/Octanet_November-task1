import React from 'react'
import { useForm } from 'react-hook-form';
import './Registrationform.css'

function StuentRegistration() {

    let { register, handleSubmit , formState: { errors },} = useForm();
    let handleRegistration = (userObj) => {
      console.log(userObj);
      
      fetch("http://localhost:4000/student",{
        method:"POST",
        headers:{
          'Content-Type': 'application/json',
        },
        body:JSON.stringify(userObj),
      })
      .then((res)=>res.json())
      .then((message)=>console.log(message))
      .catch((err)=>console.log("err is ",err))
    };
  return (
    <div className='bo'>
    <div className='form'>
          <form onSubmit={handleSubmit(handleRegistration)}>
        <h1 className='heading'>STUDENT</h1>
      <div className='ele'>
        <label className='label1'>First Name</label>
        <br />
        <input type="text" name="FirstName" {...register('FirstName' ,{required : true}) } />
      </div>
      <div className='ele'>
        <label>Last Name</label>
        <br />
        <input name="LastName" {...register('LastName')} />
      </div>
      <div className='ele'>
        <label>Email</label>
        <br />
        <input type="email" name="email" {...register('email')} required={true}/>
      </div>
      <div className='ele'>
        <label>Mobile Number</label>
        <br />
        <input type="MobileNumber" name="MobileNumber" {...register('MobileNumber', {required:true, minLength:"10"})} />
      </div>
      <div className='ele'>
        <label>Aadhar Number</label>
        <br />
        <input type="AadharNumber" name="AadharNumber" {...register('AadharNumber')} required={true}/>
      </div>
      <div className='ele' >
        <h3>Gender</h3>
        <input type="radio" value="male" name="person" /> Male 
        <input type="radio" value="female" name="person" /> Female
      </div>

      {errors.FirstName?.type==='required' && <p className='text-danger'>*This field is required</p> }
     
      <button type="submit" className='btn'>Register Now</button>
    </form>  
    </div>
    </div>
  )
}

export default StuentRegistration