import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import EventData from '../../../routes/Dashboard/data/eventData';
import { FaCalendarAlt, FaMapMarkerAlt, FaClock, FaCalendarCheck, FaUserAlt } from 'react-icons/fa';
import { AiFillInfoCircle } from 'react-icons/ai';
import { Storage } from 'aws-amplify';
import { BiGrid } from 'react-icons/bi';

const Events = () => {
    const { events } = EventData();
    const [eventImages, setEventImages] = useState({});

    useEffect(() => {
        async function fetchEventImages() {
            const imagePromises = events.map(async (event) => {
                if (event.eventImage) {
                    const image = await Storage.get(event.eventImage);
                    return { eventId: event.id, image };
                }
                return null;
            });

            const images = await Promise.all(imagePromises);
            const imageMap = {};
            images.forEach((imageData) => {
                if (imageData) {
                    imageMap[imageData.eventId] = imageData.image;
                }
            });
            setEventImages(imageMap);
        }

        fetchEventImages();
    }, [events]);

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
            <div className="dashboard-content">
                <div className='d-flex'>
                    {events.map((event) => (
                        <div className="card events-card" key={event.id}>
                            <div className="card-image">
                                <img
                                    src={eventImages[event.id] || 'https://via.placeholder.com/300'}
                                    className="card-img-top"
                                    alt="Event"
                                />
                            </div>
                            <div className="card-details">
                                <h5 className="card-title">{event.eventTitle}</h5>
                                <div className="event-details">
                                    <p className="card-text">
                                        Starts&nbsp;<FaCalendarAlt />&nbsp;&nbsp;{event.eventStartDate}
                                    </p>
                                    <p className="card-text">
                                        Ends&nbsp;<FaCalendarCheck />&nbsp;&nbsp;{event.eventEndDate}
                                    </p>
                                    <p className="card-text">
                                        Schedule&nbsp;<FaClock />&nbsp;&nbsp;{event.eventStartTime} - {event.eventEndTime}
                                    </p>
                                    <p className="card-text">
                                        Category&nbsp;<BiGrid />&nbsp;&nbsp;{event.eventCategory}
                                    </p>
                                    <p className="card-text">
                                        Type&nbsp;<FaUserAlt />&nbsp;&nbsp;{event.eventType}
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

                    ))}
                </div>

            </div>
        </div>
    );
};

export default Events;
