import React, { useContext } from "react";
import { Home, Menu ,Search,History, Info,NotebookText, Settings, LogOut, MessagesSquare} from "lucide-react";
import { Context } from "../context/Context";

export const Sidebar = ({isCollap,onClick}) => {

  const {sentRequest,Prevque, setRecentque,newChat }=useContext(Context)

    const navItems=[
          // { icon:Home, label:"Dashboard" },
           {icon:History, label:"History"},
         //  { icon:NotebookText, label:"New Chat"},
        
    ];

    const footerItems=[
        {icon:Info, label:"More"},
        {icon:Settings, label:"Settings"},
        {icon:LogOut, label:"Logout" },

    ]


    const loadPrompt= async (prompt)=>{
      setRecentque(prompt)
    await    sentRequest(prompt)

    }

    

  return (
    <>
      <div className={ `mainSide  flex flex-col justify-between bg-gray-100 fixed top-0 left-0 h-screen   ${isCollap ? "w-[70px]" : "w-[250px]"}`} >
       
       
       
        <div className="topPart bg-ambser-300 m-1   ">
          <div className="brand-text flex  items-center relative h-10 gap-3 p-1 w-[230px]">
            <img
              className=" gemLogo h-10  "
              src="https://registry.npmmirror.com/@lobehub/icons-static-png/latest/files/light/gemini-color.png"
              alt=""
            />
            <div className={` ${isCollap? "opacity-0 hidden":"opacity-100 block " } `}>
              <p className="font-bold">Gemini AI</p>
              <p className="text-xs">CodeAB-3.1</p>
            </div>

            <Menu 
            onClick={onClick}
className={`menu rounded-sm border border-black cursor-pointer ${isCollap ? "  absolute top-1/5 left-14" : "absolute right-0"}`}      />    </div>

        </div>

      




        <div className="middlePart  -mt-10 ">
            
    <div className="menuItems flex flex-col justify-between items-center gap-2 -mt-10 ">

    <div onClick={()=>newChat()} className={`search shadow-sm hover:shadow-xl transition-all duration-300 h-10 gap-3 p-1 flex   items-center   relative ${isCollap?" w-10 justify-center ":"w-[230px]"} `}>

            <Search className="search absolute  right-2  top-1/2 -translate-y-1/2 bg-ambser-200 h-10 border-solid  shadow-xl " />
    <input className={` h-10  p-1 rounded-full border-solid  shadow-xl  ${isCollap?" opacity-0 hidden  ":" w-[230px] "} `} type="text" name="" id="" placeholder="Seacrh for Chats"/>

    </div>
{   

    navItems.map((elem,index)=>{

        return(
          <div key={index} className={` dashboard h-10 gap-3 p-1  flex  bgs-amber-200 ${isCollap? "w-full justify-center":"w-[230px]"} `}>

    <elem.icon />
    <div   className={` relative  ${isCollap?"  hidden":" block "} `}>{elem.label}
      
   
          {
            Prevque.map((item,index)=>(
              <p  key={index} onClick={()=>loadPrompt(item)} className="flex gap-1 justify-start p-1  items-center shadow-sm hover:shadow-xl transition-all duration-300   mr-4 "><MessagesSquare/> {item.slice(0,18)}... </p>
            ))
          }
      
      
       </div>
    
    </div>


     ) })
}


    </div>



        </div>






        <div className="footerPart  m-1 ">   

  <div className="footerMenu flex flex-col justify-center items-center gap-2">

{

footerItems.map((elem,index)=>{ 
    return(   
<div key={index} className={`settings shadow-sm hover:shadow-xl transition-all duration-300  flex h-10 gap-3 p-1 w-[230px] bgs-amber-200 ${isCollap ? "w-full justify-center":"w-[230px]"} `}>
    <elem.icon />
    <p className={` ${isCollap? "opacity-0 hidden":"opacity-100 block " } `}>{elem.label}</p>
</div>

    )
})

}




    </div> 

        </div>
      
  

      </div>
    </>
  );
};
