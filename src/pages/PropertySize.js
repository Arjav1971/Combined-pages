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
        navigate('/inventory/propertyattribute');
    };
    const handleCancel = () => {
        navigate('/inventory/'); 
    };
    const handleBack = () => {
        navigate('/inventory/propertylocation'); 
    };


    return (
        <div className="new-cmpgn-page">

            <div className="new-cmpgn flex">
                <div className='main-div max-w-[60rem] pr-[8rem] border-r-2'>
                    <div className='cmpgn-head'>
                        Property Size
                    </div>
                    <div className='cmpgn-content w-[38rem]'>
                        <div className="greeting-msg-block">
                            <div className='heads'>
                                Buildup/Non-Buildup
                            </div>

                            <select className='greeting-msg-input' aria-label="Greeting Message" aria-describedby="basic-addon2">
                                <option value="Select Message">Select</option>
                            </select>
                        </div>
                        <div className='heads'>
                            Area
                        </div>
                        <div className="cmpgn-name-block w-[38rem]" >
                            <input type="text" placeholder="Start Typing..." className='cmpgn-name-input' aria-label="Campaign name" aria-describedby="basic-addon2" />
                        </div>
                        <div className='flex w-[38rem]'>
                            <div className='flex flex-col mr-9'>
                                <div className='heads'>
                                    Carpet Area
                                </div>
                                <div className="cmpgn-name-block ">
                                    <input type="text" placeholder="Start Typing..." className='cmpgn-name-input max-w-[10rem]' aria-label="Campaign name" aria-describedby="basic-addon2" />
                                </div>
                            </div>
                            <div className='flex flex-col mr-9'>
                                <div className='heads'>
                                    Super Area 
                                </div>
                                <div className="cmpgn-name-block ">
                                    <input type="text" placeholder="Start Typing..." className='cmpgn-name-input' aria-label="Campaign name" aria-describedby="basic-addon2" />
                                </div>
                            </div>
                            <div className='flex flex-col'>
                                <div className='heads'>
                                   Covered Area
                                </div>
                                <div className="cmpgn-name-block ">
                                    <input type="text" placeholder="Start Typing..." className='cmpgn-name-input' aria-label="Campaign name" aria-describedby="basic-addon2" />
                                </div>
                            </div>
                            
                        </div>
                        <div className="greeting-msg-block">
                            <div className='heads'>
                                BHKs
                            </div>

                            <select className='greeting-msg-input' aria-label="Greeting Message" aria-describedby="basic-addon2">
                                <option value="Select Message">Select</option>
                            </select>
                        </div>

                        <div className="button-block">
                            <div className='btn-div'>
                            <button className='applys_filter mr-[15px]'onClick={handleBack} ><ArrowBackIosIcon style={{ width :"20px"}}/><span className=''>Back</span></button>
                                <button className='cancel-btn' >
                                    <p className='cancel-text' onClick={handleCancel}>Cancel</p>
                                </button>
                                 <button className='create-btn'  onClick={handleAddNewCampaign} >
                                    <p className='create-text'>Continue</p>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <Stepper flags={2}/>
            </div>
        </div>
    );
};

export default NewCampaign;
