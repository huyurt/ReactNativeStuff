import {createStore} from 'redux';

const action1 = {
    type: 'StringToArray',
    payload: '123456789'
};

const action2 = {
    type: 'AddCharacter',
    payload: '0'
};

const reducer = (state = [], action) => {
    try {
        switch (action.type) {
            case 'StringToArray':
                return action.payload.split('');
            case 'AddCharacter':
                return [...state, action.payload];
        }
    } catch (e) {
    }
    return state;
};

const store = createStore(reducer);
store.dispatch(action1);
store.getState();
store.dispatch(action2);
store.getState();
