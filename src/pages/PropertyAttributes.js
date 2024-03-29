import React from 'react';
import "./NewCampaign.css";
import FileUpload from '../container/components/FileUpload';
import { useNavigate } from 'react-router-dom';
import Stepper from '../container/components/Stepper'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import "./Property.css";


const NewCampaign = () => {
    const navigate = useNavigate(); 
    const handleAddNewCampaign = () => { 
        navigate('/inventory');
    };
    const handleCancel = () => {
        navigate('/inventory');
    };
    const handleBack = () => {
        navigate('/inventory/propertysize'); 
    };

    return (
        <div className="new-cmpgn-page">

            <div className="new-cmpgn flex">
                <div className='main-div max-w-[60rem] pr-[8rem] border-r-2'>
                    <div className='cmpgn-head'>
                        Property Attributes
                    </div>
                    <div className='cmpgn-content w-[38rem]'>
                        <div className="greeting-msg-block">
                            <div className='heads'>
                                Direction
                            </div>

                            <select className='greeting-msg-input' aria-label="Greeting Message" aria-describedby="basic-addon2">
                                <option value="Select Message">Select</option>
                            </select>
                        </div>
                        <div className="greeting-msg-block">
                            <div className='heads'>
                                Facing
                            </div>

                            <select className='greeting-msg-input' aria-label="Greeting Message" aria-describedby="basic-addon2">
                                <option value="Select Message">Select</option>
                            </select>
                        </div>

                        <div className="button-block">
                            <div className='btn-div'>
                            <button onClick={handleBack} className='applys_filter mr-[15px]' ><ArrowBackIosIcon style={{ width :"20px"}}/><span className=''>Back</span></button>
                                <button className='cancel-btn' onClick={handleCancel} >
                                    <p className='cancel-text'>Cancel</p>
                                </button>
                                <button className='create-btn' onClick={handleAddNewCampaign} >
                                    <p className='create-text' >Save Property</p>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <Stepper flags={3}/>
            </div>
        </div>
    );
};

export default NewCampaign;
