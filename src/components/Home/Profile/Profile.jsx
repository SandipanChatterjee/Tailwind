import React, { useState, useEffect } from "react";
import { Card, Row, Col, Typography, Avatar, Descriptions, Space } from "antd";
import {
  UserOutlined,
  MailOutlined,
  PhoneOutlined,
  GlobalOutlined,
  EnvironmentOutlined,
  BankOutlined,
} from "@ant-design/icons";
import userData from "../../../mocks/user.json";

const { Title, Text } = Typography;

const Profile = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    setUser(userData);
  }, []);

  if (!user) return null;

  return (
    <div className="user-profile">
      <Card>
        {/* Header Section */}
        <Row gutter={[16, 16]} align="middle">
          <Col>
            <Avatar size={64} icon={<UserOutlined />} />
          </Col>
          <Col>
            <Title level={3} style={{ margin: 0 }}>
              {user.name}
            </Title>
            <Text type="secondary">@{user.username}</Text>
          </Col>
        </Row>

        {/* Main Content */}
        <Descriptions
          layout="vertical"
          column={{ xs: 1, sm: 2, md: 2 }}
          style={{ marginTop: "24px" }}
        >
          {/* Contact Information */}
          <Descriptions.Item
            label={
              <Space>
                <MailOutlined /> Email
              </Space>
            }
          >
            {user.email}
          </Descriptions.Item>

          <Descriptions.Item
            label={
              <Space>
                <PhoneOutlined /> Phone
              </Space>
            }
          >
            {user.phone}
          </Descriptions.Item>

          <Descriptions.Item
            label={
              <Space>
                <GlobalOutlined /> Website
              </Space>
            }
          >
            {user.website}
          </Descriptions.Item>

          <Descriptions.Item
            label={
              <Space>
                <EnvironmentOutlined /> Address
              </Space>
            }
          >
            {user.address.street}, {user.address.suite}
            <br />
            {user.address.city}, {user.address.zipcode}
          </Descriptions.Item>

          {/* Company Information */}
          <Descriptions.Item
            label={
              <Space>
                <BankOutlined /> Company
              </Space>
            }
            span={2}
          >
            <Title level={5} style={{ marginTop: 0, marginRight: "5px" }}>
              {user.company.name}
            </Title>
            <Text>{user.company.catchPhrase}, </Text>
            <br />
            <Text type="secondary">({user.company.bs})</Text>
          </Descriptions.Item>
        </Descriptions>
      </Card>
    </div>
  );
};

export default Profile;
