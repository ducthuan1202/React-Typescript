import React from 'react';
import { HeaderAuth } from './partials/HeaderAuth';

export const AuthLayout: React.FC = React.memo(({ children }) => {
    return (
        <div className="container">
            <HeaderAuth />

            {children}
        </div>
    );
});
