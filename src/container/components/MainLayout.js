import React, { useState } from 'react';
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
  } from '@ant-design/icons';
import { Outlet, useNavigate,useLocation } from 'react-router-dom';

import { BsThreeDotsVertical } from "react-icons/bs";
import { Layout, Menu, Button, theme, Dropdown, Divider } from 'antd';
import './MainLayout.css';
import logoAppointments from '../../assets/FrameAppointments.svg';
import logoDashboard from '../../assets/Dashboard.svg';
import logoInventory from '../../assets/Inventory.svg';
import logoCampaigns from '../../assets/FrameCampaigns.svg';
import logoSettings from '../../assets/FrameSettings.svg';
import logoNotifications from '../../assets/Alert BadgeNotifications.svg';
import logoLeft from '../../assets/FrameLeft.svg';
import logoRight from '../../assets/FrameRight.svg';
import logoCommunity from '../../assets/Framecommunity.svg';
import logoDoc from "../../assets/FrameDocs.svg";
import logoHelp from "../../assets/Framehelp.svg";
import logoDropdown from "../../assets/Framedropdown.svg";
import logoClose from "../../assets/Frame 1000001797right.svg";
import logoOpen from "../../assets/Frame 1171275151open.svg";
import logoDropdownUp from "../../assets/Framelogoup.svg";
import blueTick from "../../assets/Frameblue-tick.svg";
import logoplusCircle from "../../assets/Frame 1171275151circle-plus.svg";
import logoInvite from "../../assets/Frame 1171275151invite.svg";
import logosmallSettings from "../../assets/Frame 1171275151small-settings.svg"

const { Header, Sider, Content } = Layout;

const Test = () => {
    const [collapsed, setCollapsed] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const {
      token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();
    const navigate = useNavigate();
    const location = useLocation();

    const handleDropdownClick = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };
    const getMenuText = () => {
        switch (location.pathname) {
            case '/dashboard':
                return 'Dashboard';
            case '/campaigns':
                return 'Campaigns';
            case '/campaigns/new':
                return 'Campaigns / New Campaign';
            case '/inventory':
                return 'Inventory';
            case '/appointments':
                return 'Appointments';
            case '/settings':
                return 'Org Settings';
            case '/notifications':
                return 'Notifications';
           
            default:
                return '';
        }
    };

    const submenu1 = (
        <Menu className='main-dropdown'>
           <Menu.Item  className="main-dropdown-key" key="1">
                <div className="menu-item-content">
                    <span>Aria Real Estate</span>
                    <img src={blueTick} alt="Blue Tick" className="blue-tick" />
                </div>
          </Menu.Item>
          <Menu.Item  className="main-dropdown-key" key="2">Singletechno</Menu.Item>
          <Menu.Item  className="main-dropdown-key" key="3">Globex Corporation</Menu.Item>
          <Divider className="dropdown-divider"/>
          <Menu.Item  className="main-dropdown-key" key="4">
                <div className="menu-item-content-2">
                    <img src={logoplusCircle} alt="plus-circle" className="dropdown-icons" />
                    <span>Create new Org</span>
                    
                </div>
            
          </Menu.Item>
          <Menu.Item  className="main-dropdown-key" key="5">
            
                <div className="menu-item-content-2">
                    <img src={logoInvite} alt="invite" className="dropdown-icons" />
                    <span>Invite Members</span>
                    
                </div>
          </Menu.Item>
          <Menu.Item  className="main-dropdown-key" key="6">
            
                <div className="menu-item-content-2">
                    <img src={logosmallSettings} alt="settings" className="dropdown-icons" />
                    <span>Organisation settings</span>
                    
                </div>
          </Menu.Item>

        </Menu>
    );

    return (
        <Layout className='layout'>
            <Sider trigger={null} collapsible collapsed={collapsed} style={{ background: '#FDFDFD' }}>
                <div className="logo-wrapper">
                    <div className="logo">
                        <Dropdown overlay={submenu1} placement="bottomLeft" trigger={['click']} 
                         open={isDropdownOpen} onOpenChange={setIsDropdownOpen}>
                            <div className="logo-content">
                                <span className={collapsed ? 'sm-logo' : 'lg-logo'}>Aria Real Estate</span>
                                {!collapsed && <img className='drop' src={isDropdownOpen ? logoDropdownUp : logoDropdown} alt=""/>}
                            </div>
                        </Dropdown>
                        <Button className="logo-button" type="text" icon={collapsed ? <MenuUnfoldOutlined className='menu-icon' /> : <MenuFoldOutlined className='menu-icon'/>} onClick={() => setCollapsed(!collapsed)} style={{
                        fontSize: '16px',
                        width: 'Hug (32px)',
                        height: 'Hug (32px)',
                        padding: '4px',
                        gap: '10px',
                        }}/>
                    </div>

                </div>

                <Menu className="menu-1" mode="inline" defaultSelectedKeys={['dashboard']}
                onClick={({key})=>{
                    if(key==="signout"){}
                    else{
                        navigate(key);
                    }
                }}>
                    <Menu.Item key='dashboard' icon={<img src={logoDashboard} alt="" className='symbols'/>}>Dashboard</Menu.Item>
                    <Menu.Item key='campaigns' icon={<img src={logoCampaigns} alt="" className='symbols'/>}>Campaigns</Menu.Item>
                    <Menu.Item key='inventory' icon={<img src={logoInventory} alt="" className='symbols'/>}>Inventory</Menu.Item>
                    <Menu.Item key='appointments' icon={<img src={logoAppointments} alt="" className='symbols'/>}>Appointments</Menu.Item>
                    <Divider className="menu-div"  />
                    
                    <Menu.Item key='settings' icon={<img src={logoSettings} alt="" className='symbols'/>} >Org Settings</Menu.Item>
                    <Menu.Item key='notifications' icon={<img src={logoNotifications} alt="" className='symbols'/>}>Notifications</Menu.Item>
                    
                </Menu>
                <div className="user-info-bottom">
                    {!collapsed ? (
                    <div className="user-info">
                        <div className="user-photo">
                            <img src="https://randomuser.me/api/portraits/med/men/75.jpg" alt="User" className="user-photo-img" />
                        </div>
                        <div className="user-name">
                          <p className='mb-0 ml-8px'>Mehul Agarwal</p>
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
            <Layout style={{ height: '1024px' }}>
            <Header className="trigger" >
                <div className='campaign'>
                    <div className='arrows'>
                        <img src={logoLeft} className="left" alt=""/>
                        <img src={logoRight} className="right" alt=""/>
                    </div>
                    <div className='heading mb-0'>
                       {getMenuText()}
                    </div>
                </div>
                <div className='leftbar'>
                    <div className='community'>
                        <img className=" leftimage" src={logoCommunity} alt=""/>
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
            <Content>
                <Outlet/>
            </Content>
            {isDropdownOpen && <div className="overlay" />}
            </Layout>
        </Layout>
    )
}

export default Test;
