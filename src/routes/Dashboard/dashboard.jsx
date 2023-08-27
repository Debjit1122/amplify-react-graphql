import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import SideBar from '../../components/Dashboard/Sidebar';
import sidebar_menu from '../../constants/sidebar-menu';
import Attendees from '../../components/Dashboard/Attendees';
import Main from '../../components/Dashboard/Main';
import "./dashboard.css";
import Events from '../../components/Dashboard/Events';
import { BiMenu } from 'react-icons/bi'
import EventManage from '../../components/Dashboard/Events/EventManage/EventManage';
import {
    withAuthenticator
} from "@aws-amplify/ui-react";
function Dashboard({ signOut }) {
    const [sidebarOpen, setSidebarOpen] = useState(true);

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };

    const closeSidebar = () => {
        setSidebarOpen(false);
    };

    return (
        <div className='dashboard-container'>
            <BiMenu onClick={toggleSidebar} className='m-3' size={30} />
            <SideBar menu={sidebar_menu} signOut={signOut} open={sidebarOpen} closeSidebar={closeSidebar} />

            <div className={`dashboard-body ${sidebarOpen ? 'body-open' : ''}`}>
                <Routes>
                    <Route path="/" element={<Main />} />
                    <Route path="/attendees" element={<Attendees />} />
                    <Route path="/events" element={<Events />} />
                    <Route path="/events/manage/:id" element={<EventManage />} />
                </Routes>
            </div>
        </div>
    );
}

export default withAuthenticator(Dashboard);
