import React, { useContext } from "react";
import {
  Menu,
  Plus,
  History,
  Info,
  Settings,
  LogOut,
  MessagesSquare,
} from "lucide-react";
import { Context } from "../context/Context";

export const Sidebar = ({ isCollap, onClick }) => {
  const { sentRequest, Prevque, setRecentque, newChat } = useContext(Context);

  const footerItems = [
    { icon: Info, label: "Help & Info" },
    { icon: Settings, label: "Settings" },
    { icon: LogOut, label: "Logout" },
  ];

  const loadPrompt = async (prompt) => {
    setRecentque(prompt);
    await sentRequest(prompt);
  };

  const handleNewChat = () => {
    newChat();
    if (typeof window !== "undefined" && window.innerWidth < 768 && onClick) {
      onClick();
    }
  };

  const handleSelectChat = (item) => {
    loadPrompt(item);
    if (typeof window !== "undefined" && window.innerWidth < 768 && onClick) {
      onClick();
    }
  };

  return (
    <>
      {/* Mobile backdrop overlay */}
      {!isCollap && (
        <div
          onClick={onClick}
          className="fixed inset-0 bg-black/40 backdrop-blur-xs z-30 md:hidden transition-opacity duration-300"
          aria-hidden="true"
        />
      )}

      {/* Sidebar container */}
      <aside
        className={`mainSide fixed top-0 left-0 h-screen z-40 bg-[#f0f4f9] border-r border-gray-200/80 flex flex-col justify-between transition-all duration-300 ease-in-out select-none
          ${
            isCollap
              ? "-translate-x-full md:translate-x-0 md:w-[72px]"
              : "translate-x-0 w-[260px] shadow-2xl md:shadow-none"
          }
        `}
      >
        {/* Top Part: Menu toggle + Brand */}
        <div className="topPart p-3.5 flex flex-col gap-4">
          <div className="brand-text flex items-center justify-between min-h-[40px]">
            <button
              onClick={onClick}
              className="p-2 rounded-full hover:bg-gray-200/70 text-gray-700 transition-colors cursor-pointer flex items-center justify-center shrink-0"
              title={isCollap ? "Expand sidebar" : "Collapse sidebar"}
              aria-label="Toggle sidebar"
            >
              <Menu className="w-5 h-5" />
            </button>

            {!isCollap && (
              <div className="flex items-center gap-2.5 transition-opacity duration-200 pr-1">
                <img
                  className="gemLogo w-7 h-7 object-contain"
                  src="https://registry.npmmirror.com/@lobehub/icons-static-png/latest/files/light/gemini-color.png"
                  alt="Gemini AI"
                />
                <div>
                  <p className="font-semibold text-sm text-gray-800 leading-tight">
                    Gemini
                  </p>
                  <p className="text-[10px] text-gray-500 leading-none">
                    @bi-3.0
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* New Chat Button */}
          <button
            onClick={handleNewChat}
            className={`flex items-center rounded-full transition-all duration-200 cursor-pointer bg-[#dde3ea]/80 hover:bg-[#d0d8e2] text-gray-700 shadow-xs active:scale-95
              ${
                isCollap
                  ? "w-10 h-10 justify-center mx-auto"
                  : "w-full px-3.5 py-2.5 gap-3 text-sm font-medium"
              }
            `}
            title="Start a new chat"
          >
            <Plus className="w-4 h-4 text-gray-700 shrink-0" />
            {!isCollap && <span className="truncate">New chat</span>}
          </button>
        </div>

        {/* Middle Part: Recent / History List */}
        <div className="middlePart flex-1 flex flex-col min-h-0 px-2 py-1 overflow-hidden">
          {isCollap ? (
            <div className="flex flex-col items-center py-2">
              <button
                onClick={onClick}
                className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-gray-200/80 text-gray-600 transition-colors cursor-pointer"
                title="View recent history"
              >
                <History className="w-5 h-5" />
              </button>
            </div>
          ) : (
            <div className="flex flex-col h-full">
              <div className="flex items-center gap-2 px-3 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                <History className="w-3.5 h-3.5" />
                <span>Recent</span>
              </div>

              <div className="flex-1 overflow-y-auto space-y-1 pr-1 scrollbar-hide">
                {Prevque && Prevque.length > 0 ? (
                  Prevque.map((item, index) => (
                    <button
                      key={index}
                      onClick={() => handleSelectChat(item)}
                      className="dashboard w-full flex items-center gap-2.5 px-3 py-2 rounded-full hover:bg-gray-200/80 text-gray-700 text-xs sm:text-sm text-left transition-colors cursor-pointer group"
                      title={item}
                    >
                      <MessagesSquare className="w-3.5 h-3.5 text-gray-500 shrink-0 group-hover:text-blue-600 transition-colors" />
                      <span className="truncate flex-1">{item}</span>
                    </button>
                  ))
                ) : (
                  <p className="px-3 py-3 text-xs text-gray-400 italic">
                    No recent chats
                  </p>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Footer Part */}
        <div className="footerPart p-2 border-t border-gray-200/60 space-y-1">
          {footerItems.map((elem, index) => (
            <button
              key={index}
              className={`settings w-full flex items-center rounded-full hover:bg-gray-200/80 text-gray-700 text-xs sm:text-sm transition-colors cursor-pointer
                ${
                  isCollap
                    ? "w-10 h-10 justify-center mx-auto px-0"
                    : "px-3 py-2 gap-3"
                }
              `}
              title={elem.label}
            >
              <elem.icon className="w-4 h-4 text-gray-600 shrink-0" />
              {!isCollap && <span className="truncate">{elem.label}</span>}
            </button>
          ))}
        </div>
      </aside>
    </>
  );
};
