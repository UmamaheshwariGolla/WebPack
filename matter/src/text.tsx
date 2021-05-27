import * as React from 'react';
import { TextField, MaskedTextField } from '@fluentui/react/lib/TextField';
import { Stack, IStackProps, IStackStyles } from '@fluentui/react/lib/Stack';
import { DropdownErrorExample } from './Components/dropdown';
import { SearchBox } from '@fluentui/react/lib/SearchBox';
import { ButtonCommandBarExample } from './Components/CreateButton';

const stackTokens = { childrenGap: 50 };
const iconProps = { iconName: 'Calendar' };

const stackStyles: Partial<IStackStyles> = { root: { width: 650 } };
const columnProps: Partial<IStackProps> = {
  tokens: { childrenGap: 15 },
  styles: { root: { width: 300 } },
};

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


