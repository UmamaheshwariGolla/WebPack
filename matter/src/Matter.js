import React from 'react';


import { IIconProps, Stack, IStackStyles } from '@fluentui/react';
import {DialogBlockingExample} from './Components/Dailogue';
import { ButtonCommandBarExample } from './Components/CreateButton';
import { SearchBox } from '@fluentui/react/lib/SearchBox';
import { initializeIcons } from "@fluentui/react";  
import { DetailsListDocumentsExample } from './Components/grid';
import './index.css'
  
initializeIcons();  

const greeting = 'I am Matter';
 
const Matter = () => {
    return (
      
    //  <div className="ms-Grid" dir="ltr">
    //     <div className="ms-Grid-row">    
    //       <div className="ms-Grid-col ms-sm11 ms-xl11 main-element">
    //       <ButtonCommandBarExample/>
    //      <SearchBox placeholder="Search" />    
    //       </div> 
    //     </div>
    //  </div>
    <div>
          
      
       <div className="wrapper">
	   <div><DialogBlockingExample/></div>
        <div style={{width: "1000px"}}><SearchBox placeholder="Search" / ></div>
	</div>
      
         {/* <DialogBlockingExample/>   
         <SearchBox placeholder="Search" / > */}

         <DetailsListDocumentsExample/>
      
  
    </div>


            
         
    

    );
};


export default Matter;
