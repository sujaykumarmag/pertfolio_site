"use client";

import React, { useEffect, useRef } from 'react';
import Header from '../header';
import Footer from '../footer';


export default function Bio() {


    const iframeRef = useRef(null);

    useEffect(() => {
        const setIframeHeight = () => {
            const iframe = iframeRef.current;
            const windowHeight = window.innerHeight || document.documentElement.clientHeight;
            const iframeHeight = windowHeight - iframe.getBoundingClientRect().top;
            iframe.style.height = `${4.4 * iframeHeight}px`;
        };

        setIframeHeight();

        window.addEventListener('resize', setIframeHeight);

        return () => {
            window.removeEventListener('resize', setIframeHeight);
        };
    }, []);

    return (
        <>
        <Header />

       
        <div className="bg-white text-black">
            <div className="w-full lg:w-2/3 mx-auto p-5 lg:p-8">
                <h2 className="text-2xl lg:text-3xl text-left mb-4">Research Statement</h2>
                <p className="text-lg lg:text-l text-justify">
                My research works in Machine Learning have given me valuable insights into the branch of Machine Learning, and the problem Solutions has assisted me with valuable experience in using optimization techniques in ML and solving high-level problems using ML and Big Data. I have exposed myself to a variety of responsibilities and challenges which we encounter in making an ML model and have been learning constantly the use cases and challenges to provide a solution using Machine Learning. The one thing which I have learned as a DataScience student is how to make the data easily catchable for the Machine Learning Algorithms to capture interactions and find effective relationships. Technologies like Artificial Intelligence, Machines, and Deep Learning are the tools that help human to automate their daily life. These technologies can be used in vast areas such as Predictions, Internet-of- things, etc... which I would love to contribute my work weight as much as possible.

                </p>
            </div>


            <div className="w-full lg:w-2/3 mx-auto p-5 lg:p-8">
                <div className="text-left mb-4">
                    <p className="text-2xl lg:text-3xl">Curriculum Vitae</p>
                    <a className="text-1xl text-left text-blue-900 hover:underline" href="/assets/cv.pdf" target="_blank">
                        [PDF]
                    </a>
                </div>
                <div className="aspect-w-4 aspect-h-3 sm:aspect-w-16 sm:aspect-h-9">
                    <iframe
                        src="/assets/cv.pdf"
                        ref={iframeRef}
                        className="w-full h-full"
                        title="Embedded PDF"
                    ></iframe>
                </div>
            </div>





        </div>
        <Footer />
        </>
    )
}

