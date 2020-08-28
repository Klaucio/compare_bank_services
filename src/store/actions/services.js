import * as actionTypes from './actionTypes';
import axios from '../../axios-comparison';

export const fetchServicesSuccess = ( services) => {
    return {
        type: actionTypes.FETCH_SERVICES_SUCCESS,
        services: services
    }
}

export const fetchServicesFail = ( error ) => {
    return {
        type: actionTypes.FETCH_SERVICES_FAIL,
        error: error
    }
}

export const fetchServicesStart = () => {
    return {
        type: actionTypes.FETCH_SERVICES_START
    }

}

export const onFetchServices = () => {
    return dispatch => {
        dispatch(fetchServicesStart());
        axios.get( 'api/serviceData' )
        .then( response => {
            dispatch(fetchServicesSuccess(response.data));
        })
        .catch ( error => {
            dispatch ( fetchServicesFail(error)); 
        })

    }
}