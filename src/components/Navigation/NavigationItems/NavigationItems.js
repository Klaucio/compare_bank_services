import React from 'react';

import NavigationItem from './NavigationItem/NavigationItem';
import classes from './NavigationItems.module.css';

const NavigationItems = props => (
    <ul className={classes.NavigationItems}>
        <NavigationItem link='/'>Home</NavigationItem>
        <NavigationItem link='/compare'>Preços</NavigationItem>
        <NavigationItem link='/sobre-nos'>Sobre-nós</NavigationItem>
        <NavigationItem link='/contactos'>Contactos</NavigationItem>
    </ul>
)

export default NavigationItems;