import React, { useEffect, useState } from "react";
import { Container, Table, Row, Col } from "react-bootstrap";
import useObservable from "../../../core/hooks/useObservable.hooks";
import { getTransaction } from "../../../services/public/transaction.service";

const Transaction = () => {
  const { subscribeOnce } = useObservable();
  const [listTrans, setListTrans] = useState([]);
  let user = localStorage.getItem("user");
    const userData = JSON.parse(user);
    const userId = userData?._id;
    console.log(userId)
  useEffect(() => {
    getAllTransaction();
  }, []);
  const getAllTransaction = () => {
    subscribeOnce(getTransaction(), (res) => {
      if (!res) return;
      setListTrans(res.data);
    });
  };
  const formatCreatedAt = (createdAt) => {
    const date = new Date(createdAt);
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    const monthName = months[date.getMonth()];
    const formattedDate = `${monthName}, ${date.getDate()}, ${date.getFullYear()} - ${date.toLocaleTimeString(
      [],
      { hour: "2-digit", minute: "2-digit" }
    )}`;
    return formattedDate;
  };

  return (
    <Container fluid>
      <Row>
        <Col xs={12} className="d-flex justify-content-center">
          <h4 style={{ margin: "40px auto" }}>Your Transaction</h4>
        </Col>
      </Row>
      <Row>
        <Col xs={12} className="d-flex justify-content-center">
          <Table striped style={{ width: "90%" }}>
            <thead>
              <th>TransactionID</th>
              <th>userID</th>
              <th>PostID</th>
              <th>Create At</th>
              <th>Total Amount</th>
            </thead>
            <tbody>
              {listTrans &&
                listTrans.map((list, index) => {
                  if (list?.userId === userId) {
                    return (
                      <tr key={index}>
                        <td>{list?._id}</td>
                        <td>{list?.userId}</td>
                        <td>{list?.order}</td>
                        <td>{formatCreatedAt(list?.createdAt)}</td>
                        <td>{list?.totalAmount}</td>
                      </tr>
                    );
                  }
                  return null;
                })}
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
};

export default Transaction;
