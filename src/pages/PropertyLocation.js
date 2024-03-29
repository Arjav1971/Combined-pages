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
        navigate('/inventory/propertysize');
    };
    const handleCancel = () => {
        navigate('/inventory');
    }; 
    const handleBack = () => {
        navigate('/inventory/new');
    }; 

    return (
        <div className="new-cmpgn-page">

            <div className="new-cmpgn flex">
                <div className='main-div max-w-[60rem] pr-[8rem] border-r-2'>
                    <div className='cmpgn-head'>
                        Property Loaction
                    </div>
                    <div className='cmpgn-content'>
                        <div className='heads'>
                            City
                        </div>
                        <div className="cmpgn-name-block w-[38rem]">
                            <input type="text" placeholder="Start Typing..." className='cmpgn-name-input' aria-label="Campaign name" aria-describedby="basic-addon2" />
                        </div>
                        <div className='heads'>
                            Locality
                        </div>
                        <div className="cmpgn-name-block w-[38rem]">
                            <input type="text" placeholder="Start Typing..." className='cmpgn-name-input' aria-label="Campaign name" aria-describedby="basic-addon2" />
                        </div>
                        <div className='heads'>
                            Sub-Locality (optional)
                        </div>
                        <div className="cmpgn-name-block w-[38rem]">
                            <input type="text" placeholder="Start Typing..." className='cmpgn-name-input' aria-label="Campaign name" aria-describedby="basic-addon2" />
                        </div>
                        <div className='heads'>
                            Apartment/Society (optional)
                        </div>
                        <div className="cmpgn-name-block w-[38rem]">
                            <input type="text" placeholder="Start Typing..." className='cmpgn-name-input' aria-label="Campaign name" aria-describedby="basic-addon2" />
                        </div>
                        <div className="button-block">
                            <div className='btn-div'>
                            <button className='applys_filter mr-[15px]' onClick={handleBack} ><ArrowBackIosIcon style={{ width :"20px"}}/><span className=''>Back</span></button>
                                <button className='cancel-btn'  onClick={handleCancel}>
                                    <p className='cancel-text'>Cancel</p>
                                </button>
                                <button className='create-btn' onClick={handleAddNewCampaign}>
                                    <p className='create-text'>Continue</p>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <Stepper flags={1}/>

            </div>
        </div>
    ); 
};

export default NewCampaign;
