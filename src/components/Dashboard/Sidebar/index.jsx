import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import SideBarItem from './sidebar-item';
import LogoutIcon from '../../../assets/icons/logout.svg';

function SideBar({ menu, signOut }) {
    const location = useLocation();

    const [active, setActive] = useState(1);

    useEffect(() => {
        menu.forEach(element => {
            if (location.pathname === element.path) {
                setActive(element.id);
            }
        });
    }, [location.pathname])

    const __navigate = (id) => {
        setActive(id);
    }

    return (
        <nav className='sidebar'>
            <div className='sidebar-container'>
                <div className='sidebar-logo-container'>
                    <div className="logo">
                        GATHERHUB
                    </div>
                </div>

                <div className='sidebar-container'>
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
                        <button style={{ background: "transparent", border: "none" }} onClick={signOut}>
                            <img
                                src={LogoutIcon}
                                alt='icon-logout'
                                className='sidebar-item-icon' />
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default SideBar;