import React from 'react';
import { DemoAxios } from 'features/demo/DemoAxios';

export const Homepage: React.FC = React.memo(() => {
    return (
        <div>
            <h1>Homepage</h1>
            <DemoAxios/>
        </div>
    );
});
