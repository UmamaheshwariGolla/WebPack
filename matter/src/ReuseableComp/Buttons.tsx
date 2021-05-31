import * as React from 'react';
import { Stack, IStackTokens } from '@fluentui/react';
import { DefaultButton, PrimaryButton } from '@fluentui/react/lib/Button';
import { IContextualMenuProps, IIconProps } from '@fluentui/react';

interface Props {
  ButtonType:string;
   icon:string,
    text:string;
    HandleFunc: (user:any) => void
  }


// Example formatting
const stackTokens: IStackTokens = { childrenGap: 40 };

export const Button: React.FunctionComponent<Props> = (props) => {
    const {text, HandleFunc,icon,ButtonType} = props;
    const PassedIcon: IIconProps = { iconName: icon };

  return (
    <Stack horizontal tokens={stackTokens}>
      {
        ButtonType==="Primary"?
        <DefaultButton text={text}  iconProps={PassedIcon} onClick={HandleFunc} />:
        <PrimaryButton text={text}  iconProps={PassedIcon} onClick={HandleFunc} />
      }
     
    </Stack>
  );
};


