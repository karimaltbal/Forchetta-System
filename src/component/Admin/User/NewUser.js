import React, { Fragment, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { Button } from "@material-ui/core";
import DescriptionIcon from "@material-ui/icons/Description";
import SpellcheckIcon from "@material-ui/icons/Spellcheck";

import { useAlert } from "react-alert";

import SideBar from "../layout/Sidebar/Sidebar";
import "../Event/newEvent.css";

import { clearError, rigesterAction } from "../../../redux/actions/userActions";


const NewUser = () => {

    
    /**/
    
    const navigate = useNavigate()
    const dispatch = useDispatch();
    const alert = useAlert();

    const { loading, error, userData } = useSelector((state) => state.createUser);

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    useEffect(() => {
        if (error) {
            alert.error(error);
            dispatch(clearError());
        }

        if (userData) {
            alert.success("User Created Successfully");
            navigate("/admin/user");
        }
        
    }, [dispatch, alert, error, userData, navigate]);

    const createEventSubmitHandler = (e) => {
        e.preventDefault();

        const myForm = new FormData();

        myForm.set("name", name);
        myForm.set("email", email);
        myForm.set("password", password);

        dispatch(rigesterAction(myForm));
    };

    return (
        <Fragment>
            <div className="dashboard">
                <SideBar />

                <div className="newProductContainer">
                    <form
                        className="createProductForm"
                        encType="multipart/form-data"
                        onSubmit={createEventSubmitHandler}
                    >

                        <h1>Create User</h1>

                        <div>
                            <SpellcheckIcon />
                            <input
                                type="text"
                                placeholder="Your Name"
                                required
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>
                        <div>
                            <SpellcheckIcon />
                            <input
                                type="text"
                                placeholder="Your Email"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>

                        <div>
                            <DescriptionIcon />
                            <input
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                type="password"
                            />
                        </div>

                        <Button id="createProductBtn" type="submit" disabled={loading ? true : false}  >
                            Create
                        </Button>
                    </form>
                </div>
            </div>
        </Fragment>
    );
};

export default NewUser;
