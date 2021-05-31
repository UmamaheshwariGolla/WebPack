import * as React from 'react';
import { IStyleSet, Label, ILabelStyles, Pivot, PivotItem } from '@fluentui/react';

const labelStyles: Partial<IStyleSet<ILabelStyles>> = {
  root: { marginTop: 10 },
};

interface Props {
      DisplayData:any;
    }

 const a = ['1', '10', '100', '1000', '10000'];
export const Pivots: React.FunctionComponent<Props>= (props) => {
   const {DisplayData} = props;
  return (

<div>
    <Pivot aria-label="Basic Pivot Example">

      {DisplayData.map((i:string) => {
        return <PivotItem headerText={i} key={i}>{i}</PivotItem>;
      })}
    </Pivot>
    </div>

    // <Pivot aria-label="Basic Pivot Example">
    //   <PivotItem
    //     headerText="My Files"
    //     headerButtonProps={{
    //       'data-order': 1,
    //       'data-title': 'My Files Title',
    //     }}
    //   >
    //     <Label styles={labelStyles}>Pivot #1</Label>
    //   </PivotItem>
    //   <PivotItem headerText="Recent">
    //     <Label styles={labelStyles}>Pivot #2</Label>
    //   </PivotItem>
    //   <PivotItem headerText="Shared with me">
    //     <Label styles={labelStyles}>Pivot #3</Label>
    //   </PivotItem> 
    // </Pivot>
  );
};
