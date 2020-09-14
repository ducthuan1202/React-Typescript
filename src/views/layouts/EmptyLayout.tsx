import React from 'react';
import {Container} from 'react-bootstrap';

export const EmptyLayout:React.FC = React.memo(({children}) => {
    
    return (
        <Container fluid>
            {children}
        </Container>
    );
});