import React from 'react';

const Footer = () => {
    return (
        <div className='mx-5'>
   <div className="bg-cover bg-center bg-fixed" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1495461199391-8c39ab674295?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Y29va3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60")' }}>

<footer className="footer p-10    text-base-content mt-10">
  <div className='text-green-100'>
    <span className=" text-xl label ">Services</span> 
    <a className="link link-hover">cooking</a> 
    <a className="link link-hover">Advice </a> 
    <a className="link link-hover">make recipe</a> 
    <a className="link link-hover">cooking</a>
  </div> 
  <div  className='text-black'>
    <span className="text-xl label ">Company</span> 
    <a className="link link-hover">About us</a> 
    <a className="link link-hover">Contact</a> 
    <a className="link link-hover">Jobs</a> 
    <a className="link link-hover">Press kit</a>
  </div> 
  <div className='text-green-100 ' >
    <span className="text-xl label">Upcoming </span> 
    <a className="link link-hover">Cook festive</a> 
    <a className="link link-hover">Cooking Event </a> 
    <a className="link link-hover">Cookie policy</a>
    <a className="link link-hover">Cook festive</a> 
  </div> 
  <div  className='text-white'>
    <span className=" text-xl label">Newsletter</span> 
    <div className="form-control w-80">
      <label className="label">
        <span className="label-text text-white  ">Enter your email address</span>
      </label> 
      <div className="relative">
        <input type="text" placeholder="username@site.com" className="input input-bordered w-full pr-16" /> 
        <button className="btn btn-lime absolute top-0 right-0 rounded-l-none">Subscribe</button>
      </div>
    </div>
  </div>
</footer>
</div>

        </div>
  
    );
};

export default Footer;

