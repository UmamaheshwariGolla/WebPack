

// import { Stack } from "@fluentui/react";  
// import styled from 'styled-components';
// import InsightList from './InsightsList';  
// import 'office-ui-fabric-react';
// import './index.css';

// import CardsSection from './CardsSection';
// import TextFieldBasicExample from './input'
// import { DocumentCardImageExample } from './Components/DocumentCards';
// import DocumentCardConversationExample from './Components/multipleCards';
// import React from 'react';
// import { initializeIcons ,Pivot, PivotItem} from "@fluentui/react";  

// initializeIcons();

// //import styled from 'styled-components';
// import { reduce, pluck, add, map } from 'ramda';



// const totalPrice = items => {
//   console.log(items)
//   return reduce(
   
//       add,
//       0,
//       map(parseFloat, pluck('price', items))
//   );
// }

// // const Insights = ({ items, onClear }) => {
// //   return (
// //  <div>
// //       <h3>BASKET</h3>
// //           <span>
// //               TOTAL: {Number.parseFloat(totalPrice(items)).toFixed(2)}
// //           </span>
// //           <button
// //               onClick={onClear}
// //           >
// //               CLEAR
// //           </button>
     
// //  </div>

        
// //   );
// // };

// const  Insights=() =>{  

//   return (      
//     <div className="ms-Grid-row">
 
//       <div className="ms-Grid-col ms-sm11 ms-xl11 main-element">
//         <div className="ms-Grid-row">
        
//         <Pivot>
          
//                 <PivotItem headerText="Outlook Insights ">
//                 <DocumentCardConversationExample/>
//                     </PivotItem>
//                     <PivotItem headerText="  ">
//                     </PivotItem>
//                     <PivotItem headerText="  ">
//                        </PivotItem>
//                        <PivotItem headerText="  ">
//                     </PivotItem>
//                     <PivotItem headerText="  ">
//                        </PivotItem>
//                      <PivotItem headerText="Approvals">
//                      <DocumentCardConversationExample/>
//                     </PivotItem>
                 
//               <PivotItem headerText="  ">
//               </PivotItem>
                
//               <PivotItem headerText="  ">
//               </PivotItem>
                
//               <PivotItem headerText="  ">
//               </PivotItem>
                
//               <PivotItem headerText="  ">
//               </PivotItem>
                      
//               <PivotItem headerText="  ">
//               </PivotItem>
              
//                  <PivotItem headerText="Peppermint Related            ">
//                      <DocumentCardConversationExample/>
//                  </PivotItem>
//                  <PivotItem headerText="  ">
//               </PivotItem>
                
//               <PivotItem headerText="  ">
//               </PivotItem>
                
//               <PivotItem headerText="  ">
//               </PivotItem>
                
//               <PivotItem headerText="  ">
//               </PivotItem>
        
//               <PivotItem headerText="  ">
//               </PivotItem>
                      
//               <PivotItem headerText="  ">
//               </PivotItem>
              
//                  <PivotItem headerText="Teams Realted          ">
//                      <DocumentCardConversationExample/>
//                  </PivotItem>
//                  <PivotItem headerText="  ">
//               </PivotItem>
                
//               <PivotItem headerText="  ">
//               </PivotItem>
                
//               <PivotItem headerText="  ">
//               </PivotItem>
                   
//               <PivotItem headerText="  ">
//               </PivotItem>

//               <PivotItem headerText="  ">
//               </PivotItem>
//                  <PivotItem headerText="Other          ">
//                      <DocumentCardConversationExample/>
//                  </PivotItem>
//                 </Pivot>     
        
//         </div>
//       </div>
    
//     </div>
//  );  
// }  
  
// export default  Insights; 










import React from 'react';
import { initializeIcons ,Pivot, PivotItem} from "@fluentui/react";  

initializeIcons();
import AddUserForm from "./insightsForm";






const  Insights=({Receive,info}) =>{  

  return (      
    <div className="ms-Grid-row">
 
      <div className="ms-Grid-col ms-sm11 ms-xl11 main-element">
        <div className="ms-Grid-row" style={{marginTop:"20px"}}>
        
            <AddUserForm Receive={Receive} info={info} />
        </div>
      </div>
    
    </div>
 );  
}  
  
export default  Insights; 





// };


// const  Insights=({Receive,insightsdata}) =>{  

//  const key="Insight"
//  const subkey="InsightForm"
//  let  initialFormState = {client:'',location:''};

//   if (insightsdata) 
//   {
//      initialFormState =props.insightsdata.InsightForm;
//   }
//   else 
//   {
//     initialFormState = { client: '', location: '' };
//   }
      
//   const handleInputChange = (event) => {
//      const { name, value } = event.target;
//      initialFormState={... initialFormState, [name]: value };   
//      Receive({ ...initialFormState, [name]: value },key,subkey)  
//   }

//   const submit=(event) => {
//     event.preventDefault()
//     if (!initialFormState.name || !initialFormState.username) return
//     Receive({client: '', location: ''},key,subkey)  
//   }

//   return (
    
//     <div>
//       <TextField  placeholder="Enter Client"  name="client"  value={initialFormState.name} onChange={handleInputChange}/> 
//       <TextField  placeholder="Enter Location"   name="location"  value={initialFormState.username} onChange={handleInputChange} />
//       < PrimaryButton  onClick={submit} text="Save"/> 
//     </div>
//   )
// }
// export default  Insights; 
