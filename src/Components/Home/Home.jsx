import React from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Featured from '../Featured/Featured';
import Statistics from '../Statistics/Statistics';


const Home = () => {
   return (
      <div>
         <Header></Header>
         <Outlet/>
       <Featured></Featured>
         <Footer></Footer>
      </div>
   );
};

export default Home;