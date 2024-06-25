
import React from "react";
import { Plant } from "components/main/plant";
import ContextLayout  from "layouts/ContextLayout";

export default function Home() {
  const homeText = "Cultivating a Kinder Earth."
  return (
    <ContextLayout>
      <div className="flex flex-col h-screen">
      <Plant />
      <div className="flex items-center justify-center absolute inset-0 mt-12 m-20">
        <div className="bg-white p-4 bg-opacity-40 rounded-md">
          <h1 className="text-center text-5xl font-bold opacity-100">{homeText}</h1>
        </div>
      </div>
    </div>
    </ContextLayout>
  );
}
