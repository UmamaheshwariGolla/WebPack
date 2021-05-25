import * as React from 'react';
import { SearchBox } from '@fluentui/react/lib/SearchBox';
import { Stack} from '@fluentui/react/lib/Stack';


export const SearchBoxFullSizeExample = () => {
  return (
    <Stack >
      <SearchBox placeholder="Search" onSearch={newValue => console.log('value is ' + newValue)} />
      <SearchBox
        placeholder="Search with no animation"
        onSearch={newValue => console.log('value is ' + newValue)}
        disableAnimation
      />
    </Stack>
  );
};

