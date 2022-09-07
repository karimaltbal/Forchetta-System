import React from "react";
import { Link } from "react-router-dom";

import { TreeView, TreeItem } from "@material-ui/lab";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import PostAddIcon from "@material-ui/icons/PostAdd";
import AddIcon from "@material-ui/icons/Add";
import Menu from "@material-ui/icons/Menu";
import ListAltIcon from "@material-ui/icons/ListAlt";
import DashboardIcon from "@material-ui/icons/Dashboard";
import PeopleIcon from "@material-ui/icons/People";
import RateReviewIcon from "@material-ui/icons/RateReview";

import Event from "@material-ui/icons/Event";

import "./sidebar.css";
import logoImg from "../../../../images/Header/FORCHETTA SVG.svg";

const Sidebar = () => {


    function logoutUser() {
        localStorage.removeItem("user");

        window.location.replace("/")
    }

    return (
        <div className="sidebar">
            <Link to="/"> <img src={logoImg} alt="Ecommerce" /> </Link>

            <Link to="/admin/dashboard">
                <p> <DashboardIcon /> Dashboard </p>
            </Link>

            <span>
                <TreeView defaultCollapseIcon={<ListAltIcon />} defaultExpandIcon={<Menu />} >
                    <TreeItem nodeId="1" label="Menu">
                        <Link to="/admin/menu">
                            <TreeItem nodeId="2" label="All" icon={<PostAddIcon />} />
                        </Link>

                        <Link to="/admin/newMenu">
                            <TreeItem nodeId="3" label="Create" icon={<AddIcon />} />
                        </Link>
                    </TreeItem>
                </TreeView>
            </span>


            <span>
                <TreeView defaultCollapseIcon={<ListAltIcon />} defaultExpandIcon={<Event />} >
                    <TreeItem nodeId="1" label="Event">
                        <Link to="/admin/event">
                            <TreeItem nodeId="2" label="All" icon={<PostAddIcon />} />
                        </Link>

                        <Link to="/admin/newEvent">
                            <TreeItem nodeId="3" label="Create" icon={<AddIcon />} />
                        </Link>
                    </TreeItem>
                </TreeView>
            </span>

            <span>
                <TreeView defaultCollapseIcon={<ListAltIcon />} defaultExpandIcon={<ExpandMoreIcon />} >
                    <TreeItem nodeId="1" label="Blog">
                        <Link to="/admin/blog">
                            <TreeItem nodeId="2" label="All" icon={<PostAddIcon />} />
                        </Link>

                        <Link to="/admin/newBlog">
                            <TreeItem nodeId="3" label="Create" icon={<AddIcon />} />
                        </Link>
                    </TreeItem>
                </TreeView>
            </span>

            <span>
                <TreeView defaultCollapseIcon={<ListAltIcon />} defaultExpandIcon={<RateReviewIcon />} >
                    <TreeItem nodeId="1" label="Company">
                        <Link to="/admin/company">
                            <TreeItem nodeId="2" label="All" icon={<PostAddIcon />} />
                        </Link>

                        <Link to="/admin/newCompany">
                            <TreeItem nodeId="3" label="Create" icon={<AddIcon />} />
                        </Link>
                    </TreeItem>
                </TreeView>
            </span>

            <span>
                <TreeView defaultCollapseIcon={<ListAltIcon />} defaultExpandIcon={<PeopleIcon />} >
                    <TreeItem nodeId="1" label="User">
                        <Link to="/admin/user">
                            <TreeItem nodeId="2" label="All" icon={<PostAddIcon />} />
                        </Link>

                        <Link to="/admin/newUser">
                            <TreeItem nodeId="3" label="Create" icon={<AddIcon />} />
                        </Link>
                    </TreeItem>
                </TreeView>
            </span>

            <button style={{ margin: "20px 16px"}} onClick={logoutUser} className= "btn btn-danger">logOut</button>

        </div>
    );
};

export default Sidebar;
