import React from 'react';
import 'office-ui-fabric-react';
import './index.css';
import CardsSection from './CardsSection';
import OperationsTable from './OperationsTable';
import { DefaultButton, PrimaryButton } from '@fluentui/react/lib/Button';
import { SearchBox } from '@fluentui/react/lib/SearchBox';
import ButtonDefaultExample  from './button';
import TextFieldBasicExample from './text';
import { RatingBasicExample } from './rating';
const Matter = () => {
    return (
      
         <div className="ms-Grid" dir="ltr">
         
        <div className="ms-Grid-row">
 
        <SearchBox placeholder="Search" />
          <div className="ms-Grid-col ms-sm11 ms-xl11 main-element">
            <div className="ms-Grid-row">
              <RatingBasicExample/>
              <h1>Matters</h1>
              <ButtonDefaultExample/>
              <TextFieldBasicExample />
              {/* <OperationsTable /> */}
            </div>
          </div>
        </div>

     </div>

    );
};


export default Matter;
