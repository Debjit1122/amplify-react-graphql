import React, { useState, useEffect } from "react";
import Header from "../../components/Home/header";
import { HowTo } from "../../components/Home/howto";
import { About } from "../../components/Home/about";
import { Features } from "../../components/Home/features";
import { Testimonials } from "../../components/Home/testimonials";
import { Contact } from "../../components/Home/contact";
import JsonData from "./data/data.json";
import "./Home.css";
import { Link } from "react-router-dom";
import { RiMenu3Fill, RiCalendar2Line } from "react-icons/ri"

const Home = () => {
    const [landingPageData, setLandingPageData] = useState({});

    useEffect(() => {
        setLandingPageData(JsonData);
    }, []);

    return (
        <div>
            <nav className="navbar fixed-top navbar-expand-lg nanbar-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">
                        <h1 id="logo-color">Eventify <RiCalendar2Line /></h1>
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <RiMenu3Fill size={30} style={{ color: "hsl(190, 100%, 20%)" }} />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link active" href="#about">About Us</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" href="#features">Features</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" href="#testimonials">Testimonials</a>
                            </li>
                            <li className="nav-item mx-3 mt-1">
                                <Link to="/event/create">
                                    <button className="btn btn-primary">Get Started</button>
                                </Link>
                                <Link to="/dashboard" className="mx-3">
                                    <button className="btn btn-outline-primary">Log in</button>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <Header data={landingPageData.Header} />
            <HowTo data={landingPageData.HowTo} />
            <About data={landingPageData.About} />
            <Features data={landingPageData.Features} />
            <Testimonials data={landingPageData.Testimonials} />
            <Contact data={landingPageData.Contact} />
        </div>
    );
};

export default Home;
