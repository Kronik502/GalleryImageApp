import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import PlacesList from '../components/Places/PlacesList';
import { useIsFocused } from '@react-navigation/native';
import { fetchPlaces } from '../utils/database';

function AllPlaces({ route }) {
    const [loadedPlaces, setLoadedPlaces] = useState([]);
    const isFocused = useIsFocused();

    useEffect(() => {
        async function loadedPlaces() {
            const places = await fetchPlaces();
            setLoadedPlaces(places);
        }
        if (isFocused) {
            loadedPlaces();
         
        }
    }, [isFocused]);

    return (
        <View style={{ flex: 1 }}>
            <PlacesList places={loadedPlaces} />
        </View>
    );
}

export default AllPlaces;


