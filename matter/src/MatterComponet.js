
// import React, { useState , Component} from "react";
// import OperationsTable from './OperationsTable';
// import { IIconProps, Stack, IStackStyles } from '@fluentui/react';
// import {DialogBlockingExample} from './Components/Dailogue';
// import { ButtonCommandBarExample } from './Components/CreateButton';
// import { SearchBox } from '@fluentui/react/lib/SearchBox';
// import { initializeIcons ,Pivot,PivotItem,Label} from "@fluentui/react";  
// import { DetailsListDocumentsExample } from './Components/grid';
// import './index.css'
// import Products from './products.json';
// import {DialogModelessExample} from './Components/modeless';

// import { CommandBarButton,DefaultButton } from '@fluentui/react/lib/Button';
// import { Link } from "react-router-dom";
// import {
//     Router,
//     Route,
//     Switch,
//     withRouter
//   } from "react-router-dom";

// //import {CreateMatterForm} from './text';
// initializeIcons();  

// import CreateMatterForm from './CreatMatter';
// import { Button } from "./ReuseableComp/Buttons";
// import { Pivots } from "./ReuseableComp/Pivot";
// //  comment this out.
 
// const ViewTwo = ({onClick,sendFunc,info}) => {
//   const name='uma';
//   return(
  
//   <div style={{marginTop:"50px"}}>
//     <DefaultButton text="Back"  onClick={() => {onClick("view1");localStorage.setItem("view","view1"); }} />
   
// <h1> Create Matter</h1>
// <br/>
//  <CreateMatterForm sendFuncForm={sendFunc} info={info} icon="Add" text="Create" ButtonType="Default"/> 
//   </div>
// )};

// const ViewOne = ({onClick}) =>{
  
// const PivotItems= ['View', 'Show', 'Display'];
// const PivotItems1= ['View1', 'Show1', 'Display1'];
//   return (
//   <div>
//              <div id="Matter" >
  
//                <div className="wrapper">
//                <div id="CreateButton" > <DefaultButton text="Create"  onClick={() => onClick("view2")} /> </div>
//                <div><DialogModelessExample/></div>
//                <div style={{width:"1200px"}}><SearchBox placeholder="Search" / ></div>
//                 </div>
//                 <br/>
//                 <Pivot>
//                 <PivotItem headerText="Channel">
//                 <div id="details">
//                   {/* <DetailsListDocumentsExample/>   */}
//                   {/* <OperationsTable/> */}
//                   < Pivots DisplayData={PivotItems}/>
//                   <br></br>
//                   < Pivots DisplayData={PivotItems1}/>
//                    </div>  
//                     </PivotItem>
//                      <PivotItem headerText="Cx365 Matters">
                   
//                  </PivotItem>
//                 </Pivot>            
//             </div> 
//   </div>


// )
// };


// const Matter = ({ Receive,info}) => {
// const alert=()=>{
//   console.log("hi")
// }
// console.log(info)
// const [currentView, setCurrentView] = React.useState(localStorage.getItem("view"));

// return (
//   <div>
//     <Button HandleFunc={alert} text="create" icon="Add"/>
//   <div>
   
//   {
//      currentView === "view1" ? 
//     <ViewOne      onClick={page => {setCurrentView(page);localStorage.setItem("view",page); }} /> :
//     <ViewTwo  sendFunc={Receive} info={info}  onClick={page => {setCurrentView(page);localStorage.setItem("view",page)}} />
   
//  }
  
// </div>
// </div>
// )
// }

// export default Matter;


//worjking fine
import React, { useState , Component,useEffect} from "react";
import OperationsTable from './OperationsTable';

import { initializeIcons ,Pivot,PivotItem,Label} from "@fluentui/react";  


import {
    Router,
    Route,
    Switch,
    withRouter,Link
  } from "react-router-dom";

//import {CreateMatterForm} from './text';
initializeIcons();  

//  comment this out.
 


import { useHistory } from 'react-router-dom';

const MatterCom = ({insightsdata}) => {
 // console.log(JSON.stringify(insightsdata))


return (
<div>
<div id="Matter" >
  
                  <div className="MatterComwrapper">
                  
                  <div id="CreateButton" > 
                 
                   </div>
    
                  {/* <div style={{width:"1200px"}}><SearchBox placeholder="Search" / ></div> */}
                   </div>
                   <br/>
                   <Pivot>
                   
                   <PivotItem headerText="Channel">
                        <div id="details">
                           
                        <OperationsTable/>
                      
                      </div>  
                    </PivotItem>
                    <PivotItem headerText="Cx365 Matters">
                          {/* <DocumentCardBasic insightsdata={insightsdata}/> */}
                       
                          {insightsdata ? 
                          <div style={{border:"1px solid black",width:"300px", marginTop:"20px"}}>
                        <h1 style={{paddingLeft:"10px"}}>Data from Insights</h1>
                         <h2 style={{paddingLeft:"20px"}}>Client  : {insightsdata.InsForm.name}</h2>
                         <h2 style={{paddingLeft:"20px"}}>Location : {insightsdata.InsForm.username} </h2>
                          </div>:
                          <h1></h1>
                          }
                           
                    </PivotItem>
                   </Pivot>            
               </div> 
</div>
)
}

export default MatterCom;


