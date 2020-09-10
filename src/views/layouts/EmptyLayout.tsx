import React from 'react';

export const EmptyLayout:React.FC = React.memo(({children}) => {
    
    return (
        <div>
            {children}
        </div>
    );
});