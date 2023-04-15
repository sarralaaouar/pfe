import React from "react";
import { Avatar, Input, Button } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { FaPhoneAlt } from "react-icons/fa";
import { MdMailOutline, MdLocationPin } from "react-icons/md";
import "./Profile.css";

const Profile = () => {
  let userString = localStorage.getItem("disney_user");
  let user = JSON.parse(userString);

  return (
    <div className="profile">
      <div className="profile_left section">
        <div className="avatar">
          <Avatar size={55} icon={<UserOutlined />} />
          <div className="text">
            <p className="name_user">{user?.name}</p>
            <p className="email_user">{user?.email}</p>
          </div>
        </div>
        <label htmlFor="email">Name</label>
        <Input
          className="input_user"
          size="large"
          placeholder="name"
          prefix={<UserOutlined />}
          defaultValue={user?.name}
        />
        <label htmlFor="email">Email Address</label>
        <Input
          className="input_user"
          size="large"
          placeholder="email"
          prefix={<MdMailOutline />}
          defaultValue={user?.email}
        />
        <label htmlFor="email">Phone Number</label>
        <Input
          className="input_user"
          size="large"
          placeholder="phone"
          prefix={<FaPhoneAlt />}
          defaultValue={user?.phone}
        />
        <label htmlFor="email">Location</label>
        <Input
          className="input_user"
          size="large"
          placeholder="Location"
          prefix={<MdLocationPin />}
          defaultValue={user?.location}
        />
        <Button style={{ background: "#DB7092", color: "#ffff" }}>
          Submit
        </Button>
      </div>

      <div className="profile_right section">
        <div className="cards_c">
          <div className="card_c">
            <div className="item">
              <p className="title_c">Test</p>
              <p className="type_c">visa</p>
            </div>
            <div className="item">
              <p className="price_c">320$</p>
              <p className="num_c">1234</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
