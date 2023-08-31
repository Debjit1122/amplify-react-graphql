import React, { useEffect, useState } from 'react'
import AllEventData from './data/allEventData'
import { useParams } from 'react-router-dom'
import "./EventRegister.css"
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { GrMapLocation, GrSchedules } from "react-icons/gr"
import { GiTicket } from "react-icons/gi"
import { TfiAgenda } from "react-icons/tfi"
import { BsFillChatLeftDotsFill, BsInfoCircle } from "react-icons/bs"
import { FaLinkedin, FaFacebook, FaTwitter, FaInstagram, FaDiscord } from 'react-icons/fa'
import { BiGroup, BiSupport, BiTime } from "react-icons/bi"
import { Storage } from 'aws-amplify';
import { MdEmail, MdGroup, MdPhone } from 'react-icons/md';
import { AttendeesCreateForm } from "../../../ui-components"
const EventRegister = () => {
    const [modalVisible, setModalVisible] = useState(false);
    const [formSubmitted, setFormSubmitted] = useState(false); // New state variable
    const [eventLogo, setEventLogo] = useState(""); // Initialize with an empty string
    const [eventImage, setEventImage] = useState(""); // Added state for eventImage
    const [eventCreatorImage, setEventCreatorImage] = useState(""); // Added state for eventCreatorImage
    const [eventAgenda, setEventAgenda] = useState("");
    // Function to open the modal
    const openModal = () => {
        setModalVisible(true);
        setFormSubmitted(false);
    };

    // Function to close the modal
    const closeModalAndSubmit = () => {
        setModalVisible(false);
        setFormSubmitted(true);
    };

    const { events, loading, error } = AllEventData();
    const { id } = useParams();
    const specificEvent = events.find(event => event.id === id);
    useEffect(() => {
        async function fetchEventImages() {
            try {
                if (specificEvent && specificEvent.eventLogo) {
                    const logoImage = await Storage.get(specificEvent.eventLogo);
                    setEventLogo(logoImage);
                }
                if (specificEvent && specificEvent.eventImage) {
                    const image = await Storage.get(specificEvent.eventImage);
                    setEventImage(image);
                }
                if (specificEvent && specificEvent.eventCreatorImage) {
                    const creatorImage = await Storage.get(specificEvent.eventCreatorImage);
                    setEventCreatorImage(creatorImage);
                }
                if (specificEvent && specificEvent.eventAgenda) {
                    const agenda = await Storage.get(specificEvent.eventAgenda);
                    setEventAgenda(agenda);
                }
            } catch (error) {
                console.error(error);
            }
        }

        if (specificEvent) {
            fetchEventImages();
        }
    }, [specificEvent]);


    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error fetching events: {error.message}</div>;
    }

    return (
        <div>
            {
                specificEvent ? (
                    <div id="reg-page">


                        <header className="event-cover">
                            <img src={eventImage} alt="Event Cover" />
                        </header>

                        <div className="container mt-5">
                            <div className="row">
                                <div className="col-md-8">
                                    <section className="event-details">
                                        <h1>{specificEvent.eventTitle}</h1>
                                        <p style={{ color: "hsl(190, 100%, 20%)" }}>{specificEvent.eventCategory}</p>
                                        <p>{specificEvent.eventDesc}</p>
                                    </section>

                                    <section className="event-agenda">
                                        <h2 className='mb-4'>Agenda <TfiAgenda /></h2>
                                        <div><iframe
                                            src={eventAgenda}
                                            title="Event Agenda"
                                            width="100%"
                                            height="400"
                                            style={{ border: "1px solid #ddd" }}
                                        /></div>
                                    </section>

                                    <section className="event-speakers">
                                        <h2 className='mb-4'>Speakers <BsFillChatLeftDotsFill /></h2>
                                        <div className="speaker-list">
                                            {specificEvent.eventSpeakers.split(';').map((speaker, index) => (
                                                <div key={index} className="speaker">
                                                    <p>{speaker}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </section>

                                    <section className="event-venue">
                                        <h2 className='mb-4'>Location <GrMapLocation /></h2>
                                        <p>
                                            {specificEvent.eventVenueName}
                                        </p>
                                        <p>{specificEvent.eventStreetAddress}</p>
                                        <p>{specificEvent.eventCity}, {specificEvent.eventState} {specificEvent.eventZipCode}, {specificEvent.eventCountry}</p>
                                    </section>

                                    <section>
                                        <h2 className='mb-4'>Contact / Support <BiSupport /></h2>
                                        <p>
                                            {specificEvent.orgName}
                                        </p>
                                        <p><MdEmail /> {specificEvent.orgEmail}</p>
                                        <p><MdPhone /> {specificEvent.orgPhone}</p>
                                    </section>
                                    <section>
                                        <div>
                                            {/* Button trigger modal */}
                                            <button type="button" className="btn btn-link" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                                                <h3>Code of Conduct <MdGroup size={35} /></h3>
                                            </button>
                                            {/* Modal */}
                                            <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={-1} aria-labelledby="staticBackdropLabel" aria-hidden="true">
                                                <div className="modal-dialog">
                                                    <div className="modal-content">
                                                        <div className="modal-header">
                                                            <h1 className="modal-title fs-5" id="staticBackdropLabel">Code of Conduct</h1>
                                                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                                                        </div>
                                                        <div className="modal-body">
                                                            {specificEvent.eventCodeofConduct}
                                                        </div>
                                                        <div className="modal-footer">
                                                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                                            <button type="button" className="btn btn-primary">Understood</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </section>
                                </div>

                                <div className="col-md-4 d-flex flex-column align-items-center">
                                    <div className='event-logo mb-5 d-none d-lg-block'>
                                        <img src={eventLogo} alt="" />
                                    </div>
                                    <section className="social-links">
                                        {specificEvent.promoLinkedin ? (
                                            <div>
                                                <a href={specificEvent.promoLinkedin}><FaLinkedin /></a>
                                            </div>
                                        ) : (
                                            <></>
                                        )}
                                        {specificEvent.promoTwitter ? (
                                            <div>
                                                <a href={specificEvent.promoTwitter}><FaTwitter /></a>
                                            </div>
                                        ) : (
                                            <></>
                                        )}
                                        {specificEvent.promoFacebook ? (
                                            <div>
                                                <a href={specificEvent.promoFacebook}><FaFacebook /></a>
                                            </div>
                                        ) : (
                                            <></>
                                        )}
                                        {specificEvent.promoInstagram ? (
                                            <div>
                                                <a href={specificEvent.promoInstagram}><FaInstagram /></a>
                                            </div>
                                        ) : (
                                            <></>
                                        )}
                                        {specificEvent.promoDiscord ? (
                                            <div>
                                                <a href={specificEvent.promoDiscord}><FaDiscord /></a>
                                            </div>
                                        ) : (
                                            <></>
                                        )}
                                    </section>
                                    <section className="event-booking">
                                        <div className="event-card card">
                                            <h3>Get your tickets now</h3>
                                            <h2>{specificEvent.eventTicketCurrency} {specificEvent.eventTicketPrice}</h2>
                                            <div className="mb-3">
                                                <input type="text" className="form-control" id="discount-input" placeholder="Add a discount code" />
                                            </div>
                                            <button className="btn btn-lg btn-primary" onClick={openModal}>Get tickets <GiTicket size={28} /></button>
                                        </div>
                                    </section>
                                    <section className='time-container'>
                                        <BiTime /> From {specificEvent.eventStartTime} till {specificEvent.eventEndTime} ({specificEvent.eventTimeZone})
                                    </section>
                                    <section className="calendar-container">
                                        <h3 className='mb-3'>Schedule <GrSchedules /></h3>
                                        <Calendar selectRange value={[specificEvent.eventStartDate, specificEvent.eventEndDate]} onChange={() => { }} />
                                    </section>
                                    <section className='profile-info'>
                                        <div className="profile-card">
                                            <h3 className='mb-4'>About the Organizer <BsInfoCircle /></h3>
                                            <div className="profile-header">
                                                <img src={eventCreatorImage} alt="Profile" className="profile-image" />
                                                <h2 className="profile-name">{specificEvent.eventCreatorName}</h2>
                                                <p className="profile-title">{specificEvent.eventCreatorHeadline}</p>
                                            </div>
                                            <div className="profile-social">
                                                <FaLinkedin className='profile-icon' />
                                                <FaTwitter className='profile-icon' />
                                                <FaFacebook className='profile-icon' />
                                                <FaInstagram className='profile-icon' />
                                            </div>
                                            <div className="profile-bio">
                                                <p>{specificEvent.eventCreatorBio}</p>
                                            </div>
                                        </div>
                                    </section>
                                    {/* Modal */}
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
                                                    <AttendeesCreateForm onSuccess={closeModalAndSubmit} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={`modal-backdrop ${modalVisible ? 'show' : ''}`} style={{ display: modalVisible ? 'block' : 'none' }}></div>
                                </div>
                            </div>
                        </div>

                        <footer className="footer mt-auto py-3 bg-dark">
                            <div className="container text-center">
                                <p className="footer-text text-white">
                                    &copy; 2023 Uniteopia | <a href="/" className="footer-link">Privacy Policy</a>
                                </p>
                            </div>
                        </footer>
                    </div>
                ) : (
                    <div>Event not found.</div>
                )}
        </div>
    )
}

export default EventRegister
