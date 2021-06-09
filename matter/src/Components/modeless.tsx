import * as React from 'react';
import {useState,useEffect} from 'react';
import { Dialog, DialogType, DialogFooter } from '@fluentui/react/lib/Dialog';
import { PrimaryButton, DefaultButton } from '@fluentui/react/lib/Button';
import { Toggle } from '@fluentui/react/lib/Toggle';
import { ContextualMenu } from '@fluentui/react/lib/ContextualMenu';
import { useBoolean } from '@fluentui/react-hooks';
import { CommandBarButton } from '@fluentui/react';
import { IIconProps, Stack, IStackStyles } from '@fluentui/react';
import TextFieldBasicExample from '../text';
import CreateMatterPopUp from '../text';
// import { Button } from "../ReuseableComp/Buttons";
import {Button}  from 'luigi-reuseable-comp';
import { mergeStyles, mergeStyleSets } from '@fluentui/react/lib/Styling';


const classNames = mergeStyleSets({
  deepSkyBlue: [{ color: 'deepskyblue' }],
  greenYellow: [{ color: 'greenyellow' }],
 
})

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

export const DialogModelessExample: React.FunctionComponent = (props:any) => {
  
const [isSubmitted,setSubmit]=useState(false);
const key="Matter"
const subKey="Pop"

const alert=()=>{
  console.log("submit"+JSON.stringify(props.info))
  props.sendFuncForm(true,key,subKey);
  
  toggleHideDialog(); 

}

const sendfirst=()=>{
  console.log("+ click"+JSON.stringify(props.info))
  props.sendFuncForm(false,key,subKey)
  toggleHideDialog()
}
var value;

if(props.info)
{
   value=props.info.Pop;

}else{
  value=true
}

  const [hideDialog, { toggle: toggleHideDialog }] = useBoolean(value);



  const [isDraggable, { toggle: toggleIsDraggable }] = useBoolean(true);
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
      <Button HandleFunc={sendfirst} text="Create" icon="Add" ButtonType="CommandBar"  styles={{height:"33px"}}/>
         {/* <CommandBarButton  iconProps={addIcon} text="Create"  onClick={sendfirst} style={{height:"28px"}}  />  */}
     </Stack>
    
      
      </div>
      
      <Dialog
        hidden={hideDialog}
       onDismiss={toggleHideDialog}
        dialogContentProps={dialogContentProps}
        modalProps={modalProps}
      >
              {/* <TextFieldBasicExample /> */}
              <CreateMatterPopUp alert={alert} sendFuncForm={ props.sendFuncForm} info={props.info} />
        {/* <DialogFooter>
          <PrimaryButton onClick={alert}  text="Save and Open" />
        </DialogFooter> */}
      </Dialog> 


      
    </>
  );
};
