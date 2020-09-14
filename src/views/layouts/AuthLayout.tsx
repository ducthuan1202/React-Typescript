import React from 'react';
import { HeaderAuth } from './partials/HeaderAuth';
import {Container} from 'react-bootstrap';

export const AuthLayout: React.FC = React.memo(({ children }) => {
    return (
        <Container>
            <HeaderAuth />
            {children}
        </Container>
    );
});
