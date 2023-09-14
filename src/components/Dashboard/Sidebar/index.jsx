import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { FaTimes } from 'react-icons/fa';
import SideBarItem from './sidebar-item';
import { BiLogOut } from 'react-icons/bi';
import { RiCalendar2Line } from 'react-icons/ri';

function SideBar({ menu, signOut, open, closeSidebar }) {
    const location = useLocation();

    const [active, setActive] = useState(1);

    useEffect(() => {
        menu.forEach(element => {
            if (location.pathname === element.path) {
                setActive(element.id);
            }
        });
    }, [location.pathname]);

    const __navigate = (id) => {
        setActive(id);
    };

    return (
        <nav className={`sidebar ${open ? 'open' : 'closed'}`}>
            <div className='sidebar-container'>
                <div className='sidebar-toggle-button' onClick={closeSidebar}>
                    <FaTimes size={18} />
                </div>
                <div className='sidebar-logo-container d-flex p-3'>
                    <a className="navbar-brand" href="/">
                        <h1 id="logo-white">Eventify <RiCalendar2Line /></h1>
                    </a>
                </div>

                <div className='sidebar-items'>
                    {menu.map((item, index) => (
                        <div key={index} onClick={() => __navigate(item.id)}>
                            <SideBarItem
                                active={item.id === active}
                                item={item} />
                        </div>
                    ))}
                </div>

                <div className='sidebar-footer'>
                    <span className='sidebar-item-label'>Logout</span>
                    <BiLogOut onClick={signOut} />
                </div>
            </div>
        </nav>
    );
}

export default SideBar;
