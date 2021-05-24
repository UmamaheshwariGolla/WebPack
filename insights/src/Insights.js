
import React from 'react';  

import { Stack } from "@fluentui/react";  
import styled from 'styled-components';
import InsightList from './InsightsList';  
import 'office-ui-fabric-react';
import './index.css';
import CardsSection from './CardsSection';

function  Insights() {  
  //const [insights, setinsights] = useState([{ id: 1, name: "Microfront end1" }, { id: 2, name: "Microfront end2" }]);  
  return (  
 
 
    // <div className="wrapper">  
    //   <Stack horizontalAlign="center">  
    //     <h1>Microfront ends using Fluent UI & React</h1>  
    //     <Stack style={{ width: 300 }} gap={25}>  
    //       <InsightList insights={insights} />  
    //     </Stack>  
    //   </Stack> 
    //   </div> 

    <div className="ms-Grid" dir="ltr">
         
    <div className="ms-Grid-row">
      <div className="ms-Grid-col ms-sm11 ms-xl11 main-element">
        <div className="ms-Grid-row">
          <h1>insights</h1>
          {/* <CardsSection /> */}
        </div>
      </div>
    </div>

  </div>

  
  );  
}  
  
export default  Insights; 

