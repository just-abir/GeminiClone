import React,{useState} from 'react'
import { Sidebar } from './Components/Sidebar'
import { Main } from './Components/Main'

const App = () => {
  const [isCollap, setisCollap] = useState(false);

  const hToog=()=>{
setisCollap((p)=>!p);

  }
  
  return (
   <>
     
  <div className='min-h-screen w-full flex flex-col md:block'>
<Sidebar   onClick={hToog} isCollap={isCollap} />
   
   <Main  isCollap={isCollap} />



  </div>
 
   </>
  )
}
export default App