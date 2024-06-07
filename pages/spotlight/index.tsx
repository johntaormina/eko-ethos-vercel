import React from "react";
import { Plant } from "../../components/main/plant";
import ContextLayout from "layouts/ContextLayout";
import BrandCard from "../../components/main/spotlight/brandcard";

const Index = () => {
  return (
    <div className="bg-repeat bg-[url('/assets/plant-1.jpg')]">
      <ContextLayout>
        <div className="spotlight-page grid grid-cols-3 pt-20">
          <div className="w-full">
          </div>
          <div className="grid grid-rows-1">
            <div className="pb-5">
            <BrandCard
              image="assets/brands/dr-bronners.png"
              name="Dr. Bronners"
              description="Dr. Bronner's is a renowned brand celebrated for its organic and fair-trade personal care products, especially its versatile liquid and bar soaps. Founded in 1948 by Emanuel Bronner, the company has maintained a strong commitment to environmental sustainability and social responsibility. Their products are made with natural, biodegradable ingredients and come in eco-friendly packaging. Dr. Bronner's is also known for its advocacy on various social issues, including fair trade, organic integrity, and regenerative agriculture."
            />
            </div>

            <div className="pb-5">
            <BrandCard
              image="assets/brands/kosas.png"
              name="Kosas"
              description="Kosas is a contemporary beauty brand dedicated to creating clean, skin-loving makeup that enhances natural beauty. Founded by Sheena Yaitanes, Kosas focuses on formulating products with high-quality, non-toxic ingredients that deliver exceptional performance without compromising skin health. Known for its innovative and inclusive approach, the brand offers a range of cosmetics that cater to diverse skin tones and types. Kosas embodies a modern, effortless aesthetic, promoting a beauty philosophy that celebrates individuality and self-expression."
            />
            </div>

            <div className="pb-5">
              <div className="bg-slate-100/[.80] mx-auto p-4 rounded-lg text-center">
                More brands to spotlight coming soon!
              </div>
            </div>
          </div>
        </div>
      </ContextLayout>
    </div>
  );
};

export default Index;
