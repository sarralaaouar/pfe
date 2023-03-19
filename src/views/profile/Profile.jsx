import React from "react";
import { Avatar, Input } from "antd";
import { UserOutlined } from "@ant-design/icons";

import "./Profile.css";
const Profile = () => {
  return (
    <div className="profile">
      <div className="profile_left section">
        <div className="avatar">
          <Avatar size={55} icon={<UserOutlined />} />
          <div className="text">
            <p className="name_user"> marwen shili</p>
            <p className="email_user">marwen@gmail.com</p>
          </div>
        </div>
        <label htmlFor="email">Name</label>
        <Input
          className="input_user"
          size="large"
          placeholder="email"
          prefix={<UserOutlined />}
        />
        <label htmlFor="email">Email</label>
        <Input
          className="input_user"
          size="large"
          placeholder="email"
          prefix={<UserOutlined />}
        />
        <label htmlFor="email">email</label>
        <Input
          className="input_user"
          size="large"
          placeholder="email"
          prefix={<UserOutlined />}
        />
        <label htmlFor="email">email</label>
        <Input
          className="input_user"
          size="large"
          placeholder="email"
          prefix={<UserOutlined />}
        />
      </div>
      <div className="profile_right section">right</div>
    </div>
  );
};

export default Profile;
