import React, { useState, useEffect } from 'react'
import { BsCalendar, BsCalendarCheck } from "react-icons/bs"
import { BiTime } from "react-icons/bi"
import { MdOutlineLocationOn } from "react-icons/md"
import ApexChart1 from '../Charts/ApexChart1'
import ApexChart2 from '../Charts/ApexChart2'
import AnnouncementForm from '../AnnouncementForm/AnnouncementForm'
import EventData from '../../../../routes/Dashboard/data/eventData'
import { useParams } from 'react-router-dom'
import { EventsUpdateForm } from '../../../../ui-components'
import { DataStore } from 'aws-amplify';
import { AttendeesEvents } from '../../../../models';
const EventManage = () => {
    const [modalVisible, setModalVisible] = useState(false);
    const [formSubmitted, setFormSubmitted] = useState(false); // New state variable
    const openModal = () => {
        setModalVisible(true);
        setFormSubmitted(false);
    };

    // Function to close the modal
    const closeModalAndSubmit = () => {
        setModalVisible(false);
        setFormSubmitted(true);
    };
    const { events, loading, error } = EventData();
    const { id } = useParams(); // Get the eventId from the URL

    const [copiedLink, setCopiedLink] = useState('');
    const [showCopiedAlert, setShowCopiedAlert] = useState(false);
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
                    <div className="dashboard-body">
                        <div className='dashboard-content'>
                            <div className="d-flex mb-5" key={specificEvent.id}>
                                <h2>{' '}{specificEvent.eventTitle}</h2>
                                <button className="btn btn-link" onClick={openModal}>Edit Title</button>
                            </div>
                            <div className="dashboard-cards">
                                <div className="card">
                                    <div className="card-body">
                                        <h6 className="card-subtitle text-muted">Total Available Seats</h6>
                                        <h5 className="card-title">{' '}{specificEvent.eventTicketQuantity}</h5>
                                        <button className="btn btn-primary" onClick={openModal}>Edit Seats</button>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="card-body">
                                        <h6 className="card-subtitle text-muted">Price per Seat</h6>
                                        <h5 className="card-title">{' '} {specificEvent.eventTicketCurrency} {specificEvent.eventTicketPrice}</h5>
                                        <button className="btn btn-primary" onClick={openModal}>Edit Price</button>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="card-body">
                                        <h6 className="card-subtitle text-muted">Discount</h6>
                                        <h5 className="card-title">{' '}{specificEvent.promoDiscountCode}</h5>
                                        <button className="btn btn-primary" onClick={openModal}>Edit Discount</button>
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
                                        <div>
                                            <button className="btn btn-primary" onClick={openModal}>Edit Details</button>
                                            <div className='d-flex justify-content-between'>
                                                <div className={`modal ${modalVisible ? 'show' : ''}`} tabIndex="-1" style={{ display: modalVisible ? 'block' : 'none' }} id="form-modal">
                                                    <div className="modal-dialog modal-dialog-centered">
                                                        <div className="modal-content">
                                                            {/* Modal content */}
                                                            <div className="modal-header">
                                                                <h5 className="modal-title">Ticket Booking</h5>
                                                                <button type="button" className="btn-close" onClick={closeModalAndSubmit}></button>
                                                            </div>
                                                            <div className="modal-body">
                                                                {/* Pass a callback function to the form to handle form submission */}
                                                                <EventsUpdateForm events={specificEvent} onSuccess={closeModalAndSubmit} />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className={`modal-backdrop ${modalVisible ? 'show' : ''}`} style={{ display: modalVisible ? 'block' : 'none' }}></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div>Type: {specificEvent.eventType}</div>
                                    <div>Category: {specificEvent.eventCategory}</div>
                                    <div><BsCalendar /> Start Date: {specificEvent.eventStartDate}</div>
                                    <div><BsCalendarCheck /> End Date: {specificEvent.eventEndDate}</div>
                                    <div><BiTime /> Timing: {specificEvent.eventStartTime} - {' '}{specificEvent.eventEndTime}</div>
                                    <div><MdOutlineLocationOn /> Location: {specificEvent.eventVenueName}, {specificEvent.eventStreetAddress}, {specificEvent.eventCity}, {specificEvent.eventCountry}</div>
                                </div>
                                <div className='dashboard-content-container w-100'>
                                    <h3>Seats Overview</h3>
                                    {/* <ApexChart1 eventTicketStartDate={specificEvent.eventTicketSaleStart}
                                        attendeesCount={200}
                                        totalSeats={specificEvent.eventTicketQuantity} /> */}
                                    <h2 className='text-muted'>Coming Soon...</h2>
                                </div>
                            </div>
                            <div className='d-flex gap-5'>
                                <div className='dashboard-content-container w-50 mt-5'>
                                    <h3>Total Earnings</h3>
                                    {/* <ApexChart2 /> */}
                                    <h2 className='text-muted'>Coming Soon...</h2>
                                </div>
                                <div className='w-50 mt-5'>
                                    <AnnouncementForm />
                                </div>
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
