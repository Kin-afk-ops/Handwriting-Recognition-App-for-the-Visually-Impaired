import {
  Image,
  LayoutDashboard,
  MessageCircleReply,
  User,
  type LucideIcon,
} from "lucide-react";
export interface NavItem {
  title: string;
  url: string;
  icon: LucideIcon;
}

export const navMain: NavItem[] = [
  {
    title: "Tổng quan",
    url: "#",
    icon: LayoutDashboard,
  },
  {
    title: "Người dùng",
    url: "users",
    icon: User,
  },
  {
    title: "Ảnh nhận dạng",
    url: "images",
    icon: Image,
  },
  {
    title: "Phản hồi người dùng",
    url: "feedbacks",
    icon: MessageCircleReply,
  },
];
