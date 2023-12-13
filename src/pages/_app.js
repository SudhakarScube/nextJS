import "@/styles/globals.css";
import { useState,useEffect } from 'react';
import Gleap from "gleap";

export default function App({ Component, pageProps }) {
const [loading, setLoadingStatus] = useState(true);

  const getLayout = Component.getLayout ?? ((page) => page);

  useEffect(() => {
    window.history.scrollRestoration = "manual";
    // Run within useEffect to execute this code on the frontend.
    Gleap.initialize("4OjlrIYbUl3EWOnPcITIA0LrKJqJIzdn");
  setLoadingStatus(false);

  }, []);
  return<div className={` ${loading ? "component-loading" : ""}`}>{getLayout(<Component {...pageProps} />)} </div>;
}
