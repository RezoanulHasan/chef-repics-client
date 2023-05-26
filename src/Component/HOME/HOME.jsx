import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Sef from '../Card/Sef/Sef';

import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"

import  "./Style.css";

const HOME = () => {
  const datas = useLoaderData();

  const carousel = (slider) => {
    const z = 300;
    function rotate() {
      const deg = 360 * slider.track.details.progress
      slider.container.style.transform = `translateZ(-${z}px) rotateY(${-deg}deg)`
    }
    slider.on("created", () => {
      const deg = 360 / slider.slides.length
      slider.slides.forEach((element, idx) => {
        element.style.transform = `rotateY(${deg * idx}deg) translateZ(${z}px)`
      })
      rotate()
    })
    slider.on("detailsChanged", rotate)
  }

  const [sliderRef] = useKeenSlider(
    {
      loop: true,
      selector: ".carousel__cell",
      renderMode: "custom",
      mode: "free-snap",
    },
    [carousel]
  )

  return (

    <>
<div className='mt-20   lg:mt-5 m-5'>
  <div className="relative h-screen">
    <img className='absolute inset-0 object-cover object-center w-full h-full' src="https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="Your image description"/>
    <div className="absolute inset-0 bg-black opacity-50"></div>
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="text-white text-center">
        <h1 className="text-4xl text-pink-100 
        md:text-6xl font-bold mb-4">Welcome to  ! Chef Recipe</h1>

        <marquee behavior="scroll" scrollamount="10" direction=""  >
 <h1 className='text-xl'> Explore world best American Chef with there best Recipe </h1>
</marquee>
     
      </div>
    </div>
  </div>
</div>

<div className="bg-cover bg-center bg-fixed" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1495461199391-8c39ab674295?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Y29va3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60")' }}>

<div className='m-5 mb-10'>
<div className='flex m-5  flex-col justify-around   lg:flex-row  gap-8 '>
<div className='text-center font-bold text-3xl mb-5 mt-10 text-accent '>
<div className="card w-96 bg-base-100 shadow-xl image-full">
  <figure><img src="https://images.unsplash.com/photo-1460380410874-537ecece3984?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE4fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60" alt="img" /></figure>
  <div className="card-body">
<h1  className='mb-5 text-red-300 ' > Poem Chef </h1>
 <p>The chef in the kitchen, with skills so divine,</p> 
 <p>Whips up a dish that's simply divine,</p> 
 <p>A dash of spice, a sprinkle of love,</p> 
 <p>Turns food into art, like a gift from above.</p> 

 <p>With apron tied and sleeves rolled high,</p> 
 <p>The chef brings flavors that tantalize,</p> 
 <p>Aromas that waft and flavors that dance,</p> 
 <p>Each bite a journey, an epic romance.</p> 


</div>
  </div>
</div>






<div className='text-center font-bold text-3xl mb-5 mt-10 text-accent '>
<div className="card w-96 bg-base-100 shadow-xl image-full">
  <figure><img src="https://images.unsplash.com/photo-1460380410874-537ecece3984?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE4fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60" alt="img" /></figure>
  <div className="card-body">
  <h1  className='mb-5 text-red-300 ' > Poem  Cooking </h1>
    <p>
In the kitchen, pots and pans</p>
<p>Aromas swirl, a tempting dance</p>
<p>Ingredients, a palette of hues</p>
<p>A chef's canvas, to choose and fuse
</p>  
 <p>
A pinch of salt, a dash of spice</p>
<p>The alchemy of heat, a tasty vice</p>
<p>A sizzling symphony, a melody of sound</p>
<p>Cooking, an art that's always around.</p>
</div>
  </div>
</div>


</div>
</div>



<h1 className='text-center font-bold text-3xl mb-5 mt-10 text-black  '>  Chef Section </h1>
<p  className='mb-20  text-xl text-yellow-400 text-center  '> we have best and experience's  Chef in the world   </p>
   <div className="mt-10 mb-10">
      <div className='wrapper'>
        <div className='scene'>
          <div className='carousel keen-slider' ref={sliderRef}>
          <div className="carousel__cell number-slide1">
    <img src= "https://images.unsplash.com/photo-1654922207993-2952fec328ae?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2hlZnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="Slide 1" />
  </div>
  <div className="carousel__cell number-slide2">
    <img src="https://plus.unsplash.com/premium_photo-1658506988095-885269f2b56e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2hlZnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="Slide 2" />
  </div>
  <div className="carousel__cell number-slide3">
    <img src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Y2hlZnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="Slide 3" />
  </div>
  <div className="carousel__cell number-slide4">
    <img src="https://images.unsplash.com/photo-1572715376701-98568319fd0b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y2hlZnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="Slide 4" />
  </div>
  <div className="carousel__cell number-slide5">
    <img src="https://images.unsplash.com/photo-1556940211-ea1d97e04458?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGNoZWZ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="Slide 5" />
  </div>
  <div className="carousel__cell number-slide6">
    <img src="https://images.unsplash.com/photo-1577219492769-b63a779fac28?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGNoZWZ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="Slide 6" />
  </div>

          
          </div>
        </div>
      </div>

      </div>
      </div>
      <div className='mt-15'  > 
      <div className="bg-cover bg-center bg-fixed" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1495461199391-8c39ab674295?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Y29va3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60")' }}>
      <h1 className='text-center font-bold text-2xl  mt-15 text-red-600 mb-20  hover:text-black  '> </h1>
        <div className='grid lg:grid-cols-3 md:grid-cols-2 mx-20 mt-10 grid-cols gap-5 '>
          {
            datas.map(data => <Sef key={data.id} data={data} />)
          }
        </div>
      </div>
      </div>

      


      <div className="bg-cover bg-center bg-fixed" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1495461199391-8c39ab674295?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Y29va3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60")' }}>
      <h1 className='text-center font-bold text-3xl mb-5 mt-10  text-black hover:text-red-600  '>Our Chef Recipe-Book    </h1>
<div className="flex justify-center items-center h-screen">
      <div className="h-full carousel carousel-vertical rounded-box">
  <div className="carousel-item h-full">
    <img className='object-cover w-full h-56 mb-6 rounded shadow-lg md:h-64 xl:h-80'   src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThitGLOFB_4fXKrIQheNBO8kFxkr5X3dU5LJqlMUeGLWy44CYqr_OyB1ZuSDQ5_m4rdyY&usqp=CAU" />
  </div> 
  <div className="carousel-item h-full">
    <img className='object-cover w-full h-56 mb-6 rounded shadow-lg md:h-64 xl:h-80' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQ_z00UyJT4gK-LeUMfeXErfesO6Z0Cu9f7aiT8SSa2Le_Ezl5YQ_m0APqfZL58T9o4bw&usqp=CAU" />
  </div> 
  <div className="carousel-item h-full">
    <img className='object-cover w-full h-56 mb-6 rounded shadow-lg md:h-64 xl:h-80'  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRPa2XhKt2_J_7Ra9IVv7P82McaSDNxXCU-eoynmZMMTCiVtNlKc9arNmMfTVY4SbfaQQ&usqp=CAU" />
  </div> 
  <div className="carousel-item h-full">
    <img className='object-cover w-full h-56 mb-6 rounded shadow-lg md:h-64 xl:h-80'   src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWb7csCpGf1QvGH8Vf4vKITcMymriVX47m03KwjE3Im-VL3Df3_an0vLtB3u5Arj0TzxE&usqp=CAU" />
  </div> 
  <div className="carousel-item h-full">
    <img className='object-cover w-full h-56 mb-6 rounded shadow-lg md:h-64 xl:h-80'   src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8ODU1ScbzGBS7tmwDjW0lq-IJVZFwAFtE9alZToNBl42JuhD_lNFgrvukM9VU98kpPzs&usqp=CAU" />
  </div> 
  <div className="carousel-item h-full">
    <img  className='object-cover w-full h-56 mb-6 rounded shadow-lg md:h-64 xl:h-80'  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFKETx-SzISQDIVmOBiC9o5L_5IhJs8Jc4pEgD5wUZ4A2qWTW3ZjygWpEDWSIlsYrjLzc&usqp=CAU" />
  </div> 
  <div className="carousel-item h-full">
    <img className='object-cover w-full h-56 mb-6 rounded shadow-lg md:h-64 xl:h-80'  src="https://assets.bonappetit.com/photos/5dbc2bf7323ba70008b61c3f/1:1/w_1125,h_1125,c_limit/1119-Cookbook-Gumbo-Cover-169.jpg" />
  </div>
</div>

</div>

</div>


      <h1 className='text-center font-bold text-3xl mb-5 mt-10 text-accent hover:text-black  '>Our Awards </h1>

<div  className='mx-20 grid lg:grid-cols-5 md:grid-cols-3  grid-cols gap-5  '  >

<div className="card w-full bg-base-100 shadow-xl">
  <figure><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToPDszr1ttfrmvaxG3cR6BcHrkhTOYaZlh9JzpWpLzOk0c-rwJH6vchh3DeYGR-5sYcU4&usqp=CAU" alt="Shoes" /></figure>
  
</div>

<div className="card w-full bg-base-100 shadow-2xl">
  <figure><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYBVgd2OeWjLyW5x3Tz5RgO11tQj2yy_65KjIejpsKaEfi0yKW8_mkx3pvYP7HmK1eVu0&usqp=CAU" alt="image" /></figure>
  
</div>

<div className="card w-full bg-base-100 shadow-2xl">
  <figure><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRR3AyCXRX8-yOoFVAeT1yVNmFZfpgRdv_o254577pxKLjRADunfHEZ_m1lOW0Zu1uHqWo&usqp=CAU" alt="image" /></figure>
 
</div>
<div className="card w-full bg-base-100 shadow-2xl">
  <figure><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXwkKvmI9dqvm1zZVWuU-FVYtXfIqzIIkSmsUNHXBr8vtGJu_Eh8_8CAVkxCXf1AULJhU&usqp=CAU" alt="image" /></figure>
 
</div>
<div className="card w-full bg-base-100 shadow-2xl">
  <figure><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSp09WApKuzSSh6HsXERoJEu3MHQaksjc6qASCRSF-VVuGoLlq3n7idoeOyX2oQ_DIIDnQ&usqp=CAU" alt="image" /></figure>
 
</div>


</div>



 
    </>
  );
};
export default HOME;
