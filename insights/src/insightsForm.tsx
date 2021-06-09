// import React, { useState,useEffect } from 'react'
// import { TextField, MaskedTextField } from '@fluentui/react/lib/TextField';
// import { Stack, IStackProps, IStackStyles } from '@fluentui/react/lib/Stack';
// import { DropdownErrorExample } from './Components/dropdown';
// import { SearchBox } from '@fluentui/react/lib/SearchBox';
// import { ButtonCommandBarExample } from './Components/CreateButton';
// import { PrimaryButton, DefaultButton } from '@fluentui/react/lib/Button';

// const stackTokens = { childrenGap: 50 };
// const iconProps = { iconName: 'Calendar' };

// const stackStyles: Partial<IStackStyles> = { root: { width: 650 } };
// const columnProps: Partial<IStackProps> = {
//   tokens: { childrenGap: 15 },
//   styles: { root: { width: 300 } },
// };
// const AddUserForm = (props:any) => {

//  // const initialFormState =  props.info;
//  const key="Insight"
//  const subkey="InsForm"
//  const  initialFormState = {name:'',username:''};

  
//  const [user, setUser] = useState(initialFormState)

//   useEffect(() => {
    
//     if (props.info) {
          
//         setUser(props.info.InsForm);    
//         } else {
//             setUser({name:'',username:''})
//         }
       
//   },[]);

//   const handleInputChange = (event:any) => {
//     const { name, value } = event.target
//     setUser({ ...user, [name]: value })

//     props.Receive({ ...user, [name]: value },key,subkey)
//   }


//   const submit=(event:any) => {
//     const { name, value } = event.target
//     event.preventDefault()
//     if (!user.name || !user.username) return
//     props.Receive({ ...user, [name]: value },key,subkey)
//     // props.Receive({name:'',username:''},key,subkey)

//     setUser( {name:'',username:''})
    
    
//   }

  



//   return (
//   //   <form onSubmit={submit}>
//   //   <label>Name</label>
//   //   <input
//   //     type="text"
//   //     name="name"
//   //     value={user.name|| ''}
//   //     onChange={handleInputChange}
//   //   />
//   //   <label>Username</label>
//   //   <input
//   //     type="text"
//   //     name="username"
//   //     value={user.username || ''}
//   //     onChange={handleInputChange}
//   //   />
//   //   < PrimaryButton onClick={submit} text="Save"/> 
//   //   <button>Add new user</button>
//   // </form>

//   <div>
      
//        <Stack horizontal tokens={stackTokens} styles={stackStyles}>
//           <Stack {...columnProps}>
   
//       <form onSubmit={submit} >
//       <TextField  placeholder="Enter Client"
        
//          name="name"
       
//          value={user.name || ''}
//          onChange={handleInputChange}
       
//        />
//         < br/>
//        <TextField  placeholder="Enter Location"
      
//          name="username"
//        value={user.username || ''}
//          onChange={handleInputChange}
//        />
//        <br/>
//         <br/>
//      < PrimaryButton   onClick={submit} text="Save"/> 
//      </form>
   
//      </Stack>
   
//      </Stack>
//      <br/>
//      {/* < PrimaryButton  onClick={submit} text="Save"/>  */}
    
//      </div>
  
//   )
  
//   }
// export default AddUserForm;




// //without use state 

import { TextField, MaskedTextField } from '@fluentui/react/lib/TextField';
import { Stack, IStackProps, IStackStyles } from '@fluentui/react/lib/Stack';
import { PrimaryButton, DefaultButton } from '@fluentui/react/lib/Button';
import React, { useState,useEffect } from 'react'
const stackTokens = { childrenGap: 50 };
const iconProps = { iconName: 'Calendar' };

const stackStyles: Partial<IStackStyles> = { root: { width: 650 } };
const columnProps: Partial<IStackProps> = {
  tokens: { childrenGap: 15 },
  styles: { root: { width: 300 } },
};
const AddUserForm = (props:any) => {

 const key="Insight"
 const subkey="InsForm"
 let  initialFormState = {name:'',username:''};

  if (props.info) {
 
     console.log("props.info" + props.info)
     initialFormState =props.info.InsForm;
  }


  else {
    initialFormState = { name: '', username: '' };

  }
      
  

  const handleInputChange = (event:any) => {
      const { name, value } = event.target;
     initialFormState={... initialFormState, [name]: value };   
     props.Receive({ ...initialFormState, [name]: value },key,subkey)
   
    
  }


  const submit=(event:any) => {
   
    event.preventDefault()
    if (!initialFormState.name || !initialFormState.username) return
      props.Receive({name: '', username: ''},key,subkey)  
 
  }

  




  return (
    
    <div>
      
    <Stack horizontal tokens={stackTokens} styles={stackStyles}>
       <Stack {...columnProps}>
 
<form onSubmit={submit}>
    <TextField  placeholder="Enter Client"
      type="text"
      name="name"
     
      value={initialFormState.name  }
      onChange={handleInputChange}
     
    />
     < br/>
    <TextField  placeholder="Enter Location"
      type="text"
      name="username"
      value={initialFormState.username }
      onChange={handleInputChange}
    />
    <br/>
    <br/>
   < PrimaryButton  type="submit" text="Save"/> 
   </form>
  </Stack>
 
  </Stack>
  <br/>
  {/* < PrimaryButton  onClick={submit} text="Save"/>  */}
  
  </div>
  )
  
  }
export default AddUserForm;