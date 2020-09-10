import React from 'react';
import { Header } from './partials/Header';
import { Footer } from './partials/Footer';

export const MainLayout: React.FC = React.memo(({ children }) => {
    return (
        <div>
            <Header />
            {children}
            <Footer />
        </div>
    );
});
