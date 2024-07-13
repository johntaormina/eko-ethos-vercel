export interface Brand {
  name: string;
  logo: string;
  description: string;
  link: string;
  categories: Categories[];
  attributes?: Attributes[];
  certifications?: Certifications[];
}

enum Categories {
  Makeup = 'Makeup',
  Skincare = 'Skincare',
  Haircare = 'Haircare',
  Bodycare = 'Bodycare',
  HouseholdCleaning = 'Household cleaning',
  LaundryCare = 'Laundry care',
  Clothing = 'Clothing',
  Shoes = 'Shoes',
  Eyewear = 'Eyewear',
  Handbags = 'Handbags',
  Nails = 'Nails'
}

enum Attributes {
  PlantBasedIngredients = 'Plant based ingredients (beginning of life)',
  RecycledMaterials = 'Recycled material (beginning of life)',
  UpCycledTextiles = 'Upcycled textiles (beginning of life)',
  RecycledPackaging = 'Recycled packaging (end of life)',
  BiodegradablePackaging = 'Biodegradable packaging (end of life)',
  RefillablePackaging = 'Refillable Packaging (closed loop)'
}

enum Certifications {
  EWGVerified = 'EWG Verified',
  FairTradeAlliance = 'FairTrade Alliance',
  FSC = 'FSC',
  BCorp = 'BCorp',
  LeapingBunny = 'Leaping Bunny',
  OnePercentForThePlanet = '1% for the Planet',
  CredoBeatyStandard = 'Credo Beauty Standard',
  TerraCycle = 'TerraCycle',
  Ecologo = 'EcoLogo'
}

export const Brands: Brand[] = [
  {
    name: 'Ethique',
    logo: '/assets/brands/ethique.png',
    description:
      'Ethique is a New Zealand-based company that sells sustainable personal care products like shampoo and soap bars made with ethically sourced ingredients and minimal packaging.',
    link: 'https://ethique.com',
    categories: [Categories.Bodycare, Categories.Haircare, Categories.Skincare],
    attributes: [Attributes.BiodegradablePackaging, Attributes.PlantBasedIngredients],
    certifications: [Certifications.LeapingBunny, Certifications.BCorp]
  },
  {
    name: 'Dr Bronners',
    logo: '/assets/brands/dr-bronners.png',
    description:
      "Dr. Bronner's is a brand of natural soap and other personal care products known for their use of organic ingredients, commitment to social responsibility, and versatile castile soap base.",
    link: 'https://www.drbronner.com',
    categories: [Categories.Bodycare],
    attributes: [
      Attributes.PlantBasedIngredients,
      Attributes.RecycledPackaging,
      Attributes.RecycledMaterials
    ],
    certifications: [
      Certifications.LeapingBunny,
      Certifications.BCorp,
      Certifications.EWGVerified
    ]
  },
  {
    name: 'Whamisa',
    logo: '/assets/brands/whamisa.png',
    description:
      'Whamisa is a Korean brand of natural, fermented skincare products that are certified organic and cruelty-free, focusing on gentle formulas and maximizing the benefits of botanical ingredients.',
    link: 'https://whamisa.com',
    categories: [Categories.Skincare, Categories.Haircare, Categories.Bodycare],
    attributes: [Attributes.PlantBasedIngredients, Attributes.BiodegradablePackaging],
    certifications: [
      Certifications.EWGVerified,
      Certifications.OnePercentForThePlanet,
      Certifications.CredoBeatyStandard
    ]
  },
  {
    name: 'Innersense',
    logo: '/assets/brands/innersense.png',
    description:
      'Innersense is a hair care brand that offers salon-quality, sulfate-free, plant-powered hair care products for all hair types.',
    link: 'https://innersensebeauty.com',
    categories: [Categories.Haircare],
    attributes: [
      Attributes.PlantBasedIngredients,
      Attributes.RecycledPackaging,
      Attributes.RecycledMaterials
    ],
    certifications: [
      Certifications.LeapingBunny,
      Certifications.BCorp,
      Certifications.CredoBeatyStandard
    ]
  },
  {
    name: 'Evolve Organic Beauty',
    logo: '/assets/brands/evolveorganicbeauty.png',
    description:
      'Evolve Organic Beauty is a brand that offers certified organic skincare products made with natural and ethically sourced ingredients.',
    link: 'https://www.evolvebeauty.co.uk/',
    categories: [Categories.Skincare, Categories.Haircare, Categories.Bodycare],
    attributes: [
      Attributes.PlantBasedIngredients,
      Attributes.RecycledPackaging,
      Attributes.RecycledMaterials
    ],
    certifications: [Certifications.LeapingBunny, Certifications.CredoBeatyStandard]
  },
  {
    name: 'Weleda',
    logo: '/assets/brands/weleda.png',
    description:
      'Weleda is a brand that offers natural, plant-based skincare and wellness products formulated with organic ingredients.',
    link: 'https://www.weleda.com',
    categories: [Categories.Skincare, Categories.Bodycare],
    attributes: [
      Attributes.PlantBasedIngredients,
      Attributes.RecycledPackaging,
      Attributes.RecycledMaterials
    ],
    certifications: [Certifications.TerraCycle, Certifications.BCorp]
  },
  {
    name: 'The Unscented Company',
    logo: '/assets/brands/theunscentedcompany.png',
    description:
      'The Unscented Company redefines clean by offering natural, unscented home and body care essentials. Their focus is on minimizing environmental impact with refillable options and solid products.',
    link: 'https://unscentedco.com',
    categories: [Categories.Bodycare, Categories.Haircare],
    attributes: [
      Attributes.PlantBasedIngredients,
      Attributes.BiodegradablePackaging,
      Attributes.RecycledMaterials,
      Attributes.RecycledPackaging,
      Attributes.RefillablePackaging
    ],
    certifications: [Certifications.LeapingBunny, Certifications.BCorp]
  },
  {
    name: 'BKind',
    logo: '/assets/brands/bkind.png',
    description:
      'BKIND is a Canadian company offering all-natural, vegan skincare and household products made in Quebec.',
    link: 'https://bkind.com',
    categories: [
      Categories.Skincare,
      Categories.Bodycare,
      Categories.Nails,
      Categories.Haircare
    ],
    attributes: [
      Attributes.PlantBasedIngredients,
      Attributes.RecycledMaterials,
      Attributes.RecycledPackaging
    ],
    certifications: [Certifications.LeapingBunny]
  },
  {
    name: 'Babo Botanicals',
    logo: '/assets/brands/babobotanicals.png',
    description:
      'Babo Botanicals is a company specializing in plant-based and EWG-verified skincare products for the entire family.',
    link: 'https://www.babobotanicals.com',
    categories: [Categories.Bodycare, Categories.Haircare, Categories.Skincare],
    attributes: [
      Attributes.PlantBasedIngredients,
      Attributes.RecycledMaterials,
      Attributes.RecycledPackaging
    ],
    certifications: [
      Certifications.LeapingBunny,
      Certifications.EWGVerified,
      Certifications.BCorp
    ]
  },
  {
    name: 'Haekels',
    logo: '/assets/brands/haekels.png',
    description:
      'Haeckels offers transformative skincare and wild fragrances, all "Made of Margate.',
    link: 'https://haeckels.co.uk',
    categories: [Categories.Skincare, Categories.Bodycare, Categories.Haircare],
    attributes: [
      Attributes.PlantBasedIngredients,
      Attributes.RecycledMaterials,
      Attributes.RecycledPackaging,
      Attributes.BiodegradablePackaging
    ],
    certifications: [Certifications.LeapingBunny, Certifications.BCorp]
  }
];
