import * as React from 'react';
import { IIconProps, Stack, IStackStyles } from '@fluentui/react';
import { CommandBarButton } from '@fluentui/react/lib/Button';

export interface IButtonExampleProps {
  // These are set based on the toggles shown above the examples (not needed in real code)
  disabled?: boolean;
  checked?: boolean;
}


const addIcon: IIconProps = { iconName: 'Add' };

const stackStyles: Partial<IStackStyles> = { root: { height: 44 } };

export const ButtonCommandBarExample: React.FunctionComponent<IButtonExampleProps> = props => {
  const { disabled, checked } = props;

  // Here we use a Stack to simulate a command bar.
  // The real CommandBar control also uses CommandBarButtons internally.
  return (
    <Stack horizontal styles={stackStyles}>
      <CommandBarButton iconProps={addIcon} text="Create" disabled={disabled} checked={checked}    />
    </Stack>
    
  );
};


export default  ButtonCommandBarExample;