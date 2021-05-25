import React from 'react';
import { Card } from '@uifabric/react-cards';
import { Text, initializeIcons } from '@fluentui/react';
import 'office-ui-fabric-react/dist/css/fabric.css';

const container = {
    display: 'flex',
    justifyContent: 'center',
    margin: '10vh 0',
}

const icon = {
    fontSize: 24,
    padding: 15,
    verticalAlign: 'middle',
    paddingLeft: 0,
    color: '#0078d4',
}

const styles = {
    cardStyles: {
        root: {
            backgroundColor: '#fff',
            padding: 20,
            borderTop: '5px solid #0078d4',
            width: '90%',
            maxWidth: '90%',
            margin: 'auto',
        }
    },
    header: {
        root: {
            fontSize: 20,
            fontWeight: 'bold',
        }
    },
    amount: {
        root: {
            fontSize: 26,
            paddingBottom: 20,
            paddingTop: 30,
        }
    },
    percentage: {
        root: {
            fontSize: 16,
            fontWeight: 'bold',
            color: '#0078d4',
        }
    }
}

const cards = [
    {
        title: 'Contacts',
        amount: 'one of your contact moved',
        icon: 'important',
       
    },
    {
        title: 'Emails',
        amount: 'check mails',
        icon: 'important',
       
    },
    {
        title: 'Upcoming key dates',
        amount: 'initial date',
        icon: 'please keep track',
      
    },
    {
        title: 'Contact update',
        amount: 'update contacts',
        icon: 'Save',
     
    },
]

const CardSections = () => {
    initializeIcons();

    return(
        <div style={container}>
            
            {cards.map((card) => (
                <div className="s-Grid-col ms-sm3 ms-xl3">
                    {/* style props should be 'styles' instead of 'style'. Be Careful:) */}
                    <Card styles={styles.cardStyles}>
                        <Card.Section>
                            <Card.Item>
                                <i style={icon} className={`ms-Icon ms-Icon--${card.icon}`} aria-hidden="true"></i>
                              <h1> <Text style={styles.header}>{card.title}</Text></h1> 
                            </Card.Item>
                            <Card.Item>
                                <Text style={styles.amount}>{card.amount}</Text>
                            </Card.Item>
                           
                            
                        </Card.Section>
                    </Card>
                </div>
            )) }
        </div>
    );
}

export default CardSections;