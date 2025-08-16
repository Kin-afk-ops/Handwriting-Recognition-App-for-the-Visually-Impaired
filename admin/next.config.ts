import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["example.com", "res.cloudinary.com"], // thêm tất cả hostname bạn muốn load ảnh
  },
};

export default nextConfig;
