import 'bootstrap/dist/css/bootstrap.min.css';
import '@/styles/globals.css'

import globalStyle from "../styles/Global.module.css";


import React, { useState } from "react";
import Sidebar from "../components/sideNav"; // Import your Sidebar component here

export default function App({ Component, pageProps }) {

  const [isCollapsed, setIsCollapsed] = useState(false);
  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className={globalStyle.container}>
     
      <Sidebar isCollapsed={isCollapsed} toggleCollapse={toggleCollapse} />
      <div>
      <Component {...pageProps} />
      </div>
   
  </div>
  )
}
