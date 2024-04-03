// EndCampaignModal.js
import React from 'react';
import { Modal, Button } from 'antd';
import "./Filters.css";
import searchIcon from "../assets/Searchsearchicon.svg";
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
 
function valuetext(value) {
    return `${value}°C`;
}
const Filters = ({ visible, onClose }) => {

    const [value, setValue] = React.useState([4000, 13700]);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Modal
            className='end-campaign-modal  w-[620px]'
            visible={visible} // Corrected prop name
            onCancel={onClose}
            // closeIcon={null} //Set closeIcon prop to null to remove the close button
            footer={[
                <Button className='cancel-btn' key="cancel" onClick={onClose}>
                    Clear
                </Button>,
                <Button className='end-btn' key="end" type="primary" onClick={onClose}>
                    Result
                </Button>,
            ]}
            centered
            maskClosable={false}
            maskStyle={{ backgroundColor: 'rgba(230, 230, 230, 0.6)' }} // Semi-transparent overlay
            bodyStyle={{ padding: '0px' }}
        >
            <div className='modal-block '>
                <div className='font-bold text-xl m-1'>
                    Filters
                </div>
                <div className='filter_container relative '>

                    {/* Property */}

                    <div className='filter_type border-b-[1px] pb-3 '>
                        <div className='filter_title  m-0 p-2 text-[18px] font-[700]'>
                            Property Type
                        </div>
                        <div className='filter_option'>
                            <button className='filter_button border-1 border-gray-300 w-[8rem] m-1 p-2 text-[16px] font-[600] rounded-full'>
                                Residential
                            </button>
                            <button className='filter_button border-1 border-gray-300 w-[8rem] m-1 p-2 text-[16px] font-[600] rounded-full'>
                                Commercial
                            </button>
                            <button className='filter_button border-1 border-gray-300 w-[8rem] m-1 p-2 text-[16px] font-[600] rounded-full'>
                                Industrial
                            </button>
                            <button className='filter_button border-1 border-gray-300 w-[8rem] m-1 p-2 text-[16px] font-[600] rounded-full'>
                                Others
                            </button>
                            <button className='filter_button border-1 border-gray-300 w-[8rem] m-1 p-2 text-[16px] font-[600] rounded-full'>
                                Others
                            </button>
                        </div>
                    </div>

                    {/* Sub-Property */}

                    <div className='filter_type border-b-[1px] pb-3 '>
                        <div className='filter_title  m-0 p-2 text-[18px] font-[700]'>
                            Property Sub-Type
                        </div>
                        <div className='filter_option'>
                            <button className='filter_button border-1 border-gray-300 w-[8rem] m-1 p-2 text-[16px] font-[600] rounded-full'>
                                Plot
                            </button>
                            <button className='filter_button border-1 border-gray-300 w-[8rem] m-1 p-2 text-[16px] font-[600] rounded-full'>
                                Flat / Floor
                            </button>
                            <button className='filter_button border-1 border-gray-300 w-[10rem] m-1 p-2 text-[16px] font-[600] rounded-full'>
                                Villa / Bungalow
                            </button>
                        </div>
                    </div>


                    {/* Locality */}

                    <div className='filter_type border-b-[1px] pb-3 '>
                        <div className='filter_title  m-0 p-2 text-[18px] font-[700]'>
                            Locality
                        </div>
                        <div className="search-container">
                            <input type="text" className="form-control py-2" placeholder="Search Area" aria-label="Search by Campaign name" aria-describedby="basic-addon2" />
                            <img src={searchIcon} className="search-icon" alt="Search" />
                        </div>
                        <div className='filter_title  m-0 p-2 text-[15px] font-[500]'>
                            Suggested
                        </div>
                        <div className='filter_option'>
                            <button className='filter_button border-1 border-gray-300 w-[8rem] m-1 p-2 text-[16px] font-[600] rounded-full'>
                                Varsova
                            </button>
                            <button className='filter_button border-1 border-gray-300 w-[8rem] m-1 p-2 text-[16px] font-[600] rounded-full'>
                                Bandra
                            </button>
                            <button className='filter_button border-1 border-gray-300 w-[10rem] m-1 p-2 text-[16px] font-[600] rounded-full'>
                                Powai
                            </button>
                            <button className='filter_button border-1 border-gray-300 w-[10rem] m-1 p-2 text-[16px] font-[600] rounded-full'>
                                Colaba
                            </button>
                        </div>
                    </div>

                    {/* Area */}

                    <div className='filter_type border-b-[1px] pb-3 '>
                        <div className='filter_title  m-0 p-2 text-[18px] font-[700] flex'>
                            < p className='mr-2'>Area</p><span className='m-1 font-light text-[blue] text-[14px]'>sq.ft</span>
                        </div>
                        <Box sx={{ width: 500 }}>
                            <Slider
                                getAriaLabel={() => 'Temperature range'}
                                value={value}
                                onChange={handleChange}
                                valueLabelDisplay="manual"
                                getAriaValueText={valuetext}
                                max={20000}
                            />
                        </Box>
                        <div className='range'>
                            <button className='filter_button border-1 text-gray-500 border-gray-300 w-[10rem] m-1 p-2 text-[16px] font-[600] bg-gray-100 rounded-lg'>
                                Minimum Area
                            </button>
                            <button className='filter_button border-1  text-gray-500 border-gray-300 w-[10rem] m-1 p-2 text-[16px] font-[600]  bg-gray-100 rounded-lg'>
                                Maximum Area
                            </button>
                        </div>
                    </div>


                    {/* No of Bedrooms */}

                    <div className='filter_type border-b-[1px] pb-3 '>
                        <div className='filter_title  m-0 p-2 text-[18px] font-[700]'>
                            No. of Bedrooms
                        </div>
                        <div className='filter_option'>
                            <button className='filter_button border-1 border-gray-300 w-[5rem] m-1 p-2 text-[16px] font-[600] rounded-full'>
                                1 BHK
                            </button>
                            <button className='filter_button border-1 border-gray-300 w-[5rem] m-1 p-2 text-[16px] font-[600] rounded-full'>
                                2 BHK
                            </button>
                            <button className='filter_button border-1 border-gray-300 w-[5rem] m-1 p-2 text-[16px] font-[600] rounded-full'>
                                3 BHK
                            </button>
                            <button className='filter_button border-1 border-gray-300 w-[5rem] m-1 p-2 text-[16px] font-[600] rounded-full'>
                                4 BHK
                            </button>
                            <button className='filter_button border-1 border-gray-300 w-[5rem] m-1 p-2 text-[16px] font-[600] rounded-full'>
                                5 BHK
                            </button>
                            <button className='filter_button border-1 border-gray-300 w-[5rem] m-1 p-2 text-[16px] font-[600] rounded-full'>
                                6 BHK
                            </button>
                            <button className='filter_button border-1 border-gray-300 w-[5rem] m-1 p-2 text-[16px] font-[600] rounded-full'>
                                7 BHK
                            </button>
                            <button className='filter_button border-1 border-gray-300 w-[5rem] m-1 p-2 text-[16px] font-[600] rounded-full'>
                                8 BHK
                            </button>
                        </div>
                    </div>

                    {/*  Attribue */}

                    <div className='filter_type border-b-[1px] pb-3 '>
                        <div className='filter_title  m-0 p-2 text-[18px] font-[700]'>
                            Attributes
                        </div>
                        <div className='filter_option'>
                            <button className='filter_button border-1 border-gray-300 w-[8rem] m-1 p-2 text-[16px] font-[600] rounded-full'>
                                Parking
                            </button>
                            <button className='filter_button border-1 border-gray-300 w-[8rem] m-1 p-2 text-[16px] font-[600] rounded-full'>
                                Lift
                            </button>
                            <button className='filter_button border-1 border-gray-300 w-[10rem] m-1 p-2 text-[16px] font-[600] rounded-full'>
                                Power Backup
                            </button>
                            <button className='filter_button border-1 border-gray-300 w-[8em] m-1 p-2 text-[16px] font-[600] rounded-full'>
                                Park
                            </button>
                            <button className='filter_button border-1 border-gray-300 w-[10rem] m-1 p-2 text-[16px] font-[600] rounded-full'>
                                Gymnasium
                            </button>
                            <button className='filter_button border-1 border-gray-300 w-[10rem] m-1 p-2 text-[16px] font-[600] rounded-full'>
                                Swimming Pool
                            </button>
                            <button className='filter_button border-1 border-gray-300 w-[10rem] m-1 p-2 text-[16px] font-[600] rounded-full'>
                                Security Personnel
                            </button>
                        </div>
                    </div>

                </div>
            </div>


        </Modal>

    );
};

export default Filters;
