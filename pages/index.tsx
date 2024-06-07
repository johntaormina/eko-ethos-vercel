
import React from "react";
import { Plant } from "components/main/plant";
import ContextLayout  from "layouts/ContextLayout";

export default function Home() {
  return (
    <ContextLayout>
      <div className="flex flex-col h-screen">
        <Plant motto="Cultivating a Kinder Earth" />
      </div>
    </ContextLayout>
  );
}
