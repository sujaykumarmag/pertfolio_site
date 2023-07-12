"use client";

import React, { useEffect, useRef } from 'react';


export default function Bio() {


    const iframeRef = useRef(null);

    useEffect(() => {
        const setIframeHeight = () => {
            const iframe = iframeRef.current;
            const windowHeight = window.innerHeight || document.documentElement.clientHeight;
            const iframeHeight = windowHeight - iframe.getBoundingClientRect().top;
            iframe.style.height = `${3.8 * iframeHeight}px`;
        };

        setIframeHeight();

        window.addEventListener('resize', setIframeHeight);

        return () => {
            window.removeEventListener('resize', setIframeHeight);
        };
    }, []);

    return (
        <div className="bg-white text-black">
            <div className="w-full lg:w-2/3 mx-auto p-5 lg:p-8">
                <h2 className="text-2xl lg:text-3xl text-left mb-4">Bio</h2>
                <p className="text-lg lg:text-xl text-justify">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fringilla turpis vel leo condimentum malesuada.
                    Morbi lobortis euismod leo, id venenatis nibh fringilla id. Nulla facilisi. Integer dignissim tincidunt
                    tortor vel cursus. Aliquam erat volutpat. Nam dictum dignissim sem, nec lobortis mauris suscipit a. Nullam
                    vitae justo id nisl laoreet aliquam in sed justo.


                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fringilla turpis vel leo condimentum malesuada.
                    Morbi lobortis euismod leo, id venenatis nibh fringilla id. Nulla facilisi. Integer dignissim tincidunt
                    tortor vel cursus. Aliquam erat volutpat. Nam dictum dignissim sem, nec lobortis mauris suscipit a. Nullam
                    vitae justo id nisl laoreet aliquam in sed justo.
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
    )
}

