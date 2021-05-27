// import React, { useState , Component} from "react";
 import { TextField, MaskedTextField } from '@fluentui/react/lib/TextField';
 import { SearchBox } from '@fluentui/react/lib/SearchBox';
// export default class CreateMatter extends Component {
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
//               <form onSubmit={this.onSubmit}>
//                   <div className="form-group">
//                       <label></label>
//                       <SearchBox placeholder="Search" / > 
//                       {/* <input type="text" className="form-control" value={this.state.name} onChange={this.onChangeName} /> */}
//                   </div>
//                   <br></br>
//                   <div className="form-group">
                     
//                   <TextField  type=" description" placeholder="Matter  Description" className="form-control" value={this.state.description} onChange={this.onChangeDescription} />
//                   </div>
//                   <br></br>
//                   <div className="form-group">
                   
//                   <TextField  type="template" placeholder="Select Matter Template" className="form-control" value={this.state.template} onChange={this.onChangeTemplate} />
//                   </div>
//                   <br></br>
                  
//               </form>
//           </div>
//         )
//     }
// }
import * as React from 'react';

export default class TextFieldBasicExample extends React.Component <any, any>{
    userData:any;
  
    constructor(props:any) {
        super(props);
  
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onChangeTemplate = this.onChangeTemplate.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
  
        this.state = {
          //  name: '',
           description: '',
            template: ''
        }
    }
  
    // Form Values
    onChangeName(e:any) {
        this.setState({ name: e.target.value })
    }
  
    onChangeDescription(e:any) {
        this.setState({  description: e.target.value })
    }
  
    onChangeTemplate(e:any) {
        this.setState({ template: e.target.value })
    }
  
  
    // React Life Cycle
    componentDidMount() {
        this.userData = JSON.parse(localStorage.getItem('user')|| '{}');
       // this.currentUser = JSON.parse(localStorage.getItem('currentUser') || '{}');
        if (localStorage.getItem('user')) {
            this.setState({
                name: this.userData.name,
                description: this.userData.description,
                template: this.userData.template
            })
        } else {
            this.setState({
                name: '',
                description: '',
                template: ''
            })
        }
    }
  
    componentWillUpdate(nextProps:any, nextState:any) {
        localStorage.setItem('user', JSON.stringify(nextState));
    }
  
    onSubmit(e:any) {
        e.preventDefault()
        console.log(this.state.props)
    }
  
  
    render() {
        return (
            <div className="container">
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label></label>
                        <SearchBox placeholder="Search" / > 
                        {/* <input type="text" className="form-control" value={this.state.name} onChange={this.onChangeName} /> */}
                    </div>
                    <br></br>
                    <div className="form-group">
                       
                    <TextField  type=" description" placeholder="Matter  Description" className="form-control" value={this.state.description} onChange={this.onChangeDescription} />
                    </div>
                    <br></br>
                    <div className="form-group">
                     
                    <TextField  type="template" placeholder="Select Matter Template" className="form-control" value={this.state.template} onChange={this.onChangeTemplate} />
                    </div>
                    <br></br>
                    
                </form>
            </div>
        )
    }
  }
  
  

