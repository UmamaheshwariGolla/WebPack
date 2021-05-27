import * as React from 'react';
import { Dialog, DialogType, DialogFooter } from '@fluentui/react/lib/Dialog';
import { PrimaryButton, DefaultButton } from '@fluentui/react/lib/Button';
import { Toggle } from '@fluentui/react/lib/Toggle';
import { ContextualMenu } from '@fluentui/react/lib/ContextualMenu';
import { useBoolean } from '@fluentui/react-hooks';
import { CommandBarButton } from '@fluentui/react';
import { IIconProps, Stack, IStackStyles } from '@fluentui/react';
import TextFieldBasicExample from '../text';
import history from '../history';

const modalPropsStyles = { main: { maxWidth: 450 } };
const dragOptions = {
  moveMenuItemText: 'Move',
  closeMenuItemText: 'Close',
  menu: ContextualMenu,
};
const addIcon: IIconProps = { iconName: 'Add' };
const iconProps = { iconName: 'IncreaseIndentLegacy' };

const dialogContentProps = {
  type: DialogType.normal,
  title: '',
  subText: '',
};

export const DialogModelessExample: React.FunctionComponent = () => {
  const [hideDialog, { toggle: toggleHideDialog }] = useBoolean(true);
  const [isDraggable, { toggle: toggleIsDraggable }] = useBoolean(false);
  const stackStyles: Partial<IStackStyles> = { root: { height: 44 } };

  const modalProps = React.useMemo(
    () => ({
      styles: modalPropsStyles,
      isModeless: true,
      dragOptions: isDraggable ? dragOptions : undefined,
    }),
    [isDraggable],
  );
  return (
    <>

      <div>
 
      <Stack horizontal styles={stackStyles}>
    
      {/* <CommandBarButton iconProps={addIcon} text="Create"  />
      //onClick={toggleHideDialog}  /> */}
     </Stack>
    
      
      </div>
      <Dialog
        hidden={hideDialog}
        onDismiss={toggleHideDialog}
        dialogContentProps={dialogContentProps}
        modalProps={modalProps}
      >
              <TextFieldBasicExample/>
        <DialogFooter>
          <PrimaryButton onClick={toggleHideDialog} text="Save and Open" />
        
        </DialogFooter>
      </Dialog>
    </>
  );
};
