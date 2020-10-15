import React from 'react';

import Page from '../../../page.js';

const Content = () => {
    return (
        <div id="search">
            Search
        </div>
    )
}

const Search = () => {
    return (
        <Page 
            active="academics"
            content={<Content />}
        />            
    )
}

export default Search;