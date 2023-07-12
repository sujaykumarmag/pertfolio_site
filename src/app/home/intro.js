"use client";
import React from "react";
import Image from 'next/image';
import Links from "./links";
function Intro() {
  return (
    <section className="bg-white py-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-0">
        <div className="flex items-center justify-center md:justify-center">
          <div className="w-84 h-84">
            <img src="/assets/profile.jpeg" alt="Profile Image" width={400} height={256} />
            
          </div>
        </div>
        <div className="flex flex-col justify-center p-3">
          <h2 className="text-3xl font-bold mb-6 p-4">SUJAYKUMAR REDDY M</h2>
          <h2 className="mb-6 p-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fringilla turpis vel leo condimentum malesuada.
            Morbi lobortis euismod leo, id venenatis nibh fringilla id. Nulla facilisi. Integer dignissim tincidunt
            tortor vel cursus. Aliquam erat volutpat. Nam dictum dignissim sem, nec lobortis mauris suscipit a. Nullam
            vitae justo id nisl laoreet aliquam in sed justo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fringilla turpis vel leo condimentum malesuada.
            Morbi lobortis euismod leo, id venenatis nibh fringilla id. Nulla facilisi. Integer dignissim tincidunt
            tortor vel cursus. Aliquam erat volutpat. Nam dictum dignissim sem, nec lobortis mauris suscipit a. Nullam
            vitae justo id nisl laoreet aliquam in sed justo.
            
          </h2>

          

       
        </div>
        <div className="font-bold text-center text-gray-500 p-8 ">Currently Pursuing Bachelors at my Final Year</div>
        <div className=" justify-center p-4" ><Links /></div>
      </div>
    </section>
  );
}

export default Intro;
