
import React from 'react';
import Header from './Component/Shared/Header/Header';
import { Outlet } from 'react-router-dom';
import Spinner from './Component/Spinner/Spinner';
import Footer from './Component/Shared/Footer/Footer';


const App = () => {
  return (
    <div>
<Header></Header>
<div>{navigation.state === 'loading' && <Spinner></Spinner> }</div>
<div className='min-h-[calc(100vh-136px)]'>
<Outlet></Outlet>
</div>
<Footer></Footer>
    </div>
  );
};

export default App;
