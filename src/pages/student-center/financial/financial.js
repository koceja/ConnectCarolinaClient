import React from 'react';

import Page from '../../page.js';

const Content = () => {
    return (
        <div id="financial">
            Financial
        </div>
    )
}

const Financial = () => {
    return (
        <Page 
            active="financial"
            content={<Content />}
            sideItems={true}
        />            
    )
}

export default Financial;