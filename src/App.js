import React from 'react';
import './App.module.scss';
import BaseLayout from "./components/BaseLayout";
import {BrowserRouter} from "react-router-dom";
import { Analytics } from '@vercel/analytics/react';




function App() {
//    const email = 'peterguo1983@gmail.com';
//   const phoneNumber = '917-432-4438';
   
   return (
      <div>
          
         <BrowserRouter>
            <BaseLayout/>
         </BrowserRouter>
         <Analytics />
      </div>
   );
}


export default App;
