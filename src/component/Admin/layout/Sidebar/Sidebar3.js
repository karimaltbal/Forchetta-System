import React from "react";
import { Link } from "react-router-dom";

import logoImg from "../../../../images/Header/FORCHETTA SVG.svg"
import "./sidebar.css";

const Sidebar = () => {



    
    function logoutUser() {
        localStorage.removeItem("user");
        
        window.location.replace("/")
    }

    return (
        <div className="sidebar">
            <Link to="/"> <img src={logoImg} alt="Logo Forchetta Admin" /> </Link>

            <ul className="main_ul">

                <Link className="dash" to="/admin/dashboard">
                    <p> Dashboard </p>
                </Link>


                <li>
                    <p> Menu </p>
                    <ul className="sub_ul">
                        <li><Link to="/admin/menu">All</Link></li>
                        <hr />
                        <li><Link to="/admin/newMenu">create Menu</Link></li>
                    </ul>
                </li>

                <li >
                    <p>  Events </p>
                    <ul className="sub_ul">
                        <li><Link to="/admin/event">All</Link></li>
                        <hr />
                        <li><Link to="/admin/newEvent">create Event</Link></li>
                    </ul>
                </li>

                <li>
                    <p>  Blog </p>
                    <ul className="sub_ul">
                        <li><Link to="/admin/blog">All</Link></li>
                        <hr />
                        <li><Link to="/admin/newBlog">create Blog</Link></li>
                    </ul>
                </li>

                <li >
                    <p>  Company </p>
                    <ul className="sub_ul">
                        <li><Link to="/admin/company">All</Link></li>
                        <hr />
                        <li><Link to="/admin/newCompany">create Company</Link></li>
                    </ul>
                </li>

                <li>
                    <p>  Users </p>
                    <ul className="sub_ul">
                        <li><Link to="/admin/user">All</Link></li>
                        <hr />
                        <li><Link to="/admin/newUser">create Ucer</Link></li>
                    </ul>
                </li>

                <li>
                    <button onClick={logoutUser} className= "btn btn-danger">logOut</button>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;
