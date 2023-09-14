import { useState, useEffect } from 'react';
import { DataStore } from 'aws-amplify';
import { Events } from '../../../../models';

function AllEventData() {
    const [events, setEvents] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchEvents() {
            try {
                const eventsData = await DataStore.query(Events);
                setEvents(eventsData);
                setLoading(false);
            } catch (error) {
                setError(error);
                setLoading(false);
            }
        }

        fetchEvents();
    }, []);

    return { events, loading, error };
}

export default AllEventData;
