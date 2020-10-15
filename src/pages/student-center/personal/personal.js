import React from 'react';

import Page from '../../page.js';

const Content = () => {
    return (
        <div id="personal">
            Personal
        </div>
    )
}

const Personal = () => {
    return (
        <Page 
            active="personal"
            content={<Content />}
            sideItems={true}
        />            
    )
}

export default Personal;