"use client";
import { useEffect, useState } from "react";
import Footer from "../footer";
import Header from "../header";
import contentData from "./sdlc-content.json";
import dataScience from "./ds-content.json";



export default function Projects() {
    const [videoClass, setVideoClass] = useState('');

    useEffect(() => {
        function handleResize() {
            const width = window.innerWidth;

            if (width >= 768) {
                setVideoClass('w-1/3');
            } else {
                setVideoClass('w-full');
            }
        }

        handleResize();

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);


    return (
        <>
            <Header />

            <div className="flex flex-col bg-white min-h-screen">
                <main className="flex-grow ">
                    <p className=" p-4 mx-auto text-center italic text-gray-400">Note : All Projects are Solo based projects not a Group Project</p>


                    <div className="p-4 mx-auto ">
                        <div className="text-lg flex font-bold mb-2 text-center p-8"><h3 >SDLC Based Projects</h3></div>

                        <div className="bg-white p-4">
                            {contentData.map((content, index) => (
                                <div key={index} className="bg-white p-4">
                                    <h3 className="text-lg font-bold mb-2">{content.title}</h3>
                                    <p className="text-gray-700">{content.content}</p>
                                    <a className="text-blue-500 hover:underline" href={content.link}>Code </a>
                                    {content.report && (
                                        <a className="text-blue-500 hover:underline ml-4" href={content.report}>View Report</a>
                                    )}
                                    {content.video && (
                                        <div className="mt-2">
                                            <video className={`mt-2 ${videoClass}`} src={content.video} controls />
                                        </div>



                                    )}
                                    <div className="flex flex-wrap gap-2 mt-4">
                                        {content.tags.map((tag, tagIndex) => (
                                            <div className="badge badge-outline" key={tagIndex}>{tag}</div>
                                        ))}
                                    </div>
                                </div>
                            ))}


                        </div>

                        <div className="text-lg flex font-bold mb-2 text-center p-8"><h3 >Machine Learning Based Projects</h3></div>
                        <div className="bg-white p-4">

                            {dataScience.map((item, index) => (
                                <div key={index} className="bg-white p-4 mb-4">
                                    <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                                    <p className="text-gray-700">{item.content}</p>
                                    {item.link && (
                                        <a className="text-blue-500 hover:underline" href={item.link}>GitHub Link</a>
                                    )}
                                    {item.report && (
                                        <a className="text-blue-500 hover:underline ml-4" href={item.report}>View Report</a>
                                    )}
                                </div>
                            ))}



                        </div>
                    </div>
                </main>





                <Footer />

            </div>
        </>
    );
}
