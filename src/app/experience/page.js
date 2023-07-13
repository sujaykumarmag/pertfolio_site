"use client";
import { useEffect, useState } from "react";
import Footer from "../footer";
import Header from "../header";

export default function Experience() {

    return (
        <>
            <Header />

            <div className="flex flex-col bg-white min-h-screen">
                <main className="flex-grow ">



                <div className="p-12 mx-auto ">
                        <div className="text-lg flex font-bold mb-2 text-center p-4"><h3 >Research Intern</h3></div>

                        <div className="bg-white p-4">
                        <p className="text-gray-700">
                            Advised by Prof Gopakumar G
                            <br />
                            May 2023 - July 2023
                            <br />
                            National Institute of Technology Calicut, India
                        </p>
                        <ul className="list-disc ml-6 text-gray-700">
                            <li>
                                One of the 14 selected candidates from 96 applicants for the Internship Provided by the NITIE, PM Gati-Shakti Scheme at NIT Calicut, Pragati on the problem statement of Forecasting the Electricity Demand in the Delhi region through ML applications.
                            </li>
                            <li>
                                As PM Gati Shakti introduces the Integration of Ministries, I have taken reports provided by different ministries which generate a dataset and used Time Series Forecasting including feature extraction, Ridge, Lasso Regression, etc., to create some Baseline models.
                            </li>
                            <li>
                                Future work will be continued in the aspects of Reinforcement Learning for Model Selection and also inclusion of many ministries which may lead to positive results.
                            </li>
                        </ul>

                        </div>
                        
                    </div>





                </main>

                <Footer />

            </div>
        </>
    );
}
