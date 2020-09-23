 
import React from 'react';
import Card from 'react-bootstrap/Card';
import Pic from './300.png'; 
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const Portfolio = () => (
    <div>
        <h3>Portfolio</h3>
        
        <Card style={{ width: '25rem', float: 'left' }}>
            <Card.Img variant="top" src={Pic} />
            <Card.Body>
                <Card.Title>Taskinator</Card.Title>
                <Card.Text>
                Task management
                </Card.Text>
                <Link variant="primary">https://chrish81.github.io/taskinator/</Link>
                <br/>
                <Link variant="primary">https://github.com/ChrisH81/taskinator</Link>
            </Card.Body>
        </Card>
        <Card style={{ width: '25rem', float: 'left' }}>
            <Card.Img variant="top" src={Pic} />
            <Card.Body>
                <Card.Title>Weather</Card.Title>
                <Card.Text>
                Weather tracker
                </Card.Text>
                <Link variant="primary">https://chrish81.github.io/robot-gladiators/</Link>
                <br/>
                <Link variant="primary">https://github.com/ChrisH81/robot-gladiators</Link>
            </Card.Body>
        </Card>
        <Card style={{ width: '25rem', float: 'left' }}>
            <Card.Img variant="top" src={Pic} />
            <Card.Body>
                <Card.Title>Robot Gladiators</Card.Title>
                <Card.Text>
                Robot Battle Game
                </Card.Text>
                <Link variant="primary">https://chrish81.github.io/robot-gladiators/</Link>
                <br/>
                <Link variant="primary">https://github.com/ChrisH81/robot-gladiators</Link>
            </Card.Body>
        </Card>
        <Card style={{ width: '25rem', float: 'left' }}>
            <Card.Img variant="top" src={Pic} />
            <Card.Body>
                <Card.Title>Game Quiz</Card.Title>
                <Card.Text>
               N64 Game quiz
                </Card.Text>
                <Link variant="primary">https://chrish81.github.io/gamequiz/</Link>
                <br/>
                <Link variant="primary">https://github.com/ChrisH81/gamequiz</Link>
            </Card.Body>
        </Card>
        <Card style={{ width: '25rem', float: 'left' }}>
            <Card.Img variant="top" src={Pic} />
            <Card.Body>
                <Card.Title>Social Network</Card.Title>
                <Card.Text>
                Social network app
                </Card.Text>
                <Link variant="primary">https://chrish81.github.io/Socialnetwork/</Link>
                <br/>
                <Link variant="primary">https://github.com/ChrisH81/Socialnetwork</Link>
            </Card.Body>
        </Card>
        <Card style={{ width: '25rem', float: 'left' }}>
            <Card.Img variant="top" src={Pic} />
            <Card.Body>
                <Card.Title>Budget Tracker</Card.Title>
                <Card.Text>
                Track Budget with out the internet
                </Card.Text>
                <Link variant="primary">https://chrish81.github.io/BudgetTracker/</Link>
                <br/>
                <Link variant="primary">https://github.com/ChrisH81/BudgetTracker</Link>
            </Card.Body>
        </Card>
    </div> 
);

export default Portfolio; 