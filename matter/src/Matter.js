
import React, { useState , Component} from "react";

import { IIconProps, Stack, IStackStyles } from '@fluentui/react';
import {DialogBlockingExample} from './Components/Dailogue';
import { ButtonCommandBarExample } from './Components/CreateButton';
import { SearchBox } from '@fluentui/react/lib/SearchBox';
import { initializeIcons } from "@fluentui/react";  
import { DetailsListDocumentsExample } from './Components/grid';
import './index.css'
import Products from './products.json';
import {DialogModelessExample} from './Components/modeless';



initializeIcons();  


  








// const Matter = ({onBuyItem}) => {
//     return (
//         <ul>
//             {
//                 Products.map(product => {
//                     return (
//                         <li key={product.id}>
//                                 <span>
//                                     {product.name}
//                                 </span>
//                             <span>
//                                     $ {product.price}
//                                 </span>
//                             <button
//                                 onClick={() => onBuyItem(product)}
//                             >
//                                 Buy
//                             </button>
//                         </li>
//                     )
//                 })
//             }
//         </ul>
//     );
// };


const Matter = () => {

 
    return ( 
        <div>
        
           <div className="wrapper">
           <div><DialogModelessExample/></div>
           <div style={{width:"700px"}}><SearchBox placeholder="Search" / ></div>
            </div>
             <DetailsListDocumentsExample/>
             
        </div>
        );
    }


export default Matter;
