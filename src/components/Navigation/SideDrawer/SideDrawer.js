import React from 'react';

import NavigationItems from '../NavigationItems/NavigationItems';
import Logo from '../../../components/Logo/Logo';

import classes from './SideDrawer.module.css';

const SideDrawer = props => {
    let attachedClasses = [classes.SideDrawer, classes.Close];
    return (
        <div className={attachedClasses.join(' ')}>
            <div>
                <Logo />
            </div>
            <nav>
                <NavigationItems />
            </nav>
        </div>

    )
}

export default SideDrawer;