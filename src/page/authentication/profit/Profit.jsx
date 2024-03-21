import React, { useEffect, useState } from "react";
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
import "./Profit.css";
import useObservable from "../../../core/hooks/useObservable.hooks";
import { getTransaction } from "../../../services/public/transaction.service";
import Transaction from "./Transaction";

const Profit = () => {
  const [selectedYear, setSelectedYear] = useState("");
  const [filteredTransactions, setFilteredTransactions] = useState([]);
  const { subscribeOnce } = useObservable();
  const [listTrans, setListTrans] = useState([]);
  const [chartName, setChartName] = useState("");

  let user = localStorage.getItem("user");
  const userData = JSON.parse(user);
  const userId = userData?._id;

  useEffect(() => {
    getAllTransaction();
  }, []);

  useEffect(() => {
    if (selectedYear) {
      const filteredData = listTrans.filter((transaction) => {
        const transactionYear = new Date(transaction.createdAt).getFullYear();
        return transactionYear.toString() === selectedYear.toString();
      });
      setFilteredTransactions(filteredData);
    } else {
      setFilteredTransactions(listTrans);
    }
  }, [selectedYear, listTrans]);

  useEffect(() => {
    if (filteredTransactions.length > 0) {
      const month = new Date(filteredTransactions[0].createdAt).toLocaleString(
        "en-US",
        { month: "long" }
      );
      setChartName(month);
    }
  }, [filteredTransactions]);

const getAllTransaction = () => {
  subscribeOnce(getTransaction(), (res) => {
    if (!res) return;
    const formattedTransactions = res.data.map((transaction) => ({
      ...transaction,
      formattedCreatedAt: formatCreatedAt(transaction.createdAt),
    }));
    setListTrans(formattedTransactions);
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


  const [totalAmount, setTotalAmount] = useState(0);
    useEffect(() => {
      // Calculate total amount when listTrans changes
      const totalAmount = listTrans.reduce(
        (acc, transaction) => acc + transaction.totalAmount,
        0
      );
      setTotalAmount(totalAmount);
    }, [listTrans]);

  const handleYearChange = (event) => {
    setSelectedYear(event.target.value);
  };

  const getAmountDomain = () => {
    if (filteredTransactions.length === 0) return [0, 100]; // Default domain if no data
    const amounts = filteredTransactions.map(
      (transaction) => transaction.totalAmount
    );
    const max = Math.max(...amounts);
    const min = Math.min(...amounts);
    return [min, max];
  };
  
  

  return (
    <main className="admin-main-container">
      <div className="admin-main-cards">
        <div className="admin-card">
          <div className="admin-card-inner">
            <h3>Paid orders</h3>
            <BsFillArchiveFill className="card_icon" />
          </div>
          <h3>{filteredTransactions.length} order(s)</h3>
        </div>
        <div className="admin-card">
          <div className="admin-card-inner">
            <h3>Profit earned</h3>
            <BsFillGrid3X3GapFill className="card_icon" />
          </div>
          <h3>₫{totalAmount} (VND)</h3>
        </div>
      </div>

      <div className="admin-charts d-flex justify-content-center ">
        <div className="w-75">
          <label style={{ color: "black" }} htmlFor="yearSelect">
            Select Year:{" "}
          </label>
          <select
            id="yearSelect"
            value={selectedYear}
            onChange={handleYearChange}
            style={{ color: "black" }}
          >
            <option value="">All</option>
            {[
              ...new Set(
                listTrans.map((transaction) =>
                  new Date(transaction.createdAt).getFullYear()
                )
              ),
            ].map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>

          <ResponsiveContainer width="100%" height={300}>
            <LineChart
              data={filteredTransactions}
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="formattedCreatedAt" />
              <YAxis domain={getAmountDomain()} />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="totalAmount"
                stroke="#8884d8"
                name={"Total Amount"}
              />
            </LineChart>
          </ResponsiveContainer>
          <Transaction />
        </div>
      </div>
    </main>
  );
};

export default Profit;
