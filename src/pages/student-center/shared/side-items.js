import React from 'react';
import { Card } from 'rebass';

const SideItems = () => {
    return (
        <div className="side-items">
            <div className="holds">
                <h2>Holds</h2>
                <Card>
                    <ul style={{listStyleType: "none"}}>
                        <li>Hold #1</li>
                        <li>Hold #2</li>
                        <li>Hold #3</li>
                        <li>Hold #4</li>
                    </ul>
                </Card>
            </div>
            <div className="todos">
                <h2>To Do</h2>
                <Card>
                    <ul style={{listStyleType: "none"}}>
                        <li>Todo #1</li>
                        <li>Todo #2</li>
                        <li>Todo #3</li>
                        <li>Todo #4</li>
                    </ul>
                </Card>
            </div>
            
        </div>
                  
    );
}

export default SideItems;