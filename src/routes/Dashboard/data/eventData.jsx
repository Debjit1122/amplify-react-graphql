import { useState, useEffect } from 'react';
import { DataStore } from 'aws-amplify';
import { Events } from '../../../models';
import { Auth } from 'aws-amplify';

function EventData() {
    const [events, setEvents] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchEvents() {
            try {
                const { username } = await Auth.currentAuthenticatedUser();
                const eventsData = await DataStore.query(Events, (c) => c.owner.eq(username));
                console.log(eventsData);
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

export default EventData;
