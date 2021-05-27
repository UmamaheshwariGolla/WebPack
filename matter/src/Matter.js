
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


initializeIcons();  

import CreateMatter from './CreatMatter';
import TextFieldBasicExample from "./CreatMatter";


// export default class Matter extends Component {
//     userData;

//     constructor(props) {
//         super(props);

//         this.onChangeName = this.onChangeName.bind(this);
//         this.onChangeEmail = this.onChangeEmail.bind(this);
//         this.onChangePhone = this.onChangePhone.bind(this);
//         this.onSubmit = this.onSubmit.bind(this);

//         this.state = {
//             name: '',
//             email: '',
//             phone: ''
//         }
//     }

//     // Form Values
//     onChangeName(e) {
//         this.setState({ name: e.target.value })
//     }

//     onChangeEmail(e) {
//         this.setState({ email: e.target.value })
//     }

//     onChangePhone(e) {
//         this.setState({ phone: e.target.value })
//     }


//     // React Life Cycle
//     componentDidMount() {
//         this.userData = JSON.parse(localStorage.getItem('user'));

//         if (localStorage.getItem('user')) {
//             this.setState({
//                 name: this.userData.name,
//                 email: this.userData.email,
//                 phone: this.userData.phone
//             })
//         } else {
//             this.setState({
//                 name: '',
//                 email: '',
//                 phone: ''
//             })
//         }
//     }

//     componentWillUpdate(nextProps, nextState) {
//         localStorage.setItem('user', JSON.stringify(nextState));
//     }

//     onSubmit(e) {
//         e.preventDefault()
//         console.log(this.state.props)
//     }


//     render() {
//         return (
//             <div className="container">
//                 <form onSubmit={this.onSubmit}>
//                     <div className="form-group">
//                         <label>Name</label>
//                         <input type="text" className="form-control" value={this.state.name} onChange={this.onChangeName} />
//                     </div>
//                     <br></br>
//                     <div className="form-group">
//                         <label>Email</label>
//                         <input type="email" className="form-control" value={this.state.email} onChange={this.onChangeEmail} />
//                     </div>
//                     <br></br>
//                     <div className="form-group">
//                         <label>Phone</label>
//                         <input type="tel" className="form-control" value={this.state.phone} onChange={this.onChangePhone} />
//                     </div>
//                     <br></br>
//                     <button type="submit" className="btn btn-primary btn-block">Submit</button>
//                 </form>
//             </div>
//         )
//     }
// }







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



const ViewTwo = ({onClick}) => (
    <div>
   Create Matter

      <TextFieldBasicExample/>
    
      <button onClick={() => onClick("view1")}>Go Back</button>
    </div>
  );



  const ViewOne = ({onClick}) => (
    <div>
      <div>
      {/* <button onClick={() => onClick("view2")}>Create</button> */}
              <h1>Matter</h1>
              <CommandBarButton text="Create"  onClick={() => onClick("view2")} />
                 <div className="wrapper">
                 <div><DialogModelessExample/></div>
                 <div style={{width:"700px"}}><SearchBox placeholder="Search" / ></div>
                  </div>
                   <DetailsListDocumentsExample/>
                
              </div>
      
    </div>
  );

const Matter = () => {

    const [currentView, setCurrentView] = React.useState("view1");
  return (
    <div>
    {
       currentView === "view1" ? 
      <ViewOne onClick={page => setCurrentView(page)} /> :
      <ViewTwo onClick={page => setCurrentView(page)} />
   }
  </div>
  )
  
    // return ( 
    //     <div>
         
           
            
   
    //         <button  >Click button to view products</button>
    //        <div className="wrapper">
    //        <div><DialogModelessExample/></div>
    //        <div style={{width:"700px"}}><SearchBox placeholder="Search" / ></div>
    //         </div>
    //          <DetailsListDocumentsExample/>
    //           <CreateMatter/>
    //     </div>
    //     );
    }


export default Matter;
