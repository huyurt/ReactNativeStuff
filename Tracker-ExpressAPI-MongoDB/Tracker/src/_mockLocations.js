import * as Location from 'expo-location';

const onMetreAralik = 0.0001;

const getLocation = increment => {
    return {
        timestamp: 1567332200,
        coordinates: {
            speed: 0,
            heading: 0,
            accuracy: 5,
            altitudeAccuracy: 5,
            altitude: 5,
            longitude: 32.85411 + increment * onMetreAralik,
            latitude: 39.92077 + increment * onMetreAralik
        }
    }
};

let counter = 0;
setInterval(() => {
    Location.EventEmitter.emit('Expo.locationChanged', {
        watchId: Location._getCurrentWatchId(),
        location: getLocation(counter)
    });
    counter++;
}, 1000);
