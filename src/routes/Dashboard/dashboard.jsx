// routes/dashboard.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import SideBar from '../../components/Dashboard/Sidebar';
import sidebar_menu from '../../constants/sidebar-menu';
import Attendees from '../../components/Dashboard/Attendees';
import "./dashboard.css"
import {
    withAuthenticator
} from "@aws-amplify/ui-react";

function Dashboard({ signOut }) {
    return (
        <div className='dashboard-container'>
            <SideBar menu={sidebar_menu} signOut={signOut} />

            <div className='dashboard-body'>
                <Routes>
                    <Route path="/" element={<h1>To Do</h1>} />
                    <Route path="/attendees" element={<Attendees />} />
                </Routes>
            </div>
        </div>
    );
}

export default withAuthenticator(Dashboard);
