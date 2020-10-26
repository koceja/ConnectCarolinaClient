import React from 'react';
import { Box, Card, Flex } from 'rebass';

import Page from '../../page.js';
import Loading from '../shared/loading.js';

class Classes extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            classes: []
        }
    }

    render() {
        return (
            <div className="classes">
                <Card>
                    {(this.state.loading) ? <Loading /> : 
                        <div id="class-list">
                            {this.state.classes.map((curr, index) => (<div key={`class-${index}`}>
                                <ul>
                                    <li>{curr.name}</li>
                                </ul>
                            </div>))}
                        </div>
                    }
                </Card>
            </div>
        )
    }
}


const Content = () => {
    return (
        <div id="academics">
            <h1>Academics</h1>
            <Box
                p={3}
                width={1}
            >
                <Classes />
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