"use client";
import React, { useState } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

const UsersChart = () => {
  const allData = [
    { month: "Jan", users: 120, year: 2023 },
    { month: "Feb", users: 200, year: 2023 },
    { month: "Mar", users: 300, year: 2023 },
    { month: "Apr", users: 400, year: 2023 },
    { month: "May", users: 350, year: 2023 },
    { month: "Jun", users: 420, year: 2023 },
    { month: "Jan", users: 220, year: 2024 },
    { month: "Feb", users: 250, year: 2024 },
    { month: "Mar", users: 310, year: 2024 },
    { month: "Apr", users: 390, year: 2024 },
    { month: "May", users: 430, year: 2024 },
    { month: "Jun", users: 410, year: 2024 },
  ];

  const [selectedYear, setSelectedYear] = useState<string>("2024");

  const filteredData = allData.filter(
    (item) => item.year.toString() === selectedYear
  );

  return (
    <div className="space-y-4">
      {/* Bộ lọc năm */}
      <div className="w-50 flex items-center">
        <span className="mr-2">Chọn năm</span>

        <Select value={selectedYear} onValueChange={setSelectedYear}>
          <SelectTrigger>
            <SelectValue placeholder="Chọn năm" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="2023">2023</SelectItem>
            <SelectItem value="2024">2024</SelectItem>
            <SelectItem value="2025">2025</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Biểu đồ */}
      <ResponsiveContainer width="100%" height={300}>
        <AreaChart data={filteredData}>
          <defs>
            <linearGradient id="colorUsers" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#4f46e5" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#4f46e5" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="users"
            stroke="#4f46e5"
            fillOpacity={1}
            fill="url(#colorUsers)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default UsersChart;
