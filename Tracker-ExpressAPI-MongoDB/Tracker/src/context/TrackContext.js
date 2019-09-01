import createDataContext from "./createDataContext";
import TrackApi from '../api/Tracker';

const TrackReducer = (state, action) => {
    switch (action.type) {
        case 'fetch_tracks':
            return action.payload;
        default:
            return state;
    }
};

const fetchTracks = dispatch => async () => {
    const response = await TrackApi.get('/tracks');
    dispatch({type: 'fetch_tracks', payload: response.data});
};

const createTrack = dispatch => async (name, locations) => {
    await TrackApi.post('/tracks', {name, locations});
};

export const {Provider, Context} = createDataContext(
    TrackReducer,
    {fetchTracks, createTrack},
    []
);
