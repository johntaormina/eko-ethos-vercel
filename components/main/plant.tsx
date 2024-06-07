"use client";

import Image from "next/image";
import React, { useContext } from "react";

import { MobileContext } from "./mobilecontext";``

const MottoCenterText = ({ motto }: { motto: string }) => {
  const {isMobile, isMobileComplete} = useContext(MobileContext);

  if (!isMobileComplete) {
    return null;
  }

  return (
    <div className="absolute inset-0 flex items-center justify-center z-10 p mb-[20rem]">
      <div className="bg-[#fffefa] rounded-lg p-4 bg-opacity-95">
        <p className={`text-black ${isMobile ? 'text-3xl' : 'text-7xl'}`}>{motto}</p>
      </div>
    </div>
  );
};

export const Plant = ({ motto }: { motto?: string }) => {
  return (
    <div className="w-full h-full relative overflow-hidden -z-20">
      <div className="absolute inset-0 flex items-center justify-center">
        <Image
          src="/assets/plant-1.jpg"
          alt="plant"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
        />
        {motto && <MottoCenterText motto={motto} />}
      </div>
    </div>
  );
};