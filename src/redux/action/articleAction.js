import axios from "axios"
import {GET_ARTICLE, CREATE_ARTICLE, EDIT_ARTICLE, DELETE_ARTICLE} from '../types'

export const getArticle = () => {
    return (dispatch) =>{
        dispatch({type: `${GET_ARTICLE}_LOADING`});

        axios({
            method: 'GET',
            url: 'http://localhost:3001/article',
        })
        .then((response)=>{
            dispatch({
                type: `${GET_ARTICLE}_FULFILLED`,
                payload: response.data,
            });
        })
        .catch((error)=>{
            dispatch({
                type: `${GET_ARTICLE}_ERROR`,
                error: error.message,
            });
        });
    };
};

export const createArticle = (data) => {
    return (dispatch) =>{
        dispatch({type: `${CREATE_ARTICLE}_LOADING`});

        axios({
            method: 'POST',
            url: 'http://localhost:3001/article',
            data,
        })
        .then(()=>{
            dispatch({
                type: `${CREATE_ARTICLE}_FULFILLED`,
                // payload: response.data,
            });
            dispatch(getArticle());
        })
        .catch((error)=>{
            dispatch({
                type: `${CREATE_ARTICLE}_ERROR`,
                error: error.message,
            });
        });
    };
};

export const editArticle = (id, data) => {
    return (dispatch) =>{
        dispatch({type: `${EDIT_ARTICLE}_LOADING`});

        axios({
            method: 'PUT',
            url: `http://localhost:3001/article/${id}`,
            data,
        })
        .then(()=>{
            dispatch({
                type: `${EDIT_ARTICLE}_FULFILLED`,
                // payload: response.data,
            });
            dispatch(getArticle());
        })
        .catch((error)=>{
            dispatch({
                type: `${EDIT_ARTICLE}_ERROR`,
                error: error.message,
            });
        });
    };
};

export const deleteArticle = (id) => {
    return (dispatch) =>{
        dispatch({type: `${DELETE_ARTICLE}_LOADING`});

        axios({
            method: 'DELETE',
            url: `http://localhost:3001/article/${id}`,
        })
        .then(()=>{
            dispatch({
                type: `${DELETE_ARTICLE}_FULFILLED`,
                // payload: response.data,
            });
            dispatch(getArticle());
        })
        .catch((error)=>{
            dispatch({
                type: `${DELETE_ARTICLE}_ERROR`,
                error: error.message,
            });
        });
    };
};