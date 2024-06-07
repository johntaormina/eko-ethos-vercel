"use client";
import Link from "next/link";
import React from "react";

import { useState } from "react";

const TikTokLink = () => {
  return (
    <Link href="https://www.tiktok.com/@ekokelsie" passHref className="px-2">
      <span className="[&>svg]:h-5 [&>svg]:w-5">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 448 512"
        >
          <path d="M448 209.9a210.1 210.1 0 0 1 -122.8-39.3V349.4A162.6 162.6 0 1 1 185 188.3V278.2a74.6 74.6 0 1 0 52.2 71.2V0l88 0a121.2 121.2 0 0 0 1.9 22.2h0A122.2 122.2 0 0 0 381 102.4a121.4 121.4 0 0 0 67 20.1z" />
        </svg>
      </span>
    </Link>
  );
};

const InstagramLink = () => {
  return (
    <Link href="https://www.instagram.com/ekokelsie" passHref className="px-2">
      <span className="[&>svg]:h-5 [&>svg]:w-5">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 448 512"
        >
          <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
        </svg>
      </span>
    </Link>
  );
};

export const HeaderBlank = () => {
  return (
    <header className="grid grid-cols-2 items-center bg-white p-4">
      <div id="left-header">
        <p className="text-2xl font-bold">EKO ETHOS</p>
      </div>
      <div id="center-header" className="text-center"></div>
    </header>
  );
};

export const HeaderPhone = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="grid grid-cols-2 items-center bg-fffefa p-4 z-20">
      <div id="phone-left-header">
        <Link href="/" passHref>
          <span className="text-2xl font-bold">EKO ETHOS</span>
        </Link>
      </div>
      <div id="phone-right-header" className="text-center">
        <div className="relative float-right">
          <div
            className="w-6 h-6 flex flex-col justify-between cursor-pointer"
            onClick={toggleMenu}
          >
            <span
              className={`w-full h-0.5 bg-black rounded-full transition-all duration-300 ${isOpen ? "transform rotate-45 w-6 translate-y-[0.68rem]" : ""
                }`}
            ></span>
            <span
              className={`w-full h-0.5 bg-black rounded-full transition-all duration-300 ${isOpen ? "hidden" : ""
                }`}
            ></span>
            <span
              className={`w-full h-0.5 bg-black rounded-full transition-all duration-300 ${isOpen ? "transform -rotate-45 w-6 -translate-y-[0.68rem]" : ""
                }`}
            ></span>
          </div>
          {isOpen && (
            <div className="absolute top-12 right-0 bg-white p-4 shadow z-30">
              <Link href="/about" passHref>
                <span className="block my-2 cursor-pointer">About</span>
              </Link>
              <Link href="/contact" passHref>
                <span className="block my-2 cursor-pointer">Contact</span>
              </Link>
              <Link href="/lifestyle" passHref>
                <span className="block my-2 cursor-pointer">Lifestyle</span>
              </Link>
              <Link href="/learn" passHref>
                <span className="block my-2 cursor-pointer">Learn</span>
              </Link>
              <Link href="/brands" passHref>
                <span className="block my-2 cursor-pointer">Brands</span>
              </Link>
              <Link href="/spotlight" passHref>
                <span className="block my-2 cursor-pointer">Spotlight</span>
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export const Header = () => {
  return (
    <header className="grid grid-cols-3 items-center bg-white p-4">
      <div id="left-header">
        <Link href="/" passHref>
          <span className="text-2xl font-bold">EKO ETHOS</span>
        </Link>
      </div>
      <div id="center-header" className="text-center">
        <Link href="/about" passHref>
          <span className="mx-2 cursor-pointer">About</span>
        </Link>
        <Link href="/contact" passHref>
          <span className="mx-2 cursor-pointer">Contact</span>
        </Link>
        <Link href="/lifestyle" passHref>
          <span className="mx-2 cursor-pointer">Lifestyle</span>
        </Link>
        <Link href="/learn" passHref>
          <span className="mx-2 cursor-pointer">Learn</span>
        </Link>
        <Link href="/brands" passHref>
          <span className="mx-2 cursor-pointer">Brands</span>
        </Link>
        <Link href="/spotlight" passHref>
          <span className="mx-2 cursor-pointer">Spotlight</span>
        </Link>
      </div>
      <div className="flex justify-end items-center space-x-4" id="right-header">
        <TikTokLink />
        <InstagramLink />
      </div>
    </header>
  );
};
