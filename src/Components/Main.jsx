import {
  CodeXml,
  Compass,
  ImagePlus,
  Lightbulb,
  MessagesSquare,
  Mic,
  SendHorizonal,
} from "lucide-react";
import React, { useContext } from "react";
import { Context } from "../context/Context";

export const Main = ({ isCollap }) => {
  // ⬇️ context theke sob data & function niye nicchi
  const {
    Question,
    setQuestion,
    Recentque,
    Prevque,
    Showresult,
    Result,
    sentRequest,
    Loading,
  } = useContext(Context);

  const boxItem = [
    {
      text: "Suggest beautiful Places to see on an upcoming road trip",
      icon: Compass,
    },
    {
      text: "Briefly summarize this concept:urban planing",
      icon: MessagesSquare,
    },
    {
      text: "Brainstrome team bonding activities for our work retreat",
      icon: Lightbulb,
    },
    {
      text: "Improve the readablility of the code following code",
      icon: CodeXml,
    },
  ];

  return (
    <>
      <div
        className={`father  min-h-screen transition-all duration-300 flex flex-col justify-between
        ${
          isCollap
            ? "ml-[70px] w-[calc(100%-70px)]"
            : "ml-[250px] w-[calc(100%-250px)]"
        }
      `}
      >
        <div className="header  flex justify-between  items-center bgf-amber-400 ">
          <h1 className="font-bold ml-5 text-gray-700 ">Gemini</h1>

          <img
            className=" h-10 w-10  rounded-full  mr-5 "
            src="https://scontent.fjsr6-1.fna.fbcdn.net/v/t39.30808-1/431945023_122115976076230343_8622806891544541454_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=108&ccb=1-7&_nc_sid=e99d92&_nc_ohc=zlAZbrIUHL4Q7kNvwERwzYy&_nc_oc=Adm2tg8df3cHcQDrW9i82_TL3Mo6EvuiINR0BVb6yMw5PloY6g33yvZxuNI1zACGIp8&_nc_zt=24&_nc_ht=scontent.fjsr6-1.fna&_nc_gid=pbe7Umgsx3M9B8kdQPwS4w&oh=00_AfjBrHxIiLVLg6pFLinIFkWEpYNOe_0n6Q7g9frntWj3Pw&oe=692F012E"
            alt=""
          />
        </div>

        <div className="middle flex flex-col justify-center items-center gap-3 m-2  ">
          {Showresult ? (
            <div  className="max-h-[75vh]  overflow-y-auto scrollbar-hide p-3 w-full text-white ">
              
                <div className="userQue p-2 rounded-2xl rounded-tr-none   flex flex-row-reverse items-center gap-4 mb-3"> 

              <img className=" h-10 w-10  flex flex-end rounded-full " src="https://scontent.fjsr6-1.fna.fbcdn.net/v/t39.30808-1/431945023_122115976076230343_8622806891544541454_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=108&ccb=1-7&_nc_sid=e99d92&_nc_ohc=zlAZbrIUHL4Q7kNvwERwzYy&_nc_oc=Adm2tg8df3cHcQDrW9i82_TL3Mo6EvuiINR0BVb6yMw5PloY6g33yvZxuNI1zACGIp8&_nc_zt=24&_nc_ht=scontent.fjsr6-1.fna&_nc_gid=pbe7Umgsx3M9B8kdQPwS4w&oh=00_AfjBrHxIiLVLg6pFLinIFkWEpYNOe_0n6Q7g9frntWj3Pw&oe=692F012E" alt="" />
                  <p className="rounded-2xl rounded-tr-none  bg-black h-12 p-1 flex  items-center " > {Recentque} </p>

                </div>
                <div className="userResult flex  justify-start gap-3 "> 
                  <img className="h-10  " src="https://registry.npmmirror.com/@lobehub/icons-static-png/latest/files/light/gemini-color.png" alt="" />

                      {
                        Loading? <div className="loader flex flex-col gap-2 w-full "> 
                       <div className="loader w-full flex flex-col gap-1">
  <div className="loader-line" />
    <div className="loader-line" />
    <div className="loader-line" />
    </div>

                         </div> :
                                               <p className="rounded-2xl rounded-tr-none p-2 text-justify text-black bg-gray-100 " dangerouslySetInnerHTML={{__html:Result}} />  

                      }

              
               
                </div>
           
              
             </div>
          ) : (
            <div>
              
              <div className="heroText bg-amsber-300 ">
                <p className="bg-linear-to-r from-[#4285F4] via-[#9B72FF] to-[#EA4335] bg-clip-text text-transparent text-6xl font-medium">
                  Hello, Dev.
                </p>
                <p className= " Intro  text-gray-400 text-4xl font-medium">
                  How can I help you today?
                </p>
              </div>
              <div className="box bg-grseen-300  p-4  gap-4 flex justify-center items-center ">
                {boxItem.map((elem, index) => (
                  <div key={index} className="box1 relative  ">
                    <p className=" h-50  w-50 bg-gray-200 p-3 rounded-xl ">
                      {elem.text}
                    </p>
                    <elem.icon className=" absolute left-40  bottom-4 border   rounded-full bg-white  " />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="footer bg-cyans-950  mb-2  flex flex-col justify-center items-center">
          <div className="relative   w-full max-w-3xl m-1">
            <input
              value={Question}
              onChange={(e) => {
                setQuestion(e.target.value);
                console.log(e.target.value);
              }}
              type="text"
              placeholder="Ask anything.... "
              className=" h-12 p-1  w-full max-w-3xl rounded-full bg-[#F1F3F4]  shadow-sm 
                border border-transparent hover:border-gray-300
                focus-within:border-gray-400 transition "
            />

            <span className="flex gap-2 absolute top-3 right-2 ">
              <Mic />
              <ImagePlus />
              {/* ekhane Question pass korchi */}
              <SendHorizonal className=" border border-gray-200 rounded-lg shadow-sm 
transition-all duration-300 hover:shadow-xl hover:-translate-y-1" onClick={() => sentRequest(Question)} />
            </span>
          </div>

          <p className="text-sm">
            Gemini can make mistakes, so double-check it
          </p>
        </div>
      </div>
    </>
  );
};
