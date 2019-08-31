import {AsyncStorage} from 'react-native';
import createDataContext from "./createDataContext";
import TrackerApi from '../api/Tracker';
import {navigate} from "../navigationRef";

const authReducer = (state, action) => {
    switch (action.type) {
        case 'add_error':
            return {...state, errorMessage: action.payload};
        case 'clear_error_message':
            return {...state, errorMessage: ''};
        case 'sign':
            return {errorMessage: '', token: action.payload};
        case 'sign_out':
            return {token: null, errorMessage: ''};
        default:
            return state;
    }
};

const tryLocalSignIn = dispatch => async () => {
    const token = await AsyncStorage.getItem('token');
    if (token) {
        dispatch({type: 'sign', payload: token});
        navigate('TrackList');
    } else {
        navigate('SignIn')
    }
};

const clearErrorMessage = dispatch => () => {
    dispatch({type: 'clear_error_message'});
};

const signUp = dispatch => async ({email, password}) => {
    try {
        const response = await TrackerApi.post('/signup', {email, password});
        await AsyncStorage.setItem('token', response.data.token);
        dispatch({type: 'sign', payload: response.data.token});

        navigate('TrackList');
    } catch (err) {
        dispatch({type: 'add_error', payload: 'Eposta veya şifre hatalı.'});
    }
};

const signIn = (dispatch) => async ({email, password}) => {
    try {
        const response = await TrackerApi.post('/signin', {email, password});
        await AsyncStorage.setItem('token', response.data.token);
        dispatch({type: 'sign', payload: response.data.token});

        navigate('TrackList');
    } catch (err) {
        dispatch({type: 'add_error', payload: 'Eposta veya şifre hatalı.'});
    }
};

const signOut = (dispatch) => async () => {
    await AsyncStorage.removeItem('token');
    dispatch({type: 'sign_out'});
    navigate('loginFlow');
};

export const {Provider, Context} = createDataContext(
    authReducer,
    {signUp, signIn, signOut, clearErrorMessage, tryLocalSignIn},
    {token: null, errorMessage: ''}
);
