import { useState, useEffect } from 'react';
import { DataStore } from 'aws-amplify';
import { AttendeesEvents } from '../../../models';

function AttendeeData() {
    const [attendees, setAttendees] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchAttendees() {
            try {
                const attendeesData = await DataStore.query(AttendeesEvents);
                setAttendees(attendeesData);
                console.log(attendeesData);
                setLoading(false);
            } catch (error) {
                setError(error);
                setLoading(false);
            }
        }

        fetchAttendees();
    }, []);

    return { attendees, loading, error };
}

export default AttendeeData;
