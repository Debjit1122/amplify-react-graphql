import React from 'react'
import AllEventData from './data/allEventData'
import { useParams } from 'react-router-dom'
import "./EventRegister.css"
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { GrMapLocation, GrSchedules } from "react-icons/gr"
import { GiTicket } from "react-icons/gi"
import logo from "../../../assets/images/logo.png"
import { TfiAgenda } from "react-icons/tfi"
import { BsFillChatLeftDotsFill } from "react-icons/bs"
const EventRegister = () => {
    const { events, loading, error } = AllEventData();
    const { id } = useParams(); // Get the eventId from the URL
    console.log(id);
    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error fetching events: {error.message}</div>;
    }
    const specificEvent = events.find(event => event.id === id);
    return (
        <div>
            {
                specificEvent ? (
                    <div id="reg-page">
                        <nav className="navbar fixed-top navbar-expand-lg" style={{ background: "#fff" }}>
                            <div className="container">
                                <a className="navbar-brand" href="/">
                                    <img src={logo} alt="" />
                                </a>
                            </div>
                        </nav>

                        <header className="event-cover">
                            <img src="https://place-hold.it/800x200" alt="Event Cover" className='' />
                        </header>

                        <div className="container mt-5">
                            <div className="row ">
                                <div className="col-md-8">
                                    <section className="event-details">
                                        <h1>{specificEvent.eventTitle}</h1>
                                        <p style={{ color: "hsl(190, 100%, 20%)" }}>{specificEvent.eventCategory}</p>
                                        <p>{specificEvent.eventDesc}</p>
                                    </section>

                                    <section className="event-agenda">
                                        <h2 className='mb-5'>Agenda <TfiAgenda /></h2>
                                        <div><iframe
                                            src="https://www.africau.edu/images/default/sample.pdf"
                                            title="Event Agenda"
                                            width="100%"
                                            height="400"
                                            style={{ border: "1px solid #ddd" }}
                                        /></div>
                                    </section>

                                    <section className="event-speakers">
                                        <h2 className='mb-5'>Speakers <BsFillChatLeftDotsFill /></h2>
                                        <div className="speaker-list">
                                            {specificEvent.eventSpeakers.split(';').map((speaker, index) => (
                                                <div key={index} className="speaker">
                                                    <img src="https://place-hold.it/50" alt="" />
                                                    <p>{speaker}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </section>

                                    <section className="event-venue">
                                        <h2 className='mb-5'>Location <GrMapLocation /></h2>
                                        <p>
                                            {specificEvent.eventVenueName}
                                        </p>
                                        <p>{specificEvent.eventStreetAddress}</p>
                                        <p>{specificEvent.eventCity}, {specificEvent.eventState} {specificEvent.eventZipCode}, {specificEvent.eventCountry}</p>
                                    </section>

                                    {/* Include other sections: Pricing, Promotions & Discounts, Creator Info, Contact Info */}
                                </div>

                                <div className="col-md-4">
                                    <section className="calendar-container">
                                        <h3 className='mb-3'>Schedule <GrSchedules /></h3>
                                        <Calendar selectRange value={[specificEvent.eventStartDate, specificEvent.eventEndDate]} onChange={() => { }} />
                                    </section>
                                    <section className="event-booking">
                                        <div className="event-card card">
                                            <h3>Get your tickets now</h3>
                                            <h2>{specificEvent.eventTicketCurrency} {specificEvent.eventTicketPrice}</h2>
                                            <div className="mb-3">
                                                <input type="text" className="form-control" id="discount-input" placeholder="Add a discount code" />
                                            </div>
                                            <button className="btn btn-lg btn-primary">Get tickets <GiTicket size={28} /></button>
                                        </div>
                                    </section>
                                </div>
                            </div>
                        </div>

                        <footer className="footer mt-auto py-3 bg-dark">
                            <div className="container text-center">
                                <p className="footer-text">
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
