import * as actionTypes from './actionTypes';
import axios from '../../axios-comparison';

export const fetchBanksSuccess = ( banks ) => {
    return {
        type: actionTypes.FETCH_BANKS_SUCCESS,
        banks: banks
    }
}

export const fetchBanksFail = ( error ) => {
    return {
        type: actionTypes.FETCH_BANKS_FAIL,
        error: error
    }
}

export const fetchBanksStart = () => {
    return {
        type: actionTypes.FETCH_BANKS_START
    }

}

export const fetchBanks = () => {
    return dispatch => {
        dispatch(fetchBanksStart());
        axios.get( 'api/banksData' )
        .then( response => {
            dispatch(fetchBanksSuccess(response.data));
        })

    }
}