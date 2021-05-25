


import React, { useState } from "react";
import ReactDOM from "react-dom";

// const Basket = React.lazy(() => import('mf-basket/Basket'))
// const ProductList = React.lazy(() => import('mf-productList/ProductList'))
//const Teams= React.lazy(() => import('mf-teams/Teams'))
const Insights= React.lazy(() => import('mf-insights/Insights'))
const Matter= React.lazy(() => import('mf-matter/Matter'))

import "./index.css";
import './app.css';
import './productList.css';
import { Label, Pivot, PivotItem } from '@fluentui/react';

import 'office-ui-fabric-react/dist/css/fabric.css';

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
                             <Insights/>
                       </React.Suspense>                   
                      </section>
                    </PivotItem>
                    <PivotItem headerText="Files">
                        <h1>Insights</h1>
                        <section>
                        <React.Suspense fallback={<div>....loading Insights</div>}>
                             <Insights/>
                       </React.Suspense>                   
                      </section>
                    </PivotItem>
            </Pivot>
                
            </div>
        </div>
       
    )
};

ReactDOM.render(<App />, document.getElementById("app"));
