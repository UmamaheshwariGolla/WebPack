
import React from 'react';  

import { Stack } from "@fluentui/react";  
import styled from 'styled-components';
import InsightList from './InsightsList';  
import 'office-ui-fabric-react';
import './index.css';
import CardsSection from './CardsSection';
import TextFieldBasicExample from './input'
import { DocumentCardImageExample } from './Components/DocumentCards';
import DocumentCardConversationExample from './Components/multipleCards';
import { initializeIcons } from "@fluentui/react";  
initializeIcons();
function  Insights() {  
  //const [insights, setinsights] = useState([{ id: 1, name: "Microfront end1" }, { id: 2, name: "Microfront end2" }]);  
  return (  
 
    <div className="ms-Grid" dir="ltr">
         
    <div className="ms-Grid-row">
      <div className="ms-Grid-col ms-sm11 ms-xl11 main-element">
        <div className="ms-Grid-row">
         <DocumentCardConversationExample/>
        
          {/* <TextFieldBasicExample/> */}
          {/* <CardsSection /> */}
        </div>
      </div>
    </div>

  </div>

  
  );  
}  
  
export default  Insights; 

