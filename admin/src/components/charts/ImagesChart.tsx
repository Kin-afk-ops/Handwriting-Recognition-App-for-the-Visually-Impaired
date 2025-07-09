"use client";
import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
} from "recharts";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { useState } from "react";

const ImagesChart = () => {
  const allImageData = [
    { month: "Jan", images: 150, year: 2023 },
    { month: "Feb", images: 200, year: 2023 },
    { month: "Mar", images: 250, year: 2023 },
    { month: "Apr", images: 300, year: 2023 },
    { month: "May", images: 180, year: 2023 },
    { month: "Jun", images: 220, year: 2023 },
    { month: "Jan", images: 220, year: 2024 },
    { month: "Feb", images: 280, year: 2024 },
    { month: "Mar", images: 310, year: 2024 },
    { month: "Apr", images: 400, year: 2024 },
    { month: "May", images: 390, year: 2024 },
    { month: "Jun", images: 450, year: 2024 },
  ];

  const [selectedYear, setSelectedYear] = useState<string>("2024");

  const filteredData = allImageData.filter(
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
          </SelectContent>
        </Select>
      </div>

      {/* Biểu đồ */}
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={filteredData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <Tooltip />
          <Bar dataKey="images" fill="#10b981" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ImagesChart;
