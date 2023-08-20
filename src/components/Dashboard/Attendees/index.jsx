import React, { useState, useEffect } from 'react';

import all_attendees from '../../../constants/attendees';
import { calculateRange, sliceData } from '../../../routes/Dashboard/utils/table-pagination';
import DoneIcon from '../../../assets/icons/done.svg';
import CancelIcon from '../../../assets/icons/cancel.svg';
import RefundedIcon from '../../../assets/icons/refunded.svg';

function Attendees() {
    const [search, setSearch] = useState('');
    const [attendees, setAttendees] = useState(all_attendees);
    const [page, setPage] = useState(1);
    const [pagination, setPagination] = useState([]);

    useEffect(() => {
        setPagination(calculateRange(all_attendees, 5));
        setAttendees(sliceData(all_attendees, page, 5));
    }, []);

    // Search
    const __handleSearch = (event) => {
        setSearch(event.target.value);
        if (event.target.value !== '') {
            let search_results = attendees.filter((item) =>
                item.first_name.toLowerCase().includes(search.toLowerCase()) ||
                item.last_name.toLowerCase().includes(search.toLowerCase()) ||
                item.event.toLowerCase().includes(search.toLowerCase())
            );
            setAttendees(search_results);
        }
        else {
            __handleChangePage(1);
        }
    };

    // Change Page 
    const __handleChangePage = (new_page) => {
        setPage(new_page);
        setAttendees(sliceData(all_attendees, new_page, 5));
    }

    return (
        <div className='dashboard-content'>
            <div className='dashboard-content-container'>
                <div className='dashboard-content-header'>
                    <h2>Attendees</h2>
                    <div className='dashboard-content-search'>
                        <input
                            type='text'
                            value={search}
                            placeholder='Search..'
                            className='dashboard-content-input'
                            onChange={e => __handleSearch(e)} />
                    </div>
                </div>

                <table>
                    <thead>
                        <th>ID</th>
                        <th>DATE</th>
                        <th>STATUS</th>
                        <th>NAME</th>
                        <th>EVENT</th>
                        <th>PURCHASE</th>
                    </thead>

                    {attendees.length !== 0 ?
                        <tbody>
                            {attendees.map((attendee, index) => (
                                <tr key={index}>
                                    <td><span>{attendee.id}</span></td>
                                    <td><span>{attendee.date}</span></td>
                                    <td>
                                        <div>
                                            {attendee.status === 'Paid' ?
                                                <img
                                                    src={DoneIcon}
                                                    alt='paid-icon'
                                                    className='dashboard-content-icon' />
                                                : attendee.status === 'Canceled' ?
                                                    <img
                                                        src={CancelIcon}
                                                        alt='canceled-icon'
                                                        className='dashboard-content-icon' />
                                                    : attendee.status === 'Refunded' ?
                                                        <img
                                                            src={RefundedIcon}
                                                            alt='refunded-icon'
                                                            className='dashboard-content-icon' />
                                                        : null}
                                            <span>{attendee.status}</span>
                                        </div>
                                    </td>
                                    <td>
                                        <div>
                                            <img
                                                src={attendee.avatar}
                                                className='dashboard-content-avatar'
                                                alt={attendee.first_name + ' ' + attendee.last_name} />
                                            <span>{attendee.first_name} {attendee.last_name}</span>
                                        </div>
                                    </td>
                                    <td><span>{attendee.event}</span></td>
                                    <td><span>${attendee.price}</span></td>
                                    <td><button id="btn-edit">Edit</button></td>
                                </tr>
                            ))}
                        </tbody>
                        : null}
                </table>

                {attendees.length !== 0 ?
                    <div className='dashboard-content-footer'>
                        {pagination.map((item, index) => (
                            <span
                                key={index}
                                className={item === page ? 'active-pagination' : 'pagination'}
                                onClick={() => __handleChangePage(item)}>
                                {item}
                            </span>
                        ))}
                    </div>
                    :
                    <div className='dashboard-content-footer'>
                        <span className='empty-table'>No data</span>
                    </div>
                }
            </div>
        </div>
    )
}

export default Attendees;