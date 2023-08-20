import React, { useState, useEffect } from "react";
import { Header } from "../../components/Home/header";
import { HowTo } from "../../components/Home/howto";
import { About } from "../../components/Home/about";
import { Features } from "../../components/Home/features";
import { Testimonials } from "../../components/Home/testimonials";
import { Contact } from "../../components/Home/contact";
import JsonData from "../../data/data.json";
import SmoothScroll from "smooth-scroll"; // Make sure you have installed the smooth-scroll library
import "./Home.css";
import { Link } from "react-router-dom";
import { RiMenu3Fill } from "react-icons/ri"

// Initialize Smooth Scroll with options
const scroll = new SmoothScroll('a[href*="#"]', {
    speed: 500,
    speedAsDuration: true,
});

const Home = () => {
    const [landingPageData, setLandingPageData] = useState({});

    useEffect(() => {
        setLandingPageData(JsonData);
    }, []);

    return (
        <div>
            <nav className="navbar fixed-top navbar-expand-lg nanbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">GATHERHUB</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <RiMenu3Fill size={30} />
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
                                <Link to="/create-event">
                                    <button className="btn btn-primary">Get Started</button>
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