import React, { Component } from "react";
import { Button } from '@material-ui/core';
import "./eventemitter2.min.js"
import "./roslib.min.js"


export class PublishRos extends Component {



    render() {
        return (
            <>
                <Button className="app" variant="primary" size="lg"></Button>
            </>
        );
    }
}