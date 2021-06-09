
 import { TextField, MaskedTextField } from '@fluentui/react/lib/TextField';
 import { SearchBox } from '@fluentui/react/lib/SearchBox';
 import { PrimaryButton, DefaultButton } from '@fluentui/react/lib/Button';

import { Stack, IStackProps, IStackStyles } from '@fluentui/react/lib/Stack';

const stackTokens = { childrenGap: 50 };
const iconProps = { iconName: 'Calendar' };

const stackStyles: Partial<IStackStyles> = { root: { width: 650 } };
const columnProps: Partial<IStackProps> = {
  tokens: { childrenGap: 15 },
  styles: { root: { width: 300 } },
};
import ErrorBoundary from './errorboundary';
import { useHistory } from 'react-router-dom';
import { withRouter,RouteComponentProps } from 'react-router-dom';


import * as React from 'react';




// interface Props {
   
//     sendFuncForm: (user:any) => void
//     info:any
//     history?: any    
//     state:any

//   }

// class CreateMatterForm extends React.Component <any,any,Props >{
   

//     userData:any;
//    key="Matter";
//     constructor(props:Props) {
//         super(props);
//   ;
//         this.onChangeName = this.onChangeName.bind(this);
//         this.onChangeDescription = this.onChangeDescription.bind(this);
//         this.onChangeTemplate = this.onChangeTemplate.bind(this);
//         this.onSubmit = this.onSubmit.bind(this);

//        //console.log("info"+ JSON.stringify(this.props.location.info));
  
//         this.state = {
         
//            description: '',
//             template: ''
//         }
//     }

//     onChangeName(e:any) {
//         this.setState({ name: e.target.value }
//         //     ,
//         // this.props.sendFuncForm(this.state)
//             )
        
//     }
  
//     onChangeDescription(e:any) {
//         this.setState({  description: e.target.value }
//             // ,  
//             // this.props.sendFuncForm(this.state)
//             )
//     }
  
//     onChangeTemplate(e:any) {
//         this.setState({ template: e.target.value }
//             // ,
//             // this.props.sendFuncForm(this.state)
//             )
//     }
  
  
   
//     componentDidMount() {
       
//         //this.userData = JSON.parse(localStorage.getItem('user')|| '{}');
//         //console.log("userData"+""+ JSON.stringify((this.userData)));
        
//         if (this.props.info) {
          
//         this.setState(this.props.info);    
//         } else {
//             this.setState({            
//                 description: '',
//                 template: ''
//             })
//         }
        

//         // if (localStorage.getItem('user')) {
//         //     console.log(localStorage.getItem('user'))
//         // this.setState({
               
//         //         description: this.userData.description,
//         //         template: this.userData.template
//         //     })

         
           
//         // } else {
//         //     this.setState({
             
//         //         description: '',
//         //         template: ''
//         //     })
//         // }
//     }
  
//     componentWillUpdate(nextProps:any, nextState:any) {
      
//       //  const key="Matter";
//      this.props.sendFuncForm(nextState);
       
//         //this.props.location.state.sendFuncForm("nn");
    
//       // localStorage.setItem('user', JSON.stringify(nextState));
//     }

   

//     onSubmit(e:any) {
//         e.preventDefault()

//         this.setState({
//         description: '',
//         template: ''
//         })
   
      
//     }
  
  
//     render() {
//         return (

            
//             <div className="container">
//                   <form  >

//                     <Stack horizontal tokens={stackTokens} styles={stackStyles}>
//                     {/* <DefaultButton  text="Back" onClick={() =>this.props.history.push('/') } / >  */}
//                     <Stack {...columnProps}>
                      
//                         <SearchBox placeholder="Search" / >    
                     
//                     <TextField  type=" description" placeholder="Matter  Description" className="form-control" value={this.state.description} onChange={this.onChangeDescription} />      
//                     <TextField  type="template" placeholder="Select Matter Template" className="form-control" value={this.state.template} onChange={this.onChangeTemplate} />
                
//                      <div> < PrimaryButton text="Save" onClick={this.onSubmit} /> 
//                      &nbsp;
//                    < PrimaryButton text="Clear" onClick={this.onSubmit} /> </div>
                   
//                    {/* <button type="submit" className="btn btn-primary btn-block">Submit</button> */}
//                    </Stack>
//                     </Stack>
//                 </form>
//             </div>
//         )
//     }
//   }

// export default CreateMatterForm;







//The onw which is working fine withh functional compoenets
// import { useState,useEffect } from 'react'

// const CreateMatterForm = (props:any) => {
 
//  // const initialFormState =  props.info;

//  const key="Matter"
//  const subKey="CreateMatter"
//  const  initialFormState = {description:'',template:''};
//   const [user, setUser] = useState(initialFormState)

//   useEffect(() => {
    
//     if (props.info) {
          
//         setUser(props.info.CreateMatter);    
//         } else {
//             setUser({description:'',template:''})
//         }
       
//   },[]);

//   const handleInputChange = (event:any) => {
//     const { name, value } = event.target
//     setUser({ ...user, [name]: value })

//     props. sendFuncForm({ ...user, [name]: value },key, subKey)
//   }


//   const submit=(event:any) => {
    
//     event.preventDefault()
//     if (!user.description || !user.template) return

//      props. sendFuncForm({description:'',template:''},key, subKey)

//     setUser( {description:'',template:''})
    
    
//   }

  



//   return (
//     <form
//       onSubmit={submit}
//     >
//       <label>Description</label>
//       <input
//         type="text"
//         name="description"
//         value={user.description|| ''}
//         onChange={handleInputChange}
//       />
//       <label>template</label>
//       <input
//         type="text"
//         name="template"
//         value={user.template|| ''}
//         onChange={handleInputChange}
//       />
//       <button>Add</button>
//     </form>
//   )
// }

// export default CreateMatterForm;


















//The one which is working fine withh functional compoenets

import { useState,useEffect } from 'react'
import {DialogModelessExample} from './Components/modeless';
const CreateMatterForm = (props:any) => {
 
 // const initialFormState =  props.info;

 const key="Matter"
 const subKey="CreateMatter"
 const  initialFormState = {description:'',template:''};

const [user, setUser] = useState(initialFormState)

  useEffect(() => {
    
    if (props.info) {
          
        setUser(props.info.CreateMatter);    
        } else {
            setUser({description:'',template:''})
        }
       
  },[]);

  const handleInputChange = (event:any) => {
    const { name, value } = event.target
    setUser({ ...user, [name]: value })

    props. sendFuncForm({ ...user, [name]: value },key, subKey)
  }

const  handleInputBlur= (event:any) => {
  const { name, value } = event.target
  //setUser({ ...user, [name]: value })

  //props. sendFuncForm({ ...user, [name]: value },key, subKey)
}
  const submit=(event:any) => {
    
    event.preventDefault()
    if (!user.description || !user.template) return

     props. sendFuncForm({description:'',template:''},key, subKey)

    setUser( {description:'',template:''})
    
    
  }

  

  return (
    <div>
      <DefaultButton  text="Back" onClick={() =>props.history.push('/') } / > 
      <br/>
      <br/>
    <form
      onSubmit={submit}
    >
      <label>Description</label>
      <input
        type="text"
        name="description"
        value={user.description|| ''}
        onChange={handleInputChange}
        onBlur={handleInputBlur}
      />
      <label>template</label>
      <input
        type="text"
        name="template"
        value={user.template|| ''}
        onChange={handleInputChange}
        onBlur={handleInputBlur}
      />
      <button>Add</button>
    </form>
    </div>
  )
}

//export default CreateMatterForm;
export default withRouter(CreateMatterForm);


