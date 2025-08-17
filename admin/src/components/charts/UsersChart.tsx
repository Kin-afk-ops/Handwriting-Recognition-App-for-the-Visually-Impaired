"use client";
import React, { useEffect, useMemo, useState } from "react";
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

interface ChildProps {
  data:
    | {
        month: number;
        users: number;
        year: number;
      }[]
    | null;
}

const UsersChart: React.FC<ChildProps> = ({ data }) => {
  const [selectedYear, setSelectedYear] = useState<string>("2025");

  const years = useMemo(() => {
    if (!data) return [];
    const uniqueYears = Array.from(new Set(data.map((item) => item.year)));
    return uniqueYears.sort((a, b) => b - a).map(String); // sort giảm dần, convert thành string
  }, [data]);

  useEffect(() => {
    if (years.length > 0 && !years.includes(selectedYear)) {
      setSelectedYear(years[0]); // chọn năm mới nhất
    }
  }, [years, selectedYear]);

  const transformedData = useMemo(() => {
    if (!data) return [];

    const monthNames = [
      "Tháng 1",
      "Tháng 2",
      "Tháng 3",
      "Tháng 4",
      "Tháng 5",
      "Tháng 6",
      "Tháng 7",
      "Tháng 8",
      "Tháng 9",
      "Tháng 10",
      "Tháng 11",
      "Tháng 12",
    ];

    return data
      .filter((item) => item.year.toString() === selectedYear)
      .map((item) => ({
        ...item,
        month: monthNames[item.month - 1],
      }));
  }, [data, selectedYear]);

  if (!data) return <p>Lỗi không tải được dữ liệu!</p>;

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
            {years.map((year) => (
              <SelectItem key={year} value={year}>
                {year}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Biểu đồ */}
      <ResponsiveContainer width="100%" height={300}>
        <AreaChart data={transformedData}>
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
