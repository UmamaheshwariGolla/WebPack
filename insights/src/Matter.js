
import React, { useState } from "react";

import { IIconProps, Stack, IStackStyles } from '@fluentui/react';
import {DialogBlockingExample} from './Components/Dailogue';
import { ButtonCommandBarExample } from './Components/CreateButton';
import { SearchBox } from '@fluentui/react/lib/SearchBox';
import { initializeIcons } from "@fluentui/react";  
import { DetailsListDocumentsExample } from './Components/grid';
import './index.css'
import Products from './products.json';



initializeIcons();  



const Matter = () => {

    // const [user, setUser] = useState({
    //     name: "",
    //     username: "",
    //     email: "",
    //     phone: "",
    //     webiste: ""
    //   });


    return ( 
    <div>
        <div>
        {/* <ul>
            {
                Products.map(product => {
                    return (
                        <li key={product.id}>
                                <span>
                                    {product.name}
                                </span>
                            <span>
                                    $ {product.price}
                                </span>
                            <button
                                onClick={() => onBuyItem(product)}
                            >
                                Buy
                            </button>
                        </li>
                    )
                })
            }
        </ul> */}
        </div>

       <div className="wrapper">
	   <div><DialogBlockingExample/></div>
        <div style={{width: "1000px"}}><SearchBox placeholder="Search" / ></div>
	</div>
         <DetailsListDocumentsExample/>
      
    </div>
    );
};


export default Matter;
