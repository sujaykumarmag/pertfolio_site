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
            <img src="/assets/profile.jpeg" alt="Profile Image" width={420} height={256} />
            
          </div>
        </div>
        <div className="flex flex-col justify-center p-3">
          <h2 className="text-3xl font-bold mb-6 p-4">SUJAYKUMAR REDDY M</h2>
          <h2 className="mb-6 p-4">
          A passionate researcher in Machine Learning and also play my role as a Software Developer. In terms of my academic background, I am pursuing my B.Tech Degree in Vellore Institute of Technology-Vellore, where I was able to gain a solid foundation in both theoretical and practical aspects of Machine Learning. I have also had the opportunity to participate in several research projects which have allowed me to gain hands-on experience in developing and implementing cutting-edge ML algorithms.

          Hit me up for exciting research or software dev opportunities, or simply to exchange ideas. 
            
          </h2>

          

       
        </div>
        <div className="font-bold text-center text-gray-500 p-8 ">Currently Pursuing Bachelors at my Final Year</div>
        <div className=" justify-center p-4" ><Links /></div>
      </div>
    </section>
  );
}

export default Intro;
