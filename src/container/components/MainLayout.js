// 
import React, { useState } from 'react';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import { RiArrowDropDownLine } from "react-icons/ri";
import { BsThreeDotsVertical } from "react-icons/bs";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { LuLayoutList } from "react-icons/lu";
import { Layout, Menu, Button, theme, Dropdown } from 'antd';

// import './Mainlayout.css'; // Import the CSS file here
import './Test.css';
import logoAppoinments from '../../assets/FrameAppointments.svg';
import logoDashboard from '../../assets/Dashboard.svg';
import logoInventory from '../../assets/Inventory.svg';
import logoCampaigns from '../../assets/FrameCampaigns.svg';
import logoSetings from '../../assets/FrameSettings.svg';
import logoNotifications from '../../assets/Alert BadgeNotifications.svg';
import logoleft from '../../assets/FrameLeft.svg';
import logoright from '../../assets/FrameRight.svg';
import logocommunity from '../../assets/Framecommunity.svg';
import logoDoc from "../../assets/FrameDocs.svg";
import logoHelp from "../../assets/Framehelp.svg";
import searchIcon from "../../assets/Searchsearchicon.svg";
import logodropdown from "../../assets/Framedropdown.svg";
import logoplus from "../../assets/$dyte-iconplus.svg";
import graph from "../../assets/Graphgraph.svg";
import logoup from "../../assets/solar_arrow-up-boldup.svg";
import logodropdownup from  "../../assets/Framelogoup.svg";

import CustomDropdown from './CustomDropdown';



const { Header, Sider, Content } = Layout;
const submenu1 = (
  <Menu>
    <Menu.Item key="1">Last Month</Menu.Item>
    <Menu.Item key="2">Last 3 months</Menu.Item>
    <Menu.Item key="3">Last 6 months</Menu.Item>
  </Menu>
);

const submenu2 = (
  <Menu>
    <Menu.Item key="1">Live Camapigns </Menu.Item>
    <Menu.Item key="2">Ended Camapigns</Menu.Item>
    <Menu.Item key="3">Upcoming Camapigns</Menu.Item>
  </Menu>
);

const MainLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
 
  {!collapsed && (
    <span className="icon-wrapper">
      <img className='drop' src={logodropdown} alt=""/>
      
    </span>
  )}
  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed} style={{ background: '#FDFDFD' }}>
     
      <div className="logo">
        <div className="logo-content  width: Hug (140px) height: Fill (32px) border-radius: 8px gap: 4px">
          <span className={collapsed ? 'sm-logo' : 'lg-logo'} >Aria Real Estate </span>
          {!collapsed && (<span className="icon-wrapper"><img className='drop' src={logodropdown} alt=""/></span> )}
        </div>
        <Button className="logo-button" type="text" icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />} onClick={() => setCollapsed(!collapsed)}style={{
      fontSize: '16px',
      width: 'Hug (32px)',
      height: 'Hug (32px)',
      padding: '4px',
      gap: '10px',
      }}
    />



</div>

       
        {/* <Menu className='menu-1'
         
          mode="inline"

          items={[
            {
              key: '1',
              icon: <img src={logoDashboard} alt="" className='symbols'/>,
              label: 'Dashboard',
            },
            {
              key: '2',
              icon: <img src={logoCampaigns} alt="" className='symbols'/>,
              label: 'Campaigns',
            },
            {
              key: '3',
              icon: <img src={logoInventory} alt="" className='symbols'/>,
              label: 'Inventory',
            },
            {
              key: '4',
              icon: <img src={logoAppoinments} alt="" className='symbols'/>,
              label: 'Appoinments',
            },

          ]} style={{ background: '#FDFDFD' }}
        />
         <Menu className='menu-2'
         
         mode="inline"

         items={[
           {
             key: '1',
             icon: <img src={logoSetings} alt="" className='symbols'/>,
             label: 'Org Settings',
           },
           {
             key: '2',
             icon:  
             <div className='notification'>
              <img src={logoNotifications} alt="" className='symbols'/>
              
             </div>,
             label: 'Notifications' ,
           },
          

         ]} style={{ background: '#FDFDFD' }}
       /> */}
       <Menu mode="inline">
        <Menu.Item key="1" icon={<img src={logoDashboard} alt="" className='symbols'/>}>Dashboard</Menu.Item>
        <Menu.Item key="2" icon={<img src={logoCampaigns} alt="" className='symbols'/>}>Campaigns</Menu.Item>
        <Menu.Item key="3" icon={<img src={logoInventory} alt="" className='symbols'/>}>Inventory</Menu.Item>
        <Menu.Item key="4" icon={<img src={logoAppoinments} alt="" className='symbols'/>}>Appoinments</Menu.Item>
        <Menu.Divider />
        <Menu.Item key="5" icon={<img src={logoSetings} alt="" className='symbols'/>}>Org Settings</Menu.Item>
        <Menu.Item key="6" icon={<img src={logoNotifications} alt="" className='symbols'/>}>Notifications</Menu.Item>
        <Menu.Divider />

       </Menu>

        <div className="user-info-bottom">
          {!collapsed ? (
          <div className="user-info">
            <div className="user-photo">
              <img src="https://randomuser.me/api/portraits/med/men/75.jpg" alt="User" className="user-photo-img" />
            </div>
            <div className="user-name">
              <p className='mb-0'>Mehul Agarwal</p>
            </div>
            <div className='dots'>
              <BsThreeDotsVertical/>
            </div>
          </div>
        ) : (
          <div className="user-photo">
            <img src="https://randomuser.me/api/portraits/med/men/75.jpg" alt="User" className="user-photo-img" />
          </div>
        )}
      </div>


      </Sider>
      <Layout>
      <Header className="trigger" >
        <div className='campaign'>
          <div className='arrows'>
            <img src={logoleft} className="left" alt=""/>
            <img src={logoright} className="right" alt=""/>
          </div>
          <div className='heading'>
            <p className='mb-0'>Campaigns</p>
          </div>

        </div>
        <div className='leftbar'>
            <div className='community'>
              <img className=" leftimage" src={logocommunity} alt=""/>
              <div className='lefttext'>
                Community
              </div>
              
            </div>
            <div className='docs'>
              <img className="leftimage" src={logoDoc} alt=""/>
              <div className='lefttext'>
                Docs
              </div>
            </div>
            <div className='help'>
              <img className=" leftimage" src={logoHelp} alt=""/>
              <div className='lefttext'>
                Help
              </div>
            </div>
        </div>
      </Header>
 

      <Content className="ant-layout">
        <div className='submenu'>
          <div className="search-container">
            <input type="text" className="form-control py-2" placeholder="Search by Campaign name" aria-label="Search by Campaign name" aria-describedby="basic-addon2"/>
            <img src={searchIcon} className="search-icon" alt="Search" />
          </div>
          <div className='right_options'>
            {/* <Dropdown className="dropdown-btn"  overlay={submenu1} trigger={['click']}>
              <button className='curr_month'>
                <p className='btn-text'>Current month</p>
                <img src={logodropdown} alt=""/>
                <img src={logodropdownup} alt=""/>
              </button>
            </Dropdown> */}
            <CustomDropdown submenu={submenu1} buttonText="Current month" />
            <CustomDropdown submenu={submenu2} buttonText="All campaigns" />

            {/* <Dropdown className="dropdown-btn"  overlay={submenu2} trigger={['click']}>
              <button className='all_campaigns'>
                <p className='btn-text'>All campaigns</p>
                <img src={logodropdown} alt=""/>
              </button>
            </Dropdown> */}
            <button className='new_campaign'>
                <img src={logoplus} alt=""/>
                <p className='btn-text2'>New campaign</p>
                
            </button>
          </div>
        </div>
        <div className='campaign-content'>
          <div className='campaign-list'>
            <div className='list-data'>
            <div className='list-box'>
                 <div className='status' style={{ backgroundColor: '#27AE603D', color: '#219653',position: 'absolute', top: '15px', right: '10px'  }}>
                    Live
                  </div>
                <div className='box-heading'>
                  
                  Campaign Name 1


                </div>
                
                <div className='box-text'>
                Lorem ipsum dolor sit amet consectetur. Enim amet quisque turpis vitae sed venenatis vulputate enim.....
                </div>
                <div className='box-details'>
                  <div className='conversion'>
                  Conversion Rate: <span className='conversion-rate' style={{ color: '#27AE60' }}>24 <img src={logoup}/></span>
                  </div>
                  <div className='box-date'>
                  12th Feb, 2024
                  </div>

                </div>
              </div>
              <div className='list-box'>
                  <div className='status' style={{ backgroundColor: '#9B51E03D', color: '#9B51E0',position: 'absolute', top: '15px', right: '10px'   }}>
                    Upcoming
                  </div>
                <div className='box-heading'>
                  
                  Campaign Name 2

                </div>
                


                
                <div className='box-text'>
                Lorem ipsum dolor sit amet consectetur. Enim amet quisque turpis vitae sed venenatis vulputate enim.....
                </div>
                <div className='box-details'>
                  <div className='conversion'>
                  Conversion Rate: <span className='conversion-rate'>Nil</span>
                  </div>
                  <div className='box-date'>
                  12th Feb, 2024
                  </div>

                </div>
              </div>
              <div className='list-box'>
                  <div className='status' style={{ backgroundColor: '#27AE603D', color: '#219653',position: 'absolute', top: '15px', right: '10px'  }}>
                    Live
                  </div>
                <div className='box-heading'>
                  
                  Campaign Name 2

                </div>
                
                <div className='box-text'>
                Lorem ipsum dolor sit amet consectetur. Enim amet quisque turpis vitae sed venenatis vulputate enim.....
                </div>
                <div className='box-details'>
                  <div className='conversion'>
                    Conversion Rate: <span className='conversion-rate' style={{ color: '#27AE60' }}>24 <img src={logoup}/></span>
                  </div>
                  <div className='box-date'>
                  12th Feb, 2024
                  </div>

                </div>
              </div>
              <div className='list-box'>
                  <div className='status' style={{ backgroundColor: '#27AE603D', color: '#219653',position: 'absolute', top: '15px', right: '10px'  }}>
                    Live
                  </div>
                <div className='box-heading'>
                  
                  Campaign Name 2

                </div>
                
                <div className='box-text'>
                Lorem ipsum dolor sit amet consectetur. Enim amet quisque turpis vitae sed venenatis vulputate enim.....
                </div>
                <div className='box-details'>
                <div className='conversion'>
                    Conversion Rate: <span className='conversion-rate' style={{ color: '#27AE60' }}>24 <img src={logoup}/></span>
                  </div>
                  <div className='box-date'>
                  12th Feb, 2024
                  </div>

                </div>
              </div>
              <div className='list-box'>
                  <div className='status' style={{ backgroundColor: '#EB57573D', color: '#EB5757',position: 'absolute', top: '15px', right: '10px' }}>
                    Ended
                  </div>
                <div className='box-heading'>
                  
                  Campaign Name 2

                </div>
   


                <div className='box-text'>
                Lorem ipsum dolor sit amet consectetur. Enim amet quisque turpis vitae sed venenatis vulputate enim.....
                </div>
                <div className='box-details'>
                <div className='conversion'>
                    Conversion Rate: <span className='conversion-rate' style={{ color: '#27AE60' }}>24 <img src={logoup}/></span>
                  </div>
                  <div className='box-date'>
                  12th Feb, 2024
                  </div>

                </div>
              </div>

            </div>
          </div>
          <div className='campaign-details'>
          <button className='end-campaign'>End Campaign</button>

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

       
      </Content>

      </Layout>
    </Layout>
  );
};

export default MainLayout;
