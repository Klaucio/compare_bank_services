import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { makeStyles, withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import TabPanel from '../../components/TabPanel/TabPanel';
import css from './Compare.module.css';

import Services from '../../components/Compare/Services/Services';

const styles = theme => makeStyles({
    root: {
        flexGrow: 2,
    },
});

class Compare extends Component {

    state = {
        tabValue: 0
    }

    handleChange = (event, newValue) => {
        this.setState({ tabValue: newValue });
    };

    render() {
        const { classes } = this.props;

        return (
            <div className={css.Compare}>
                <div className={css.Categories}>
                    <div className={css.CatHeader} >Categorias</div>
                </div>
                <div className={css.MainContainer}>
                    <Paper>
                        <Tabs
                            value={this.state.tabValue}
                            onChange={this.handleChange}
                            indicatorColor="primary"
                            textColor="primary"
                            variant="fullWidth"

                        >
                            <Tab label="Serviços" />
                            <Tab label="Bancos" />
                        </Tabs>
                    </Paper>
                    <div>
                        <TabPanel value={this.state.tabValue} index={0}>
                            <Services />
                        </TabPanel>
                        <TabPanel value={this.state.tabValue} index={1} >
                            Bancos
                        </TabPanel>
                    </div>
                </div>
            </div>)
    }
}
Compare.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Compare);