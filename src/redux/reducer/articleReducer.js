import {GET_ARTICLE, CREATE_ARTICLE, EDIT_ARTICLE, DELETE_ARTICLE} from '../types'

const initialState = {
    data: [],
    isLoading: true,
    error: null,
}

const articleReducer = (state = initialState, action) => {
    const{ type, payload, error } = action;
    switch (type){
        case `${GET_ARTICLE}_LOADING`:
        return{
            ...state,
        };
        case `${GET_ARTICLE}_FULFILLED`:
            return{
                ...state, 
                data: payload,
                isLoading: false,
            };
        case `${GET_ARTICLE}_ERROR`:
            return{
                ...state, 
                isLoading: false,
                error: error,
            };

        case `${CREATE_ARTICLE}_LOADING`:
            return{
                ...state, 
                isLoading: true,
            };
        case `${CREATE_ARTICLE}_FULFILLED`:
            return{
                ...state, 
                isLoading: false,
            };
        case `${CREATE_ARTICLE}_ERROR`:
            return{
                ...state, 
                isLoading: false,
                error: error,
            };
        case `${EDIT_ARTICLE}_LOADING`:
            return{
                ...state, 
                isLoading: true,
            };
        case `${EDIT_ARTICLE}_FULFILLED`:
            return{
                ...state, 
                isLoading: false,
            };
        case `${EDIT_ARTICLE}_ERROR`:
        return{
            ...state, 
            isLoading: false,
            error: error,
        };
        case `${DELETE_ARTICLE}_LOADING`:
            return{
                ...state, 
                isLoading: true,
            };
        case `${DELETE_ARTICLE}_FULFILLED`:
            return{
                ...state, 
                isLoading: false,
            };
        case `${DELETE_ARTICLE}_ERROR`:
        return{
            ...state, 
            isLoading: false,
            error: error,
        };
        default:
            return{
                ...state,
            };
    }
}

export default articleReducer;