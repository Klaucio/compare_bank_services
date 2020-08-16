import React, { Component } from 'react';

import ServiceItem from './ServiceItem/ServiceItem';

import classes from './Services.module.css';

class Services extends Component {

    render () {
        return (
            <div className={classes.Services}>
                <ServiceItem label="CheckBox indexxxxxxxxxx xxxxxxxxxx dddsdsd sdsdds dsdsdds dsdsdsd sdsdsdsdsdsdsdsdxxxxxxxxxxxxxyuyuyuyiyiyiyuyuiyuihhhhhhhhgggg comsoaaaaaaaaaks skssssssssskamk" 
                isSelected="true" />
                <ServiceItem label="Check 1" isSelected="true" />
                <ServiceItem label="Check 1" isSelected="true" />
            </div>
        )
    }
}

export default Services;