import React from 'react';

import classes from './ServiceItem.module.css';

const ServiceItem = props => {
    return (
        <div className={classes.ServiceItem}>
            <img alt='icon' src={props.icon} className={classes.Image} />
            <p>{props.description}</p>
        </div>
    )
}

export default ServiceItem;