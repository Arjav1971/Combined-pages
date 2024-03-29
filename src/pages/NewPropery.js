import React from 'react';
import{useState} from 'react';
import FileUpload from '../container/components/FileUpload';
import { useNavigate } from 'react-router-dom';
import Stepper from '../container/components/Stepper'
import FilterListIcon from '@mui/icons-material/FilterList';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import "./Property.css";

const NewCampaign = () => {
    // const[flag , setFlag] = useState(true);
    const navigate = useNavigate();
    const handleAddNewCampaign = () => {
        // setFlag((prevFlag)=> (!prevFlag));
        navigate('/inventory/propertylocation');
    };
    const handleCancel = () => {
        navigate('/inventory');
    };
    const handleBack = () => {
        navigate('/inventory');
    };

    return (
        <div className="new-cmpgn-page ">
            <div className="new-cmpgn flex ">
                <div className='main-div max-w-[60rem] pr-[8rem] border-r-2'>
                    <div className='cmpgn-head'>
                        Add New Property
                    </div>
                    <div className='cmpgn-content w-[38rem]'>
                        <div className="greeting-msg-block">
                            <div className='heads'>
                                Property Type
                            </div>

                            <select className='greeting-msg-input' aria-label="Greeting Message" aria-describedby="basic-addon2">
                                <option value="Select Message">Select</option>
                                <option value="Residential">Residential</option>
                            </select>
                        </div>
                        <div className="greeting-msg-block">
                            <div className='heads'>
                                Property Sub-Type
                            </div>

                            <select className='greeting-msg-input' aria-label="Greeting Message" aria-describedby="basic-addon2">
                                <option value="Select Message">Select</option>
                            </select>
                        </div>
 
                        <div className="button-block">
                            <div className='btn-div'>
                            <button className='applys_filter mr-[15px]' onClick={handleBack}><ArrowBackIosIcon style={{ width :"20px"}}/><span className=''>Back</span></button>
                                <button className='cancel-btn' >
                                    <p className='cancel-text' onClick={handleCancel}>Cancel</p>
                                </button>
                                <button className='create-btn' onClick={handleAddNewCampaign} >
                                    <p className='create-text'>Continue</p>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <Stepper flags={0} />
            </div>
            
        </div>
        
    );
};

export default NewCampaign;
