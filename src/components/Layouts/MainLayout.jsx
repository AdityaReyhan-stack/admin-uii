import React from "react";
import Logo from "../Elements/Logo";
import Input from "../Elements/Input";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Icon from "../Elements/Icon";
import { NavLink } from "react-router-dom";

function MainLayout(props) {
  const { children } = props;

  // ✅ Pindah ke atas, sebelum return
  const menu = [
    {
      id: 1,
      name: "Overview",
      icon: <Icon.Overview size={22} />,
      link: "/",
    },
    {
      id: 2,
      name: "Balances",
      icon: <Icon.Balance size={22} />,
      link: "/balance",
    },
    {
      id: 3,
      name: "Transaction",
      icon: <Icon.Transaction size={22} />,
      link: "/transaction",
    },
    {
      id: 4,
      name: "Bills",
      icon: <Icon.Bill size={22} />,
      link: "/bill",
    },
    {
      id: 5,
      name: "Expenses",
      icon: <Icon.Expense size={22} />,
      link: "/expense",
    },
    {
      id: 6,
      name: "Goals",
      icon: <Icon.Goal size={22} />,
      link: "/goal",
    },
    {
      id: 7,
      name: "Settings",
      icon: <Icon.Setting size={22} />,
      link: "/setting",
    },
  ];

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      {/* Sidebar */}
      <aside className="w-28 sm:w-64 bg-defaultBlack text-white flex flex-col justify-between px-5 py-8">
        {/* Atas */}
        <div>
          <div className="mb-10">
            <Logo variant="secondary" />
          </div>

          <nav className="mt-10 space-y-2">
            {menu.map((item) => (
              <NavLink
                key={item.id}
                to={item.link}
                className={({ isActive }) =>
                  `
            flex items-center gap-3
            px-4 py-3
            rounded-xl
            transition-all duration-200
            ${
              isActive
                ? "bg-primary text-white font-bold"
                : "hover:bg-special-bg3 hover:text-white"
            }
            `
                }
              >
                <div className="flex items-center justify-center">
                  {item.icon}
                </div>

                <span className="hidden sm:block text-sm">{item.name}</span>
              </NavLink>
            ))}
          </nav>
        </div>

        {/* Bawah */}
        <div>
          <div
            className="
      flex items-center gap-3
      bg-special-bg3
      px-4 py-3
      rounded-xl
      cursor-pointer
      "
          >
            <div className="mx-auto sm:mx-0">L</div>

            <div className="hidden sm:block">Logout</div>
          </div>

          <div className="border my-10 border-special-bg"></div>

          <div className="flex items-center gap-3">
            <div
              className="
        w-10 h-10 
        rounded-full 
        bg-gray-400 
        flex 
        items-center 
        justify-center
        "
            >
              A
            </div>

            <div className="hidden sm:block">
              <div>Aditya</div>

              <span className="text-xs text-gray-03">View Profile</span>
            </div>

            <div className="hidden sm:block ml-auto">▼</div>
          </div>
        </div>
      </aside>

      {/* Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="h-24 border-b border-gray-05 bg-special-mainBg flex justify-between items-center px-8">
          <div className="flex items-center">
            <div className="font-semibold text-defaultBlack mr-5">Aditya</div>

            <div className="text-gray-02">May 19, 2023</div>
          </div>

          <div className="flex items-center">
            <div className="mr-5">
              <NotificationsIcon
                sx={{
                  color: "white",
                  fontSize: 30,
                }}
              />
            </div>

            <div>
              <Input
                placeholder="Search..."
                backgroundColor="bg-white"
                border="border-white"
              />
            </div>
          </div>
        </header>

        <main className="flex-1 bg-special-mainBg p-8">{children}</main>
      </div>
    </div>
  );
}

export default MainLayout;
