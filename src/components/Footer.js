import React, { Component } from 'react';

export default class Footer extends Component{
    render(){
        return(
            <div>
                 <div className="container-fluid footer bg-dark py-4">
                    <div className="row justify-center color-primary" style={{margin: 0}}>
                        <p>Copyright © 2019 Open Sourcery</p>
                    </div>
                </div>
            </div>
        );
    }
}