
import React, { useContext } from 'react';

import { AuthContext } from '../../providers/AuthProvider';
import ActiveLink from './../../ActiveLink/ActiveLink';



const Header = () => {

    const { user, logOut } = useContext(AuthContext)
    console.log(user)
    const handleLogout = () => {
        logOut()
            .then(result => { })
            .catch(error => console.error(error));
    }


    return (

        <>
          <div  className='m-5'>
         <header className="bg-cover bg-center bg-fixed" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1495461199391-8c39ab674295?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Y29va3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60")' }}>
        <div  className='m-5'>
        <div className="navbar  sticky top-0 ">
    <div className="navbar-start">
      <div className="dropdown">
        <label tabIndex={0} className="btn btn-black lg:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
        </label>
        <ul tabIndex={0} className="menu   menu-compact dropdown-content mt-3 p-2 shadow bg-black rounded-box  w-52">
  
        
          
        <li className=""> <ActiveLink to="/" >Home </ActiveLink> </li> 
   
          <li>  <ActiveLink to="/blog" >Blogs</ActiveLink> </li> 
         
          {user ?
            <li>
                <span className=''>
                <div className="w-10 rounded-full">
        <img src={user.photoURL} alt="User profile" title={user.displayName} />
      </div>
                   
                    <button onClick={handleLogout}>Log out</button>
                </span>
            </li>
            :
            <li><ActiveLink to="/login">Login</ActiveLink></li>
        }
    </ul>


      </div>
  
      <div className=" w-10  rounded-full">
        <img  src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/chef-logo-design-template-22de347a5bbf9c3984200526956b2973.jpg?ts=1657075444" />
      </div>
      <h1 className="text-3xl 
text-yellow-400
      font-bold mb-4"> Chef Recipe</h1>
    </div>
    <div className="navbar-center hidden lg:flex">
      <ul className="menu menu-horizontal px-1">
     
     
    <li className=" text-yellow-400 m-2  "> <ActiveLink to="/" >Home </ActiveLink> </li>
  
    <li className="text-yellow-400 m-2 " >  <ActiveLink to="/blog" >Blogs</ActiveLink> </li> 
 
   
  
  
   {user ?
  <li>
    <span className=''>
      <div className="w-10 rounded-full">
        <img src={user.photoURL} alt="User profile" title={user.displayName} />
      </div>
   
      <button className="btn btn-active "onClick={handleLogout}>Log out</button>
    </span>
  </li>
  :
  <button className="btn btn-active m-3 "><ActiveLink to="/login">Login</ActiveLink></button>


}
 </ul>
    </div>
    <div className="navbar-end ">
    <input type="text" placeholder="Search" className="input input-bordered" />
    </div>
  </div>
  
  </div>
  </header>
  </div>
        </>
    );
};

export default Header; 