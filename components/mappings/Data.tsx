import { LatLng } from "leaflet";

export interface Store {
    name: string;
    location: LatLng;
    address: string;
    description?: string;
}

export interface Positions {
    [key: string]: {
        location: LatLng;
        Composting: Store[];
        EWaste: Store[];
    };
}


export const mappingPositions: Positions = {
    Philadlephia: {
        location: new LatLng(39.9526, -75.1652),
        Composting: [
            {
                name: 'Moms Organic Market',
                location: new LatLng(39.950661, -75.158607),
                address: 'Mom’s Organic Market: 34 S 11th St, Philadelphia, PA 19107',
                description: `How: Please bring compost in a reusable bin (to dump loose) or in compostable bags. Plastic bags contaminate the waste stream and are not accepted.
  Accepted items: All food waste including eggshells, coffee grinds & plastics that say ‘compostable’ or ‘biodegradable,’ MOM’s reusable bags, plus any item from Naked Lunch (food containers, cups, napkins, and utensils)
  `
            },
        ],
        EWaste: [
            {
                name: 'Moms Organic Market',
                location: new LatLng(39.950661, -75.158607),
                address: 'Mom’s Organic Market: 34 S 11th St, Philadelphia, PA 19107',
                description: `Pop- up (when you hover over location): 
  Accepted items: Cell phones, tablets, chargers, and Alkaline Batteries ONLY.
  Best practices for recycling: Please erase any personal information, photos, and private data from old phones/tablets and remove cases. Please include chargers with cell phone/tablet; batteries - NO leaking or visibly corroded batteries may be collected. Most batteries indicate what type they are. Please use best judgement – if it is not clear or the language does not match the above, best to NOT place in the collection containers. Instead, take the batteries to your local transfer station.
  What happens to the waste: Cell phones/tablets are donated to those in high risk areas who may need quick access to 911.
  `
            },
        ]
    },
};