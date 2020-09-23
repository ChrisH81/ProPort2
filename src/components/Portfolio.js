 
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
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
                </Card.Text>
                <Link variant="primary">Go to website</Link>
                <br/>
                <Link variant="primary">Go to github</Link>
            </Card.Body>
        </Card>
        <Card style={{ width: '25rem', float: 'left' }}>
            <Card.Img variant="top" src={Pic} />
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
                </Card.Text>
                <Link variant="primary">Go to website</Link>
                <br/>
                <Link variant="primary">Go to github</Link>
            </Card.Body>
        </Card>
        <Card style={{ width: '25rem', float: 'left' }}>
            <Card.Img variant="top" src={Pic} />
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
                </Card.Text>
                <Link variant="primary">Go to website</Link>
                <br/>
                <Link variant="primary">Go to github</Link>
            </Card.Body>
        </Card>
        <Card style={{ width: '25rem', float: 'left' }}>
            <Card.Img variant="top" src={Pic} />
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
                </Card.Text>
                <Link variant="primary">Go to website</Link>
                <br/>
                <Link variant="primary">Go to github</Link>
            </Card.Body>
        </Card>
        <Card style={{ width: '25rem', float: 'left' }}>
            <Card.Img variant="top" src={Pic} />
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
                </Card.Text>
                <Link variant="primary">Go to website</Link>
                <br/>
                <Link variant="primary">Go to github</Link>
            </Card.Body>
        </Card>
        <Card style={{ width: '25rem', float: 'left' }}>
            <Card.Img variant="top" src={Pic} />
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
                </Card.Text>
                <Link variant="primary">Go to website</Link>
                <br/>
                <Link variant="primary">Go to github</Link>
            </Card.Body>
        </Card>
    </div> 
);

export default Portfolio; 