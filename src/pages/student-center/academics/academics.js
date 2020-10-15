import React from 'react';
import { Box, Card, Flex } from 'rebass';

import Page from '../../page.js';

const Content = () => {
    return (
        <div id="academics">
            <h1>Academics</h1>
            <Box
                p={3}
                width={1}
            >
                <Card>
                    <ul style={{ listStyleType: "none" }}>
                        <li>COMP 426 - 001</li>
                        <li>COMP 426 - 001</li>
                        <li>COMP 426 - 001</li>
                        <li>COMP 426 - 001</li>
                    </ul>
                </Card>
            </Box>

            <Flex className="academic-actions">
                <Box
                    p={3}
                    width={1 / 3}
                >
                    <Card>
                        <h2>Search Classes</h2>
                    </Card>
                </Box>
                <Box
                    p={3}
                    width={1 / 3}
                >
                    <Card>
                        <h2>Enroll</h2>
                    </Card>
                </Box>
                <Box
                    p={3}
                    width={1 / 3}
                >
                    <Card>
                        <h2>My Academics</h2>
                    </Card>
                </Box>
            </Flex>



        </div>
    )
}

const Academics = () => {
    return (
        <Page
            active="academics"
            content={<Content />}
            sideItems={true}
        />
    )
}

export default Academics;