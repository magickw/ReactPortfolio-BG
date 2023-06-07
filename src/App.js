import React from 'react';
import './App.module.scss';
import BaseLayout from "./components/BaseLayout";
import {BrowserRouter} from "react-router-dom";
import { Analytics } from '@vercel/analytics/react';




function App() {
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
