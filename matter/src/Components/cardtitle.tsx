import * as React from 'react';
import {
  DocumentCard,
  DocumentCardActivity,
  DocumentCardPreview,
  DocumentCardTitle,
  IDocumentCardPreviewProps,IDocumentCardTitleStyles
} from '@fluentui/react/lib/DocumentCard';
import { ImageFit } from '@fluentui/react/lib/Image';



const cardtitlestyles:IDocumentCardTitleStyles={
    root: { backgroundColor:'white', height:100 },
}

const DocumentCardActivityPeople = [{ name: 'Annie Lindqvist' }];

export const DocumentCardBasic: React.FunctionComponent= () => (
 
            
    <DocumentCard >
   
    <DocumentCardTitle
       styles={cardtitlestyles}

      title={   
     'Large_file_name_with_underscores_used_to_separate_all_of_the_words_and_there_are_so_many_words_'     
      }
      shouldTruncate
    />

  </DocumentCard>
);
