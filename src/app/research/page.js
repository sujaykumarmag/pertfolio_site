"use client";
import { useEffect, useState } from "react";
import Footer from "../footer";
import Header from "../header";
import citationData from "./research-content.json";


export default function Research() {

    return (
        <>
            <Header />

            <div className="flex flex-col bg-white min-h-screen">
                <main className="flex-grow ">


                    <div className="p-4 mx-auto ">
                        <div className="text-lg flex font-bold mb-2 text-center p-8"><h3 >Journal Papers</h3></div>
                        <div className="bg-white p-4">
                            {citationData.map((citation, index) => (
                                <li><p className="text-gray-700 p-4" key={index}>
                                    <span className="font-bold">{citation.authors}</span>,
                                    <span>{citation.additionalAuthors}</span>,
                                    ({citation.year})
                                    <span>{citation.title}</span>
                                    <em>{citation.journal}</em>,
                                    <span>{citation.volume}</span>,
                                    {citation.pageRange},
                                    <a className="hover:underline text-blue-700" href={citation.link}>
                                        <span>doi: {citation.doi}</span>
                                    </a>

                                </p></li>
                            ))}
                        </div>
                    </div>
                </main>





                <Footer />

            </div>
        </>
    );
}
