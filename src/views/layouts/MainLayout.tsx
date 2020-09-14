import React from 'react';
import { Header } from './partials/Header';
import { Footer } from './partials/Footer';
import { Container } from 'react-bootstrap';

export const MainLayout: React.FC = React.memo(({ children }) => {
    return (
        <Container>
            <Header />
            {children}
            <Footer />
        </Container>
    );
});
