import React from 'react';  
import { Stack, Label } from "@fluentui/react";  
import InsightItem from './InsightItem';  
  
function InsightList(props) {  
    
    return (  
        <Stack gap={10} >  
            { props.insights.length > 0 ? props.insights.map((insight) => (  
                <InsightItem insight={insight} key={insight.id}/>  
            )):   
            <Label>Todo list is empty...</Label>}  
        </Stack>  
    );  
}  
  
export default InsightList;  
