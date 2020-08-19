import * as actionTypes from '../actions/actionTypes';

const initialState = {
    banks: []
}

const fetchBanksStart = (state, action) => {

} 

const reducer = ( state = initialState, action) => {

    switch(action.type) {
        case actionTypes.FETCH_BANKS_START : break;
        default: return state;
    }
}

export default reducer;