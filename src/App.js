import { Routes, Route } from "react-router-dom";
import React from "react";
import {  useSelector } from "react-redux";


import "./App.css";
import Home from "./component/Home/Home"
import About from "./component/About/About"
import Menu from "./component/Menu/Menu";
import Events from "./component/Events/Events";
import Blog from "./component/Blog/Blog";
import Contact from "./component/Contact/Contact";
import LoginSignUp from "./component/User/LoginSignUp";
import Gallery from "./component/Gallery/Gallery";


import Dashboard from "./component/Admin/Dashboard"

import Menus from "./component/Admin/Menu/Menus"


import Event from "./component/Admin/Event/Event"
import NewEvent from "./component/Admin/Event/NewEvent"
import UpdateEvent from "./component/Admin/Event/UpdateEvent";

import Blogs from "./component/Admin/Blogs/Blogs";
import NewBlog from "./component/Admin/Blogs/NewBlog";
import UpdateBlog from "./component/Admin/Blogs/UpdateBlog";

import Companys from "./component/Admin/Companys/Companys";
import NewCompany from "./component/Admin/Companys/NewCompany";
import UpdateCompany from "./component/Admin/Companys/UpdateCompany"

import NewMenu from "./component/Admin/Menu/NewMenu";
import UpdateMenu from "./component/Admin/Menu/UpdateMenu";

import SingleBlog from "./component/Blog/SingleBlog";
import EventSingle from "./component/Events/EventSingle";
import User from "./component/Admin/User/User";
import NewUser from "./component/Admin/User/NewUser";



function App() {

    const {  user } = useSelector((state) => state.userLogin);

    function PrivateRoute({ children }) {
      return user ? children : window.location.replace("/login");
    }


    return (
    <div className="App">

        <Routes >
          <Route exact path="/" element={<Home />} />
          <Route  path="/about" element={<About />} />
          <Route  path="/menu" element={<Menu />} />
          <Route  path="/gallery" element={<Gallery />} />
          <Route  path="/events" element={<Events />} />
          <Route  path="/blog" element={<Blog />} />
          <Route  path="/singleevent/:id" element={<EventSingle />} />
          <Route  path="/singleblog/:id" element={<SingleBlog />} />
          <Route  path="/contact" element={<Contact />} />

          <Route exact path="/admin/dashboard" element={<PrivateRoute> <Dashboard /> </PrivateRoute>}/>

          <Route exact path="/admin/menu" element={<PrivateRoute> <Menus /> </PrivateRoute>}/>
          <Route exact path="/admin/newMenu" element={<PrivateRoute> <NewMenu /> </PrivateRoute>}/>
          <Route exact path="/admin/menu/:id" element={<PrivateRoute> <UpdateMenu /> </PrivateRoute>}/>

          <Route exact path="/admin/menu" element={<PrivateRoute> <Menus /> </PrivateRoute>}/>
          <Route exact path="/admin/newMenu" element={<PrivateRoute> <NewMenu /> </PrivateRoute>}/>
          <Route exact path="/admin/menu/:id" element={<PrivateRoute> <UpdateMenu /> </PrivateRoute>}/>

          <Route exact path="/admin/event" element={<PrivateRoute> <Event /> </PrivateRoute>} />
          <Route exact path="/admin/newEvent" element={<PrivateRoute> <NewEvent /> </PrivateRoute>} />
          <Route exact path="/admin/event/:id" element={<PrivateRoute> <UpdateEvent /> </PrivateRoute>} />

          <Route exact path="/admin/event" element={<PrivateRoute> <Event /> </PrivateRoute>} />
          <Route exact path="/admin/newEvent" element={<PrivateRoute> <NewEvent /> </PrivateRoute>} />
          <Route exact path="/admin/event/:id" element={<PrivateRoute> <UpdateEvent /> </PrivateRoute>} />

          <Route exact path="/admin/blog" element={<PrivateRoute> <Blogs /> </PrivateRoute>} />
          <Route exact path="/admin/newBlog" element={<PrivateRoute> <NewBlog /> </PrivateRoute>} />
          <Route exact path="/admin/blog/:id" element={<PrivateRoute> <UpdateBlog /> </PrivateRoute>} />

          <Route exact path="/admin/blog" element={<PrivateRoute> <Blogs /> </PrivateRoute>} />
          <Route exact path="/admin/newBlog" element={<PrivateRoute> <NewBlog /> </PrivateRoute>} />
          <Route exact path="/admin/blog/:id" element={<PrivateRoute> <UpdateBlog /> </PrivateRoute>} />

          <Route exact path="/admin/company" element={<PrivateRoute> <Companys /> </PrivateRoute>} />
          <Route exact path="/admin/newCompany" element={<PrivateRoute> <NewCompany /> </PrivateRoute>} />
          <Route exact path="/admin/company/:id" element={<PrivateRoute> <UpdateCompany /> </PrivateRoute>} />

          <Route exact path="/admin/company" element={<PrivateRoute> <Companys /> </PrivateRoute>} />
          <Route exact path="/admin/newCompany" element={<PrivateRoute> <NewCompany /> </PrivateRoute>} />
          <Route exact path="/admin/company/:id" element={<PrivateRoute> <UpdateCompany /> </PrivateRoute>} />

          <Route exact path="/admin/user" element={<PrivateRoute> <User /> </PrivateRoute>} />
          <Route exact path="/admin/newUser" element={<PrivateRoute> <NewUser /> </PrivateRoute>} />

          <Route exact path="/login" element={<LoginSignUp />} />
        </Routes>

    </div>
  );
}

export default App;
