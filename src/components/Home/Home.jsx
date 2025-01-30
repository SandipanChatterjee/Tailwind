import React, { useEffect, useState, useMemo } from "react";
import { Space, Table, Tag, Tooltip, Typography } from "antd";
import { Link } from "react-router-dom";
import usersMockData from "../../mocks/users.json";
import "./Home.css";

const renderAddress = (address) => (
  <address className="address-block">
    <span className="street-line">
      {address.street}, {address.suite}
    </span>
    <span className="city-line">
      {address.city}, {address.zipcode}
    </span>
    {address.geo && (
      <div className="geo-coordinates" aria-label="Geographic coordinates">
        <data value={`${address.geo.lat},${address.geo.lng}`}>
          Lat: {address.geo.lat}, Lng: {address.geo.lng}
        </data>
      </div>
    )}
  </address>
);

const renderCompany = (company) => {
  const text = `${company.catchPhrase},${company.bs}`;
  return (
    <div className="address-block">
      <Typography.Text strong>{company?.name || "N/A"}</Typography.Text>
      <div className="company-details">
        <Tooltip
          title={text}
          placement="topLeft"
          overlayClassName="custom-tooltip"
        >
          <span className="truncated-text">
            <span>
              <Typography.Text>
                {company.catchPhrase}, {company.bs}
              </Typography.Text>
            </span>
          </span>
        </Tooltip>
      </div>
    </div>
  );
};

const Home = () => {
  const [users, setUsers] = useState([]);

  const columns = useMemo(
    () => [
      {
        title: "Name",
        dataIndex: "name",
        key: "name",
        render: (text, record) => (
          <Link to={`/profile/${record.id}`}>{text}</Link>
        ),
      },
      {
        title: "Username",
        dataIndex: "username",
        key: "username",
      },
      {
        title: "Address",
        dataIndex: "address",
        key: "address",
        render: renderAddress,
      },
      {
        title: "Phone",
        dataIndex: "phone",
        key: "phone",
      },
      {
        title: "Website",
        dataIndex: "website",
        key: "website",
      },
      {
        title: "Company",
        dataIndex: "company",
        key: "company",
        render: renderCompany,
      },
    ],
    []
  );

  useEffect(() => {
    setUsers(usersMockData);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <Table columns={columns} dataSource={users} tableLayout="fixed" />
    </div>
  );
};

export default Home;
