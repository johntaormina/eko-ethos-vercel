import React from 'react';
import { Plant } from '../../components/main/plant';
import ContextLayout from 'layouts/ContextLayout';
import BrandCard from '../../components/main/spotlight/brandcard';

const Index = () => {
  return (
    <div>
      <div className="bg-repeat bg-[url('/assets/plant-1.jpg')]">
        <ContextLayout>
          <div className="spotlight-page grid grid-cols-3 pt-20">
            <div className="w-full"></div>
            <div className="grid grid-rows-1">
              <div className="pb-5">
                <div className="bg-slate-100/[.80] mx-auto p-4 rounded-lg text-center">
                  Coverage of companies and startups finding groundbreaking sustainability
                  solutions
                </div>
              </div>
              <div className="pb-5">
                <BrandCard
                  image="assets/brands/c16biosciences.png"
                  name="C16 Biosciences"
                  description="Palm oil is a cheap ingredient that has widely been used in a lot of American food, cosmetics, and
cleaning products. To keep up with the rising demand for this ingredient and to keep costs low, rainforest
in south - east Asia are being slash to make way for more palm oil plantations. With more demand, the
race for an alternative is on the rise. C16 Biosciences is a biotechnology company founded in 2018
focusing on creating a sustainable alternative to palm oil through advanced microbial fermentation
technology. This lab - grown palm oil alternative feeds on sugars to then excrete an oil essentially made
up of the same compound structure as palm oil. This company is in the growing movement to retire our
reliance on natural resourcing that causes environmental harm. If this start up can scale and match a
similar cheap price point to palm oil, further deforestation will be prevented.

Industry: Biotechnology Research"
                />
              </div>

              <div className="pb-5">
                <BrandCard
                  image="assets/brands/noissue.png"
                  name="Noissue"
                  description="Noissue is specializing in custom, eco - friendly packaging solutions for businesses. The company is on a
mission to offer businesses packaging material that has a minimal environmental impact including
compostable, recycle, or reusable products, depending on their eco - friendly values. Noissue was
founded in 2017, serving clients in the e - commerce, retail, CPG and food service space. Every customer
order will contribute to global reforestation, with a tree being planted for each order placed. A few
businesses and brands that are embracing more sustainable packaging are Middle child Clubhouse in
Philadelphia, Café Tres in Denver, Coming Soon in NYC, Ciele in Montreal, Lisa Says Gah in LA, and
even more!

Industry: Packaging Design"
                />
              </div>

              <div className="pb-5">
                <BrandCard
                  image="assets/brands/allbirds.png"
                  name="Allbirds"
                  description="In 2023 the World's First Net Zero Carbon shoe was unveiled by Allbirds, and expected to hit shelves in
some time in 2024. From the materials, packaging, manufacturing, transportation, and end-of-life stage,
the product has been designed to utilize materials and processes with the lowest environmental footprint.

Industry: Retail Apparel and Fashion"
                />
              </div>
            </div>
          </div>
        </ContextLayout>
      </div>
    </div>
  );
};

export default Index;
