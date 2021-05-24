import React from 'react';
import { DetailsList } from '@fluentui/react';
import { mergeStyleSets } from 'office-ui-fabric-react/lib/Styling';
import 'office-ui-fabric-react/dist/css/fabric.css';

const classNames = mergeStyleSets({
    table: {
        margin: 'auto',
    },
});

const operations = [
    {
      from: 'Pepptech',
      to: 'contract Advices',
  
      date: '20-05-2020',
    },
    {
      from: 'pepptech',
      to: 'contract advices',
  
      date: '19-05-2020',
    },
    {
      from: 'Willis Walker',
      to: 'Advisers',
    
      date: '18-05-2020',
    },
 
]

const columns = [
    {key: 'column', name: 'Team', fieldName: 'from', minWidth: 100, maxWidth: 300, isResizable: true},
    {key: 'column', name: 'Matter', fieldName: 'to', minWidth: 100, maxWidth: 300, isResizable: true},
    {key: 'column', name: 'Last Activity', fieldName: 'date', minWidth: 100, maxWidth: 300, isResizable: true},
]

const OperationsTable = () => {
    return(
        <div data-is-scrollable={true}>
            <div className={`s-Grid-col ms-sm9 ms-xl9 ${classNames.table}`}>
                <h1>hi</h1>
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