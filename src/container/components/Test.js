import React, { useState } from 'react';
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
  } from '@ant-design/icons';
import { Outlet,useNavigate } from 'react-router-dom';

import { BsThreeDotsVertical } from "react-icons/bs";
import { Layout, Menu, Button, theme, Dropdown } from 'antd';
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
import logodropdown from "../../assets/Framedropdown.svg";
import logoClose from "../../assets/Frame 1000001797right.svg";
import logoOpen from "../../assets/Frame 1171275151open.svg";

const { Header, Sider, Content } = Layout;
const Test=()=>{
    const [collapsed, setCollapsed] = useState(false);
    const {
      token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();
    {!collapsed && (
        <span className="icon-wrapper">
          <img className='drop' src={logodropdown} alt=""/>
          
        </span>
    )}
    const navigate=useNavigate();
 
    return (
        <Layout className='layout'>
            <Sider trigger={null} collapsible collapsed={collapsed} style={{ background: '#FDFDFD' }}>
                <div className="logo">
                    <div className="logo-content  width: Hug (140px) height: Fill (32px) border-radius: 8px gap: 4px">
                        <span className={collapsed ? 'sm-logo' : 'lg-logo'} >Aria Real Estate </span>
                        {!collapsed && (<span className="icon-wrapper"><img className='drop' src={logodropdown} alt=""/></span> )}
                    </div>
                    <Button className="logo-button" type="text" icon={collapsed ? <MenuUnfoldOutlined className='menu-icon' /> : <MenuFoldOutlined className='menu-icon'/>} onClick={() => setCollapsed(!collapsed)}style={{
                    fontSize: '16px',
                    width: 'Hug (32px)',
                    height: 'Hug (32px)',
                    padding: '4px',
                    gap: '10px',
                   }}/>
                </div>
                <Menu className="menu-1" mode="inline" defaultSelectedKeys={['dashboard']}
                onClick={({key})=>{
                    if(key=="signout"){}
                    else{
                        navigate(key);
                    }
                    }}>
                    <Menu.Item key='dashboard' icon={<img src={logoDashboard} alt="" className='symbols'/>}>Dashboard</Menu.Item>
                    <Menu.Item key='campaigns' icon={<img src={logoCampaigns} alt="" className='symbols'/>}>Campaigns</Menu.Item>
                    <Menu.Item key='inventory' icon={<img src={logoInventory} alt="" className='symbols'/>}>Inventory</Menu.Item>
                    <Menu.Item key='appoinments' icon={<img src={logoAppoinments} alt="" className='symbols'/>}>Appoinments</Menu.Item>
                    <Menu.Divider className="menu-div" style={{ backgroundColor: 'black' }} />
                
                    <Menu.Item key='settings' icon={<img src={logoSetings} alt="" className='symbols'/>} >Org Settings</Menu.Item>

                    <Menu.Item key='notifications' icon={<img src={logoNotifications} alt="" className='symbols'/>}>Notifications</Menu.Item>
                    <Menu.Divider />

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
                        <img src={logoleft} className="left" alt=""/>
                        <img src={logoright} className="right" alt=""/>
                    </div>
                    <div className='heading'>
            <          p className='mb-0'>Campaigns</p>
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
            <Content>
                <Outlet/>
            </Content>
            
            </Layout>
        </Layout>

    )
}

export default Test
