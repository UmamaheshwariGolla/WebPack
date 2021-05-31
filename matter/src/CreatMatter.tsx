
 import { TextField, MaskedTextField } from '@fluentui/react/lib/TextField';
 import { SearchBox } from '@fluentui/react/lib/SearchBox';
 import { PrimaryButton, DefaultButton } from '@fluentui/react/lib/Button';

import { Stack, IStackProps, IStackStyles } from '@fluentui/react/lib/Stack';
import { DropdownErrorExample } from './Components/dropdown';

import { ButtonCommandBarExample } from './Components/CreateButton';

const stackTokens = { childrenGap: 50 };
const iconProps = { iconName: 'Calendar' };

const stackStyles: Partial<IStackStyles> = { root: { width: 650 } };
const columnProps: Partial<IStackProps> = {
  tokens: { childrenGap: 15 },
  styles: { root: { width: 300 } },
};


import * as React from 'react';
import Products from './products.json';
import { setupMaster } from 'cluster';
interface Props {
   
    sendFuncForm: (user:any) => void
    info:any
  }

export default class CreateMatterForm extends React.Component <any,any,Props>{
    userData:any;
  
    constructor(props:Props) {
        super(props);
  
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onChangeTemplate = this.onChangeTemplate.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
      //  console.log("info"+ JSON.stringify(this.props.info));
  
        this.state = {
         
           description: '',
            template: ''
        }
    }

    onChangeName(e:any) {
        this.setState({ name: e.target.value })
    }
  
    onChangeDescription(e:any) {
        this.setState({  description: e.target.value })
    }
  
    onChangeTemplate(e:any) {
        this.setState({ template: e.target.value })
    }
  
  
   
    componentDidMount() {
        //this.userData = JSON.parse(localStorage.getItem('user')|| '{}');
       // console.log("userData"+""+ JSON.stringify((this.userData)));
        

        
        if (this.props.info) {
          
        this.setState(this.props.info)

         
           
        } else {
            this.setState({            
                description: '',
                template: ''
            })
        }
        
        // if (localStorage.getItem('user')) {
        //     console.log(localStorage.getItem('user'))
        // this.setState({
               
        //         description: this.userData.description,
        //         template: this.userData.template
        //     })

         
           
        // } else {
        //     this.setState({
             
        //         description: '',
        //         template: ''
        //     })
        // }
    }
  
    componentWillUpdate(nextProps:any, nextState:any) {
   
     this.props.sendFuncForm(nextState)
       // localStorage.setItem('user', JSON.stringify(nextState));
    }

   

    onSubmit(e:any) {
        e.preventDefault()

        this.setState({
        description: '',
        template: ''
        })
   
      // localStorage.setItem('user',JSON.stringify(""));    
    // this.props.sendFuncForm(this.state);
    }
  
  
    render() {
        return (

            
            <div className="container">
                  <form  >
                    <Stack horizontal tokens={stackTokens} styles={stackStyles}>
                    <Stack {...columnProps}>
                        <SearchBox placeholder="Search" / >        
                    <TextField  type=" description" placeholder="Matter  Description" className="form-control" value={this.state.description} onChange={this.onChangeDescription} />      
                    <TextField  type="template" placeholder="Select Matter Template" className="form-control" value={this.state.template} onChange={this.onChangeTemplate} />
                     <div> < PrimaryButton text="Save" onClick={this.onSubmit} /> 
                     &nbsp;
                   < PrimaryButton text="Clear" onClick={this.onSubmit} /> </div>
                   
                   {/* <button type="submit" className="btn btn-primary btn-block">Submit</button> */}
                   </Stack>
                    </Stack>
                </form>
            </div>
        )
    }
  }




  

