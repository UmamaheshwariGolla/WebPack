import React from 'react';
import { DetailsList } from '@fluentui/react';

import { IIconProps, Stack, IStackStyles } from '@fluentui/react';
import { FontIcon } from '@fluentui/react/lib/Icon';
import { mergeStyles, mergeStyleSets } from '@fluentui/react/lib/Styling';

const classNames = mergeStyleSets({
    table: {
        margin: 'auto',
    },
});
const iconClass = mergeStyles({
  fontSize: 20,
  height: 20,
  width: 20,
  margin: '0 25px',
});
const classNames1 = mergeStyleSets({
  deepSkyBlue: [{ color: 'deepskyblue' }, iconClass],
  greenYellow: [{ color: 'greenyellow' }, iconClass],
  salmon: [{ color: 'salmon' }, iconClass],
  black: [{ color: 'black' }, iconClass],
});
//iconProps={addIcon}
const addIcon: IIconProps = { iconName: 'Add' };
const operations = [
    {
      icon:classNames1.greenYellow,
      from: 'Pepptech',
      to: 'contract Advices',
  
      date: '20-05-2020',
    },
    {
      icon:classNames1.deepSkyBlue,
      from: 'pepptech',
      to: 'contract advices',
  
      date: '19-05-2020',
    },
    {
      icon:classNames1.greenYellow,
      from: 'Willis Walker',
      to: 'Advisers',
    
      date: '18-05-2020',
    },
    {
      icon:classNames1.greenYellow,
        from: 'Pepptech',
        to: 'Unfair Dismissal',
    
        date: '20-05-2020',
      },
      {
        icon:classNames1.greenYellow,
        from: 'pepptech',
        to: 'Aquasition',
    
        date: '19-05-2020',
      },
      {
        icon:classNames1.greenYellow,
        from: 'Willis Walker',
        to: 'Advisers',
      
        date: '18-05-2020',
      },
 
]



const columns = [
  {key: 'column1', name: '', fieldName: 'icon', minWidth: 100, maxWidth: 80, isResizable: true,
  onRender: () => (
  
    <FontIcon aria-label="Dictionary" iconName="Dictionary" className={classNames1.greenYellow} />
 
  ),
},
    {key: 'column2', name: 'Team', fieldName: 'from', minWidth: 100, maxWidth: 200, isResizable: true},
    {key: 'column3', name: 'Matter', fieldName: 'to', minWidth: 100, maxWidth: 200, isResizable: true},
    {key: 'column4', name: 'Last Activity', fieldName: 'date', minWidth: 100, maxWidth: 200, isResizable: true},
    {key: 'column5', name: '', fieldName: 'icon', minWidth: 100, maxWidth: 200, isResizable: true, 
  onRender: () => (
  <div>
    <FontIcon aria-label="Chat" iconName="Chat" className={classNames1.black} />
    <FontIcon aria-label="Add" iconName="Add" className={classNames1.black} />
    <FontIcon aria-label="MoreHorizontal" iconName="MoreHorizontal" className={classNames1.black} />
    </div>
  ),
}

  ]

const OperationsTable = () => {

    return(
        <div data-is-scrollable={true}>
           {/* <FontIcon aria-label="Compass" iconName="CompassNW" className={classNames1.deepSkyBlue} />
      <FontIcon aria-label="Dictionary" iconName="Dictionary" className={classNames1.greenYellow} />
      <FontIcon aria-label="Train" iconName="TrainSolid" className={classNames1.salmon} /> */}
            <div className={`s-Grid-col ms-sm9 ms-xl9 ${classNames.table}`} >
             
               <DetailsList
                    items={operations}
                    columns={columns}
                    selectionMode={0}
                /> 
            </div>
        </div>
    );
}

export default OperationsTable;