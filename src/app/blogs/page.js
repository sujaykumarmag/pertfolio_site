"use client";
import { useEffect, useState } from "react";
import Footer from "../footer";
import Header from "../header";

export default function Blogs() {
    return (
        <>
            <Header />
            <div className="flex flex-col bg-white min-h-screen">
                <main className="flex-grow">
                    <div className="justify-center text-center p-10">
                        <h2 className="text-3xl font-bold mb-4">Still Working !!! </h2>
                    </div>
                </main>
                <Footer />
            </div>
        </>
    );
}


