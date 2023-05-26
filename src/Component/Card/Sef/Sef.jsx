import React from 'react';

import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { useNavigate } from 'react-router-dom';

import {AiFillLike , AiOutlineHourglass} from "react-icons/ai";
const Sef = ({data}) => {
    console.log(data)
const {id, chef_picture,chef_name,years_of_experience,likes,number_of_recipes }= data;
const navigate = useNavigate();
  
const handleNavigation = () =>{
   navigate(`/datas/${id}`);
}

    return (
        <div>
             <div className="card w-full h-full bg-base-100 shadow-2xl">
        
          
             <LazyLoadImage 
         className='object-cover w-full h-56 mb-6 rounded shadow-lg md:h-64 xl:h-80' src={ chef_picture }  
         effect="blur"alt="picture" />
  

  <div className="card-body">
  <h2 className="card-title   ">id:-{ id} </h2>
  <h2 className="card-title text-accent  ">Name: {chef_name }
    </h2>
    <h2 className="card-title ">Experience- {years_of_experience }years
    </h2>

      <div className='flex gap-3'>
    <p className=' '><AiFillLike></AiFillLike>{likes}.k</p>
    <p className=' '>< AiOutlineHourglass></AiOutlineHourglass>rcp{number_of_recipes}+</p>
    </div>

    <div className="card-actions justify-center">
  
    <button   onClick={handleNavigation}  className="btn  bg-black text-pink-400 mt-2">View Recipes</button>

    </div>
    </div>
    </div> </div>

    );
};

export default Sef;