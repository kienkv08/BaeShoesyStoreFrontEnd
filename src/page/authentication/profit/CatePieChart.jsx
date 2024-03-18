import React, { useEffect, useState } from "react";
import { PieChart, Pie, Tooltip, Cell, Legend } from "recharts";
import useObservable from "../../../core/hooks/useObservable.hooks";
import { getCategory } from "../../../services/public/category.service";

const CatePieChart = () => {
  const [listCate, setListCate] = useState([]);
  const { subscribeOnce } = useObservable();
  useEffect(() => {
    getAllCategory();
  }, []);

  const getAllCategory = () => {
    subscribeOnce(getCategory(), (res) => {
      if (!res) return;
      setListCate(res.data);
    });
  };
  const data = [
    { name: "A", value: 400 },
    { name: "B", value: 300 },
    { name: "C", value: 300 },
    { name: "D", value: 200 },
  ];

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];
  return (
    <PieChart width={400} height={400}>
      <Pie
        data={data}
        cx={200}
        cy={200}
        labelLine={false}
        outerRadius={80}
        fill="#8884d8"
        dataKey="value"
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Tooltip />
      <Legend />
    </PieChart>
  );
};

export default CatePieChart;
