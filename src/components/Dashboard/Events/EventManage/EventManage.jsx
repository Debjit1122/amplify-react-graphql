import React, { useState } from 'react'
import { BsCalendarCheck } from "react-icons/bs"
import { BiTime } from "react-icons/bi"
import { MdOutlineLocationOn } from "react-icons/md"
import ApexChart1 from '../Charts/ApexChart1'
import ApexChart2 from '../Charts/ApexChart2'
import AnnouncementForm from '../AnnouncementForm/AnnouncementForm'
import EventData from '../../../../routes/Dashboard/data/eventData'
import { useParams } from 'react-router-dom'
const EventManage = () => {
    const { events, loading, error } = EventData();
    const { id } = useParams(); // Get the eventId from the URL
    const [copiedLink, setCopiedLink] = useState('');
    const [showCopiedAlert, setShowCopiedAlert] = useState(false);
    console.log(id);
    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error fetching events: {error.message}</div>;
    }

    // Find the specific event using the eventId from the URL
    const specificEvent = events.find(event => event.id === id);

    const copyLinkToClipboard = () => {
        const linkToCopy = `${window.location.origin}/events/register/${specificEvent.id}`;

        const tempInput = document.createElement('input');
        tempInput.value = linkToCopy;
        document.body.appendChild(tempInput);
        tempInput.select();
        document.execCommand('copy');
        document.body.removeChild(tempInput);

        setCopiedLink(linkToCopy);
        setShowCopiedAlert(true); // Show the alert when link is copied

        // Hide the alert after a delay (e.g., 3 seconds)
        setTimeout(() => {
            setShowCopiedAlert(false);
        }, 3000);
    };

    return (
        <>
            {showCopiedAlert && (
                <div className="alert alert-success" role="alert">
                    Link copied to clipboard!
                </div>
            )}
            {
                specificEvent ? (
                    <div className='dashboard-content'>
                        <div className="d-flex mb-5" key={specificEvent.id}>
                            <h2>{' '}{specificEvent.eventTitle}</h2>
                            <a href="/" className='mx-3'>Edit</a>
                        </div>
                        <div className="dashboard-cards">
                            <div className="card">
                                <div className="card-body">
                                    <h6 className="card-subtitle text-muted">Total Available Seats</h6>
                                    <h5 className="card-title">{' '}{specificEvent.eventTicketQuantity}</h5>
                                    <a href="/" className="btn btn-primary">Edit Availability</a>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-body">
                                    <h6 className="card-subtitle text-muted">Price per Seat</h6>
                                    <h5 className="card-title">{' '} {specificEvent.eventTicketCurrency} {specificEvent.eventTicketPrice}</h5>
                                    <a href="/" className="btn btn-primary">Edit Pricing</a>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-body">
                                    <h6 className="card-subtitle text-muted">Discount</h6>
                                    <h5 className="card-title">{' '}{specificEvent.promoDiscountCode}</h5>
                                    <a href="/" className="btn btn-primary">Edit Discount</a>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-body">
                                    <h6 className="card-subtitle text-muted">RSVP Link</h6>
                                    <h5 className="card-title">Share Your RSVP Link!</h5>
                                    <button className="btn btn-primary" onClick={copyLinkToClipboard}>Copy Link</button>
                                </div>
                            </div>
                        </div>
                        <div className="d-flex mt-5 gap-5">
                            <div className='dashboard-content-container event-details w-50'>
                                <div className='d-flex justify-content-between'>
                                    <h3>Event Details</h3>
                                    <button className="btn btn-secondary">
                                        Edit
                                    </button>
                                </div>
                                <div><BsCalendarCheck /> {' '}{specificEvent.eventStartDate}</div>
                                <div><BiTime /> {' '}{specificEvent.eventStartTime} - {' '}{specificEvent.eventEndTime}</div>
                                <div><MdOutlineLocationOn /> {specificEvent.eventVenueName}, {specificEvent.eventCity}, {specificEvent.eventCountry}</div>
                            </div>
                            <div className='dashboard-content-container w-100'>
                                <h3>Seats Overview</h3>
                                <ApexChart1 />
                            </div>
                        </div>
                        <div className='d-flex gap-5'>
                            <div className='dashboard-content-container w-50 mt-5'>
                                <h3>Total Earnings</h3>
                                <ApexChart2 />
                            </div>
                            <div className='w-50 mt-5'>
                                <AnnouncementForm />
                            </div>
                        </div>
                    </div>
                ) : (
                    <tr>
                        <td colSpan="4">Event not found.</td>
                    </tr>
                )}
        </>
    )
}

export default EventManage
