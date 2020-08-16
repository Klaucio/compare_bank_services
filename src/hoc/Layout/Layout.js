import React from 'react';

import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import Footer from '../../components/Footer/Footer';

import classes from './Layout.module.css';

const Layout = props => {

    return (
        <div>
            <SideDrawer />
            <Toolbar />
            <main className={classes.Container}>
                {props.children}
            </main>
            <Footer />
        </div>

    );
}

export default Layout;