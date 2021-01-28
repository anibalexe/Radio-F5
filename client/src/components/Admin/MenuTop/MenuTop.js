import React from "react";
import { Button } from "antd";
import { PoweroffOutlined, MenuFoldOutlined, MenuUnfoldOutlined, MenuOutlined } from '@ant-design/icons';
import Logo from "../../../assets/img/png/LogoProvisorio.png";

import "./MenuTop.scss";

export default function MenuTop() {
  return (
    <div className="menu-top">
      <div className="menu-top__left">
        <img className="menu-top__left-logo" src={Logo} alt="RadioF5"/>
        <Button type="link" >
            <MenuUnfoldOutlined /*type={menuCollapsed ? <MenuOutlined /> : <MenuUnfoldOutlined />} *//>
        </Button>
      </div>
      <div className="menu-top__right">
      <button type="link" >
        <PoweroffOutlined />
      </button>
      </div>
    </div>
  );
}
