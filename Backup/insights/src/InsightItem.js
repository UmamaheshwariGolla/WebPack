import React from 'react';  
import { Stack, Label } from '@fluentui/react';  
  
function InsightItem(props) {  
    return (  
        <Stack>  
            <Stack horizontal verticalAlign="center" horizontalAlign="space-between">  
                <Label>{props.insight.name}</Label>  
            </Stack>  
        </Stack>  
    );  
}  
  
 export default InsightItem 
