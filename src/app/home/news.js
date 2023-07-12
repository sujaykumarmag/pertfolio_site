"use client";

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import newsData from './news-content.json';


function NewsSection() {
  return (
    <section className="py-10 bg-white text-black p-7 justify-content-center">
      <h2 className="text-3xl font-bold mb-6 ml-2 md:ml-40 text-left lg:text-left md:mb-8">Latest News</h2>

      <div className="container mx-auto text-center">
        <div className="max-h-80 overflow-y-auto">
          <div className="space-y-6">
            {newsData.map((newsItem, index) => (
              <div key={index} className="border-b pb-4">
                <li className="text-gray-700">{newsItem.description}
                  <a href="#" className="text-blue-500 hover:underline mt-2 p-2">
                    Read More
                  </a>
                </li>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default NewsSection;