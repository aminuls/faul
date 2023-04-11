import React from "react";
import { useLoaderData, useParams } from "react-router-dom";

const Details = () => {
   const details = useLoaderData();
   const { detailsId } = useParams();
   const single_details = details && details?.find((det) => det.id == detailsId);
   const { id, title, img, jod_title, phone } = single_details;
   console.log(single_details);
   return (
      <div>
         <h2>Jod Details</h2>
         <div>
            <div>
               <h1>{id}</h1>
               <h1>{title}</h1>
               <h1>{phone}</h1>
               <h1>{jod_title}</h1>
               <img src={img} alt="" />
            </div>
            <div></div>
         </div>
      </div>
   );
};

export default Details;
