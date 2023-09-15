import React from 'react'
import { BsCalendar, BsCalendarCheck } from "react-icons/bs"
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
            {/* <div className="dashboard-cards">
                <div className="card">
                    <div className="card-body">
                        <h6 className="card-subtitle text-muted">Total Events Created</h6>
                        <h5 className="card-title"></h5>
                        <a href="/" className="btn btn-primary">See all events</a>
                    </div>
                </div>
                <div className="card">
                    <div className="card-body">
                        <h6 className="card-subtitle text-muted">Total Attendees</h6>
                        <h5 className="card-title"></h5>
                        <a href="/" className="btn btn-primary">See all Attendees</a>
                    </div>
                </div>
                <div className="card">
                    <div className="card-body">
                        <h6 className="card-subtitle text-muted">Total Revenue Earning</h6>
                        <h5 className="card-title"></h5>
                        <a href="/" className="btn btn-primary">See all earnings</a>
                    </div>
                </div>
                <div className="card">
                    <div className="card-body">
                        <h6 className="card-subtitle text-muted">Average Rating</h6>
                        <h5 className="card-title"></h5>
                        <a href="/" className="btn btn-primary">See all ratings</a>
                    </div>
                </div>
            </div> */}
            <div className='dashboard-content-container upcoming-events'>
                <table className='table-striped'>
                    <thead>
                        <th className='h5 text-black'>Event Name</th>
                        <th className='h5 text-black'>Starts <BsCalendar /></th>
                        <th className='h5 text-black'>Ends <BsCalendarCheck /></th>
                        <th className='h5 text-black'>Schedule <BiTime /></th>
                        <th className='h5 text-black'>Type</th>
                        <th className='h5 text-black'>Category</th>
                        <th className='h5 text-black'>Location <MdOutlineLocationOn /></th>
                    </thead>
                    <tbody>
                        {events.map(event => (
                            <tr key={event.id}>
                                <td>{event.eventTitle}</td>
                                <td>{' '}{event.eventStartDate}</td>
                                <td>{' '} {event.eventEndDate}</td>
                                <td><BiTime />{' '}{event.eventStartTime} - {event.eventEndTime}</td>
                                <td>{' '} {event.eventType}</td>
                                <td>{' '}{event.eventCategory}</td>
                                <td>{' '}{event.eventVenueName}, {event.eventCity}, {event.eventCountry}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Main
