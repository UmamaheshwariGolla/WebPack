
import React, { useState } from "react";
import ReactDOM from "react-dom";

const Insights= React.lazy(() => import('mf-insights/Insights'))
const Matter= React.lazy(() => import('mf-matter/Matter'))

import "./index.css";
import './app.css';
import './productList.css';
import { Label, Pivot, PivotItem } from '@fluentui/react';


const App = () => {
  
    const [selected, setSelected] = useState([]);
    const onBuyItemClicked = item => {
                console.log(item);
                setSelected(curr => [...curr, item]);
            };
       
    
    return (
        <div className="app">
      
            <div className="app-content">
                
            <Pivot>
                    <PivotItem headerText="Matter" >
                     
                       <section>
                          <React.Suspense fallback={<div>....loading Matter</div>}>
                               <Matter onBuyItem={onBuyItemClicked}  />
                        
                          </React.Suspense>
                      
                        </section>                 
                    </PivotItem>
                    <PivotItem headerText="Insights" >
                      
                        <section>
                        <React.Suspense fallback={<div>....loading Insights</div>}>
                             <Insights  items={selected}
                                 onClear={() => setSelected([])} />
                       </React.Suspense>                   
                      </section>
                    </PivotItem>
    

                    <PivotItem headerText="Approval" >
                        <h1>Approval</h1>
                        
                    </PivotItem>
    
                    <PivotItem headerText="Task" >
                        <h1>Task</h1>
                        
                    </PivotItem>
                    
                    <PivotItem headerText="Recent File" >
                        <h1>Recent File</h1>
                        
                    </PivotItem>
                    
                    <PivotItem headerText="Contact" >
                        <h1>Contact</h1>
                        
                    </PivotItem>
                    
                    <PivotItem headerText="Calendar" >
                        <h1>Calendar</h1>
                        
                    </PivotItem>
                    <PivotItem headerText="Settings" >
                        <h1>Settings</h1>
                        
                    </PivotItem>
                    <PivotItem headerText="Admin" >
                        <h1>Admin</h1>
                        
                    </PivotItem>
                    <PivotItem headerText="Power BI" >
                        <h1>Power BI</h1>
                        
                    </PivotItem>

            </Pivot>
                
            </div>
        </div>
       
    )
};



// const App = () => {
//     const [selected, setSelected] = useState([]);

//     const onBuyItemClicked = item => {
//         console.log(item);
//         setSelected(curr => [...curr, item]);
     
//     };

//     return (
//         <div className="app">
           
//             <div className="app-content">
//             <Pivot>
//             <PivotItem headerText="Items">
                     
//                 <section>
//                     <React.Suspense fallback={<div>....loading items</div>}>
//                         <Matter
//                             onBuyItem={onBuyItemClicked}
//                         />
//                     </React.Suspense>
//                 </section>
//                 </PivotItem>
//                 <PivotItem headerText="Insights">
//                 <section>
//                     {
//                         selected.length > 0 &&
//                         <React.Suspense fallback={<div>....loading basket</div>}>
//                             <Insights
//                                 items={selected}
//                                 onClear={() => setSelected([])}
//                             />
//                         </React.Suspense>
//                     }
//                 </section>
//                 </PivotItem>
//                 </Pivot>
//             </div>
//         </div>
//     )
// };

ReactDOM.render(<App />, document.getElementById("app"));
