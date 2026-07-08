import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import NotificationsIcon from "@mui/icons-material/Notifications";

import Logo from "../Elements/Logo";
import Input from "../Elements/Input";
import Icon from "../Elements/Icon";
import { ThemeContext } from "../../context/themeContext";

function MainLayout({ children }) {
  const { theme, setTheme } = useContext(ThemeContext);

  const themes = [
    { name: "theme-green", bgcolor: "bg-[#299D91]", color: "#299D91" },
    { name: "theme-blue", bgcolor: "bg-[#1E90FF]", color: "#1E90FF" },
    { name: "theme-purple", bgcolor: "bg-[#6A5ACD]", color: "#6A5ACD" },
    { name: "theme-pink", bgcolor: "bg-[#DB7093]", color: "#DB7093" },
    { name: "theme-brown", bgcolor: "bg-[#8B4513]", color: "#8B4513" },
  ];

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
    <div className={`flex min-h-screen ${theme.name}`}>
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
                  `flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 ${
                    isActive
                      ? "bg-primary text-white font-bold"
                      : "hover:bg-special-bg3 hover:text-white"
                  }`
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

        {/* Tengah */}
        <div className="mb-6">
          <div className="text-sm mb-2 hidden sm:block">Themes</div>

          <div className="flex flex-col sm:flex-row gap-2 items-center">
            {themes.map((t) => (
              <div
                key={t.name}
                className={`${t.bgcolor} w-6 h-6 rounded-md cursor-pointer ${
                  theme.name === t.name ? "ring-2 ring-white" : ""
                }`}
                onClick={() => setTheme(t)}
              />
            ))}
          </div>
        </div>

        {/* Bawah */}
        <div>
          <NavLink
            to="/signin"
            className="flex items-center gap-3 bg-special-bg3 px-4 py-3 rounded-xl hover:bg-primary transition-all"
          >
            <div className="mx-auto sm:mx-0 text-primary">
              <Icon.Logout />
            </div>

            <div className="hidden sm:block">Logout</div>
          </NavLink>

          <div className="border my-8 border-special-bg"></div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gray-400 flex items-center justify-center font-semibold">
              A
            </div>

            <div className="hidden sm:block">
              <div>Aditya</div>

              <span className="text-xs text-gray-300">View Profile</span>
            </div>

            <div className="hidden sm:block ml-auto">▼</div>
          </div>
        </div>
      </aside>

      {/* Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="h-24 border-b border-gray-200 bg-special-mainBg flex justify-between items-center px-8">
          <div className="flex items-center gap-5">
            <div className="font-semibold text-defaultBlack">Aditya</div>

            <div className="text-gray-500">
              {new Date().toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </div>
          </div>

          <div className="flex items-center gap-5">
            <NotificationsIcon
              sx={{
                color: "#6B7280",
                fontSize: 30,
              }}
            />

            <Input
              placeholder="Search..."
              backgroundColor="bg-white"
              border="border-white"
            />
          </div>
        </header>

        {/* Main */}
        <main className="flex-1 bg-special-mainBg p-8">{children}</main>
      </div>
    </div>
  );
}

export default MainLayout;
