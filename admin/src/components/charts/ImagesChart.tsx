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
import { useEffect, useMemo, useState } from "react";

interface ChildProps {
  data:
    | {
        month: number;
        images: number;
        year: number;
      }[]
    | null;
}

const ImagesChart: React.FC<ChildProps> = ({ data }) => {
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
        <BarChart data={transformedData}>
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
