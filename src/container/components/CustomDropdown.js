import React, { useState } from 'react';
import { Menu, Dropdown } from 'antd';
import logodropdown from "../../assets/Framedropdown.svg";
import logodropdownup from "../../assets/Framelogoup.svg";
import "../components/CustomDropdown.css";

const CustomDropdown = ({ submenu, buttonText }) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [dropdownIcon, setDropdownIcon] = useState(logodropdown);
  
    const handleDropdownClick = () => {
      setIsDropdownOpen(!isDropdownOpen);
      setDropdownIcon(isDropdownOpen ? logodropdown : logodropdownup);
    };
  
    const handleMenuClick = ({ key }) => {
      setIsDropdownOpen(false);
      setDropdownIcon(logodropdown);
      // Handle menu item click if needed
    };
  
    const handleVisibleChange = (visible) => {
      setIsDropdownOpen(visible);
      setDropdownIcon(visible ? logodropdownup : logodropdown);
    };
  
    const menu = (
      <Menu onClick={handleMenuClick} style={{ background: '#fff', borderRadius: '4px',}}>
        
        {submenu}
      </Menu>
    );
  
    return (
      <Dropdown
        overlay={menu}
        trigger={['click']}
        open={isDropdownOpen}
        onOpenChange={handleVisibleChange}
      >
        <button className='all_campaigns' onClick={handleDropdownClick}>
          <p className='btn-text'>{buttonText}</p>
          <img src={dropdownIcon} alt=""/>
        </button>
      </Dropdown>
    );
};

export default CustomDropdown;
