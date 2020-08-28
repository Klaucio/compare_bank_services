import React, { Component } from 'react';
import { connect } from 'react-redux';

import ServiceItem from './ServiceItem/ServiceItem';

import * as actions from '../../../store/actions/index';

import classes from './Services.module.css';

class Services extends Component {

    componentDidMount(){
        this.props.onFetchServices();
    }

    render () {
        const items = this.props.services.map( service => 
            <ServiceItem label={service.nome} isSelected="true"/>)
        return (
            <div className={classes.Services}>
                {items}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        services: state.services.services
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onFetchServices: () => dispatch(actions.onFetchServices())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Services);