import * as actionTypes from '../actions/actionTypes';
import { fetchServices } from '../actions';

const initialState = {
    services: [],
    loading:false
}

const fetchServicesStart = (state, action) => {
    
} 

const fetchServicesSuccess = (state, action) => {
    
}

const fetchServicesFail = (state, action) => {
    
}


const reducer = ( state = initialState, action) => {

    switch(action.type) {
        case actionTypes.FETCH_SERVICES_START : 
            return fetchServicesStart(state, action);
        case actionTypes.FETCH_SERVICES_SUCCESS :
            return fetchServicesSuccess(state, action);
        case actionTypes.FETCH_SERVICES_FAIL : 
            return fetchServicesFail(state, action);

        case actionTypes.FETCH_BANKS_START :
            break;
        case actionTypes.FETCH_BANKS_SUCCESS :
            break;
        case actionTypes.FETCH_BANKS_FAIL :
            break;
        default: return state;
    }
}

export default reducer;