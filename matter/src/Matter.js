
import React, { useState , Component} from "react";
import OperationsTable from './OperationsTable';
import { IIconProps, Stack, IStackStyles } from '@fluentui/react';
import {DialogBlockingExample} from './Components/Dailogue';
import { ButtonCommandBarExample } from './Components/CreateButton';
import { SearchBox } from '@fluentui/react/lib/SearchBox';
import { initializeIcons } from "@fluentui/react";  
import { DetailsListDocumentsExample } from './Components/grid';
import './index.css'
import Products from './products.json';
import {DialogModelessExample} from './Components/modeless';
import { CommandBarButton } from '@fluentui/react/lib/Button';
import { Link } from "react-router-dom";
import {
    Router,
    Route,
    Switch,
    withRouter
  } from "react-router-dom";

//import {CreateMatterForm} from './text';
initializeIcons();  

import CreateMatterForm from './CreatMatter';
//import TextFieldBasicExample from "./CreatMatter";


// const ViewTwo = ({onClick,onBuyItem}) => (
//     <div>
//    Create Matter

     
//       <CreateMatterForm onBuyItem={onBuyItem}/>
    
//       <button onClick={() => onClick("view1")}>Go Back</button>
//     </div>
//   );



//   const ViewOne = ({onClick}) => (
//     <div>
//       <div>
         
//               <CommandBarButton text="Create" onClick={handleClick} onClick={() => onClick("view2")} />
//                  <div className="wrapper">
//                  <div><DialogModelessExample/></div>
//                  <div style={{width:"700px"}}><SearchBox placeholder="Search" / ></div>
//                   </div>
//                    <DetailsListDocumentsExample/>
                
//               </div>
      
//     </div>
//   );

// const Matter = ({onBuyItem}) => {


//     const [currentView, setCurrentView] = React.useState("view2");
//   return (
//     <div>
  
//     {
//        currentView === "view2" ? 
//       <ViewOne  onBuyItem={onBuyItem} onClick={page => setCurrentView(page)} /> :
//       <ViewTwo  onClick={page => setCurrentView(page)} />
//    }

//   </div>
//   )
  
//  }




// attribute



const ViewTwo = ({onClick}) => (
  
  <div>
 Create Matter

 <CreateMatterForm/>
  
    <button   onClick={() => {onClick("view1");localStorage.setItem("view",view1)}}>Go Back</button>
  
  </div>
);



const ViewOne = ({onClick}) => (
  <div>
    <div>
    
   
            <CommandBarButton   text="Create"  onClick={() => onClick("view2")} />
               <div className="wrapper">
               <div><DialogModelessExample/></div>
               <div style={{width:"700px"}}><SearchBox placeholder="Search" / ></div>
                </div>
                 <DetailsListDocumentsExample/>
              
            </div>
    
  </div>
);


const Matter = () => {


  const [currentView, setCurrentView] = React.useState(localStorage.getItem("view"));
console.log(currentView);
return (
  <div>
  {
     currentView === "view1" ? 
    <ViewOne onClick={page => {setCurrentView(page);localStorage.setItem("view",page);
    }} /> :
    <ViewTwo onClick={page => {setCurrentView(page);localStorage.setItem("view",page)}} />
   
 }
  
</div>
)
}


export default Matter;
