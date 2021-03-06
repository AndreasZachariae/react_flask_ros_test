import React, { Component } from "react";
import { useHistory } from 'react-router-dom';
import { Button, Card, CardBody, CardGroup, Col, Container, Input, InputGroup, InputGroupAddon, InputGroupText, Row, NavLink } from 'reactstrap';

export class LinkToRosHtml extends Component {

    routeChange = () => {
        let path = `/publish_topic`;
        let history = useHistory();
        history.push(path);
    }

    render() {
        return (
            <div className="app flex-row align-items-center">
                <Container>
                    ...
          <Row>
                        <Col xs="6">
                            <Button color="primary" className="px-4"
                                onClick={this.routeChange}
                            >
                                Login
                </Button>
                        </Col>
                        <Col xs="6" className="text-right">
                            <Button color="link" className="px-0">Forgot password?</Button>
                        </Col>
                    </Row>
          ...
        </Container>
            </div>
        );
    }
}