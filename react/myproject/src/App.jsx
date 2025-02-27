// import React from 'react'
// import Student from './student'
// import UseStudentState from '../../UseStudentState.jsx'
// import Imagemanipulation from './imagemanipulation.jsx'
// import MyUseEffect from './MyUseEffect.jsx'
// import UseFetchAPI from './UseFetchAPI.jsx'
// export default function App(){
//   const h1=<h1>hello</h1>
//   const mystyle={
//     color:'red',
//     backgroundColor:'blue'
//   }
//   const studentdata={
//     college:"ABESEC",
//     name:"abc",
//     branch:"cse",
//     roll:"123",
//     section:"B"
//   }
//   return(
//     <div>
//       <h2>usehook</h2>
//       <div>
//       {/* <Imagemanipulation/> */}
//       <UseFetchAPI/>
//       </div>
//     </div>
//   )
// }

// //   return (
// //     <>
// //       <Student data={studentdata}/>
// //     </>
// //   )
// // }





import React, { useState } from 'react'
import Student from './Student';
import UseStudentState from './UseStudentState';
import Imagemanipulation from './imagemanipulation';
import MyUseEffect from './MyUseEffect';
import UseFetchAPI from './UseFetchAPI';
import Login from './Login';
import Registration from './Registration';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import MainLayout from './MainLayout';
import Dashboard from './Dashboard';
function App() {

  const[rdata,setrdata]=useState();
  
 


 
  return (
    <div>
      {JSON.stringify(rdata)}
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<MainLayout/>}>
 <Route path='/login' element={ <Login regdata={rdata} />} />
<Route path='/registration' element={<Registration regData={setrdata} />} />
</Route>
<Route path='/dashboard' element={<Dashboard/>}/>
  </Routes>
  </BrowserRouter>


      
 
  
  </div>
      
  )
}

export default App