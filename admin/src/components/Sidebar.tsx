"use client";
import { NavMain } from "./NavMain";
import {
  Sidebar as SidebarRoot,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "./ui/sidebar";

import {
  Image,
  LayoutDashboard,
  MessageCircleReply,
  User,
  type LucideIcon,
} from "lucide-react";

const Sidebar: React.FC = ({
  ...props
}: React.ComponentProps<typeof Sidebar>) => {
  const navMain: {
    title: string;
    url: string;
    icon: LucideIcon;
  }[] = [
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

  return (
    <SidebarRoot collapsible="offcanvas" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              className="data-[slot=sidebar-menu-button]:!p-1.5"
            >
              <a href="#">
                <span className="text-base font-semibold">ADMIN</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={navMain} />
      </SidebarContent>
    </SidebarRoot>
  );
};

export default Sidebar;
