"use client";

import { Brands } from "../../components/main/brands/brands";
import React, { useState, useEffect } from "react";

import ContextLayout from "../../layouts/ContextLayout";

const Index = () => {
    const [isMobile, setIsMobile] = useState(false);
    const [isMobileComplete, setIsMobileComplete] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 600);
            setIsMobileComplete(true);
        };

        // Set isMobile at the initial load
        handleResize();

        // Update isMobile whenever the window is resized
        window.addEventListener('resize', handleResize);

        // Cleanup the event listener on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const [selectedTags, setSelectedTags] = useState<string[]>([]);

    const handleTagClick = (tag: string) => {
        if (selectedTags.includes(tag)) {
            setSelectedTags(selectedTags.filter((t) => t !== tag));
        } else {
            setSelectedTags([...selectedTags, tag]);
        }
    };

    const filteredBrands = Brands.filter((brand) => {
        if (selectedTags.length === 0) {
            return true;
        }
        return brand.categories.some((tag) => selectedTags.includes(tag));
    });

    const BrandBoxesEmpty = () => {
        return (
            <div className="w-1/4 bg-white p-2 shadow rounded-lg ">

            </div>
        )
    }

    const BrandBoxes = () => {
        if (!isMobileComplete) {
            return null;
        }
        return (
            <div className="w-1/4 bg-white p-2 shadow rounded-lg ">
                <h2 className="text-xl font-bold mb-4">Categories</h2>
                {Brands.flatMap((brand) => brand.categories).filter((tag, index, self) => self.indexOf(tag) === index).map((tag) => (
                    <div key={tag} className="flex items-center ml-6">
                        <input
                            type="checkbox"
                            id={tag}
                            className="mr-2"
                            checked={selectedTags.includes(tag)}
                            onChange={() => handleTagClick(tag)}
                        />
                        <label htmlFor={tag} className={`text-lg ${selectedTags.includes(tag) ? "font-bold" : ""}`}>
                            {tag}
                        </label>
                    </div>
                ))}
            </div>
        )
    }

    const BrandBoxesMobile = () => {
        if (!isMobileComplete) {
            return null;
        }
        return (
            <div className="w-1/4 bg-white p-2 shadow rounded-lg ">
                <h2 className="text-base font-bold mb-4">Categories</h2>
                {Brands.flatMap((brand) => brand.categories).filter((tag, index, self) => self.indexOf(tag) === index).map((tag) => (
                    <div key={tag} className="flex items-center">

                        <button
                            className={`text-sm ${selectedTags.includes(tag) ? "font-bold" : ""}`}
                            onClick={() => handleTagClick(tag)}
                        >
                            {tag}
                        </button>
                    </div>
                ))}
            </div>
        )
    }

    return (
        <ContextLayout>
            <div className="flex flex-row h-screen m-2">
                {!isMobileComplete && <BrandBoxesEmpty />}
                {isMobileComplete && isMobile ? <BrandBoxesMobile /> : <BrandBoxes />}
                <div className="w-3/4">
                    {filteredBrands.map((brand, index) => (
                        <div key={index} className="bg-white p-4 shadow rounded-lg m-4 opacity-90">
                            <div className="flex justify-between items-center">
                                <div>
                                    <img
                                        src={brand.logo}
                                        alt={brand.name}
                                        className="w-16 h-16 object-cover rounded-full"
                                    />
                                </div>
                                <div>
                                    <p className="text-xl font-bold text-right px-2">
                                        <a href={brand.link} target="_blank" rel="noopener noreferrer">{brand.name}</a>
                                    </p>
                                    <p className="text-sm text-right px-2">{brand.description}</p>
                                </div>
                            </div>
                            <div className="mt-4 flex flex-wrap gap-2">
                                {brand.categories.map((tag, index) => (
                                    <span
                                        key={index}
                                        className="bg-gray-200 text-black-600 text-xs px-2 py-1 mr-2"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </ContextLayout>
    );
};


export default Index;