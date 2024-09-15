import React from "react";
import { Route, Routes } from "react-router-dom";
import HomeScreen from "./Screens/HomeScreen/HomeScreen";
import AboutUs from "./Screens/AboutUs/AboutUs";
import ContactUs from "./Screens/ContactUs/ContactUs";
import NoPage from "./Screens/NoPage/NoPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomeScreen/>} />
      <Route path="/about-us" element={<AboutUs/>} />
      <Route path="/contact-us" element={<ContactUs/>} />
      <Route path="/*" element={<NoPage/>} />
    </Routes>
  );
}

export default App;
