import React from "react";
import { Route, Routes } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";
import HomeScreen from "./Screens/HomeScreen/HomeScreen";
import AboutUs from "./Screens/AboutUs/AboutUs";
import ContactUs from "./Screens/ContactUs/ContactUs";
import Movies from "./Screens/Movies/Movies";
import SingleMovie from "./Screens/SingleMovie/SingleMovie";
import WatchPage from "./Screens/WatchPage/WatchPage";
import NoPage from "./Screens/NoPage/NoPage";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";
import Profile from "./Screens/Dashbord/Profile/Profile";
import Password from "./Screens/Dashbord/Password/Password";
import FavoriteMovies from "./Screens/Dashbord/FavoriteMovies/FavoriteMovies";
import MovieList from "./Screens/Dashbord/Admin/MovieList/MovieList";
import Dashbord from "./Screens/Dashbord/Admin/Dashbord/Dashbord";
import Categories from "./Screens/Dashbord/Admin/Categories/Categories";
import Users from "./Screens/Dashbord/Admin/Users/Users";

function App() {
  Aos.init();
  return (
    <Routes>
      <Route path="/" element={<HomeScreen/>} />
      <Route path="/about-us" element={<AboutUs/>} />
      <Route path="/contact-us" element={<ContactUs/>} />
      <Route path="/movies" element={<Movies/>} />
      <Route path="/movie/:id" element={<SingleMovie/>} />
      <Route path="/watch/:id" element={<WatchPage/>} />
      {/* <Route path="/favorites" element={<Movies/>} /> */}
      <Route path="/login" element={<Login/>} />
      <Route path="/register" element={<Register/>} />
      <Route path="/profile" element={<Profile/>}></Route>
      <Route path="/password" element={<Password/>}></Route>
      <Route path="/favorites" element={<FavoriteMovies/>}></Route>
      <Route path="/movieslist" element={<MovieList/>}></Route>
      <Route path="/dashboard" element={<Dashbord/>}></Route>
      <Route path="/categories" element={<Categories/>}></Route>
      <Route path="/users" element={<Users/>}></Route>
      <Route path="/*" element={<NoPage/>} />
    </Routes>
  );
}

export default App;
