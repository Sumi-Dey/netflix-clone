import React from 'react'

const Register = () => {
  return (
    <div className='login'>
            <h3>Sign In</h3>
            <div className='inputs'>
                <input type="text" className="form-control" id="exampleFormControlInput1" placeholder='Enter Your Name' /><br />
                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder='Enter Your Email ID' /><br />
                <input type='password' className="form-control" placeholder='Password' /><br />
                <button className='btn'>Sign In</button>
            </div>
            <div className='text'>
                <div><span>New to Netflix? </span><span>Sign Up now.</span></div>
            </div>
        </div>
  )
}

export default Register;
