import * as React from 'react';
import { TextField, MaskedTextField } from '@fluentui/react/lib/TextField';
import { Stack, IStackProps, IStackStyles } from '@fluentui/react/lib/Stack';
import { DropdownErrorExample } from './Components/dropdown';
import { SearchBox } from '@fluentui/react/lib/SearchBox';

const stackTokens = { childrenGap: 50 };
const iconProps = { iconName: 'Calendar' };
const stackStyles: Partial<IStackStyles> = { root: { width: 650 } };
const columnProps: Partial<IStackProps> = {
  tokens: { childrenGap: 15 },
  styles: { root: { width: 300 } },
};

 const TextFieldBasicExample: React.FunctionComponent = () => {
  return (
    <Stack horizontal tokens={stackTokens} styles={stackStyles}>
      <Stack {...columnProps}>
        <SearchBox placeholder="Search" / >
        <TextField  defaultValue="Matter Description"/>
        <DropdownErrorExample/>
      </Stack>
    </Stack>
  );
};

export default TextFieldBasicExample;