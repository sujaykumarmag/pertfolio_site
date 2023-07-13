"use client";
import { useEffect, useState } from "react";
import Footer from "../footer";
import Header from "../header";

export default function About() {
    return (
        <>
            <Header />

            <div className="flex flex-col bg-white min-h-screen">

                <main className="flex-grow">
                <div className="p-4 mx-auto ">
                        <div className="text-lg flex font-bold mb-2 text-center p-8"><h3 >About Me</h3></div>
                        <p className="text-gray-700 p-4">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fringilla turpis vel leo condimentum malesuada.
                                        Morbi lobortis euismod leo, id venenatis nibh fringilla id. Nulla facilisi. Integer dignissim tincidunt
                                        tortor vel cursus. Aliquam erat volutpat. Nam dictum dignissim sem, nec lobortis mauris suscipit a. Nullam
                                        vitae justo id nisl laoreet aliquam in sed justo.
                                    </p>

                </div>

       

                    
                </main>

                <Footer />

            </div>
        </>
    );
}
