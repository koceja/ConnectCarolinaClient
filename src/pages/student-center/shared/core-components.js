import React from 'react';
import { Card } from 'rebass';

import Loading from './loading.js';

import './core-components.css';

export class Personal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            personal: null
        }
    }

    render() {
        const person = this.state.personal;
        return (
            <div className="dashboard-card personal-container">
                <Card className="dashboard-card">
                <h3>Personal</h3>
                    {(this.state.loading) ? <Loading /> : 
                        <div id="personal-info">
                            <h3>{person.name}</h3>
                            <p>{person.address}</p>
                            <p>{person.mailing}</p>
                            <p>{person.phone}</p>
                            <p>{person.email}</p>
                        </div>
                    }
                </Card>
            </div>
        )
    }
}

export class Classes extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            classes: []
        }
    }

    render() {
        return (
            <div className="dashboard-card classes">
                <Card className="dashboard-card">
                    <h3>Classes</h3>
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

export class ShoppingCart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            classes: []
        }
    }

    render() {
        return (
            <div className="dashboard-card shopping-cart">
                <Card className="dashboard-card">
                    <h3>Shopping Cart</h3>
                    {(this.state.loading) ? <Loading /> : 
                        <div id="course-list">
                            {this.state.classes.map((curr, index) => (<div key={`course-${index}`}>
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

export class Finances extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            finances: []
        }
    }

    render() {
        return (
            <div className="dashboard-card finances">
                <Card className="dashboard-card">
                    <h3>Finances</h3>
                    {(this.state.loading) ? <Loading /> : 
                        <div id="finances-list">
                            {this.state.finances.map((curr, index) => (<div key={`class-${index}`}>
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

export class Holds extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            holds: []
        }
    }

    render() {
        return (
            <div className="dashboard-card holds">
                <Card className="dashboard-card">
                    <h3>Holds</h3>
                    {(this.state.loading) ? <Loading /> : 
                        <div className="holds-list">
                            {this.state.holds.map((curr, index) => (<div key={`hold-${index}`}>
                                <ul>
                                    <li>{curr}</li>
                                </ul>
                            </div>))}
                        </div>
                    }
                </Card>
            </div>
        )
    }
}

export class Todos extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            todos: []
        }
    }

    render() {
        return (
            <div className="dashboard-card todos">
                <Card className="dashboard-card">
                    <h3>To Do</h3>
                    {(this.state.loading) ? <Loading /> : 
                        <div className="todo-list">
                            {this.state.todos.map((curr, index) => (<div key={`todo-${index}`}>
                                <ul>
                                    <li>{curr}</li>
                                </ul>
                            </div>))}
                        </div>
                    }
                </Card>
            </div>
        )
    }
}

export class FinancialAid extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="dashboard-card personal-container">
                <Card className="dashboard-card">
                <h3>View Financial Aid</h3>
                </Card>
            </div>
        )
    }
}


export class DashboardSearch extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="dashboard-card personal-container">
                <Card className="dashboard-card text-only">
                    <h3>Search for Classes</h3>
                </Card>
            </div>
        )
    }
}

export class Advisor extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            advisor: null
        }
    }

    render() {
        const advisor = this.state.advisor;
        return (
            <div className="dashboard-card advisor-container">
                <Card className="dashboard-card">
                <h3>Advisor</h3>
                    {(this.state.loading) ? <Loading /> : 
                        <div id="advisor-info">
                            <h3>{advisor.name}</h3>
                            <p>{advisor.program}</p>
                        </div>
                    }
                </Card>
            </div>
        )
    }
}

