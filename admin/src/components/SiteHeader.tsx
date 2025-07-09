"use client";
import React from "react";
import { SidebarTrigger } from "./ui/sidebar";
import { Separator } from "./ui/separator";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { ChevronDown, CircleUserRound, LogOut } from "lucide-react";
import { navMain } from "@/utils/data/navMain";
import { usePathname } from "next/navigation";

const SiteHeader = () => {
  const pathname = usePathname(); // ví dụ: "/user"
  const segment = pathname.split("/")[1] || "#"; // "user"

  const getTitle = (): string => {
    const found = navMain.find((nav) => nav.url === segment);
    return found ? found.title : "Lỗi"; // hoặc fallback khác
  };

  return (
    <div className="flex h-(--header-height) shrink-0 items-center gap-2 border-b transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-(--header-height)">
      <div className="flex w-full items-center gap-1 px-4 lg:gap-2 lg:px-6">
        <SidebarTrigger className="-ml-1" />
        <Separator
          orientation="vertical"
          className="mx-2 data-[orientation=vertical]:h-4"
        />

        <h1 className="text-base font-medium">{getTitle()}</h1>
        <div className="ml-auto flex items-center gap-2">
          <DropdownMenu>
            <DropdownMenuTrigger className="flex cursor-pointer">
              nguyenVuLinh
              <ChevronDown className="ml-2" />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>Admin</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="flex cursor-pointer">
                <CircleUserRound className="mr-2" />
                Tài khoản của tôi
              </DropdownMenuItem>

              <DropdownMenuItem className="flex cursor-pointer">
                <LogOut className="mr-2" />
                Đăng xuất
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </div>
  );
};

export default SiteHeader;
