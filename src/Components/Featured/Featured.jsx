import React from "react";
import { MapPinIcon, CurrencyDollarIcon } from "@heroicons/react/24/solid";

import { Link } from "react-router-dom";

const Featured = ({ featured }) => {
   return (
      <div className="md:grid-cols-2 lg:grid grid-cols-1 gap-6 m-16 border-green-600 ">
         {featured?.map((sets) => {
            const { title, companyName, img, address, salary, id } = sets;

            return (
               <div key={id} className="flex justify-center w-full ">
                  <div className="border-2 border-white p-6 w-full drop-shadow-md">
                     <img className="w-40" src={img} alt="" />
                     <h2 className="text-2xl font-semibold m-0">{title}</h2>
                     <p>
                        <small>{companyName}</small>
                     </p>
                     <div className="space-x-3">
                        <button className="bg-indigo-400 px-4 rounded-md text-white border-3-emerald-950">Remote</button>
                        <button className="bg-indigo-400 px-4 rounded-md text-white border-3-emerald-950">Full Time</button>
                     </div>

                     <div className="flex space-x-4">
                        <p className="text-gray-500">
                           <small className="flex items-center">
                              {" "}
                              <MapPinIcon className="h-6 w-5 " />
                              {address}
                           </small>
                        </p>
                        <p className="text-gray-500">
                           <small className="flex items-center">
                              <CurrencyDollarIcon className="h-6 w-5 " />
                              Salary: {salary}
                           </small>
                        </p>
                     </div>

                     <Link to={`/details/${id}`}>
                        {" "}
                        <button className="bg-indigo-400 text-white px-7 py-2 rounded-md mt-4">View Details</button>
                     </Link>
                  </div>
               </div>
            );
         })}
      </div>
   );
};

export default Featured;
