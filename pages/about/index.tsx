import React from "react";
import { Plant } from "../../components/main/plant";
import ContextLayout from "layouts/ContextLayout";

const About = () => {
  return (
    <ContextLayout>
      <div className="flex flex-col h-screen">
      <Plant />
      <div className="flex items-center justify-center absolute inset-0 mt-12 m-20">
        <div className="bg-white p-4">
          <h1 className="text-center text-2xl font-bold">About EKO Ethos</h1>
          <p className="text-center">Welcome to EKO Ethos, where sustainability meets purpose. At EKO Ethos, we are passionate about creating a positive impact on our planet by championing eco-friendly practices and raising awareness about the importance of making conscious environmental choices. Our brand is built on the belief that every small action counts towards a greener future. From using ethically sourced materials to promoting renewable energy solutions, we are committed to preserving the beauty of our Earth for generations to come. Join us on our journey to inspire, educate, and empower individuals to embrace a sustainable lifestyle and make a meaningful difference in the world.</p>
        </div>
      </div>
    </div>
    </ContextLayout>
  );
};

export default About;
