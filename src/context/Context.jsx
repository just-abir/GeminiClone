import { createContext } from "react";
import{ GEMINI_API_URL,API_KEY} from "../Config/GeminiApi";
import React, { useState } from "react";




 export const Context=createContext();




const ContextProvider=({children})=>{

 const [Question, setQuestion] = useState("");
 const [Recentque, setRecentque] = useState("")
 const [Prevque,setPrevque]=useState([]);
const [Showresult, setShowresult] = useState(false);
  const [Result,setResult]=useState("");
  const [Loading, setLoading] = useState(false);

const delayPara=(index,nextWord)=>{

setTimeout(function(){
  setResult( prev=>prev+nextWord);
}, 75*index )

}

const newChat=()=>{
  setLoading(false)
  setShowresult(false)

}



  const sentRequest =async (Question) => {
   // console.log(Question);
    setResult("")
   setLoading(true)
setShowresult(true)
setRecentque(Question)
setPrevque(prev=>[...prev,Question])



    let response=await fetch(GEMINI_API_URL,{  

      method:"POST",
        headers: {
            "Content-Type": "application/json",
            "X-goog-api-key": API_KEY
        },
         body: JSON.stringify({
            contents: [
                {
                    parts: [{ text: Question }]
                }
            ]
        })

    })
      const data=await response.json();


  console.log("Ai result: ",data.candidates[0].content.parts[0].text);

  let dataString=data.candidates[0].content.parts[0].text;
  dataString=dataString.split("**");

  let newDataString="";

  for(let i=0 ;i< dataString.length ; i++)
  {
    if( i===0 || i%2 !==1 ) newDataString+=dataString[i];
    else newDataString+="<b>" + dataString[i]+"</b>";

  }
newDataString=newDataString.split("*").join("<br/>" )

let newDataString2=newDataString.split(" ");

for(let i=0;i<newDataString2.length; i++ )
{
  const newtWord=newDataString2[i];
  delayPara(i,newtWord +" " )
}

  
    setQuestion("");
    setLoading(false)

};





const contextValue={

Question,setQuestion,
Recentque,setRecentque,
Prevque,setPrevque,
Showresult,setShowresult,
Result,setResult,
sentRequest,
Loading,setLoading,
newChat

}

return(
<Context.Provider  value={contextValue} >

{
    children
}

</Context.Provider>

)

}

export default  ContextProvider