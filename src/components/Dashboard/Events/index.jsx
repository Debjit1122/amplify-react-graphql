import React from 'react';
import { Link } from 'react-router-dom';
import EventData from '../../../routes/Dashboard/data/eventData';
import { FaCalendarAlt, FaMapMarkerAlt, FaClock } from 'react-icons/fa';
import { AiFillInfoCircle } from 'react-icons/ai';

const Events = () => {
    const { events } = EventData();

    if (events.length === 0) {
        return (
            <div className="dashboard-content d-flex align-items-center justify-content-center">
                <div className="text-center">
                    <h1 className="info-message-text">
                        <AiFillInfoCircle /> No events found
                    </h1>
                </div>
            </div>
        );
    }

    return (
        <div>
            {events.map((event) => (
                <div className="dashboard-content" key={event.id}>
                    <div className="dashboard-content-container">
                        <h2 className='text-center'>My Events</h2>
                        <div className="card events-card">
                            <div className="card-image">
                                <img
                                    src="https://via.placeholder.com/300"
                                    className="card-img-top"
                                    alt="Event"
                                />
                            </div>
                            <div className="card-details">
                                <h5 className="card-title">{event.eventTitle}</h5>
                                <div className="event-details">
                                    <p className="card-text">
                                        <FaCalendarAlt /> {event.eventStartDate}
                                    </p>
                                    <p className="card-text">
                                        <FaClock /> {event.eventStartTime} - {event.eventEndTime}
                                    </p>
                                    <p className="card-text">
                                        <FaMapMarkerAlt /> {event.eventVenueName}, {event.eventCity}, {event.eventCountry}
                                    </p>
                                </div>
                                <Link
                                    to={`/dashboard/events/manage/${event.id}`}
                                    className="btn btn-primary"
                                >
                                    <div>View Details</div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Events;
