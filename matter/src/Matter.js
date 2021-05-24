import React from 'react';
import 'office-ui-fabric-react';
import './index.css';
import CardsSection from './CardsSection';
import OperationsTable from './OperationsTable';
import { DefaultButton, PrimaryButton } from '@fluentui/react/lib/Button';
import { SearchBox } from '@fluentui/react/lib/SearchBox';

const Matter = () => {
    return (
      
         <div className="ms-Grid" dir="ltr">
         
        <div className="ms-Grid-row">
 
        <SearchBox placeholder="Search" />
          <div className="ms-Grid-col ms-sm11 ms-xl11 main-element">
            <div className="ms-Grid-row">
              <h1>Matters</h1>
              {/* <OperationsTable /> */}
            </div>
          </div>
        </div>

     </div>

   

   
 
    );
};

export default Matter;
