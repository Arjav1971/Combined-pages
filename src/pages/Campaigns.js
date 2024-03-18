

import React, { useState } from 'react';
import { Pagination } from 'antd';
import "./Campaigns.css";
import searchIcon from "../assets/Searchsearchicon.svg";
import logodropdown from "../assets/Framedropdown.svg";
import logoplus from "../assets/$dyte-iconplus.svg";
import graph from "../assets/Graphgraph.svg";
import logoup from "../assets/solar_arrow-up-boldup.svg";
import logodropdownup from  "../assets/Framelogoup.svg";

import CustomDropdown  from "../container/components/CustomDropdown";
import ListBox from '../container/components/list-box';
import { Layout, Menu, Button, theme, Dropdown } from 'antd';
import campaignData from '../container/components/list-data/campaignData';
import EndCampaignModal from '../modal/EndCampaignModal';
import NewCampaignModal from '../modal/NewCampaignModal';

const submenu1 = (
  <Menu>
    <Menu.Item  className="custom-dropdown-key" key="1">Last Month</Menu.Item>
    <Menu.Item  className="custom-dropdown-key" key="2">Last 3 months</Menu.Item>
    <Menu.Item  className="custom-dropdown-key" key="3">Last 6 months</Menu.Item>
  </Menu>
);

const submenu2 = (
  <Menu>
    <Menu.Item  className="custom-dropdown-key" key="1">Live Camapigns </Menu.Item>
    <Menu.Item  className="custom-dropdown-key" key="2">Ended Camapigns</Menu.Item>
    <Menu.Item  className="custom-dropdown-key" key="3">Upcoming Camapigns</Menu.Item>
  </Menu>
);

const campaigns = campaignData;

const Campaigns = () => {
    const [currentPage, setCurrentPage] = useState(1); // State for current page
    const [pageSize] = useState(5); // Number of items per page
  
    const handlePageChange = (page) => {
      setCurrentPage(page);
    };
    const [selectedBox, setSelectedBox] = useState(null); // State to store the id of the selected box
  
    const handleBoxClick = (boxId) => {
      if (selectedBox === boxId) {
        setSelectedBox(null);
      } else {
        setSelectedBox(boxId);
      }
      console.log("Selected Box:", selectedBox); // Add this line to check selectedBox state
    };
    // Calculate start and end index for current page
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = Math.min(startIndex + pageSize - 1, campaigns.length - 1);
    // Get current page data
    const currentPageData = campaigns.slice(startIndex, endIndex + 1);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [isAddNewCampaignModalVisible, setIsAddNewCampaignModalVisible] = useState(false);

    const handleEndCampaign = () => {
      setIsModalVisible(true);
    };
  
    const handleCloseModal = () => {
      setIsModalVisible(false);
    };
    const handleAddNewCampaign = () => {
        setIsAddNewCampaignModalVisible(true);
    };

    const handleCloseAddNewCampaignModal = () => {
        setIsAddNewCampaignModalVisible(false);
    };

  
  
  return (
    <div className='campgn'>
            {/* <Content className="ant-layout"> */}
        <div className='submenu'>
          <div className="search-container">
            <input type="text" className="form-control py-2" placeholder="Search by Campaign name" aria-label="Search by Campaign name" aria-describedby="basic-addon2"/>
            <img src={searchIcon} className="search-icon" alt="Search" />
          </div>
          <div className='right_options'>

            <CustomDropdown  className="custom-dropdown" submenu={submenu1} buttonText="Current month" />
            <CustomDropdown  className="custom-dropdown" submenu={submenu2} buttonText="All campaigns" />
            <div>
            <button className='new_campaign'  onClick={handleAddNewCampaign}>
                <img src={logoplus} alt=""/>
                <p className='btn-text2'>New campaign</p>
                
            </button>
            <NewCampaignModal visible={isAddNewCampaignModalVisible} onClose={handleCloseAddNewCampaignModal} />


            </div>



          </div>
        </div>
        <div className='campaign-content'>
          <div className='campaign-list'>

            <div className='list-data'>
                {currentPageData.map((campaign) => (
                <ListBox
                key={campaign.id}
                id={campaign.id}
                status={campaign.status}
                heading={campaign.heading}
                text={campaign.text}
                conversionRate={campaign.conversionRate}
                date={campaign.date}
                isSelected={selectedBox === campaign.id}
                handleBoxClick={handleBoxClick}
                />
                ))}
            </div>
            <div className='custom-pagination'>
                <Pagination current={currentPage} pageSize={pageSize} total={campaigns.length} onChange={handlePageChange}/>
            </div>

          </div>
          <div className='campaign-details'>
          <div>
             <button className='end-campaign' onClick={handleEndCampaign}>End Campaign</button>
            <EndCampaignModal visible={isModalVisible} onClose={handleCloseModal} />
          </div>
          

            <div className='camapign-name'>
              <div className='campaign-head'>
                <div className='subheading'>
                  <div className='heading-grp'>
                    <div className='camp-name'>Campaign Name 1</div>
                    <div className='status' style={{ backgroundColor: '#27AE603D', color: '#219653' }}>
                    Live
                  </div>

                  </div>



                </div>
                <div className='date-details'>
                  <div className='created-on'>Created on: 12th Feb, 2024</div>
                </div>
                <div className='date-details'>
                  <div className='created-on'>Ends on: 12th Mar, 2024</div>
                </div>
 
                
              </div>
            </div>
            <div className='campaign-data'>
              <div className='container'>
                <div className='box'>
                  <div className='box-head'>
                    <div className='data'>
                      <div className='data-head'>
                        Appoinments Scheduled
                      </div>
                      <div className='count'>
                        27
                      </div>
                    </div>
                  </div>

                </div>
                <div className='box'>
                  <div className='box-head'>
                    <div className='data'>
                      <div className='data-head'>
                        Appoinments Scheduled
                      </div>
                      <div className='count'>
                        27
                      </div>
                    </div>
                    
                   
                    
                  </div>
                  <img className='box-img' src={graph}/>


                </div>


              </div>
              <div className='container'>
                <div className='box'>
                  <div className='box-head'>
                    <div className='data'>
                      <div className='data-head'>
                        Appoinments Scheduled
                      </div>
                      <div className='count'>
                        27
                      </div>
                    </div>
                  </div>

                </div>
                <div className='box'>
                  <div className='box-head'>
                    <div className='data'>
                      <div className='data-head'>
                        Appoinments Scheduled
                      </div>
                      <div className='count'>
                        27
                      </div>
                    </div>
                  </div>
                <img className='box-img' src={graph}/>


                </div>


              </div>
              
            </div>
            <data className='text-box'>
              <div className='text-head' >
                PURPOSE
              </div>
              <div className='text-content'>
                Lorem ipsum dolor sit amet consectetur. Est magna condimentum maecenas varius est ullamcorper arcu. Ut semper tellus turpis in habitant fusce justo. Elit mattis lectus amet integer donec. Vitae id ultrices dictum quam nisi sit.
              </div>
            </data>
            <data className='text-box'>
              <div className='text-head' >
              GREETING MESSAGE
              </div>
              <div className='text-content'>
                Lorem ipsum dolor sit amet consectetur. Est magna condimentum maecenas varius est ullamcorper arcu. Ut semper tellus turpis in habitant fusce justo. Elit mattis lectus amet integer donec. Vitae id ultrices dictum quam nisi sit.
              </div>
            </data>
            <data className='text-box'>
              <div className='text-head' >
              TARGET USERS
              </div>
              <div className='text-content'>
                Lorem ipsum dolor sit amet consectetur. Est magna condimentum maecenas varius est ullamcorper arcu. Ut semper tellus turpis in habitant fusce justo. Elit mattis lectus amet integer donec. Vitae id ultrices dictum quam nisi sit.
              </div>
            </data>
          </div>
        </div>

       
      {/* </Content> */}
    </div>
  )
}



export default Campaigns
