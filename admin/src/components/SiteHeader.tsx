"use client";
import React, { useEffect, useState } from "react";
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
import {
  ChevronDown,
  CircleUserRound,
  LogOut,
  UserRoundCog,
} from "lucide-react";
import { navMain, navMainSuperadmin } from "@/utils/data/navMain";
import { usePathname, useRouter } from "next/navigation";
import { useAuthStore } from "../../store/authStore";
import axiosInstance from "@/api/axiosInstance";
import { showError, showSuccess } from "@/utils/styles/toast-utils";
import LoadingScreen from "./LoadingScreen";

const SiteHeader = () => {
  const pathname = usePathname(); // ví dụ: "/user"
  const segment = pathname.split("/")[1] || "#"; // "user"
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(false);

  const user = useAuthStore((state) => state.user);
  const hasHydrated = useAuthStore((state) => state.hasHydrated);
  const logout = useAuthStore((state) => state.logout);

  const items = user?.role === "super_admin" ? navMainSuperadmin : navMain;

  const getTitle = (): string => {
    if (segment === "myAccount") {
      const found = "Thay đổi mật khẩu";
      return found;
    }
    const found = items.find((nav) => nav.url === segment);
    return found ? found.title : "Lỗi"; // hoặc fallback khác
  };

  useEffect(() => {
    if (!hasHydrated) return; // chưa hydrate xong, chờ
  }, [hasHydrated]);

  const handleLogout = async (): Promise<void> => {
    logout();
    setLoading(true);
    await axiosInstance
      .post("/logout")
      .then(() => {
        router.push("/login");
        showSuccess("Đã đăng xuất thành công");
      })
      .catch((error) => {
        console.log(error);
        showError("Đăng xuất thất bại");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <>
      {loading && <LoadingScreen />}

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
              {user && (
                <DropdownMenuTrigger className="flex cursor-pointer">
                  {user.username}
                  <ChevronDown className="ml-2" />
                </DropdownMenuTrigger>
              )}

              <DropdownMenuContent>
                {user && (
                  <DropdownMenuLabel className="flex">
                    <UserRoundCog className="mr-2" />

                    <span className="text-[16px]">{user.role}</span>
                  </DropdownMenuLabel>
                )}
                <DropdownMenuSeparator />
                <DropdownMenuItem
                  className="flex cursor-pointer"
                  onClick={() => router.push("/myAccount")}
                >
                  <CircleUserRound className="mr-2" />
                  Thay đổi mật khẩu
                </DropdownMenuItem>

                <DropdownMenuItem
                  className="flex cursor-pointer"
                  onClick={handleLogout}
                >
                  <LogOut className="mr-2" />
                  Đăng xuất
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </>
  );
};

export default SiteHeader;
