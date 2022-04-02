import React from 'react'
import Image from 'next/image'
import { useState,useEffect } from 'react';

function CarsPage() {
  const [car, setCar] = useState()
  useEffect(() => {
    fetch("https://backend.bhalogari.com/api/cars/choose-by-maker/?format=json&maker_name")
    .then((response) => response.json())
   .then((data) => setCar(data));
   }, []);

   console.log(car)

  return (
    <div style={{display:"flex",flexWrap: "wrap",justifyContent:"center"}} >
      {
        car?.results?.map((newcar)=>(
          <div key={newcar.car_id} style={{display:"flex",justifyContent:"center",margin:"10px",flexDirection:"column"}} className="card">
            <img src={newcar.images.image_url} style={{height:"550px"}}/>

            <div className="container">
              <h4><b>{newcar.model_name.model_name}</b></h4> 
              <p>{newcar.car_body_type.body_name}</p> 
              <h4><b>{newcar.model_name.model_id}</b></h4> 
           </div>
          </div>

        ))
      }
    </div>
  )
};

export default CarsPage