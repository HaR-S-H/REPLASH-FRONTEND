import React from 'react'
import { useState } from 'react'
import Login_img from '../assets/login.jpg'
import Login_Component from '../components/auth/login_comp'
import Signup_Component from '../components/auth/signup_comp'
function Auth() {
  let [auth, setAuth] = useState(true);
  
  document.title = 'Auth'
  return (
    <div className="py-10 px-6 sm:px-10 lg:px-36 bg-slate-300 w-full min-h-screen flex items-center justify-center">
    <div className="bg-white flex flex-col lg:flex-row w-full max-w-6xl rounded-lg overflow-hidden shadow-md">
      {/* Left Content for Login/Signup */}
      {auth && (
        <div className="w-full lg:w-3/5 px-6 sm:px-12 py-8 sm:py-16">
          <h1 className="font-medium text-xl sm:text-2xl mb-6 sm:mb-10">Interactive Brand</h1>
          <Login_Component toggleAuth={() => setAuth(!auth)} />
        </div>
      )}
  
      {/* Image Section */}
      <div className="hidden lg:block w-full lg:w-2/5">
      <img
  src={Login_img}
  alt=""
  className={`w-full h-full object-cover ${
    !auth ? "transform scale-x-[-1] w-full h-full object-cover" : ""
  }`}
/>

      </div>
  
      {/* Signup Section */}
      {!auth && (
        <div className="w-full lg:w-3/5 px-6 sm:px-12 py-8 sm:py-16">
          <h1 className="font-medium text-xl sm:text-2xl mb-6 sm:mb-10">Interactive Brand</h1>
          <Signup_Component toggleAuth={() => setAuth(!auth)} />
        </div>
      )}
    </div>
  </div>
  
  )
}

export default Auth