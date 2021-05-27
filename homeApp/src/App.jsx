
import React, { useState } from "react";
import ReactDOM from "react-dom";

const Insights= React.lazy(() => import('mf-insights/Insights'))
const Matter= React.lazy(() => import('mf-matter/Matter'))

import "./index.css";
import './app.css';
import './productList.css';
import { Label, Pivot, PivotItem } from '@fluentui/react';


const App = () => {
  

    return (
        <div className="app">
      
            <div className="app-content">
                
            <Pivot>
                    <PivotItem headerText="Matter">
                        <h1>Matter</h1>
                       <section>
                          <React.Suspense fallback={<div>....loading Matter</div>}>
                               <Matter />
                        
                          </React.Suspense>
                      
                        </section>
                        
                     
                    </PivotItem>
                    <PivotItem headerText="Insights">
                        <h1>Insights</h1>
                        <section>
                        <React.Suspense fallback={<div>....loading Insights</div>}>
                             <Insights  />
                       </React.Suspense>                   
                      </section>
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
