export interface Brand {
    name: string;
    logo: string;
    description: string;
    link: string;
    categories: string[];
}

export const Brands: Brand[] = [
    {
        name: "Kosas",
        logo: "/assets/brands/kosas.png",
        description: "Clean, comfy & clinically tested makeup that improves the quality of bare skin. Kosas offers a wide range of products for a natural and radiant look.",
        link: "https://www.kosas.com",
        categories: ["makeup"],
    },
    {
        name: "ILIA",
        logo: "/assets/brands/ilia.png",
        description: "ILIA is a clean beauty brand that focuses on creating high-performance makeup products with natural and organic ingredients. Their products are cruelty-free and offer a wide range of shades and finishes.",
        link: "https://www.iliabeauty.com",
        categories: ["makeup"],
    },
    {
        name: "Kitsch",
        logo: "/assets/brands/kitsch.png",
        description: "Kitsch offers a range of skincare products that are designed to nourish and hydrate the skin. Their products are made with natural ingredients and are free from harmful chemicals.",
        link: "https://www.mykitsch.com",
        categories: ["skincare"],
    },
    {
        name: "Weleda",
        logo: "/assets/brands/weleda.png",
        description: "Weleda is a trusted brand that offers a wide range of skincare products made with natural and organic ingredients. Their products are known for their effectiveness and sustainability.",
        link: "https://www.weleda.com",
        categories: ["skincare"],
    },
    {
        name: "Avalon Organics",
        logo: "/assets/brands/avalon-organics.png",
        description: "Avalon Organics is a brand that specializes in hair care products made with organic and plant-based ingredients. Their products are free from harsh chemicals and are designed to promote healthy hair.",
        link: "https://www.avalonorganics.com",
        categories: ["hair care"],
    },
    {
        name: "Dr Bronzer’s",
        logo: "/assets/brands/dr-bronners.png",
        description: "Dr. Bronner's offers a range of body care products that are made with plant-based ingredients. Their products are cruelty-free and environmentally friendly.",
        link: "https://www.drbronner.com",
        categories: ["body care", "plant-based"],
    },
    {
        name: "Seed",
        logo: "/assets/brands/seed.png",
        description: "Seed is a brand that specializes in hair care products made with natural and sustainable ingredients. Their products are designed to nourish and strengthen the hair.",
        link: "https://www.seedphytonutrients.com",
        categories: ["hair"],
    },
];