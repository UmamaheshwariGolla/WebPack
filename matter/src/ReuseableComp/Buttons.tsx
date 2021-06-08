import * as React from 'react';
import { Stack, IStackTokens } from '@fluentui/react';
import { CommandBarButton, DefaultButton, PrimaryButton } from '@fluentui/react/lib/Button';
import { IContextualMenuProps, IIconProps } from '@fluentui/react';

interface Props {
  ButtonType:string;
   icon?:string,
    text:string;
    HandleFunc ?: (user:any) => void;
    styles?:any;
  }


// Example formatting
const stackTokens: IStackTokens = { childrenGap: 40 };

export const Button: React.FunctionComponent<Props> = (props) => {
    const {text, HandleFunc,icon,ButtonType,styles} = props;
    const PassedIcon: IIconProps = { iconName: icon };





  return (
    <Stack horizontal tokens={stackTokens}>
      
      {(() => {

  

        switch (ButtonType) {

          case 'Primary':

            return (

              <PrimaryButton text={text}  iconProps={PassedIcon} onClick={HandleFunc} style={styles} />

            )

          case 'Default':

            return (

            
              <DefaultButton text={text}  iconProps={PassedIcon} onClick={HandleFunc} style={styles}/>
            )

            case 'CommandBar':

              return (
  
                <CommandBarButton text={text}  iconProps={PassedIcon} onClick={HandleFunc} style={styles} />
  
              )

        }



      })()}
      {/* {
        ButtonType==="Primary"?
        <DefaultButton text={text}  iconProps={PassedIcon} onClick={HandleFunc} />:
        <PrimaryButton text={text}  iconProps={PassedIcon} onClick={HandleFunc} />
      } */}
     
    </Stack>
  );
};


