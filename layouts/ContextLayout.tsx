'use client';

import React from "react";
import { Header, HeaderPhone, HeaderBlank } from "../components/main/header";
import { useEffect, useState } from "react";
import { MobileContext } from "../components/main/mobilecontext";

export default function ContextLayout(props) {
    const { children } = props;

    const [isMobile, setIsMobile] = useState(false);
    const [isMobileComplete, setIsMobileComplete] = useState(false);
  
    useEffect(() => {
      const handleResize = () => {
        setIsMobile(window.innerWidth <= 600);
        setIsMobileComplete(true);
      };
  
      // Set isMobile at the initial load
      handleResize();
  
      // Update isMobile whenever the window is resized
      window.addEventListener('resize', handleResize);
  
      // Cleanup the event listener on component unmount
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);
  
    return (
      <MobileContext.Provider value={{ isMobile, isMobileComplete }}>
        {!isMobileComplete && (<HeaderBlank />)}
        {isMobileComplete && (isMobile ? <HeaderPhone /> : <Header />)}
        {children}
      </MobileContext.Provider>
  
    );
  }
  