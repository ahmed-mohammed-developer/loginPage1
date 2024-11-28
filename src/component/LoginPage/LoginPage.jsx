import React from 'react'
import './loginPage.css'
import img from './11.jpg'

function LoginPage() {
  return (
    <div className='loginPage container'>
        <div className="row">
            <div className="col-md-6 d-flex align-items-center justify-content-between">
                <div className="text-part d-flex flex-column">
                <h1>LOGIN</h1>

<input type="text" placeholder='Username' />
<input type="text" placeholder='Password' />

<button>LOGIN</button>

<div className='d-flex justify-content-between mt-2'>
    <a href="">Forgot Password</a>
    <a href="">Register</a>

                </div>
                </div>
            </div>
            <div className="col-md-6 d-flex align-items-center justify-content-center">
              <img src={img} alt="" />
            </div>
        </div>
        <div className='rectange'>

        </div>
    </div>
  )
}

export default LoginPage