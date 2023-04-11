import React, { useEffect, useState } from "react";
import JobList from "../JobList/JobList";
import { useLoaderData } from "react-router-dom";
import Featured from "../Featured/Featured";

const Banner = () => {
   const data = useLoaderData();
   const [featureds, setFeatured] = useState([]);

   useEffect(() => {
      fetch("featured.json")
         .then((res) => res.json())
         .then((data) => setFeatured(data));
   }, []);

   return (
      <main>
         <div className="flex items-center p-5 m-8 bg-slate-100">
            <div className="p-10 mx-10">
               <h1 className="text-7xl font-semibold">
                  One Step Closer To Your <span className="text-indigo-500">Dream Job</span>
               </h1>
               <p>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
               <button className="bg-indigo-500 px-8 p-3 rounded-lg mt-5 text-white">Get Started</button>
            </div>
            <div className="p-10">
               <img src="https://img.freepik.com/free-vector/recruit-agent-analyzing-candidates_74855-4565.jpg?w=740&t=st=1681108036~exp=1681108636~hmac=dddb9bae7299b9e986982062a02a8e2afec204c7189b45b35500f612cf545cdd" alt="" />
            </div>
         </div>
         <div className="text-center p-15 m-14">
            <h2 className="text-3xl font-bold">Job Category List</h2>
            <p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, debitis.</p>
         </div>
         <div className="flex justify-center gap-7 ">
            {data.map((list) => (
               <JobList key={list.id} list={list}></JobList>
            ))}
         </div>
         <div className="text-center my-20">
            <h1 className="text-5xl font-bold mb-5">Featured Jobs</h1>
            <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
         </div>
         <div>
            <Featured featured={featureds}></Featured>
         </div>
      </main>
   );
};

export default Banner;
