import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import {
  BsFillArchiveFill,
  BsFillGrid3X3GapFill,
  BsPeopleFill,
} from "react-icons/bs";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LineChart,
  Line,
} from "recharts";
import CatePieChart from "./CatePieChart";

const Profit = () => {
  const data = [
    { name: "Tháng 1", uv: 4000, pv: 2400, amt: 2400 },
    { name: "Tháng 2", uv: 3000, pv: 1398, amt: 2210 },
    { name: "Tháng 3", uv: 2000, pv: 9800, amt: 2290 },
    { name: "Tháng 4", uv: 2780, pv: 3908, amt: 2000 },
    { name: "Tháng 5", uv: 1890, pv: 4800, amt: 2181 },
    { name: "Tháng 6", uv: 2390, pv: 3800, amt: 2500 },
    { name: "Tháng 7", uv: 3490, pv: 4300, amt: 2100 },
    { name: "Tháng 8", uv: 3490, pv: 4300, amt: 2100 },
    { name: "Tháng 9", uv: 3490, pv: 4300, amt: 2100 },
    { name: "Tháng 10", uv: 3490, pv: 4300, amt: 2100 },
    { name: "Tháng 11", uv: 3490, pv: 4300, amt: 2100 },
    { name: "Tháng 12", uv: 3490, pv: 4300, amt: 2100 },
  ];
  return (
    <Container fluid>
      <Row className="d-flex justify-content-center">
        <Col xs={6}>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart
              data={data}
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="pv" fill="#8884d8" />
              <Bar dataKey="uv" fill="#82ca9d" />
            </BarChart>
          </ResponsiveContainer>
        </Col>
        <Col xs={6}>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart
              data={data}
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="pv"
                stroke="#8884d8"
                activeDot={{ r: 8 }}
              />
              <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
            </LineChart>
          </ResponsiveContainer>
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
          <CatePieChart />
        </Col>
      </Row>
    </Container>
  );
};

export default Profit;
