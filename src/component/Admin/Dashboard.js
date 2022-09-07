import React, { useEffect } from "react";
import { Link } from "react-router-dom";


import Sidebar from "./layout/Sidebar/Sidebar";
import "./dashboard.css";



const Dashboard = () => {

    const currentLang = localStorage.getItem("lng") || "ar";
    useEffect(() => {
        if(currentLang === "ar"){
            document.body.dir = "ltr";
        }
    }, [currentLang]);

    
    return (
        <div className="dashboard">
        <Sidebar />

            <div className="dashboardContainer">
                <div className="dashboardSummary">

                <div>
                    <p> Admin Dashboard<br /> ₹</p>
                </div>

                <div className="dashboardSummaryBox2">
                    <Link to="/admin/menu">
                        <p>Menu</p>
                    </Link>
                    <Link to="/admin/event">
                        <p>Events</p>
                    </Link>
                    <Link className="blog" to="/admin/blog">
                        <p>Blog</p>
                    </Link>
                    <Link className="company" to="/admin/company">
                        <p>Company</p>
                    </Link>
                    <Link to="/admin/user">
                        <p>Users</p>
                    </Link>
                </div>
                </div>

            </div>
        </div>
    );
};

export default Dashboard;
