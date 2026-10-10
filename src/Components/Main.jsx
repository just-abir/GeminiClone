import React, { useContext } from "react";
import abirImg from "./Abir.jpg";
import {
  CodeXml,
  Compass,
  ImagePlus,
  Lightbulb,
  MessagesSquare,
  Mic,
  SendHorizonal,
  Menu,
} from "lucide-react";
import { Context } from "../context/Context";

export const Main = ({ isCollap, onToggle }) => {
  const {
    Question,
    setQuestion,
    Recentque,
    Showresult,
    Result,
    sentRequest,
    Loading,
  } = useContext(Context);

  const boxItem = [
    {
      text: "Suggest beautiful places to see on an upcoming road trip",
      icon: Compass,
    },
    {
      text: "Briefly summarize this concept: urban planning",
      icon: MessagesSquare,
    },
    {
      text: "Brainstorm team bonding activities for our work retreat",
      icon: Lightbulb,
    },
    {
      text: "Improve the readability of the following code",
      icon: CodeXml,
    },
  ];

  const handleSend = () => {
    if (Question.trim() && !Loading) {
      sentRequest(Question);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <main
      className={`father min-h-screen flex flex-col justify-between bg-white transition-all duration-300 ease-in-out
        ${
          isCollap
            ? "w-full md:ml-[72px] md:w-[calc(100%-72px)]"
            : "w-full md:ml-[260px] md:w-[calc(100%-260px)]"
        }
      `}
    >
      {/* Top Header */}
      <header className="header flex justify-between items-center px-4 sm:px-6 py-3.5 border-b border-gray-100/90 sticky top-0 bg-white/90 backdrop-blur-md z-10">
        <div className="flex items-center gap-3">
          <button
            onClick={onToggle}
            className="p-2 rounded-full hover:bg-gray-100 text-gray-700 transition-colors cursor-pointer md:hidden"
            title="Open navigation menu"
            aria-label="Toggle menu"
          >
            <Menu className="w-5 h-5" />
          </button>
          <h1 className="font-semibold text-lg sm:text-xl tracking-tight bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
            Gemini
          </h1>
        </div>

        <div className="w-9 h-9 rounded-full border-2 border-cyan-600 flex items-center justify-center text-white font-semibold text-sm shadow-xs ring-2 ring-white">
          <img
            src={abirImg}
            alt="User profile"
            className="w-full h-full object-cover rounded-full"
          />
        </div>
      </header>

      {/* Middle Content */}
      <div className="middle flex-1 flex flex-col justify-center items-center px-3 sm:px-6 py-4 w-full">
        {Showresult ? (
          <div className="w-full max-w-4xl mx-auto flex-1 overflow-y-auto scrollbar-hide space-y-6 max-h-[calc(100vh-190px)] px-1 sm:px-3">
            {/* User Question Bubble */}
            <div className="userQue flex items-start justify-end gap-3">
              <div className="bg-[#f0f4f9] text-gray-800 text-sm sm:text-base px-4 py-3 rounded-2xl rounded-tr-xs max-w-[85%] sm:max-w-[75%] break-words shadow-xs font-normal">
                {Recentque}
              </div>
              <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-gradient-to-tr from-blue-500 to-purple-600 flex items-center justify-center text-white font-semibold text-xs sm:text-sm shrink-0 shadow-xs">
                <img
                  src={abirImg}
                  alt="User profile"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
            </div>

            {/* Gemini Response */}
            <div className="userResult flex items-start gap-3 sm:gap-4">
              <img
                className="w-7 h-7 sm:w-8 sm:h-8 shrink-0 object-contain mt-1"
                src="https://registry.npmmirror.com/@lobehub/icons-static-png/latest/files/light/gemini-color.png"
                alt="Gemini AI"
              />

              {Loading ? (
                <div className="loader flex flex-col gap-2.5 w-full pt-1.5 max-w-2xl">
                  <div className="loader-line" />
                  <div className="loader-line w-4/5" />
                  <div className="loader-line w-3/5" />
                </div>
              ) : (
                <div
                  className="w-full text-gray-800 text-sm sm:text-base leading-relaxed break-words bg-[#f8fafd] p-4 sm:p-5 rounded-2xl border border-gray-100/80 shadow-xs"
                  dangerouslySetInnerHTML={{ __html: Result }}
                />
              )}
            </div>
          </div>
        ) : (
          <div className="w-full max-w-4xl mx-auto flex flex-col items-center justify-center my-auto py-4">
            {/* Hero Greeting */}
            <div className="heroText w-full text-left mb-6 sm:mb-8 px-2">
              <p className="bg-gradient-to-r from-[#4285F4] via-[#9B72FF] to-[#EA4335] bg-clip-text text-transparent text-3xl sm:text-5xl md:text-6xl font-medium tracking-tight">
                Hello, Dev.
              </p>
              <p className="Intro text-gray-400 text-2xl sm:text-4xl md:text-5xl font-medium mt-1">
                How can I help you today?
              </p>
            </div>

            {/* Prompt Suggestion Cards */}
            <div className="box grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 w-full px-2">
              {boxItem.map((elem, index) => (
                <div
                  key={index}
                  onClick={() => sentRequest(elem.text)}
                  className="box1 group relative bg-[#f0f4f9] hover:bg-[#e4e9f0] p-4 rounded-2xl cursor-pointer transition-all duration-200 flex flex-col justify-between min-h-[120px] sm:min-h-[160px] border border-transparent hover:border-gray-200 shadow-xs hover:shadow-md active:scale-98"
                >
                  <p className="text-xs sm:text-sm text-gray-700 leading-relaxed font-normal">
                    {elem.text}
                  </p>
                  <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center self-end shadow-xs group-hover:scale-110 transition-transform mt-3">
                    <elem.icon className="w-4 h-4 text-gray-600" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Footer Input Area */}
      <footer className="footer w-full max-w-4xl mx-auto px-3 sm:px-6 py-2 pb-4">
        <div className="relative flex items-center bg-[#f0f4f9] rounded-full px-4 py-2 sm:py-2.5 border border-transparent focus-within:border-gray-300 focus-within:bg-white focus-within:shadow-md transition-all shadow-xs">
          <input
            value={Question}
            onChange={(e) => setQuestion(e.target.value)}
            onKeyDown={handleKeyDown}
            type="text"
            placeholder="Ask Gemini..."
            className="w-full bg-transparent outline-none text-gray-800 text-sm sm:text-base placeholder-gray-500 pr-24 sm:pr-28"
          />

          <div className="absolute right-2 sm:right-3 flex items-center gap-1 sm:gap-1.5">
            <button
              type="button"
              className="p-1.5 sm:p-2 rounded-full hover:bg-gray-200/70 text-gray-600 transition-colors cursor-pointer"
              title="Use microphone"
              aria-label="Use microphone"
            >
              <Mic className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
            <button
              type="button"
              className="p-1.5 sm:p-2 rounded-full hover:bg-gray-200/70 text-gray-600 transition-colors cursor-pointer"
              title="Add image"
              aria-label="Add image"
            >
              <ImagePlus className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
            <button
              type="button"
              disabled={!Question.trim() || Loading}
              onClick={handleSend}
              className={`p-1.5 sm:p-2 rounded-full transition-all cursor-pointer ${
                Question.trim() && !Loading
                  ? "bg-blue-600 hover:bg-blue-700 text-white shadow-xs"
                  : "text-gray-400 hover:bg-gray-200/50 cursor-not-allowed"
              }`}
              title="Send prompt"
              aria-label="Send prompt"
            >
              <SendHorizonal className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </div>
        </div>

        <p className="text-[11px] sm:text-xs text-gray-400 text-center mt-2">
          Gemini may display inaccurate info, including about people, so
          double-check its responses.
        </p>
      </footer>
    </main>
  );
};
