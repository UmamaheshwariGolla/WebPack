import * as React from 'react';
import { Dialog, DialogType, DialogFooter } from '@fluentui/react/lib/Dialog';
import { PrimaryButton, DefaultButton } from '@fluentui/react/lib/Button';
import { ContextualMenu } from '@fluentui/react/lib/ContextualMenu';
import { SpinButton } from '@fluentui/react/lib/SpinButton';
import { Toggle } from '@fluentui/react/lib/Toggle';
import { ComboBox, IComboBoxOption, SelectableOptionMenuItemType } from '@fluentui/react/lib/index';
import { useBoolean } from '@fluentui/react-hooks';
import { ButtonCommandBarExample } from './CreateButton';
import { IIconProps, Stack, IStackStyles } from '@fluentui/react';
import { CommandBarButton } from '@fluentui/react/lib/Button';
import { SearchBox } from '@fluentui/react/lib/SearchBox';
import TextFieldBasicExample from '../text';
import { DropdownErrorExample } from './dropdown';

const addIcon: IIconProps = { iconName: 'Add' };
const dragOptions = {
  moveMenuItemText: 'Move',
  closeMenuItemText: 'Close',
  menu: ContextualMenu,
};
const modalPropsStyles = { main: { maxWidth: 450 } };
const iconProps = { iconName: 'IncreaseIndentLegacy' };


const dialogContentProps = {
  type: DialogType.normal,
  title: 'Create Matter',
//   subText: 'enter the details',
};
const log = (text: string): (() => void) => {
  return (): void => {
    console.log(text);
  };
};
const stackStyles1: Partial<IStackStyles> = { root: { height: 44 } };
const stackStyles: Partial<IStackStyles> = { root: { height: 44 } };

export const DialogBlockingExample: React.FunctionComponent = () => {
  const [hideDialog, { toggle: toggleHideDialog }] = useBoolean(true);
  const [isDraggable, { toggle: toggleIsDraggable }] = useBoolean(true);
  const modalProps = React.useMemo(
    () => ({
      isBlocking: true,
      styles: modalPropsStyles,
    dragOptions: isDraggable? dragOptions : undefined,

    }),
    [isDraggable],
  );

  return (
    <>
   
      <Stack horizontal styles={stackStyles}>
      <CommandBarButton iconProps={addIcon} text="Create" onClick={toggleHideDialog}  />
     </Stack>
    
      
      <Dialog
        hidden={hideDialog}
        onDismiss={toggleHideDialog}
        dialogContentProps={dialogContentProps}
        modalProps={modalProps}
      >
      <TextFieldBasicExample/>
      <DropdownErrorExample/>
        <DialogFooter>
          <PrimaryButton onClick={toggleHideDialog} text="Submit" />
        
        </DialogFooter>
      </Dialog>
    </>
  );
};
