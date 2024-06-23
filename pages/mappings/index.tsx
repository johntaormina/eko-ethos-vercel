import React from 'react';
import ContextLayout from '../../layouts/ContextLayout';
import dynamic from 'next/dynamic';


// lazy load Map
const Map = dynamic(
  () => import('../../components/mappings/Map'),
  { ssr: false } // Disable SSR for this component
);

const Index = () => {
  return (
    <ContextLayout>
      <div className="">
        <div id="map">
          <Map/>
        </div>
      </div>
    </ContextLayout>
  );
};

export default Index;
