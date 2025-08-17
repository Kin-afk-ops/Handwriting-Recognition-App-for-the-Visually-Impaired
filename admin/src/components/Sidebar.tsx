"use client";
import { navMain, navMainSuperadmin } from "@/utils/data/navMain";
import { NavMain } from "./NavMain";
import {
  Sidebar as SidebarRoot,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "./ui/sidebar";
import { useAuthStore } from "../../store/authStore";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const Sidebar: React.FC = ({
  ...props
}: React.ComponentProps<typeof Sidebar>) => {
  const router = useRouter();

  const user = useAuthStore((state) => state.user);
  const hasHydrated = useAuthStore((state) => state.hasHydrated);

  if (!hasHydrated) return null; // chờ hydrate xong

  const items = user?.role === "super_admin" ? navMainSuperadmin : navMain;

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
        <NavMain items={items} />
      </SidebarContent>
    </SidebarRoot>
  );
};

export default Sidebar;
