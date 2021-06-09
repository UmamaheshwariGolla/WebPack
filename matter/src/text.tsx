import * as React from 'react';
import { TextField, MaskedTextField } from '@fluentui/react/lib/TextField';
import { Stack, IStackProps, IStackStyles } from '@fluentui/react/lib/Stack';

import { PrimaryButton, DefaultButton } from '@fluentui/react/lib/Button';
const stackTokens = { childrenGap: 50 };
const iconProps = { iconName: 'Calendar' };

const stackStyles: Partial<IStackStyles> = { root: { width: 650 } };
const columnProps: Partial<IStackProps> = {
  tokens: { childrenGap: 15 },
  styles: { root: { width: 300 } },
};
import { withRouter,RouteComponentProps } from 'react-router-dom';
//
//  const TextFieldBasicExample: React.FunctionComponent = () => {
//   return (
//     <Stack horizontal tokens={stackTokens} styles={stackStyles}>
//       <Stack {...columnProps}>
        
//         <SearchBox placeholder="Search" / > 
    
       
//         <TextField  placeholder="Matter Description"/>
//         <DropdownErrorExample/>
//       </Stack>
//     </Stack>
//   );
// };

// export default TextFieldBasicExample;

//export default class Matter extends Component 




// export default class CreateMatterPopUp extends React.Component <any, any>{
//   userData:any;

//   constructor(props:any) {
//       super(props);

      
//       this.onChangeDescription = this.onChangeDescription.bind(this);
//       this.onChangeTemplate = this.onChangeTemplate.bind(this);
//       this.onSubmit = this.onSubmit.bind(this);

//       this.state = {
     
//          description: '',
//           template: ''
//       }
//   }

//   // Form Values

//   onChangeDescription(e:any) {
//       this.setState({  description: e.target.value })
//   }

//   onChangeTemplate(e:any) {
//       this.setState({ template: e.target.value })
//   }


//   // React Life Cycle
//   componentDidMount() {
//       this.userData = JSON.parse(localStorage.getItem('user')|| '{}');
     
//       if (localStorage.getItem('user')) {
//           this.setState({
             
//               description: this.userData.description,
//               template: this.userData.template
//           })
//       } else {
//           this.setState({
           
//               description: '',
//               template: ''
//           })
//       }
//   }

//   componentWillUpdate(nextProps:any, nextState:any) {
//       localStorage.setItem('user', JSON.stringify(nextState));
//   }

//   onSubmit(e:any) {
//       e.preventDefault()
//       //console.log(this.state.props)
//       this.setState({
           
//         description: '',
//         template: ''
//     })
//   }


//   render() {
//       return (
//           <div   >
              
//               <form  onSubmit={this.onSubmit}>
               
//                   <div className="form-group">
//                       <label></label>
//                       <SearchBox placeholder="Search" / > 
                    
//                   </div>
//                   <br></br>
//                   <div className="form-group" >
                 
//                   <TextField  type=" description" placeholder="Matter  Description" className="form-control" value={this.state.description} onChange={this.onChangeDescription} />
//                   </div>
//                   <br></br>
//                   <div className="form-group">
               
//                   <TextField  type="template" placeholder="Select Matter Template" className="form-control" value={this.state.template} onChange={this.onChangeTemplate} />
//                   </div>
//                   <br>
              
//                   </br>
                  
                 
               






//               </form> 
             
//           </div>
//       )
//   }
// }


import { useState,useEffect } from 'react'
import {DialogModelessExample} from './Components/modeless';
const CreateMatterPopUp = (props:any) => {
 
 // const initialFormState =  props.info;
//console.log(JSON.stringify(props));
 const key="Matter"
 const subKey="CreateMatter"
 const pop="Pop";
 const  initialFormState = {description:'',template:''};

const [user, setUser] = useState(initialFormState)

  useEffect(() => {
    
    // if (props.info) {
       
    //     setUser(props.info.CreateMatter);    
    //     } else {
    //         setUser(initialFormState)
    //     }

    if (props.info) {
       if(props.info.CreateMatter){
              setUser(props.info.CreateMatter);    
        } 
    }else {
            setUser(initialFormState)
        }
       
  },[]);

  const handleInputChange = (event:any) => {
    const { name, value } = event.target
    setUser({ ...user, [name]: value })

    //props. sendFuncForm({ ...user, [name]: value },key, subKey)
  }

const  handleInputBlur= (event:any) => {
  const { name, value } = event.target
  props. sendFuncForm({ ...user, [name]: value },key, subKey) //setting the the the data for the form values in container
}

  const submit=(event:any) => {
    event.preventDefault()
    if (!user.description || !user.template) return

    props. sendFuncForm({description:'',template:''},key, subKey)
     props.alert(); //setting the state of the popup
  }

  const clear=(event:any) => {
    event.preventDefault()
    if (!user.description || !user.template) return
    setUser( {description:'',template:''})
  
    props. sendFuncForm({description:'',template:''},key, subKey)

  }
  
  return (
    <div>
     
      <br/>
      <br/>
    <form
     
    >
 
       <TextField  placeholder="Matter  Description"  
     
        name="description"
       value={user.description||''}
        onChange={handleInputChange}
        onBlur={handleInputBlur}
     
      />
     <br/>
      <TextField  placeholder="Template"  
      
        name="template"
        value={user.template}
        onChange={handleInputChange}
        onBlur={handleInputBlur}
      />
      <br/>
      <br/>
      
      < PrimaryButton  onClick={submit} text="Save"/> &nbsp;
      < PrimaryButton  onClick={clear} text="Clear"/>
    </form>
    </div>
  )
}


export default CreateMatterPopUp;







  
  
  