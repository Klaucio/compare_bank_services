import React from 'react';

import classes from './ServiceItem.module.css';

const ServiceItem = props => {

    return (
        // <div>
            <label className={classes.ServiceItem}>
                <input
                    type='checkbox'
                    name={props.label}
                    checked={props.isChecked}
                />
                <p className={classes.LabelText}>
                    {props.label}
                </p>
                <span className={classes.Checkmark}>
                </span>
            </label>
        // </div>
    )
}

export default ServiceItem;