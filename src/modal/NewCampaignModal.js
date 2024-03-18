// EndCampaignModal.js
import React from 'react';
import { Modal, Button } from 'antd';
import "./NewCampaignModal.css";
// import styles from './NewCampaignModal.module.css';      
const NewCampaignModal = ({ visible, onClose }) => {
    const startDate = '2024-08-12';
    const endDate = '2024-09-12';
  return (
   
    <Modal
    className='new-campaign-modal'
    visible={visible}
    onCancel={onClose}
    footer={[
        <Button className='cancel-btn' key="cancel" onClick={onClose}>
            Cancel
        </Button>,
        <Button className='end-btn' key="end" type="primary" onClick={onClose}>
            Yes, end
        </Button>,
    ]}
    centered
    maskClosable={false}
    maskStyle={{ backgroundColor: 'rgba(230, 230, 230, 0.6)' }}
    bodyStyle={{ padding: '0px' }}
     // Add className prop here
>
    <div className='modal-block'>
        <div className='modal-body'>
            <div className='modal-head'>
                 Create new Campaign
            </div>
            <div className='modal-content'>
                
                    <div className='heads'>
                        Campaign name
                    </div>
                    <div className="cmpgn-name-block">
                        <input type="text" className='cmpgn-name-input' aria-label="Campaign name" aria-describedby="basic-addon2"/>
                        {/* className="form-control py-2"  */}
                    </div>
                    <div className='date-block'>
                        <div className='date-box'>
                            <div className='heads'>
                                Start date
                            </div>
                            <div className='date-input'>
                                <input type="date" className='date' value={startDate}/>

                           
                            </div>


                        </div>
                        <div className='date-box'>
                            <div className='heads'>
                                End date
                            </div>
                            <div className='date-input'>
                                <input type="date" className='date' value={endDate}/>
                            </div>


                        </div>

                    </div>
                    <div className='purpose-block'>
                        <div className='heads'>
                            Campaign purpose
                        </div>
                        <div className="paragraph-input">
                            <textarea className="paragraph-textarea" />
                        </div>

                    </div>

                

            </div>

        </div>

    </div>
</Modal>



  );
};

export default NewCampaignModal;
