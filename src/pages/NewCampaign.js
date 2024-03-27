import React, { useState } from 'react';
import "./NewCampaign.css";
import FileUpload from '../container/components/FileUpload';

const NewCampaign = () => {
    const [campaignName, setCampaignName] = useState('');
    const [startDate, setStartDate] = useState('2024-08-12');
    const [endDate, setEndDate] = useState('2024-09-12');
    const [campaignPurpose, setCampaignPurpose] = useState('');
    const [greetingMessage, setGreetingMessage] = useState('');
    const [targetUsers, setTargetUsers] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        // Collect all the input details and do something with them
        const formData = {
            campaignName,
            startDate,
            endDate,
            campaignPurpose,
            greetingMessage,
            targetUsers
        };

        console.log(formData);
    };

    return (
        <div className="new-cmpgn-page">
            <div  className="new-cmpgn">
                <div className='main-div'>
                    <div className='cmpgn-head'>
                        Create new Campaign
                    </div>
                    <div className='cmpgn-content'>
                        <form onSubmit={handleSubmit}>
                            <div className='heads'>
                                Campaign name
                            </div>
                            <div className="cmpgn-name-block">
                                <input type="text" className='cmpgn-name-input' aria-label="Campaign name" aria-describedby="basic-addon2" value={campaignName} onChange={(e) => setCampaignName(e.target.value)} />
                            </div>
                            <div className='date-block'>
                                <div className='date-box'>
                                    <div className='heads'>
                                        Start date
                                    </div>
                                    <div className='date-input'>
                                        <input type="date" className='date' value={startDate} onChange={(e) => setStartDate(e.target.value)} />
                                    </div>
                                </div>
                                <div className='date-box'>
                                    <div className='heads'>
                                        End date
                                    </div>
                                    <div className='date-input'>
                                        <input type="date" className='date' value={endDate} onChange={(e) => setEndDate(e.target.value)} />
                                    </div>
                                </div>
                            </div>
                            <div className='purpose-block'>
                                <div className='heads'>
                                    Campaign purpose
                                </div>
                                <div className="paragraph-input">
                                    <textarea className="paragraph-textarea" value={campaignPurpose} onChange={(e) => setCampaignPurpose(e.target.value)} />
                                </div>
                            </div>
                            <div className="greeting-msg-block">
                                <div className='heads'>
                                    Greeting message
                                </div>
                                <select className='greeting-msg-input' aria-label="Greeting Message" aria-describedby="basic-addon2" value={greetingMessage} onChange={(e) => setGreetingMessage(e.target.value)}>
                                    <option value="Select Message">Select Message</option>
                                </select>
                            </div>
                            <div className='target-users-block'>
                                <div className='heads'>
                                    Target users
                                </div>
                                <select className='target-users-input' aria-label="Greeting Message" aria-describedby="basic-addon2" value={targetUsers} onChange={(e) => setTargetUsers(e.target.value)}>
                                    <option value="Select Message">
                                        Upload a CSV <span className='place-holder' style={{ fontWeight: 'bold' }}>(964 users found)</span>
                                    </option>
                                </select>
                                <div className='subtext'>
                                    A member will be able to view all the pages but will not be able to create or modify presets.
                                </div>
                            </div>
                            <div className='drop-file-block'>
                                <FileUpload/>
                            </div>
                            <div className="button-block">
                                <div className='btn-div'>
                                    <button type="button" className='cancel-btn' >
                                        <p className='cancel-text'>Cancel</p>
                                    </button>
                                    <button type="submit" className='create-btn' >
                                        <p className='create-text'>Create Campaign</p>
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewCampaign;
