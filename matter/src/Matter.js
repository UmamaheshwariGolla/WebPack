
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
//                   {/* Reuable button < Pivots DisplayData={PivotItems}/>
//                   <br></br>
//                   < Pivots DisplayData={PivotItems1}/> */}
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

// console.log(JSON.stringify(info));


// const [currentView, setCurrentView] = React.useState(localStorage.getItem("view"));

// return (
//   <div>
    
//     {/* Reuable button <Button HandleFunc={alert} text="create" icon="Add"/> */}
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


import * as microsoftTeams from "@microsoft/teams-js";
import { initializeIcons ,Pivot,PivotItem,Label} from "@fluentui/react";
import { SearchBox } from '@fluentui/react/lib/SearchBox';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  withRouter
} from "react-router-dom";
import React ,{useState} from 'react';
import MatterCom from './MatterComponet';
import CreateMatterForm from './CreatMatter';
import { DialogModelessExample } from "./Components/modeless";
import './index.css'
initializeIcons ();
const Matter=({ Receive,info,insightsdata})=>{


  return(
   
    <div >
     <br/>
       <div className="wrappers">
      
       <div> <DialogModelessExample  sendFuncForm={ Receive} info={info}  /></div>
        <div style={{width:"1113px"}}><SearchBox placeholder="Search" / ></div>
        
       <div className="MatterCom" >
       <Router>
      <Switch>
        {/* <Route  exact path="/" component={MatterCom} /> */}
         <Route  exact path="/" render={()=><MatterCom insightsdata={insightsdata} /> } /> 
        <Route  path="/create" component={()=><CreateMatterForm sendFuncForm={ Receive} info={info} /> }/>  
      </Switch>
  
  </Router>
  </div>
  </div>
  </div>
  )
}

export default Matter;


