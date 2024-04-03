// EndCampaignModal.js
import React from 'react';
import { Modal, Button } from 'antd';
import "./EndCampaignModal.css";
 
const EndCampaignModal = ({ visible, onClose }) => {
  return (
    // <Modal
    // //   title="End Campaign"
    //   visible={visible} // Corrected prop name
    //   onCancel={onClose}
    //   footer={[
    //     <Button className='cancel-btn' key="cancel" onClick={onClose}>
    //       Cancel
    //     </Button>,
    //     <Button className='end-btn' key="end" type="primary" onClick={onClose}>
    //       Yes, end
    //     </Button>,
    //   ]}
    //   centered
    //   maskClosable={false}
    //   maskStyle={{ backgroundColor: 'rgba(230, 230, 230, 0.6)' }}// Semi-transparent overlay
    //   bodyStyle={{ padding: '0px' }}
    // >
    //   <div className='modal-block'>
    //     <div className='modal-head'>
    //         End Campaign Name 1
    //     </div>
    //     <div className='modal-text'>
    //     Lorem ipsum dolor sit amet consectetur. Tempus neque dolor vestibulum velit lacus lacus sit vulputate. Porttitor dolor magna vitae morbi.
    //     </div>

    //   </div>
     
    // </Modal>
    <Modal
    className='campaign-end-campaign-modal'
    // title="End Campaign"
    visible={visible} // Corrected prop name
    onCancel={onClose}
    closeIcon={null} // Set closeIcon prop to null to remove the close button
    footer={[
        <Button className='campaign-cancel-btn' key="cancel" onClick={onClose}>
            Cancel
        </Button>,
        <Button className='campaign-end-btn' key="end" type="primary" onClick={onClose}>
            Yes, end
        </Button>,
    ]}
    centered
    maskClosable={false}
    maskStyle={{ backgroundColor: 'rgba(230, 230, 230, 0.6)' }} // Semi-transparent overlay
    bodyStyle={{ padding: '0px' }}
>
    <div className='campaign-modal-block'>
        <div className='campaign-modal-head'>
            End Campaign Name 1?
        </div>
        <div className='campaign-modal-text'>
            Lorem ipsum dolor sit amet consectetur. Tempus neque dolor vestibulum velit lacus lacus sit vulputate. Porttitor dolor magna vitae morbi.
        </div>
    </div>
</Modal>

  );
};

export default EndCampaignModal;