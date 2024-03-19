import React, { useEffect, useState } from "react";
import { Container, Table } from "react-bootstrap";
import useObservable from "../../../core/hooks/useObservable.hooks";
import { getTransaction } from "../../../services/public/transaction.service";

const Transaction = () => {
  const { subscribeOnce } = useObservable();
  const [listTrans, setListTrans] = useState([]);
  useEffect(() => {
    getAllTransaction();
  }, []);
  const getAllTransaction = () => {
    subscribeOnce(getTransaction(), (res) => {
      if (!res) return;
      setListTrans(res.data);
    });
  };

  return (
    <Container fluid>
      <Table striped>
        <thead>
          <th>ID</th>
          <th>OrderID</th>
          <th>PostID</th>
          <th>Create At</th>
          <th>Total Amount</th>
        </thead>
        <tbody>
          {listTrans &&
            listTrans.map((list, index) => (
              <tr>
                <td>{list?._id}</td>
                <td>{list?.order}</td>
                <td>{list?.post}</td>
                <td>{list?.createdAt}</td>
                <td>{list?.totalAmount}</td>
              </tr>
            ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default Transaction;
