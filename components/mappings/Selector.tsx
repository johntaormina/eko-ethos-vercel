import React, { useState } from "react";

// Interface for city data
interface City {
    name: string;
    storeTypes: string[];
}

// Interface for filter selections
export interface FilterSelections {
    city?: string;
    storeType?: string;
}

interface SelectorProps {
    selections: FilterSelections;
    onSelectionChange: (newSelections: FilterSelections) => void;
}

const SidebarFilterSelector: React.FC<SelectorProps> = ({ selections, onSelectionChange }) => {
    // State to store selections
    const handleSelectionChange = (newSelections: FilterSelections) => {
        onSelectionChange(newSelections);
    };

    // Available cities (replace with your actual data)
    const cities: City[] = [
        { name: "New York", storeTypes: ["Clothing", "Electronics", "Books"] },
        { name: "Los Angeles", storeTypes: ["Electronics", "Sports", "Toys"] },
        { name: "Chicago", storeTypes: ["Furniture", "Grocery", "Home Improvement"] },
    ];

    // Available store types for the selected city
    const getStoreTypes = (): string[] => {
        const selectedCity = selections.city;
        if (!selectedCity) return [];
        const cityData = cities.find((city) => city.name === selectedCity);
        return cityData?.storeTypes || [];
    };

    // Handle city selection change
    const handleCityChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        handleSelectionChange({ ...selections, city: event.target.value, storeType: undefined });
    };

    // Handle store type selection change
    const handleStoreTypeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        handleSelectionChange({ ...selections, storeType: event.target.value });
    };

    return (
        <div className="sidebar-filter-selector">
            <h2>Filter by City & Store Type</h2>
            <select value={selections.city || ""} onChange={handleCityChange}>
                <option value="">Select City</option>
                {cities.map((city) => (
                    <option key={city.name} value={city.name}>
                        {city.name}
                    </option>
                ))}
            </select>
            {selections.city && (
                <select value={selections.storeType || ""} onChange={handleStoreTypeChange}>
                    <option value="">Select Store Type</option>
                    {getStoreTypes().map((type) => (
                        <option key={type} value={type}>
                            {type}
                        </option>
                    ))}
                </select>
            )}
            {/* You can use selections.city and selections.storeType here to return the data */}
        </div>
    );
};

export default SidebarFilterSelector;