

import { Stack } from "@fluentui/react";  
import styled from 'styled-components';
import InsightList from './InsightsList';  
import 'office-ui-fabric-react';
import './index.css';

import CardsSection from './CardsSection';
import TextFieldBasicExample from './input'
import { DocumentCardImageExample } from './Components/DocumentCards';
import DocumentCardConversationExample from './Components/multipleCards';
import React from 'react';
import { initializeIcons } from "@fluentui/react";  

initializeIcons();

//import styled from 'styled-components';
// import { reduce, pluck, add, map } from 'ramda';



// const totalPrice = items => {
//   console.log(items)
//   return reduce(
//       add,
//       0,
//       map(parseFloat, pluck('price', items))
//   );
// }

// const Insights = ({ items, onClear }) => {
//   return (
//  <div>
//       <h3>BASKET</h3>
//           <span>
//               TOTAL: {Number.parseFloat(totalPrice(items)).toFixed(2)}
//           </span>
//           <button
//               onClick={onClear}
//           >
//               CLEAR
//           </button>
     
//  </div>

        
//   );
// };

const  Insights=() =>{  

  return (      
    <div className="ms-Grid-row">
 
      <div className="ms-Grid-col ms-sm11 ms-xl11 main-element">
        <div className="ms-Grid-row">
        
         <DocumentCardConversationExample/>
        </div>
      </div>
    </div>
 );  
}  
  
export default  Insights; 

