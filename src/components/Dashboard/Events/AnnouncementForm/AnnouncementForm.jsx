import React, { useState } from 'react';
import { FaTelegramPlane } from "react-icons/fa"
const AnnouncementForm = ({ onAnnouncementSubmit }) => {
    const [announcementData, setAnnouncementData] = useState({
        title: '',
        message: '',
        date: '',
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setAnnouncementData({
            ...announcementData,
            [name]: value,
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (announcementData.title.trim() !== '' && announcementData.message.trim() !== '') {
            onAnnouncementSubmit(announcementData);
            setAnnouncementData({
                title: '',
                message: '',
                date: '',
            });
        }
    };

    return (
        <div className="announcement-form p-3 border rounded">
            <h3 className="mb-3">Post an Announcement</h3>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">
                        Title
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="title"
                        name="title"
                        value={announcementData.title}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="message" className="form-label">
                        Message
                    </label>
                    <textarea
                        className="form-control"
                        id="message"
                        name="message"
                        rows={4}
                        value={announcementData.message}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="date" className="form-label">
                        Date
                    </label>
                    <input
                        type="date"
                        className="form-control"
                        id="date"
                        name="date"
                        value={announcementData.date}
                        onChange={handleInputChange}
                    />
                </div>
                <button type="submit" className="btn btn-primary mt-3">
                    Post <FaTelegramPlane/>
                </button>
            </form>
        </div>
    );
};

export default AnnouncementForm;
