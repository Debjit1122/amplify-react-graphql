import React from 'react'
import { BsCalendarCheck } from "react-icons/bs"
import { BiTime } from "react-icons/bi"
import { MdOutlineLocationOn } from "react-icons/md"
import EventData from '../../../routes/Dashboard/data/eventData'
import { AiFillInfoCircle } from 'react-icons/ai';
const Main = () => {
    const { events, loading, error } = EventData();

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        <div className="dashboard-content d-flex align-items-center justify-content-center">
            <div className="text-center">
                <h1 className="info-message-text">
                    <AiFillInfoCircle /> Something went wrong
                </h1>
                <div>{error.message}</div>
            </div>
        </div>
    }

    return (
        <div className='dashboard-content'>
            <div className="dashboard-cards">
                <div className="card">
                    <div className="card-body">
                        <h6 className="card-subtitle text-muted">Total Events Created</h6>
                        <h5 className="card-title">20</h5>
                        <a href="/" className="btn btn-primary">See all events</a>
                    </div>
                </div>
                <div className="card">
                    <div className="card-body">
                        <h6 className="card-subtitle text-muted">Total Attendees</h6>
                        <h5 className="card-title">600</h5>
                        <a href="/" className="btn btn-primary">See all Attendees</a>
                    </div>
                </div>
                <div className="card">
                    <div className="card-body">
                        <h6 className="card-subtitle text-muted">Total Revenue Earning</h6>
                        <h5 className="card-title">$20000</h5>
                        <a href="/" className="btn btn-primary">See all earnings</a>
                    </div>
                </div>
                <div className="card">
                    <div className="card-body">
                        <h6 className="card-subtitle text-muted">Average Rating</h6>
                        <h5 className="card-title">4.5</h5>
                        <a href="/" className="btn btn-primary">See all ratings</a>
                    </div>
                </div>
            </div>
            <div className='dashboard-content-container upcoming-events'>
                <div className='d-flex justify-content-between'>
                    <h3>Upcoming Events</h3>
                    <div className="dropdown">
                        <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Dropdown button
                        </button>
                        <ul className="dropdown-menu">
                            <li><a className="dropdown-item" href="/">Action</a></li>
                            <li><a className="dropdown-item" href="/">Another action</a></li>
                            <li><a className="dropdown-item" href="/">Something else here</a></li>
                        </ul>
                    </div>
                </div>
                <table>
                    <tbody>
                        {events.map(event => (
                            <tr key={event.id}>
                                <td><BsCalendarCheck />{' '}{event.eventStartDate}</td>
                                <td>{event.eventTitle}</td>
                                <td><BiTime />{' '}{event.eventStartTime}</td>
                                <td><MdOutlineLocationOn />{' '}{event.eventVenueName}, {event.eventCity}, {event.eventCountry}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Main