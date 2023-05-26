import React from 'react';
import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';

import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

import { AiFillLike, AiFillHeart,AiOutlineHourglass
} from "react-icons/ai";


const Recipe = () => {

    const [favorites, setFavorites] = useState([]);

   const handleFavoriteClick = (recipeName) => {
    if (!favorites.includes(recipeName)) {
      setFavorites([...favorites, recipeName]);
      toast.success(`${recipeName} added to favorites!`);
    } else {
      toast.info(`${recipeName} is already in favorites!`);
    }
  };
    const {id, chef_picture,chef_name,years_of_experience,likes,number_of_recipes,bio ,recipes} =useLoaderData() ;
    console.log(id);

    return (
        <>
 

<div className=" mt-20">
<div className=" m-5">
  <div className="card card-side  bg-base-100 shadow-2xl ">
  <LazyLoadImage 
         src={ chef_picture }  
         effect="blur"alt="picture" />

    <div className="card-body">
      <h2 className="card-title text-accent " >Name: {chef_name }</h2>
      <h2 className="card-title "> Exprience - {years_of_experience}  years</h2>
      <p className="mt-5  text-xl"> Exprience Bio:- {bio}</p>
      <div className="card-actions justify-end">

       <p className='text-accent '><AiFillLike></AiFillLike>{likes}.k</p>

       <p className=' text-accent'>< AiOutlineHourglass></AiOutlineHourglass>  rcp-{number_of_recipes}+</p>

       <p className='text-accent '><AiFillHeart></AiFillHeart>100.k</p>
      </div>
    </div>
  </div>
</div>


<h1 className='text-center font-bold text-3xl  mt-10 text-accent mb-9  hover:text-black  '>Recipe-Section  </h1>



<div className=" m-5">
<img src= "https://images.unsplash.com/photo-1498603054295-8198c516eedc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1004&q=80" className="w-full h-96 object-cover" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {recipes.map((recipe, index) => {
            const isFavorite = favorites.includes(recipe.recipe_name);

            return (
              <div key={index} className="card bg-base-100 shadow-2xl">
                <div className="card-body">
                  <h2 className="card-title text-accent">Recipe-name-*{recipe.recipe_name}*</h2>
                  <h3 className="card-title text-accent ">Cooking-method: </h3>
                  <p>{recipe.cooking_method}</p>
                  <h3 className="card-title text-accent ">Ingredients: </h3>
                  <p>{recipe.ingredients.join(", ")}</p>
                  <h3 className="card-title">
                 
                  <div className="rating">
  <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
  <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" checked />
  <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
  <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
  <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
</div>
                     </h3>
               
                  <div className="card-actions justify-end">
                    <button
                      className="btn  bg-black text-pink-400 mt-2"
                      onClick={() => handleFavoriteClick(recipe.recipe_name)}
                      disabled={isFavorite}
                    >
                      {isFavorite ? 'Favorited' : 'Favorite'}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    
      </div>
<ToastContainer ></ToastContainer>
</>  
    );
};

export default Recipe;