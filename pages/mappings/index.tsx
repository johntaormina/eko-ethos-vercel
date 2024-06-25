import React, { useState } from 'react';
import ContextLayout from '../../layouts/ContextLayout';
import dynamic from 'next/dynamic';

import Selector, { FilterSelections } from '../../components/mappings/Selector';

import {mappingPositions} from '../../components/mappings/Data';

const [selections, setSelections] = useState<FilterSelections>({});


// lazy load Map
const Map = dynamic(
  () => import('../../components/mappings/Map'),
  { ssr: false } // Disable SSR for this component
);

const Index = () => {
  return (
    <ContextLayout>
      <div className='flex flex-row pt-20 pr-20 pl-5 gap-x-5'>
        <div className='basis-1/8'>
          <Selector selections={selections} onSelectionChange={setSelections}/>
        </div>
        <div className='basis-4/5'>
          <Map center={mappingPositions.Philadlephia.location} stores={mappingPositions.Philadlephia.Composting}/>
        </div>
      </div>
    </ContextLayout>
  );
};

export default Index;
