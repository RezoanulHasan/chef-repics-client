
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import HOME from './Component/HOME/HOME';

import Error from './Component/Error/Error';
import Register from './Component/Register/Register';
import AuthProvider from './Component/providers/AuthProvider';
import Login from './Component/Login/Login';
import PrivateRoute from './privetroutes/PrivateRoute';
import Terms from './Component/Terms/Terms';

import Blog from './Component/Blog/Blog';
import Sef from "./Component/Card/Sef/Sef";
import Recipe from './Component/Card/Recipe/Recipe';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <HOME></HOME>,
        loader: () => fetch ('https://y-teal-seven.vercel.app/datas'),
      },

      {
        path: "datas/:id",
        element:<PrivateRoute><Recipe></Recipe> </PrivateRoute> ,
        loader: ({params}) =>fetch(`https://y-teal-seven.vercel.app/datas/${params.id}`),
      },

      {
        path:"recipe",
        element:<PrivateRoute><Recipe></Recipe> </PrivateRoute> ,
      },


	  {
        path: "register",
        element: <Register></Register>
      },
	  
      {
        path: "login",
        element: <Login></Login>,
      },

      {
        path: "terms",
        element:<Terms></Terms> ,
      },
      {
        path: "blog",
        element:<Blog></Blog>,
      },

      {
        path: "sef",
        element:<Sef></Sef>,
      },

    ],
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>

   
  </React.StrictMode>,
)

