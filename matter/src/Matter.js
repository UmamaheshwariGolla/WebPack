
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


  
export default class Matter extends Component {
    userData;

    constructor(props) {
        super(props);

        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePhone = this.onChangePhone.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            name: '',
            email: '',
            phone: ''
        }
    }

    // Form Values
    onChangeName(e) {
        this.setState({ name: e.target.value })
    }

    onChangeEmail(e) {
        this.setState({ email: e.target.value })
    }

    onChangePhone(e) {
        this.setState({ phone: e.target.value })
    }


    // React Life Cycle
    componentDidMount() {
        this.userData = JSON.parse(localStorage.getItem('user'));

        if (localStorage.getItem('user')) {
            this.setState({
                name: this.userData.name,
                email: this.userData.email,
                phone: this.userData.phone
            })
        } else {
            this.setState({
                name: '',
                email: '',
                phone: ''
            })
        }
    }

    componentWillUpdate(nextProps, nextState) {
        localStorage.setItem('user', JSON.stringify(nextState));
    }

    onSubmit(e) {
        e.preventDefault()
        console.log(this.state.props)
    }


    render() {
        return (
            <div className="container">
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Name</label>
                        <input type="text" className="form-control" value={this.state.name} onChange={this.onChangeName} />
                    </div>
                    <br></br>
                    <div className="form-group">
                        <label>Email</label>
                        <input type="email" className="form-control" value={this.state.email} onChange={this.onChangeEmail} />
                    </div>
                    <br></br>
                    <div className="form-group">
                        <label>Phone</label>
                        <input type="tel" className="form-control" value={this.state.phone} onChange={this.onChangePhone} />
                    </div>
                    <br></br>
                    <button type="submit" className="btn btn-primary btn-block">Submit</button>
                </form>
            </div>
        )
    }
}







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


// const Matter = () => {

 
//     return ( 
//         <div>
        
//            <div className="wrapper">
//            <div><DialogModelessExample/></div>
//            <div style={{width:"700px"}}><SearchBox placeholder="Search" / ></div>
//             </div>
//              <DetailsListDocumentsExample/>
             
//         </div>
//         );
//     }


//export default Matter;
